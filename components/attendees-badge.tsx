'use client'

import { Badge } from "@/components/ui/badge"
import useSWR from 'swr'

const fetcher = (url: string) => fetch(url).then(res => res.json())

export function AttendeesBadge() {
  const { data, isLoading } = useSWR('/api/meetup-attendees', fetcher, {
    revalidateOnFocus: true,
    revalidateOnReconnect: true,
    refreshInterval: 60000, // Refresh every minute
  })

  if (isLoading) {
    return (
      <Badge variant="outline" className="border-accent text-accent animate-pulse">
        ...
      </Badge>
    )
  }

  // Hide badge if no attendee data available
  if (data?.attendees === null || data?.attendees === undefined) {
    return null
  }

  return (
    <Badge variant="outline" className="border-accent text-accent">
      {data.attendees} Attendees
    </Badge>
  )
}
