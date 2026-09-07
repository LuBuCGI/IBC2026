# Technical check – v1.6.0

Checks completed before packaging:

- Inline JavaScript syntax check for `index.html`, `de.html`, `en.html`, `admin.html`.
- Service-worker JavaScript syntax check.
- All local HTML references resolve to packaged files.
- All service-worker precache entries resolve to packaged files.
- 12 German and 12 English questions verified; every configured correct answer exists in its option list.
- Automated browser-logic smoke test (headless Chromium, isolated storage mock):
  - four topics render,
  - topic selection works,
  - wrong answers are evaluated immediately and allow retry,
  - correct answers are evaluated immediately,
  - progression through all three AI questions works,
  - prize form opens,
  - form submission opens the success screen,
  - German and English flows complete without JavaScript page errors.
- PDF overlay smoke test:
  - topic PDF opens,
  - page count advances with Next,
  - overlay closes cleanly.
- Language-page Terms & Conditions viewer smoke test:
  - opens in overlay,
  - page count advances,
  - closes cleanly.
- Admin login smoke test:
  - wrong password is rejected,
  - password `122333` authenticates and targets the admin view,
  - authenticated admin mode opens the dashboard automatically.
- 1024x768 and 768x1024 layout checks found no horizontal overflow; all four answer options stay within the visible viewport in the tested question state.

Note: iPadOS/Safari standalone behavior cannot be fully reproduced by a desktop headless-browser test. A short on-device smoke test after GitHub deployment is still recommended, especially for Home Screen installation, offline launch, virtual keyboard behavior and iPadOS cache updates.
