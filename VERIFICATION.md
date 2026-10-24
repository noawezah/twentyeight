# Local verification — 22 October 2026

Story: discover the café through real reference photography, explore supported drinks categories, then find the address/hours and follow directions or call. No API, database, forms or booking boundary is required for this presentation site.

- Next.js production static export and TypeScript completed successfully after implementation and typography changes.
- Local preview returns HTTP 200.
- Browser reviewed at desktop (1265px), tablet (768px), phone (400px/390px), and narrow phone (320px, 305px content width after scrollbar).
- All narrow-phone heading text bounds fit inside the content viewport. No horizontal document overflow at the reviewed desktop and phone sizes.
- Native anchor navigation was exercised through room, drinks, visit and back to the opening. Forward/backward scrolling was reviewed in the layered room scene.
- Photo gallery opened, advanced with ArrowRight, closed with Escape and restored focus to the originating image button.
- Short-viewport gallery has constrained image height and scrolling. The nested responsive-review iframe could render and report bounds, but its click targets were unavailable to the browser controller; this specific short-viewport interaction was reviewed in code rather than claimed as a completed browser click test.
- Motion pause button changed its accessible label/pressed state; computed animation-play-state on the ornament groups was paused. Reduced motion is handled in CSS and GSAP matchMedia; an OS reduced-motion emulation was not run.
- Eczar and Caveat loaded in the rendered page. Current source font character maps were checked for every Romanian glyph ĂăÂâÎîȘșȚț. See FONT-NOTES.md.
- Browser review found no runtime errors. An above-fold image loading warning was corrected by loading the hero lantern image eagerly.
- Phone, email, maps and social destinations are driven by src/data/cafe.ts. Phone/email actions were inspected as correct URI links; no calls, emails or social messages were sent.
- No Lighthouse or field Core Web Vitals figures were collected. Build success and local browser review are not a claim about real-user LCP/INP/CLS.

The supplied screenshots and broad drinks categories remain internal concept content. Production confirmations are listed in CONTENT-NOTES.md and public/images/ASSETS.md.

## Dark entrance-sign palette

Charcoal and orange now lead the site, with purple/teal interior accents. Checked the rendered header, hero, room, arrival imagery and footer, plus the motion-control state. Calculated solid-colour contrast ratios: orange on charcoal 8.86:1, ivory 14.39:1, muted text 9.55:1, purple 6.39:1, teal on the room surface 7.69:1. Orange-filled controls use charcoal text. Production export and TypeScript pass.

The development preview now uses http://localhost:3028/ to avoid another local project listening on port 3000. Use the canonical localhost hostname for Next.js development resources.

## Copy differentiation — 24 October 2026

Compared Pebble's live English/Romanian pages, then rewrote Twenty Eight's headings, descriptions, captions and metadata around its lanterns, embroidered textiles, painted façade, Vespas and Câmpineanu location. Removed the shared personal-pace/time/conversation framing; see COPY-REVIEW.md. The final production build and TypeScript pass. Browser review confirmed all updated headings fit at desktop and 320px phone widths; the phone document has no horizontal overflow (305px content width after scrollbar).

## Background and responsive review — 24 October 2026

- Hid the lighter hero wall below 900px; verified computed display is none at 320, 390, 768 and 899px, and block at desktop sizes.
- Brought the purple/orange façade motif further on-screen, increased its contrast and adjusted phone/tablet placement.
- Café rendered at 320×568, 390×844, 768×1024, 899×768, 1024×768, 1280×960 and 1920×1080. No horizontal document overflow or clipped heading text at these sizes. The two 4:3 desktop compositions were visually reviewed.
- Separate noawezah portfolio reviewed locally at 320×568, 390×844, 820×1180, 1024×768, 1280×960, 1366×768 and 1920×1080. Hero text fits, actions clear the headline, and no horizontal document overflow was observed. The Pebble project page also fits at 1024×768. No portfolio source changes were needed.
- Exact CSS viewport dimensions were rendered in a temporary iframe review fixture; its outer presentation scales to fit the review window. Nested iframe click targets remain unavailable to the controller, so no new portfolio navigation interaction test is claimed.
- Café production build and TypeScript pass after the CSS changes. Portfolio production build/typecheck pass. Screenshots and measurements are saved under ignored artifacts/.
