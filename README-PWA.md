# CGI IBC2026 Quiz – iPad Web App (PWA)

## Deployment
Upload the complete contents of this folder to a static HTTPS host such as GitHub Pages. `index.html` must be in the repository root.

GitHub Pages: Settings > Pages > Deploy from a branch > main > /(root).

## Install on each iPad
1. Open the published URL in Safari while online.
2. Wait until the quiz has loaded once.
3. Tap Share > Add to Home Screen.
4. Enable “Open as Web App” if shown, then tap Add.
5. Launch the CGI IBC2026 icon once while online. After the assets/PDFs are cached, the quiz is designed to run offline.

## Important
Participant and analytics data remain local to each iPad/browser. They are not centrally synchronized. Export data from each device as required.

For Guided Access/kiosk use, configure the iPad separately in iPadOS Accessibility settings.


## v1.5.8.2
Stable fix based directly on v1.5.8. Quiz code/layout unchanged. Only the PDF overlay is enhanced with page buttons and swipe gestures.


## v1.5.8.3 iPad viewport fix
- Restores the exact quiz scroll position after closing a PDF.
- Uses the iPad visual viewport/dynamic viewport height to keep standalone mode stable.
- Prevents iOS input auto-zoom by using 16px form fields.
- Keeps the prize form inside the existing PWA screen and resets its viewport without navigation.


## v1.5.8.4
- Form page: button to end the quiz without entering the prize draw and return to language selection.
- Compact iPad quiz spacing so the Check answer / Antwort prüfen control remains visible above the bottom viewport edge.


## v1.5.8.5
- Removed Check answer / Antwort prüfen button.
- Tapping an answer now evaluates it immediately. Correct answers continue after feedback; incorrect answers remain on the question for another attempt.


## v1.5.8.6
Fix: single-select answer taps now call the existing checkAnswer() logic directly, without re-rendering first.


## v1.5.8.7 – Admin Home Screen App
Open `/admin.html` in Safari and add it to the Home Screen separately.
Password: 122333.
The admin launcher opens the existing German admin mode and uses the same local browser/PWA storage.
Note: this is a client-side access gate suitable for keeping casual users out of the admin UI; it is not server-side security.


## v1.5.8.8
Admin Home Screen app now uses a dedicated red icon with white ADMIN lettering. Participant app icon is unchanged.


## v1.6.0 RELEASE
Full technical review and hardening pass. See RELEASE-NOTES.md.
