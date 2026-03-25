import { NextResponse } from 'next/server'

export const revalidate = 0 // Disable caching

export async function GET() {
  try {
    // Fetch the upcoming events from Meetup's public API
    const response = await fetch(
      'https://api.meetup.com/cracow-robotics-ai-club/events?status=upcoming&page=1',
      {
        headers: {
          'Accept': 'application/json',
        },
        cache: 'no-store',
      }
    )

    if (!response.ok) {
      throw new Error(`Meetup API error: ${response.status}`)
    }

    const events = await response.json()
    
    if (events && events.length > 0) {
      const latestEvent = events[0]
      return NextResponse.json({
        attendees: latestEvent.yes_rsvp_count || 0,
        eventName: latestEvent.name || 'Upcoming Event',
        eventId: latestEvent.id,
      })
    }

    return NextResponse.json({ attendees: 0, eventName: null, eventId: null })
  } catch (error) {
    console.error('Error fetching Meetup data:', error)
    return NextResponse.json(
      { attendees: 0, error: 'Failed to fetch attendees' },
      { status: 500 }
    )
  }
}
