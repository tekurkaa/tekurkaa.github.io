# UI design guidelines

## North star

This is a personal portfolio for recruiters and hiring managers considering Atharv for data analytics, analytics engineering, and financial-data or applied-AI roles. It should feel like a concise quantitative research note: thoughtful, readable, evidence-led, and memorable. The page may be creative, but professional credibility wins over spectacle.

Treat this as an editorial portfolio, not a dashboard or a startup landing page. Aim for moderate asymmetry, low visual density, and restrained motion. Inspect the current page before redesigning; the existing composition is the starting point, not a disposable template.

## Visual language

- Preserve the warm paper surface, deep navy-charcoal text, muted rust accent, precise hairlines, and generous whitespace. Use the variables in `styles.css` as the source of truth for colors and spacing decisions.
- Use Newsreader for expressive headings and IBM Plex Sans for navigation, labels, and body copy. Keep both self-hosted. Maintain readable line lengths and clear type hierarchy; avoid tiny body text or oversized decorative headlines.
- Prefer open page structure and editorial dividers to repeated cards, heavy shadows, glass effects, neon, or gradients. Asymmetry should support scanning and help the work stand out.
- Keep the hero personal. Atharv's name is the headline; the supporting sentence can evolve with his career. A marketing tagline is optional, not required.
- Use real project screenshots, actual data visualizations, and photos Atharv has approved for publication. Do not fabricate interfaces or results. Keep the photography section compact and secondary to the professional work.

## Content and hierarchy

- Help a recruiter answer three questions quickly: what Atharv does, what he has built, and how to contact him. Put the strongest, best-supported work first.
- Write plainly and specifically. Explain the problem, method, and outcome or limitation of each project. Distinguish deployed tools, demos, studies, and exploratory work.
- Keep the profile broader than finance alone: analytics, data engineering, quantitative modeling, and applied AI are all part of the story. Use current resume and LinkedIn language as inputs, not as copy to paste wholesale.
- Preserve working anchor navigation and clear calls to action. Do not add a section just to fill space. Avoid generic claims such as "revolutionizing data" or unsupported superlatives.
- Make figures honest: label axes and units, provide a text description, and link to underlying data or methods where available.

## Interaction and motion

- Motion should communicate entry, hierarchy, or feedback. The current site uses subtle hero and section reveals, active navigation, and small image hover effects. Extend those patterns before introducing a new animation system.
- Favor opacity and transform transitions. Keep them brief and calm; avoid scroll hijacking, autoplaying carousels, and persistent decorative movement.
- Respect `prefers-reduced-motion`. Keep all content visible and usable if JavaScript fails, motion is disabled, or a section is reached directly by URL.
- Provide visible hover, focus, and active states. Keep navigation stable while moving among sections; do not sacrifice keyboard or touch use for visual effects.

## Responsive and accessible finish

- Test at approximately 390px mobile, 768px tablet, and 1280px desktop, plus at least one in-between width. Multi-column layouts should collapse deliberately rather than merely shrink.
- Maintain semantic heading order, meaningful link text, descriptive alt text, adequate contrast, and visible focus rings. Decorative motion and imagery must not carry information that text omits.
- Reserve image dimensions to avoid layout shifts. Keep the page fast and dependency-light; a static portfolio should load cleanly on an ordinary phone connection.
- Before shipping a visual change, inspect the rendered page and ask whether the first screen still feels like Atharv: analytical, approachable, and credible.
