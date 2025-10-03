import { NextRequest, NextResponse } from 'next/server'
import { WebClient } from '@slack/web-api'

const slack = new WebClient(process.env.SLACK_BOT_TOKEN)

export async function POST(request: NextRequest) {
  try {
    const { channel, text, scheduleTime } = await request.json()

    if (!text || !channel) {
      return NextResponse.json(
        { error: 'Channel and text are required' },
        { status: 400 }
      )
    }
    const channelName = channel.replace('#', '')
    let result ;
    try {
      if (scheduleTime) {
        const postAt = Math.floor(new Date(scheduleTime).getTime() / 1000)
        const currentTime = Math.floor(Date.now() / 1000)
        
        if (postAt <= currentTime) {
          return NextResponse.json(
            { error: 'Scheduled time must be in the future. Please select a time at least 1 minute from now.' },
            { status: 400 }
          )
        }
        
        if (postAt - currentTime < 60) {
          return NextResponse.json(
            { error: 'Scheduled time must be at least 1 minute in the future.' },
            { status: 400 }
          )
        }
        
        result = await slack.chat.scheduleMessage({
          channel: channelName,
          text,
          post_at: postAt,
        })
      } else {
        result = await slack.chat.postMessage({
          channel: channelName,
          text,
        })
        console.log('🟢 SEND MESSAGE - Slack API SUCCESS with channel:', channelName)
      }
    } catch (slackError: any) {
      if (slackError.data?.error === 'channel_not_found') {
        return NextResponse.json(
          { error: 'Channel not found. Make sure the bot is added to the channel or try a different channel name.' },
          { status: 400 }
        )
      }
      if (slackError.data?.error === 'not_in_channel') {
        return NextResponse.json(
          { error: 'Bot is not in the channel. Please add the bot to the channel first.' },
          { status: 400 }
        )
      }
      if (slackError.data?.error === 'time_in_past') {
        return NextResponse.json(
          { error: 'Cannot schedule message in the past. Please select a future time at least 1 minute from now.' },
          { status: 400 }
        )
      }
      if (slackError.data?.error === 'time_too_far') {
        return NextResponse.json(
          { error: 'Cannot schedule message too far in the future. Please select a time within 120 days.' },
          { status: 400 }
        )
      }
      throw slackError
    }

    return NextResponse.json({
      success: true,
      ts: (result as any).ts,
      scheduled: !!scheduleTime,
    })
  } catch (error) {
    console.error('Error sending message:', error)
    return NextResponse.json(
      { error: 'Failed to send message: ' + (error as any).message },
      { status: 500 }
    )
  }
}