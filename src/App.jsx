import { useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  BookOpenText,
  Brain,
  Camera,
  CaretDown,
  Check,
  Crosshair,
  FilmSlate,
  Gauge,
  HandPalm,
  Lightning,
  PersonSimpleRun,
  Play,
  Repeat,
  ShieldCheck,
  Sparkle,
  Star,
  Target,
  TennisBall,
  UsersThree,
  VideoCamera,
} from "@phosphor-icons/react";

const weekA = [
  {
    day: "Mon",
    title: "Partner patterns",
    duration: "90–120 min",
    detail: "Third → fifth → seventh",
    extra: "Gym A · 35–50 min",
    icon: UsersThree,
  },
  {
    day: "Tue",
    title: "Competitive play",
    duration: "~2 hours",
    detail: "Games around your level",
    icon: Target,
  },
  {
    day: "Wed",
    title: "Recovery + review",
    duration: "20–30 min",
    detail: "Mobility or short film pass",
    icon: FilmSlate,
  },
  {
    day: "Thu",
    title: "Ball machine",
    duration: "2 hours",
    detail: "Drives · resets · rolls",
    featured: true,
    icon: TennisBall,
  },
  {
    day: "Fri",
    title: "Pressure drilling",
    duration: "90–120 min",
    detail: "Score it. Earn the attack.",
    extra: "Gym B · 35–50 min",
    icon: Gauge,
  },
  {
    day: "Sat",
    title: "Higher-level play",
    duration: "~2 hours",
    detail: "Seek 3.75–4.25 games",
    icon: Lightning,
  },
  {
    day: "Sun",
    title: "True rest",
    duration: "No court work",
    detail: "Walk · recover · reset",
    icon: Sparkle,
  },
];

const weekB = weekA.map((item) =>
  item.day === "Mon"
    ? {
        ...item,
        title: "Coaching lesson",
        duration: "Every two weeks",
        detail: "Diagnosis + assigned reps",
        icon: Star,
      }
    : item,
);

const machineBlocks = [
  ["Warm-up + calibration", "10 min", "Footwork, contact and clean feeds"],
  ["Forehand drives", "20 min", "70–80% pace, topspin and margin"],
  ["Backhand drives", "20 min", "Spacing, shape and repeatability"],
  ["Transition resets", "25 min", "Backhand bias; give soft balls lift"],
  ["Counters", "15 min", "Paddle up, compact and in front"],
  ["Forehand + backhand rolls", "15 min", "Topspin shape from attackable feeds"],
  ["Backhand flicks", "10 min", "Compact acceleration with disguise"],
  ["Pressure test", "5 min", "Finish with a scored standard"],
];

const standardPartnerBlocks = [
  ["Cooperative warm-up", "10 min", "Straight-on dinks, soft hands and clean contact"],
  ["Straight-on dinking", "15 min", "Depth, inside-foot targets and 10-ball patience"],
  ["Crosscourt dinking", "15 min", "Both diagonals; move the ball without forcing"],
  ["Forehand kitchen work", "15 min", "Punch volleys, rolls and controlled putaways"],
  ["Third-shot drive + drop", "25 min", "Read the third, then play the fifth and seventh"],
  ["7/11", "25 min", "Baseline earns the kitchen; kitchen keeps them back"],
  ["Pressure finish", "15 min", "Skinny singles or constrained points starting at 8–8"],
];

const focusBlocks = [
  ["Choose + baseline", "10 min", "Pick one primary shot and score the first 10 reps"],
  ["Primary mechanics", "35 min", "Controlled feeds, one cue and generous targets"],
  ["Supporting variation", "20 min", "Add one adjacent shot—not five new ideas"],
  ["Pattern integration", "25 min", "Use the shot inside a realistic three-ball sequence"],
  ["Pressure test", "20 min", "Score it and make the final reps matter"],
  ["Log the next cue", "10 min", "Record the result, miss pattern and next-session focus"],
];

