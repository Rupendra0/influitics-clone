import { NextRequest, NextResponse } from 'next/server'
import { WebClient } from '@slack/web-api'

const slack = new WebClient(process.env.SLACK_BOT_TOKEN)

export async function GET(request: NextRequest) {
  try {
    const channelsList = await slack.conversations.list({
      types: 'public_channel'
    })

    const channels = channelsList.channels?.map((ch: any) => ({
      id: ch.id,
      name: ch.name,
      is_member: ch.is_member,
      is_private: ch.is_private,
    })) || []

    return NextResponse.json({
      success: true,
      channels,
    })
  } catch (error) {
    console.error('Error listing channels:', error)
    return NextResponse.json(
      { error: 'Failed to list channels: ' + (error as any).message },
      { status: 500 }
    )
  }
}