import { NextRequest, NextResponse } from 'next/server'
import { WebClient } from '@slack/web-api'

const slack = new WebClient(process.env.SLACK_BOT_TOKEN)

export async function POST(request: NextRequest) {
  try {
    const { channel, ts } = await request.json()
    if (!channel || !ts) {
      return NextResponse.json(
        { error: 'Channel and timestamp are required' },
        { status: 400 }
      )
    }

    const channelName = channel.replace('#', '')
    const actualChannelId = channelName === 'general' ? 'C09JHK6G0BY' : channelName
    try {
      await slack.chat.delete({
        channel: actualChannelId, 
        ts,
      })
      return NextResponse.json({
        success: true,
      })
    } catch (slackError: any) {
      console.error('🟡 DELETE MESSAGE - Full Slack Error:', JSON.stringify(slackError, null, 2))
      console.error('🟡 DELETE MESSAGE - Error Data:', slackError.data)
      console.error('🟡 DELETE MESSAGE - Used Parameters:', { 
        channel: actualChannelId, 
        ts,
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
          { error: `Message not found. Timestamp: ${ts}, Channel: ${actualChannelId}. The message may have been deleted or you can only delete messages sent by your bot.` },
          { status: 400 }
        )
      }
      if (slackError.data?.error === 'cant_delete_message') {
        return NextResponse.json(
          { error: 'Cannot delete this message.' },
          { status: 400 }
        )
      }
      return NextResponse.json(
        { error: `Slack API error: ${slackError.data?.error || slackError.message}` },
        { status: 400 }
      )
    }
  } catch (error) {
    console.error('Error deleting message:', error)
    return NextResponse.json(
      { error: 'Failed to delete message: ' + (error as any).message },
      { status: 500 }
    )
  }
}