# App frame

The bundled `../assets/app/page.tsx` is a clean main-page template with the application frame already in place. Preserve its structural cues when replacing the sample content.

## Overall layout

- Use a full viewport dark canvas (`#081317`) with a near-black app panel. At desktop widths, give the panel a small outer margin and about a 20px corner radius. At mobile widths, let it fill the viewport.
- Inside the panel, place a left navigation rail and a right column. The right column has a slim header above an independently scrolling main area. Keep the main area `min-height: 0` so it actually scrolls within the viewport frame.
- Use the bundled `--color-ink-*`, `--color-brand-*`, and semantic surface tokens. Favor thin borders, low opacity surfaces, subtle radial color, and lime for active states.

## Navigation and header

- Desktop: a 64px icon rail can widen to roughly 240px on hover or keyboard focus. Put a brand mark at the top, then compact icon-and-label items. Show the active item with a short lime indicator and brighter icon or text. A fixed wider sidebar is fine when expansion adds little to the mockup.
- Header: a 48px desktop bar and roughly 56px mobile bar with a dark translucent mesh, a bottom divider, a small left identity or context control, and a few right-side actions relevant to the mockup.
- Mobile: hide the desktop rail and use a compact bottom navigation if the mockup has multiple destinations. Allow for the device safe area and keep main content clear of the dock. For a single-page landing mockup, top header and section links may suffice.
- Use semantic `nav`, `header`, and `main` landmarks; label navigation; give icon-only controls accessible names; visibly identify the active destination; include a skip link to main content.

## Content treatment

- Use a strong display headline, softer supporting text, and compact cards with fine borders. Keep content aligned to a consistent inset and generous vertical rhythm in the scrollable area.
- Use bundled `.sidebar-mesh`, `.header-mesh`, `.mockup-card`, `.mockup-accent-button`, and `.mockup-tape` only where they suit the requested screen. Respect reduced-motion settings.
- Keep app-specific data, routes, and actions out of the frame until the mockup request calls for them.
