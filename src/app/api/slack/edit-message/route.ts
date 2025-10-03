import { NextRequest, NextResponse } from 'next/server'
import { WebClient } from '@slack/web-api'

const slack = new WebClient(process.env.SLACK_BOT_TOKEN)

export async function POST(request: NextRequest) {
  try {
    const { channel, ts, text } = await request.json()

    if (!channel || !ts || !text) {
      return NextResponse.json(
        { error: 'Channel, timestamp, and text are required' },
        { status: 400 }
      )
    }

    const channelName = channel.replace('#', '')
    const actualChannelId = channelName === 'general' ? 'C09JHK6G0BY' : channelName

    try {
      const result = await slack.chat.update({
        channel: actualChannelId, 
        ts,
        text,
      })

      return NextResponse.json({
        success: true,
        ts: (result as any).ts,
      })
    } catch (slackError: any) {
      console.error('🔴 EDIT MESSAGE - Full Slack Error:', JSON.stringify(slackError, null, 2))
      console.error('🔴 EDIT MESSAGE - Error Data:', slackError.data)
      console.error('🔴 EDIT MESSAGE - Used Parameters:', { 
        channel: actualChannelId, 
        ts, 
        text,
        as_user: true 
      })
      
      if (slackError.data?.error === 'channel_not_found') {
        return NextResponse.json(
          { error: 'Channel not found. Make sure the bot is added to the channel.' },
          { status: 400 }
        )
      }
      if (slackError.data?.error === 'message_not_found') {
        return NextResponse.json(
          { error: `Message not found. Timestamp: ${ts}, Channel: ${actualChannelId}. The message may have been deleted or you can only edit messages sent by your bot.` },
          { status: 400 }
        )
      }
      if (slackError.data?.error === 'cant_update_message') {
        return NextResponse.json(
          { error: 'Cannot edit this message. You can only edit messages sent by your bot.' },
          { status: 400 }
        )
      }
      return NextResponse.json(
        { error: `Slack API error: ${slackError.data?.error || slackError.message}. Channel: ${actualChannelId}, Timestamp: ${ts}` },
        { status: 400 }
      )
    }
  } catch (error) {
    console.error('Error editing message:', error)
    return NextResponse.json(
      { error: 'Failed to edit message: ' + (error as any).message },
      { status: 500 }
    )
  }
}