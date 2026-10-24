# Copy review — Twenty Eight / Pebble

Completed 24 October 2026. Compared the visible English and Romanian versions of [Pebble](https://pebble2.vercel.app/) and [Pebble Romanian](https://pebble2.vercel.app/ro) with Twenty Eight's headings, introductions, captions, drinks text, contact section and metadata.

The original overlap was chiefly the message: a quiet city escape, slowing down, taking time and conversation. The exact phrase “În ritmul tău” also appeared on both sites. A synonym-only rewrite would have preserved the same positioning.

Twenty Eight now focuses on its observable identity: painted exterior flowers, hanging metal lanterns, stained glass, embroidered textiles, teal walls, Vespas and the Câmpineanu address.

| Surface | Revised message |
| --- | --- |
| Opening | Cafea. Felinare. Câmpineanu. |
| Interior | Metal, sticlă și culoare. |
| Drinks | Din ceașcă în pahar. |
| Atmosphere | Culoare pe ziduri. Lumină prin metal. |
| Visit | Câmpineanu, numărul 23. |

Removed the recurring pause/time/conversation/story framing from visible copy, gallery captions and metadata. Functional labels, ordinary drink categories and the business's supplied tagline are retained where useful. No supplier, cultural-origin story, menu price, recipe or service claim was introduced.

All marketing copy and photo captions are now in src/data/cafe.ts, and the rendered headings/metadata read from that source to avoid divergent copies. Contact information, hours and destinations remain centralized there.
