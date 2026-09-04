# Prototype Instructions

Run the local server yourself and open the preview in the browser available to this environment. Do not give the user server-start instructions when you can run it.

Before making substantial visual changes, use the Product Design plugin's `get-context` skill when the visual source is unclear or no longer matches the current goal. When the user gives durable prototype-specific design feedback, preferences, or decisions, record them in `AGENTS.md`.

When implementing from a selected generated mock, treat that image as the source of truth for layout, component anatomy, density, spacing, color, typography, visible content, and hierarchy.

Build app UI in `src/`. Keep `.openai/hosting.json`, `worker/index.js`, `scripts/prepare-sites-build.mjs`, and `tests/sites-worker.test.mjs` intact so the same local prototype can be handed to Sites. Before a Sites handoff, run `npm run build` and `npm run test:sites`; the build must leave `dist/client/index.html`, `dist/server/index.js`, and `dist/.openai/hosting.json`.

## Product direction

- Use the selected Coach's Notebook direction: warm white, ink navy, coral red, soft sage, editorial serif display type, and restrained sans-serif UI.
- Treat the site as a durable public guide and personal training cockpit, not a date-driven calendar or generic pickleball blog.
- The primary planning surface is a reusable two-week cycle labeled Week A and Week B. Do not add exact calendar dates.
- Preserve the core line: “Reset better. Miss less. Attack smarter. Stay patient.”
- Keep GitHub Pages unpublished until the user has reviewed and approved the local static site.
- In the two-hour ball-machine guide, prioritize drives, resets, counters, forehand/backhand rolls, and backhand flicks; keep overhead and out-ball judgment work in partner sessions.
- Keep the drill area organized as three clearly separated recipes: a repeatable two-hour standard partner session, a 90–120 minute focused shot-development session, and a two-hour ball-machine session, followed by a distinct drill library.
- Keep the phone layout free of horizontal page scrolling. At small widths, render each training week as a readable two-column grid, preserve large touch targets, and keep anchor headings clear of the sticky header.
