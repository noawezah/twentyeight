# The room — Twenty Eight Caffee

Selected by the user on 22 October 2026. Additional direct instruction: make the site as artistic as possible, with animated backgrounds and patterns inspired by the exterior.

## Visual rules

An inhabited room translated into a moving editorial composition. Use real supplied photographs, layered frames, embossed teal plaster, embroidered plum/lime textiles and floral shapes inspired by the painted façade. The motifs are original geometric interpretations, not a replacement logo or claim of cultural heritage. Vespas belong in the street/arrival composition.

Small identity ornaments use an elongated hanging lantern, drawn from the café's pierced-metal fixtures. The user rejected the simple asterisk/starburst because it resembles Claude's logo. The lantern has a vertical silhouette and gentle hanging movement.

Copy revised after comparison with Pebble: use the café's concrete street/material identity rather than quiet-retreat, taking-time or conversation messages. Main line: “Cafea. Felinare. Câmpineanu.” See COPY-REVIEW.md. Marketing copy, gallery captions and metadata are sourced from src/data/cafe.ts.

Palette revised at the user's request: charcoal #141512 and warm orange #f2a43a lead, echoing the entrance sign. Ivory #ece3d2 and muted warm text #c3baac provide readable supporting copy. Purple #b789bd and teal #76bfb2 appear in ornamental details, annotations and interaction accents. Room, evening and footer surfaces use near-black teal/purple tones rather than large saturated panels. Orange-filled controls use charcoal text. Eczar at weight 500–600 provides distinctive ink-like serif headings, Caveat 500 genuine handwritten annotations, and Manrope compact readable details. Display emphasis stays upright instead of synthesizing an unavailable italic. The current Google Fonts Eczar and Caveat files were checked for ĂăÂâÎîȘșȚț. Brand name remains Twenty Eight Caffee; typographic wordmark is a placeholder pending the approved logo.

The lighter hero wall is desktop-only (900px and wider). The large façade-inspired floral motif sits further inside the page at every breakpoint, with stronger purple/orange contrast. Phone and tablet compositions retain the ornament against a uniform charcoal ground.

Dense opening with overlapping doorway and lamp photography; teal material portrait with several image scales; continuous ruled drinks ledger; one decisive street/visit composition; compact footer. No chapter numbers, category tabs, generic cards, fake ratings, food claims, reservation claims or invented prices. No forms. Romanian first.

Plain persistent navigation links and a directions action. Mobile uses two compact navigation rows without an overlay. Phone, address, hours and menu categories remain accessible text. Contact and drinks data come from src/data/cafe.ts.

## Interaction map

| Effect / location | Trigger and elements | States / range / easing | Reverse | Mobile / touch | Reduced motion / pause |
| --- | --- | --- | --- | --- | --- |
| Hero entrance | First paint; heading lines, image frames and caption | Text rises 20px to resting position, frames rotate from ±4° to their composed angles; 0.9–1.2s, power3.out; no artificial wait and image opacity stays visible | One entrance per mount | Same shorter entrance; smaller travel | Static final state |
| Façade garden, hero and teal room | Idle CSS; layered SVG petals and medallions | Separate outer/inner groups turn slowly in opposite directions over 70–100s; scroll adds a separate rotation layer | Continuous and seamless | Fewer visible motifs; no pointer dependence | Stop in a composed static state; global motion toggle pauses loops |
| Hero depth | Native scroll; outer collage wrapper, pattern wrapper, text | Top top → bottom top: image moves -36px, pattern rotates 35°, title moves -20px; scrub 1 | Fully reversible | Smaller y travel; no excessive scaling | No ScrollTriggers |
| Photo pointer depth | Fine pointer over hero; inner depth wrapper | Pointer normalized to ±6px x/y; smooth CSS transform ~450ms; scroll animates a separate parent wrapper | Pointer leave returns to zero | Disabled for coarse pointers | Disabled |
| Room composition | Short native sticky section; three material-photo layers and giant motif | Sticky section from top top to bottom bottom; central lamp frame translates -35px, side textile shifts +45px/-20px and rotates 6°, motif turns 65°; scrub 1.1; no scroll interception | Every layer returns along the same path | Unpinned stacked collage; transform range halved and no horizontal section | All frames remain visible in balanced static positions |
| Lantern ornaments | Idle hero symbol / hover drinks row | Hero lantern swings ±7° over 7s; drinks lantern tilts 9° over 600ms while category label shifts and warm surface reveals | Seamless idle reverse; mouseout restores row ornament | No information depends on hover | Idle animation disabled; all symbols remain visible |
| Arrival composition | Native scroll; Vespa image and floral corner | Top bottom → bottom top: image rotates -2° to 1°, translates 24px to -18px; decorative frame moves opposite 12px | Fully reversible | Shorter y travel; no pin | Static image |
| Room gallery | Click labelled photo controls; shadcn/Radix dialog, six reference photos | Accessible modal with previous/next controls and caption; content enters over 180ms, no autoplay | Close returns focus to trigger | Large controls, swipe not required | Instant state change |
| Navigation | Plain native anchors | Smooth native scroll with header offsets; underline reveals on hover/focus | Browser history and normal scroll preserved | Same links and directions; no hidden menu | Instant anchor scrolling |

Motion ownership: each idle, pointer and scroll transform uses a separate nested wrapper. GSAP matchMedia cleans up on resizing, reduced-motion changes and unmount. A persistent animation toggle stops decorative loops and scroll effects; it does not hide content. No cursor replacement or audio.

## Assets and content

public/images/ASSETS.md records originals and temporary internal-reference status. Use supplied photographs honestly; no generated room, product or guest photos. Drinks are supported categories, not an approved current item/price list. No discount or offer is carried over from social screenshots. Production requires clean approved originals, current menu, contact/hours check, approved logo, domain and legal copy; see CONTENT-NOTES.md.

## Verification

Check the actual rendered page at desktop, tablet and phone widths. Inspect each section, anchor navigation, keyboard focus, modal/gallery controls, reduced motion, global pause/resume, forward/backward scrolling, resizing, image loading and browser/server errors. Typecheck and production export must pass. Local performance measurements must be labelled as local; no claim of field Core Web Vitals.