const practiceFormats = [
  {
    label: "Format 01",
    title: "Standard partner session",
    duration: "120 min",
    body: "A balanced weekly tune-up for dinks, thirds, transition and pressure.",
    href: "#standard-partner",
    icon: UsersThree,
  },
  {
    label: "Format 02",
    title: "Focused shot session",
    duration: "90–120 min",
    body: "One weakness from coaching or film, taken from mechanics into live play.",
    href: "#focus-session",
    icon: Crosshair,
  },
  {
    label: "Format 03",
    title: "Ball-machine session",
    duration: "120 min",
    body: "Solo repetition for the predictable feeds the machine handles well.",
    href: "#ball-machine",
    icon: TennisBall,
  },
];

const priorityGuides = [
  {
    number: "01",
    title: "Transition + resets",
    format: "Partner · machine",
    cue: "Neutral is a win.",
    body: "Build from uncomfortable positions without panicking. Split, reset, advance and repeat. On softer feeds, add enough lift instead of babying the ball into the net.",
    test: "Score how often a transition attempt produces neutrality or forward progress.",
  },
  {
    number: "02",
    title: "Serve + drives",
    format: "Solo · machine",
    cue: "Shape first. Power second.",
    body: "Build proper serve form and dependable forehand and backhand drives. Use 70–80% power, topspin, generous targets and balanced recovery.",
    test: "Serve: 95% in and 80% deep. Drives: track target success at sustainable pace.",
  },
  {
    number: "03",
    title: "Paddle + counters",
    format: "Partner · machine",
    cue: "Up. Backhand-ready. In front.",
    body: "Return to a backhand-biased ready position after every contact. Train compact counters to the right hip, chest and left shoulder with random placement.",
    test: "Count clean neutral or offensive contacts before the first paddle-position breakdown.",
  },
  {
    number: "04",
    title: "Third-shot movement",
    format: "Partner pattern",
    cue: "The third decides the feet.",
    body: "Classify every third as good, neutral or bad. Advance on quality, hold on marginal balls, and stop or retreat with your partner behind a high third.",
    test: "On video, tag movement decisions separately from shot-execution errors.",
  },
  {
    number: "05",
    title: "Keep them back",
    format: "Partner · scored",
    cue: "Attack the player coming forward.",
    body: "When your team owns the kitchen, prioritize feet, depth and the advancing player. Make opponents earn every step through transition.",
    test: "Play 7/11 and track how often the baseline team reaches the kitchen cleanly.",
  },
  {
    number: "06",
    title: "Patience + attack choice",
    format: "Partner · scored",
    cue: "Earn the speedup.",
    body: "Classify green, yellow and red balls. A red-ball attack loses the drill rally even when it happens to win the point.",
    test: "Track bad decisions per game and attacks attempted from below net height.",
  },
  {
    number: "07",
    title: "Left-side dink package",
    format: "Partner",
    cue: "Create pressure without rushing.",
    body: "Build the crosscourt backhand slice first, then the two-handed topspin dink and balls taken out of the air. Follow a crosscourt dink by looking for a legitimate roll, flick or punch.",
    test: "Complete 10-ball cooperative rallies, then score target accuracy and attack decisions separately.",
  },
  {
    number: "08",
    title: "Overheads + out balls",
    format: "Partner",
    cue: "Control first. Judge early.",
    body: "For overheads, turn sideways, contact high and recover for the next ball. For out-ball judgment, mix clearly in, borderline and clearly out feeds; call the ball before it passes.",
    test: "Make 9 of 10 controlled overheads. Count every out ball touched as a lost drill point.",
  },
];

const scorecard = [
  ["Serves in", "95%+"],
  ["Serves landing deep", "80%+"],
  ["Returns in", "95%+"],
  ["Reasonably deep returns", "75%+"],
  ["Red-ball attacks", "Near zero"],
  ["Serve/return errors", "≤1 per game"],
];

