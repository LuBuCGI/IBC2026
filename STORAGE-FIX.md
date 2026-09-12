# Storage fix v1.6.2

- Participant save is now verified by reading the exact payload back from localStorage.
- Success screen is shown only after verified persistence.
- If storage fails, the form remains open and shows an error.
- Admin dashboard shows the number of entries stored in the current app context.

Important iPadOS note: separately installed Home Screen web apps can have separate storage contexts. For a definitive check/export of participant data, open the admin mode from the same installed participant PWA context. A separate Admin Home Screen installation may show zero even when the participant PWA has stored entries.
