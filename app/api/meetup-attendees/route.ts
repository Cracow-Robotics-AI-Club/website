import { NextResponse } from 'next/server'

export const revalidate = 0 // Disable caching

const EVENT_URL = 'https://www.meetup.com/cracow-robotics-ai-club/events/313630070/'

async function scrapeAttendees(): Promise<number | null> {
  try {
    const response = await fetch(EVENT_URL, {
      headers: {
        'Accept': 'text/html',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
      },
      cache: 'no-store',
    })

    if (!response.ok) {
      return null
    }

    const html = await response.text()
    
    // Look for attendee count patterns in the HTML
    const patterns = [
      /(\d+)\s*attending/i,
      /(\d+)\s*going/i,
      /"going_count"\s*:\s*(\d+)/i,
      /"yes_rsvp_count"\s*:\s*(\d+)/i,
      /attendeeCount['"]\s*:\s*(\d+)/i,
    ]
    
    for (const pattern of patterns) {
      const match = html.match(pattern)
      if (match) {
        return parseInt(match[1], 10)
      }
    }
    
    return null
  } catch {
    return null
  }
}

export async function GET() {
  const attendees = await scrapeAttendees()
  
  if (attendees === null) {
    return NextResponse.json({ 
      attendees: null, 
      message: 'Unable to fetch attendees' 
    })
  }
  
  return NextResponse.json({ attendees })
}
