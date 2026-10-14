Hassan Byekwaso Portfolio
==========================

This is a React single-page portfolio styled with Tailwind CSS. Routes use the
URL hash so they work on GitHub Pages without server-side routing support.

Local development
-----------------
1. Install Node.js 22 or later.
2. Run `npm ci`.
3. Run `npm run dev` and open the local URL printed by Vite.
4. Run `npm run build` to create the production site in `dist`.

GitHub Pages deployment
-----------------------
The included GitHub Actions workflow builds and deploys the site when changes
are pushed to `main`. In the repository's Settings > Pages, set the build and
deployment source to "GitHub Actions". The Vite base path is configured for
`/my_second_portfoli_website/`.

Contact form
------------
The contact form submits through FormSubmit to hassan00byekwaso@gmail.com.
FormSubmit may require confirming its activation email before first-time
delivery. Successful delivery depends on that activation being completed.
