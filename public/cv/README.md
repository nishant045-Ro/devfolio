# CV placeholder

This file is a valid (but empty) placeholder PDF so the **Download CV** button in the Hero
section works out of the box.

## To replace it

1. Put your real CV at:

   `public/cv/Nishant-Poudel-CV.pdf`

2. The filename is already wired up across the site (single source in
   `src/data/site.js` → `cvPath`). No other changes needed.

If you want to use a different filename or location, update `cvPath` in
`src/data/site.js` and drop the file in `public/`.