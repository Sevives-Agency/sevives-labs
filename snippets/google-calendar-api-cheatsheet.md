# Google Calendar API in Next.js — cheatsheet

Reusable patterns for reading availability and creating events with the Google
Calendar API from a Next.js App Router app. **Generic examples** — all calls run
**server-side** so tokens never reach the browser. Secrets live in env vars.

## Setup (once)

- Google Cloud project → enable **Google Calendar API**.
- OAuth 2.0 client → scope `https://www.googleapis.com/auth/calendar.events`
  (+ `calendar.readonly` if you only read).
- Store the **refresh token** server-side; exchange it for short-lived access
  tokens. Never expose any of this to the client.

```ts
// lib/google.ts (server only)
import { google } from 'googleapis'

export function calendarClient() {
  const auth = new google.auth.OAuth2(
    process.env.GOOGLE_CLIENT_ID,
    process.env.GOOGLE_CLIENT_SECRET,
    process.env.GOOGLE_REDIRECT_URI,
  )
  auth.setCredentials({ refresh_token: process.env.GOOGLE_REFRESH_TOKEN })
  return google.calendar({ version: 'v3', auth })
}
```

## Read busy slots (availability)

Use `freebusy.query` — it returns only busy intervals, not event details:

```ts
const cal = calendarClient()
const { data } = await cal.freebusy.query({
  requestBody: {
    timeMin: startUtcISO,
    timeMax: endUtcISO,
    timeZone: 'UTC',
    items: [{ id: 'primary' }],
  },
})
const busy = data.calendars?.primary?.busy ?? [] // [{ start, end }] in UTC
```

## Create an event

```ts
await cal.events.insert({
  calendarId: 'primary',
  requestBody: {
    summary: 'Consultation',
    start: { dateTime: startUtcISO, timeZone: 'UTC' },
    end:   { dateTime: endUtcISO,   timeZone: 'UTC' },
  },
})
```

## Timezones — the gotcha that bites everyone

- **Store and compute in UTC.** Always.
- **Display in the user's timezone** (e.g. `Europe/Brussels`) — convert only at
  the edge (render / input parsing).
- The busy slots come back in UTC; convert them to the user's zone before you
  diff them against your local working hours, or you'll show the wrong free slots
  (and the bug only appears for users in another offset, or across DST).

```ts
import { formatInTimeZone } from 'date-fns-tz'
formatInTimeZone(slot.start, 'Europe/Brussels', 'yyyy-MM-dd HH:mm')
```

## The golden rule

`GOOGLE_*` secrets are server-only env vars — never `NEXT_PUBLIC_*`, never in the
client bundle, never committed.

---

*SevivɘƧ labs — engineering snippets.*
