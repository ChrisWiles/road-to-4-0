# Design QA

- Source visual truth: `design/reference-design.png`
- Normalized source: `design/reference-1440x1024.png`
- Browser-rendered implementation: `design/implementation-desktop.png`
- Responsive capture: `design/implementation-mobile.png`
- Final comparison: `design/comparison-pass2.png`
- Desktop viewport: 1440 × 1024 CSS px at deviceScaleFactor 1
- Source pixels: 1487 × 1058, normalized to 1440 × 1024
- Implementation pixels: 1440 × 1024
- Mobile viewport and pixels: 390 × 844 at deviceScaleFactor 1
- State: root plan view, navigation closed, drill accordions closed

## Full-view comparison evidence

The source and browser-rendered implementation were normalized to 1440 × 1024 and placed together in `design/comparison-pass2.png`. The implementation preserves the selected composition: warm paper ground, ink-navy serif headline, coral and sage accents, angled editorial sports image, two stacked training weeks, coach's margin, recurring cadence, and the beginning of the current training block within the first desktop viewport.

The weekly content intentionally differs from the generated mock where needed to honor the confirmed program: two competitive-play sessions, two gym sessions, one two-hour ball-machine session, three drill exposures, one true rest day, and one coaching lesson every two weeks. Fabricated performance values from the mock were replaced with honest prompts to establish a baseline.

## Focused-region evidence

A separate focused crop was not needed. Each side of the full comparison retains a complete 1440 px desktop frame, and the hero, cycle rows, coach's margin, typography, icons, and image crop were also inspected individually in their original-resolution captures. The drill section and mobile menu were separately inspected in the live browser.

## Required fidelity surfaces

- Fonts and typography: DM Serif Display and Manrope preserve the editorial-serif and crisp-interface pairing. Display hierarchy, line wrapping, letter spacing, and weights match the target. Repeated session details were increased to readable sizes without breaking the seven-day structure.
- Spacing and layout rhythm: page margins, week-row dividers, day columns, coach-margin split, and restrained surface treatments match the mock. The desktop page has no horizontal overflow; the weekly rows use intentional horizontal scrolling on narrow screens.
- Colors and tokens: warm white, ink navy, coral red, sage green, and light rules are consistently tokenized and visually aligned with the source. Contrast remains strong in light and dark sections.
- Image quality and asset fidelity: the generated editorial pickleball photograph matches the source subject, palette, crop, and angled placement. It is a dedicated raster asset, sharp at desktop size, with no placeholder or CSS-drawn substitute.
- Copy and content: all exact dates were removed. The plan is explicitly reusable, coaching repeats every two weeks, and monthly self-review and paid expert review are present. No unverified current performance metrics are presented as fact.
- Icons: all interface icons come from one consistent Phosphor family and align cleanly with labels and controls.
- Responsiveness and accessibility: desktop and 390 px mobile layouts were rendered. The mobile page has no horizontal body overflow; the week rows scroll intentionally. Navigation, links, semantic details controls, alt text, visible focus styles, and reduced-motion handling are present.

## Interaction and browser checks

- Primary navigation scrolled to the Drills section successfully.
- A drill-guide accordion expanded and exposed its full guidance.
- The mobile Guide menu opened and exposed all navigation links.
- Browser console warnings and errors checked: none.

## Comparison history

### Pass 1

- P2: The hero was too tall, so the repeating cycle began too far below the source composition.
- P2: An extra large cycle headline displaced the weekly plan.
- P2: Several repeated session details were too small for comfortable scanning.

Fixes applied: reduced the hero to the compact editorial silhouette, removed the redundant cycle headline, tightened the transition into the planner, and increased key schedule and cadence text sizes.

### Pass 2

Post-fix evidence in `design/comparison-pass2.png` shows the target hierarchy and first-viewport density restored. No actionable P0, P1, or P2 findings remain.

## Follow-up polish

- P3: The implementation keeps the navigation in its own sticky paper header, while the mock lets the photo extend behind the top-right header area. The small silhouette difference improves long-guide navigation and is acceptable.
- P3: The coach's note uses a synthesized editorial italic instead of adding a third handwriting font, preserving the two-font system.

final result: passed