function WeekRow({ label, days }) {
  const headingId = `${label.toLowerCase().replace(" ", "-")}-heading`;

  return (
    <section className="week-row" aria-labelledby={headingId}>
      <div className="week-label">
        <span id={headingId}>{label}</span>
        <small>{label === "Week B" ? "Coaching week" : "Build week"}</small>
      </div>
      <div className="days-grid">
        {days.map(({ day, title, duration, detail, extra, featured, icon: Icon }) => (
          <article className={`day ${featured ? "day--featured" : ""}`} key={`${label}-${day}`}>
            <p className="day__name">{day}</p>
            <Icon size={27} weight={featured ? "duotone" : "regular"} aria-hidden="true" />
            <h3>{title}</h3>
            <p className="day__duration">{duration}</p>
            <p className="day__detail">{detail}</p>
            {extra && <p className="day__extra">{extra}</p>}
            {featured && (
              <a className="day__link" href="#ball-machine">
                View guide <ArrowRight size={14} aria-hidden="true" />
              </a>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}

function AppHeader() {
  const [open, setOpen] = useState(false);
  const closeMenu = () => setOpen(false);

  return (
    <header className="site-header">
      <a className="brand" href="#plan" aria-label="Road to 4.0 home">
        Road to 4.0
      </a>
      <button
        className="menu-button"
        type="button"
        aria-expanded={open}
        aria-controls="primary-navigation"
        onClick={() => setOpen((value) => !value)}
      >
        Guide <CaretDown size={16} weight="bold" aria-hidden="true" />
      </button>
      <nav id="primary-navigation" className={open ? "nav nav--open" : "nav"} aria-label="Primary navigation">
        <a href="#plan" onClick={closeMenu}>Plan</a>
        <a href="#drills" onClick={closeMenu}>Drills</a>
        <a href="#film-room" onClick={closeMenu}>Film Room</a>
        <a href="#progress" onClick={closeMenu}>Progress</a>
        <a href="#tournament" onClick={closeMenu}>Tournament</a>
      </nav>
    </header>
  );
}

function TrainingBlock() {
  const items = [
    [Repeat, "Primary focus", "Backhand transition resets", "Reset with height and depth from uncomfortable positions."],
    [PersonSimpleRun, "Supporting focus", "Third → fifth → seventh", "Build the chain. Move up when the ball is short or neutral."],
    [ArrowRight, "Maintenance", "Deep returns", "High margin and enough depth to earn time at the kitchen."],
    [ShieldCheck, "Pressure behavior", "Neutralize rather than force", "Stay in the rally, then attack with a better ball."],
  ];

  return (
    <section className="training-block" aria-labelledby="training-block-title">
      <div className="section-kicker" id="training-block-title">Current training block · repeat for two weeks</div>
      <div className="training-block__grid">
        {items.map(([Icon, label, title, body]) => (
          <article className="focus-item" key={label}>
            <Icon size={30} weight="regular" aria-hidden="true" />
            <p>{label}</p>
            <h3>{title}</h3>
            <span>{body}</span>
          </article>
        ))}
      </div>
    </section>
  );
}

function PlanSection() {
  return (
    <section id="plan" className="plan-section">
      <div className="hero">
        <div className="hero__copy">
          <p className="eyebrow">Coach’s notebook</p>
          <h1>Reset better. Miss less.<br />Attack smarter. Stay patient.</h1>
        </div>
        <figure className="hero__image">
          <img src="./assets/pickleball-action.png" alt="Pickleball player preparing a controlled volley at the kitchen" />
        </figure>
      </div>

      <div className="plan-layout" id="cycle">
        <div className="cycle">
          <div className="section-heading section-heading--inline">
            <div>
              <p className="eyebrow">Reusable two-week training cycle</p>
            </div>
            <div className="repeat-note"><Repeat size={18} aria-hidden="true" /> Repeat continuously</div>
          </div>
          <WeekRow label="Week A" days={weekA} />
          <WeekRow label="Week B" days={weekB} />
          <TrainingBlock />
        </div>

        <aside className="coach-margin" aria-label="Coach's margin and recurring cadence">
          <div className="coach-note">
            <p>Coach’s margin</p>
            <blockquote>Soft ball<br />still needs lift.</blockquote>
          </div>

          <div className="cadence">
            <p className="section-kicker">Recurring cadence</p>
            <div><Star size={24} aria-hidden="true" /><span><strong>Coaching</strong><small>Every two weeks</small></span></div>
            <div><VideoCamera size={24} aria-hidden="true" /><span><strong>Record + self-review</strong><small>At least monthly</small></span></div>
            <div><FilmSlate size={24} aria-hidden="true" /><span><strong>Paid expert review</strong><small>Monthly</small></span></div>
          </div>

          <div className="evidence">
            <p className="section-kicker">Monthly evidence</p>
            <p className="evidence__intro">Establish the baseline before claiming improvement.</p>
            <div><span>Unforced errors</span><strong>Log</strong></div>
            <div><span>Bad decisions</span><strong>Log</strong></div>
            <div><span>Resets neutralized</span><strong>Log</strong></div>
            <a className="text-link" href="#film-room">Open Film Room <ArrowRight size={16} aria-hidden="true" /></a>
          </div>
        </aside>
      </div>
    </section>
  );
}

function DrillSessionGuide({ id, eyebrow, title, description, icon: Icon, blocks, duration, note, variant = "" }) {
  return (
    <article className={`session-guide ${variant ? `session-guide--${variant}` : ""}`} id={id}>
      <div className="session-guide__intro">
        <div className="icon-frame"><Icon size={34} weight="duotone" aria-hidden="true" /></div>
        <p className="eyebrow">{eyebrow}</p>
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="session-total"><span>{blocks.length} blocks</span><strong>{duration}</strong></div>
      </div>
      <ol className="session-blocks">
        {blocks.map(([blockTitle, time, body], index) => (
          <li key={blockTitle}>
            <span className="block-number">{String(index + 1).padStart(2, "0")}</span>
            <div><strong>{blockTitle}</strong><small>{body}</small></div>
            <span className="block-time">{time}</span>
          </li>
        ))}
      </ol>
      {note ? (
        <div className="session-note">
          <Crosshair size={26} weight="duotone" aria-hidden="true" />
          <div><strong>{note.title}</strong><span>{note.body}</span></div>
        </div>
      ) : null}
    </article>
  );
}

function DrillsSection() {
  return (
    <section id="drills" className="content-section drills-section">
      <div className="section-heading">
        <p className="eyebrow">Drill guides</p>
        <h2>Know the session before you step on court.</h2>
        <p>Choose one complete recipe. The standard session keeps the whole game healthy, the focus session attacks one weakness, and the ball machine supplies clean solo repetition.</p>
      </div>

      <nav className="practice-formats" aria-label="Choose a drill-session format">
        {practiceFormats.map(({ label, title, duration, body, href, icon: Icon }) => (
          <a href={href} key={title}>
            <div className="practice-format__top"><Icon size={25} weight="duotone" aria-hidden="true" /><span>{label}</span></div>
            <h3>{title}</h3>
            <strong>{duration}</strong>
            <p>{body}</p>
            <span className="practice-format__link">Open recipe <ArrowDown size={15} weight="bold" aria-hidden="true" /></span>
          </a>
        ))}
      </nav>

      <div className="session-recipes">
        <DrillSessionGuide
          id="standard-partner"
          eyebrow="Weekly baseline"
          title="Two-hour standard partner session"
          description="Repeat this balanced session often enough to make the fundamentals automatic. The goal is broad upkeep, not rebuilding every shot in one day."
          icon={UsersThree}
          blocks={standardPartnerBlocks}
          duration="120 minutes"
          variant="partner"
          note={{
            title: "This is the default when no single weakness is urgent.",
            body: "Keep feeds cooperative early, then make the final 40 minutes competitive and scored.",
          }}
        />

        <DrillSessionGuide
          id="focus-session"
          eyebrow="Coaching + film response"
          title="Focused shot-development session"
          description="Pick one primary weakness from your latest lesson or video review. Build the mechanics, place the shot in a pattern, then test it under pressure."
          icon={Crosshair}
          blocks={focusBlocks}
          duration="90–120 minutes"
          variant="focus"
          note={{
            title: "One primary shot. One supporting variation.",
            body: "For a 90-minute session, trim 15 minutes from mechanics and 15 from pattern integration—never skip the scored finish.",
          }}
        />

        <DrillSessionGuide
          id="ball-machine"
          eyebrow="Weekly solo technical session"
          title="Two-hour ball-machine session"
          description="Use clean, repeatable feeds to build mechanics. Add movement and randomness only after contact quality holds."
          icon={TennisBall}
          blocks={machineBlocks}
          duration="120 minutes"
          variant="machine"
          note={{
            title: "Use the machine only where it helps.",
            body: "Serve separately for 10–15 minutes on three court days. Save overheads and out-ball judgment for variable partner feeds.",
          }}
        />
      </div>

      <div className="drill-library-heading">
        <p className="eyebrow">Drill library</p>
        <h3>Pick the drill by the problem.</h3>
        <p>These are the building blocks inside the session recipes. Open a card for the purpose, coaching cue and an evidence-based finish line.</p>
      </div>

      <div className="priority-list">
        {priorityGuides.map((guide) => (
          <details key={guide.number}>
            <summary>
              <span>{guide.number}</span>
              <div><small>{guide.format}</small><h3>{guide.title}</h3><p>{guide.cue}</p></div>
              <CaretDown size={20} weight="bold" aria-hidden="true" />
            </summary>
            <div className="priority-detail">
              <p>{guide.body}</p>
              <div><Check size={17} weight="bold" aria-hidden="true" /><span><strong>Pass with evidence:</strong> {guide.test}</span></div>
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}

function FilmRoomSection() {
  const reviewSteps = [
    [Camera, "Record", "Capture at least one competitive session or tournament each month."],
    [Play, "Self-review", "Watch 2–3 representative games before anyone tells you what to see."],
    [Star, "Expert review", "Pay a proven 4.5+/5.0 player or qualified coach for timestamped feedback."],
    [BookOpenText, "Convert", "Turn every accepted finding into a drill, constraint, metric or match cue."],
    [Repeat, "Retest", "Look for the same behavior in the next month’s footage."],
  ];
  const codes = [
    ["F", "Forced error"],
    ["U", "Unforced error"],
    ["BD", "Bad decision"],
    ["P", "Positioning error"],
    ["EX", "Good decision, poor execution"],
  ];

  return (
    <section id="film-room" className="content-section film-section">
      <div className="section-heading">
        <p className="eyebrow">Film Room</p>
        <h2>Let the footage choose the next block.</h2>
        <p>The review loop keeps the plan honest. Patterns earn training time; isolated ugly points do not.</p>
      </div>
      <div className="film-layout">
        <ol className="review-loop">
          {reviewSteps.map(([Icon, title, body], index) => (
            <li key={title}>
              <span className="review-loop__number">{index + 1}</span>
              <Icon size={27} weight="regular" aria-hidden="true" />
              <div><h3>{title}</h3><p>{body}</p></div>
            </li>
          ))}
        </ol>
        <aside className="review-sheet">
          <p className="section-kicker">Lost-point codes</p>
          <div className="code-list">
            {codes.map(([code, label]) => <div key={code}><strong>{code}</strong><span>{label}</span></div>)}
          </div>
          <div className="reviewer-ask">
            <p className="section-kicker">Ask every reviewer for</p>
            <ul>
              <li>Three highest-impact weaknesses</li>
              <li>Timestamped examples</li>
              <li>What to stop doing</li>
              <li>What to drill next</li>
              <li>One or two match-day cues</li>
            </ul>
          </div>
          <p className="privacy-note">Record with venue and player permission. Keep private footage private.</p>
        </aside>
      </div>
    </section>
  );
}

function ProgressSection() {
  return (
    <section id="progress" className="content-section progress-section">
      <div className="progress-intro">
        <p className="eyebrow">Progress</p>
        <h2>What “legitimate 4.0” means here.</h2>
        <blockquote>“My tournament B-game is patient, low-error and recognizable as my normal game.”</blockquote>
        <p>DUPR is the outcome. Reliability, decisions and repeatable execution are the leading evidence.</p>
      </div>
      <div className="scorecard">
        <div className="scorecard__header"><span>Core standard</span><span>Target</span></div>
        {scorecard.map(([label, target]) => (
          <div className="scorecard__row" key={label}><span>{label}</span><strong>{target}</strong></div>
        ))}
        <p>Also trend unforced errors, bad decisions, third shots that create progress and tournament-versus-practice performance.</p>
      </div>
      <div className="proof-grid">
        <article><Gauge size={28} aria-hidden="true" /><h3>Results</h3><p>Reach and sustain roughly 4.0 against credible competition.</p></article>
        <article><HandPalm size={28} aria-hidden="true" /><h3>Capability</h3><p>Execute the core soft game, hard game, positioning and partner movement.</p></article>
        <article><Brain size={28} aria-hidden="true" /><h3>Reliability</h3><p>Make strong decisions and hold your margins when the score matters.</p></article>
      </div>
    </section>
  );
}

function TournamentSection() {
  const commandments = [
    "If they’re back, keep them back.",
    "If I’m in transition, neutralize first.",
    "The third shot determines my movement.",
    "Paddle up and backhand-ready.",
    "Take time away when I can—without forcing.",
  ];

  return (
    <section id="tournament" className="content-section tournament-section">
      <div className="section-heading">
        <p className="eyebrow">Tournament mode</p>
        <h2>Same swing. Bigger target.</h2>
        <p>Pressure training is not punishment. It is practice staying recognizable when you really do not want to miss.</p>
      </div>
      <div className="tournament-grid">
        <article className="routine-card">
          <p className="section-kicker">Between-point routine</p>
          <div className="routine-steps">
            <span>Turn away</span><ArrowRight aria-hidden="true" /><span>Exhale</span><ArrowRight aria-hidden="true" /><span>Name one intention</span><ArrowRight aria-hidden="true" /><span>Play</span>
          </div>
          <p className="routine-examples">“Deep return.” &nbsp; “Patient.” &nbsp; “Feet.” &nbsp; “Make them hit another.”</p>
        </article>
        <article className="pressure-card">
          <p className="section-kicker">Pressure menu</p>
          <ul>
            <li>Start games at 8–8, 9–9 or 10–10.</li>
            <li>Finish only after 8 of 10 successful drops.</li>
            <li>Require five resets in a row.</li>
            <li>Make a red-ball attack an automatic loss.</li>
            <li>Win three constrained games consecutively.</li>
          </ul>
        </article>
      </div>
      <div className="commandments">
        <p className="section-kicker">Five on-court commandments</p>
        <ol>{commandments.map((item) => <li key={item}>{item}</li>)}</ol>
      </div>
      <div className="safety-note">
        <ShieldCheck size={26} weight="duotone" aria-hidden="true" />
        <p><strong>Keep the performance routine boring and tested.</strong> Hydration, food, caffeine and any prescription-medication plan should be established with an appropriate clinician—not improvised on tournament day.</p>
      </div>
    </section>
  );
}

export function App() {
  return (
    <>
      <AppHeader />
      <main>
        <PlanSection />
        <DrillsSection />
        <FilmRoomSection />
        <ProgressSection />
        <TournamentSection />
      </main>
      <footer>
        <div><strong>Road to 4.0</strong><span>Build the B-game that travels.</span></div>
        <a href="#plan">Back to the plan <ArrowDown className="footer-arrow" size={16} aria-hidden="true" /></a>
      </footer>
    </>
  );
}
