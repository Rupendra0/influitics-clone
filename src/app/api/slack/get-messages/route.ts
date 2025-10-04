import { NextRequest, NextResponse } from 'next/server'
import { WebClient } from '@slack/web-api'

const slack = new WebClient(process.env.SLACK_BOT_TOKEN)

// Force this route to be dynamic since it needs to access request parameters
export const dynamic = 'force-dynamic'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const channel = searchParams.get('channel') || 'general'

    const channelName = channel.replace('#', '')
    try {
 
      const actualChannelId = channelName === 'general' ? 'C09JHK6G0BY' : channelName
      const result = await slack.conversations.history({
        channel: actualChannelId, 
        limit: 50,
      })
      const messages = result.messages?.map((msg: any) => ({
        id: msg.ts,
        text: msg.text || '',
        channel: channelName,
        timestamp: new Date(parseFloat(msg.ts || '0') * 1000).toISOString(),
        user: msg.user || 'Unknown',
      })) || []

      return NextResponse.json({
        success: true,
        messages,
      })
    } catch (slackError: any) {
      console.error('🔵 GET MESSAGES - Slack API error:', slackError.data)
      if (slackError.data?.error === 'channel_not_found') {
        return NextResponse.json(
          { error: 'Channel not found. Make sure the bot is added to the channel.' },
          { status: 400 }
        )
      }
      return NextResponse.json(
        { error: `Slack API error: ${slackError.data?.error || slackError.message}` },
        { status: 400 }
      )
    }
  } catch (error) {
    console.error('Error fetching messages:', error)
    return NextResponse.json(
      { error: 'Failed to fetch messages: ' + (error as any).message },
      { status: 500 }
    )
  }
}