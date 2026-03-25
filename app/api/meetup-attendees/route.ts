import { NextResponse } from 'next/server'

export const revalidate = 0 // Disable caching

async function scrapeAttendees(): Promise<number | null> {
  try {
    // Fetch the Meetup events page and look for attendee count
    const response = await fetch(
      'https://www.meetup.com/cracow-robotics-ai-club/events/',
      {
        headers: {
          'Accept': 'text/html',
          'User-Agent': 'Mozilla/5.0 (compatible; CRAIC-Bot/1.0)',
        },
        cache: 'no-store',
      }
    )

    if (!response.ok) {
      console.log('[v0] Meetup page fetch failed:', response.status)
      return null
    }

    const html = await response.text()
    
    // Look for attendee count patterns in the HTML
    // Meetup typically shows "X attending" or "X RSVPs"
    const attendingMatch = html.match(/(\d+)\s*(?:attending|RSVPs?|going)/i)
    if (attendingMatch) {
      console.log('[v0] Found attendee count:', attendingMatch[1])
      return parseInt(attendingMatch[1], 10)
    }
    
    console.log('[v0] No attendee pattern found in HTML')
    return null
  } catch (error) {
    console.error('[v0] Error scraping Meetup:', error)
    return null
  }
}

export async function GET() {
  const attendees = await scrapeAttendees()
  
  // If we couldn't get the count, return null so the badge can hide
  if (attendees === null) {
    return NextResponse.json({ 
      attendees: null, 
      message: 'No upcoming event or unable to fetch attendees' 
    })
  }
  
  return NextResponse.json({ attendees })
}
