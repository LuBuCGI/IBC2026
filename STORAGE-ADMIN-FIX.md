# v1.6.3 – iPad participant storage / admin access fix

The quiz flow and topic selection are unchanged from the uploaded v1.6.2 storage-fix base.

Root cause addressed: on iPadOS, separately installed Home Screen web apps can operate in isolated storage contexts. A separately installed Admin PWA may therefore show 0 participants even though the participant PWA has saved them locally.

Solution: Admin/Analytics can now be opened inside the participant PWA itself:
1. Open the normal CGI Quiz Home Screen app.
2. Go to the German or English quiz page.
3. Tap the CGI logo 5 times quickly.
4. Enter password 122333.
5. The existing Admin/Analytics modal opens in the exact same storage context and can export the locally stored entries.
