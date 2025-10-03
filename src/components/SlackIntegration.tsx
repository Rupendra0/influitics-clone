'use client'

import { useState } from 'react'
import { useSession, signIn, signOut } from 'next-auth/react'

interface Message {
  id: string
  text: string
  channel: string
  timestamp: string
  user: string
}

export default function SlackIntegration() {
  const { data: session, status } = useSession()
  const [messages, setMessages] = useState<Message[]>([])
  const [newMessage, setNewMessage] = useState('')
  const [selectedChannel, setSelectedChannel] = useState('general')
  const [scheduleDate, setScheduleDate] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [editingMessage, setEditingMessage] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)

  // Get minimum datetime (current time + 1 minute)
  const getMinDateTime = () => {
    const now = new Date()
    now.setMinutes(now.getMinutes() + 1)
    return now.toISOString().slice(0, 16) // Format for datetime-local input
  }

  const handleSendMessage = async () => {
    if (!newMessage.trim()) return
    
    setIsLoading(true)
    setError(null)
    try {
      const response = await fetch('/api/slack/send-message', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          channel: selectedChannel,
          text: newMessage,
          scheduleTime: scheduleDate || undefined,
        }),
      })

      const result = await response.json()

      if (response.ok) {
        const newMsg: Message = {
          id: result.ts || Date.now().toString(),
          text: newMessage,
          channel: selectedChannel,
          timestamp: new Date().toISOString(),
          user: session?.user?.name || 'You',
        }
        setMessages(prev => [newMsg, ...prev])
        setNewMessage('')
        setScheduleDate('')
      } else {
        setError(result.error || 'Failed to send message')
      }
    } catch (error) {
      console.error('Error sending message:', error)
      setError('Failed to send message')
    } finally {
      setIsLoading(false)
    }
  }

  const handleEditMessage = async (messageId: string, newText: string, channel: string) => {
    if (!newText.trim()) return    
    setIsLoading(true)
    setError(null)
    try {
      const response = await fetch('/api/slack/edit-message', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          channel: channel,
          ts: messageId,
          text: newText,
        }),
      })

      const result = await response.json()

      if (response.ok) {
        setMessages(prev => 
          prev.map(msg => 
            msg.id === messageId 
              ? { ...msg, text: newText }
              : msg
          )
        )
        setEditingMessage(null)
      } else {
        console.error('Edit message failed:', result)
        setError(result.error || 'Failed to edit message')
      }
    } catch (error) {
      console.error('Error editing message:', error)
      setError('Failed to edit message')
    } finally {
      setIsLoading(false)
    }
  }

  const handleDeleteMessage = async (messageId: string, channel: string) => {    
    setIsLoading(true)
    setError(null)
    try {
      const response = await fetch('/api/slack/delete-message', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          channel: channel,
          ts: messageId,
        }),
      })

      const result = await response.json()

      if (response.ok) {
        setMessages(prev => prev.filter(msg => msg.id !== messageId))
      } else {
        console.error('Delete message failed:', result)
        setError(result.error || 'Failed to delete message')
      }
    } catch (error) {
      console.error('Error deleting message:', error)
      setError('Failed to delete message')
    } finally {
      setIsLoading(false)
    }
  }

  const fetchMessages = async () => {
    setIsLoading(true)
    setError(null)
    try {
      const response = await fetch(`/api/slack/get-messages?channel=${selectedChannel}`)
      const result = await response.json()

      if (response.ok && result.messages) {
        const formattedMessages: Message[] = result.messages.map((msg: any) => ({
          id: msg.id, // Use msg.id which contains the timestamp
          text: msg.text,
          channel: msg.channel, // Use the actual channel from the API response
          timestamp: new Date(parseFloat(msg.id) * 1000).toISOString(),
          user: msg.user || 'Unknown',
        }))
        setMessages(formattedMessages)
      } else {
        setError(result.error || 'Failed to fetch messages')
      }
    } catch (error) {
      console.error('Error fetching messages:', error)
      setError('Failed to fetch messages')
    } finally {
      setIsLoading(false)
    }
  }

  if (status === 'loading') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
        <div className="text-lg text-gray-600">Loading...</div>
      </div>
    )
  }

  if (!session) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
        <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full mx-4">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Slack Integration</h1>
            <p className="text-gray-600">Connect your Slack workspace to get started</p>
          </div>
          <button
            onClick={() => signIn('slack')}
            className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 px-6 rounded-lg font-medium hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-200 shadow-lg"
          >
            Sign in with Slack
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4">
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-2 rounded-lg">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52-2.523A2.528 2.528 0 0 1 5.042 10.12h2.52v2.523a2.528 2.528 0 0 1-2.52 2.522zm0-6.584a2.528 2.528 0 0 1-2.52-2.523A2.528 2.528 0 0 1 5.042 3.536a2.528 2.528 0 0 1 2.52 2.522v2.523H5.042z"/>
                  <path d="M8.582 15.165a2.528 2.528 0 0 1-2.52-2.523V5.059a2.528 2.528 0 0 1 2.52-2.523 2.528 2.528 0 0 1 2.52 2.523v7.583a2.528 2.528 0 0 1-2.52 2.523z"/>
                </svg>
              </div>
              <div>
                <h1 className="text-xl font-semibold text-gray-900">Slack Integration Hub</h1>
                <p className="text-sm text-gray-500">
                  Manage your Slack workspace with powerful messaging capabilities - send, schedule, edit, and delete messages seamlessly.
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-sm text-gray-600">
                Welcome, <span className="font-medium">{session.user?.name}</span>
              </div>
              <button
                onClick={() => signOut()}
                className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium transition-colors"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {error && (
          <div className="mb-6 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
            {error}
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Send Message Section */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
              <div className="bg-blue-100 p-2 rounded-lg mr-3">
                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </div>
              Send Message
            </h2>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Channel
                </label>
                <select
                  value={selectedChannel}
                  onChange={(e) => setSelectedChannel(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="general">general</option>
                  <option value="random">random</option>
                  <option value="C09JHK6G0BY">general (by ID)</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  placeholder="Type your message here..."
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  rows={3}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Schedule for Later (Optional)
                </label>
                <input
                  type="datetime-local"
                  value={scheduleDate}
                  min={getMinDateTime()}
                  onChange={(e) => setScheduleDate(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                {scheduleDate && new Date(scheduleDate) <= new Date() && (
                  <p className="text-red-500 text-sm mt-1">
                    Please select a future time at least 1 minute from now
                  </p>
                )}
              </div>

              <button
                onClick={handleSendMessage}
                disabled={!newMessage.trim() || isLoading || (scheduleDate !== '' && new Date(scheduleDate) <= new Date())}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105 transition-all duration-200 shadow-lg"
              >
                {isLoading ? 'Sending...' : scheduleDate ? 'Schedule Message' : 'Send Message'}
              </button>
            </div>
          </div>

          {/* Message Management Section */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
              <div className="bg-green-100 p-2 rounded-lg mr-3">
                <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              Message Management
            </h2>

            <div className="space-y-4">
              <button
                onClick={fetchMessages}
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-green-600 to-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:from-green-700 hover:to-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105 transition-all duration-200 shadow-lg"
              >
                {isLoading ? 'Loading...' : 'Fetch Messages'}
              </button>

              <div className="space-y-2 max-h-96 overflow-y-auto">
                {messages.map((message) => (
                  <div key={message.id} className="bg-gray-50 p-4 rounded-lg border">
                    {editingMessage === message.id ? (
                      <div className="space-y-2">
                        <textarea
                          defaultValue={message.text}
                          className="w-full p-2 border border-gray-300 rounded"
                          rows={2}
                        />
                        <div className="flex space-x-2">
                          <button
                            onClick={(e) => {
                              const textarea = e.currentTarget.parentElement?.previousElementSibling as HTMLTextAreaElement
                              if (textarea) {
                                handleEditMessage(message.id, textarea.value, selectedChannel)
                              }
                            }}
                            className="bg-blue-500 text-white px-3 py-1 rounded text-sm hover:bg-blue-600"
                          >
                            Save
                          </button>
                          <button
                            onClick={() => setEditingMessage(null)}
                            className="bg-gray-500 text-white px-3 py-1 rounded text-sm hover:bg-gray-600"
                          >
                            Cancel
                          </button>
                        </div>
                      </div>
                    ) : (
                      <>
                        <p className="text-gray-800 mb-2">{message.text}</p>
                        <div className="flex justify-between items-center text-xs text-gray-500">
                          <span>#{message.channel} • {message.user}</span>
                          <div className="space-x-2">
                            <button
                              onClick={() => setEditingMessage(message.id)}
                              className="bg-yellow-500 text-white px-2 py-1 rounded hover:bg-yellow-600"
                            >
                              Edit
                            </button>
                            <button
                              onClick={() => handleDeleteMessage(message.id, selectedChannel)}
                              className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                            >
                              Delete
                            </button>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="lg:col-span-2 bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
              <div className="bg-purple-100 p-2 rounded-lg mr-3">
                <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              Quick Actions
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-lg border border-blue-200">
                <h3 className="font-medium text-blue-900 mb-2">Edit Message</h3>
                <p className="text-sm text-blue-700 mb-3">Modify existing messages sent by your bot</p>
                <div className="space-y-2">
                  <input
                    type="text"
                    placeholder="Channel (e.g., general)"
                    className="w-full p-2 border border-blue-300 rounded text-sm"
                  />
                  <input
                    type="text"
                    placeholder="Message Timestamp"
                    className="w-full p-2 border border-blue-300 rounded text-sm"
                  />
                  <input
                    type="text"
                    placeholder="New message text"
                    className="w-full p-2 border border-blue-300 rounded text-sm"
                  />
                  <button className="w-full bg-blue-600 text-white py-2 px-4 rounded text-sm hover:bg-blue-700">
                    Edit Message
                  </button>
                </div>
              </div>

              <div className="bg-gradient-to-br from-red-50 to-red-100 p-4 rounded-lg border border-red-200">
                <h3 className="font-medium text-red-900 mb-2">Delete Message</h3>
                <p className="text-sm text-red-700 mb-3">Remove messages sent by your bot</p>
                <div className="space-y-2">
                  <input
                    type="text"
                    placeholder="Channel (e.g., general)"
                    className="w-full p-2 border border-red-300 rounded text-sm"
                  />
                  <input
                    type="text"
                    placeholder="Message Timestamp"
                    className="w-full p-2 border border-red-300 rounded text-sm"
                  />
                  <button className="w-full bg-red-600 text-white py-2 px-4 rounded text-sm hover:bg-red-700">
                    Delete Message
                  </button>
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-green-100 p-4 rounded-lg border border-green-200">
                <h3 className="font-medium text-green-900 mb-2">Get Messages</h3>
                <p className="text-sm text-green-700 mb-3">Retrieve recent messages from a channel</p>
                <div className="space-y-2">
                  <input
                    type="text"
                    placeholder="Channel (e.g., general)"
                    className="w-full p-2 border border-green-300 rounded text-sm"
                  />
                  <button className="w-full bg-green-600 text-white py-2 px-4 rounded text-sm hover:green-700">
                    Get Messages
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}