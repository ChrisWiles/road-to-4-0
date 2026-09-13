import { useEffect, useRef, useState } from "react";
import { CoachingSection, TechniqueSection } from "./TechniqueSection";
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
    title: "Kitchen advancement",
    duration: "90–120 min",
    detail: "Hit · read · get up",
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
    detail: "Drive spacing · resets · rolls",
    featured: true,
    icon: TennisBall,
  },
  {
    day: "Fri",
    title: "Fourth-shot decisions",
    duration: "90–120 min",
    detail: "Keep back · dink · attack",
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
  ["Forehand drives", "20 min", "50–60% pace; find comfortable contact spacing"],
  ["Backhand drives", "20 min", "Separate results; stop reaching away from the strike zone"],
  ["Transition resets", "25 min", "Backhand bias; give soft balls lift"],
  ["Counters", "15 min", "Paddle up, compact and in front"],
  ["Forehand + backhand rolls", "15 min", "Topspin shape from attackable feeds"],
  ["Backhand flicks", "10 min", "Compact acceleration with disguise"],
  ["Pressure test", "5 min", "Finish with a scored standard"],
];

const standardPartnerBlocks = [
  ["Deep serve + return", "15 min", "Back-third targets; record in, deep and shallow separately"],
  ["Drive-spacing calibration", "15 min", "50–60% pace; 10 forehands, then 10 backhands"],
  ["Random fourth-shot read", "20 min", "Call keep back, dink or attack before contact"],
  ["Third → fifth → seventh", "30 min", "Advance only behind a ball that earns the step"],
  ["Recentered defense", "20 min", "Recover and split before the opponent strikes"],
  ["Wide-left escape", "10 min", "Middle reset, recover, then handle the next ball"],
  ["Constrained points", "10 min", "Track kitchen arrival without abandoning the aggressive finish"],
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
    title: "Current partner session",
    duration: "120 min",
    body: "A coach-led session for kitchen arrival, fourth shots, drive spacing and defense.",
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
    title: "Earn the kitchen",
    format: "2–4 players · primary",
    cue: "Hit. Read. Get up.",
    body: "Build the full third-to-fifth-to-seventh sequence. Advance behind quality, split before contact and keep working until the serving team is established at the kitchen.",
    test: "Raise serving-team kitchen arrival from the current one-match baseline of about 50% toward 80%+.",
  },
  {
    number: "02",
    title: "Fourth-shot decision",
    format: "2–4 players · primary",
    cue: "Read before you hit.",
    body: "React to the incoming third instead of predetermining the fourth. Keep a low drive back, dink a good drop and attack only a genuinely high ball.",
    test: "Tag the decision and execution separately; reduce fourth shots driven deep when the correct reply was into the kitchen.",
  },
  {
    number: "03",
    title: "Drive contact spacing",
    format: "Solo · partner · machine",
    cue: "Let it enter the strike zone.",
    body: "The current coaching diagnosis is contact too far away from the comfortable strike zone, which lifts the ball. Calibrate at 50–60% pace before adding power.",
    test: "Separate forehand and backhand results: controlled, high-and-attackable, net or long/wide.",
  },
  {
    number: "04",
    title: "Recentered defense",
    format: "2–4 players · primary",
    cue: "Recover before they strike.",
    body: "Stop pinching the middle without recovering. Move with your partner, restore court coverage and get balanced before the opponent contacts the next ball.",
    test: "Count desperation shots caused by drifting, over-pinching or moving through contact.",
  },
  {
    number: "05",
    title: "Serve + return depth",
    format: "2–4 players · foundation",
    cue: "Back third. Then move.",
    body: "Accuracy is already good and shallow misses are rare. Keep that safety while moving more serves and returns from midcourt into the back third.",
    test: "Track in, deep and shallow separately; work toward 80% deep for both serves and returns.",
  },
  {
    number: "06",
    title: "Wide-left escape",
    format: "2–4 players · supporting",
    cue: "Buy time. Middle. Ready again.",
    body: "When pulled wide to the backhand, avoid a desperation attack from the back foot. Send a high-margin dink to the middle, recover and handle the next ball.",
    test: "Score 0 for miss/forced attack, 1 for made but attackable/no recovery, and 2 for neutral plus next-ball success.",
  },
  {
    number: "07",
    title: "Punch, block or leave",
    format: "2–4 players · supporting",
    cue: "Match the answer to the ball.",
    body: "Punch a manageable volley, soften a low or jamming ball and leave a clearly long ball. Return to ready position for the next contact.",
    test: "Score the decision separately from the result; do not reward a tactically wrong shot that happened to land.",
  },
  {
    number: "08",
    title: "Preserve the weapons",
    format: "2–4 players · maintenance",
    cue: "Aggressive, not reckless.",
    body: "Finishing, targeting, shot accuracy and aggressive play won the short rallies. Maintain those strengths while the transition game catches up.",
    test: "In film, verify that improved kitchen progress does not reduce finishing quality or purposeful targeting.",
  },
];

const scorecard = [
  ["Kitchen arrival when serving", "80%+"],
  ["Serves in", "95%+"],
  ["Serves landing deep", "80%+"],
  ["Returns in", "95%+"],
  ["Returns landing deep", "80%+"],
  ["Shallow serves + returns", "Near zero"],
  ["Red-ball attacks", "Near zero"],
];

const groupDrills = {
  2: [
    ["Third → fifth → seventh", "30 min", "One player holds the kitchen while the server works forward. Advance only behind quality; split before every opponent contact.", "Track controlled kitchen arrivals out of 10."],
    ["Random fourth-shot read", "20 min", "The baseline player mixes drives, drops and high balls. The kitchen player calls keep back, dink or attack before contact.", "Score decision and execution separately."],
    ["Drive spacing + fifth", "20 min", "Feed 10 forehands and 10 backhands at 50–60% pace. Then volley the drive back so the hitter must play the fifth.", "Classify controlled, high, net and long/wide."],
    ["Wide-left escape", "15 min", "Feed one normal dink, one wide-left backhand and one recovery ball. Reset middle; no attack from the back foot.", "Two points only for neutral plus next-ball success."],
  ],
  3: [
    ["Two-up transition pressure", "20 min", "Two players hold the kitchen against one player working a half-court transition lane. Feed feet and middle; rotate after 10 rallies.", "Count neutral resets and balanced counters."],
    ["Hitter · feeder · observer", "18 min", "One player drives, one feeds and one records spacing, trajectory and balance. Rotate roles every six minutes.", "Observer gives one pattern, not a new cue every ball."],
    ["Fourth-shot triangle", "20 min", "One baseline player mixes third-shot drives and drops to two kitchen players. The receiver chooses the fourth while the partner recenters with them.", "Tag the read, placement and team movement."],
  ],
  4: [
    ["First-four kitchen race", "25 min", "Play normal doubles from the serve. The serving team’s separate goal is to establish both players at the kitchen before the rally ends.", "Record kitchen arrival across 10 serving rallies."],
    ["Fourth-shot decision doubles", "20 min", "Begin each rally with a mixed third shot. The receiving team chooses keep-back, dink or attack, then plays the point out.", "Review whether the fourth helped or hurt forward pressure."],
    ["Wide-left + partner coverage", "20 min", "Create one deliberate wide dink. The stretched player resets middle while the partner protects space and both recover before the next ball.", "Pass only when the team handles the following shot."],
    ["Constrained doubles", "20 min", "Play normally, but tag red-ball attacks, unrecovered pinches and movement through contact as decision errors.", "Keep the aggressive finish; remove the chaotic setup."],
  ],
};

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
  const headerRef = useRef(null);
  const menuRef = useRef(null);
  const closeMenu = () => setOpen(false);
  useEffect(() => {
    if (!open) return;
    const dismiss = (event) => {
      if (event.type === "keydown" && event.key === "Escape") {
        setOpen(false);
        menuRef.current?.focus();
      } else if (event.type === "pointerdown" && !headerRef.current?.contains(event.target)) setOpen(false);
    };
    document.addEventListener("keydown", dismiss);
    document.addEventListener("pointerdown", dismiss);
    return () => {
      document.removeEventListener("keydown", dismiss);
      document.removeEventListener("pointerdown", dismiss);
    };
  }, [open]);

  return (
    <header className="site-header" ref={headerRef}>
      <a className="brand" href="#plan" aria-label="Road to 4.0 home">
        Road to 4.0
      </a>
      <button
        className="menu-button"
        ref={menuRef}
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
        <a href="#technique" onClick={closeMenu}>Technique</a>
        <a href="#coaching" onClick={closeMenu}>Coaching</a>
        <a href="#film-room" onClick={closeMenu}>Film Room</a>
        <a href="#progress" onClick={closeMenu}>Progress</a>
        <a href="#tournament" onClick={closeMenu}>Tournament</a>
      </nav>
    </header>
  );
}

function TrainingBlock() {
  const items = [
    [PersonSimpleRun, "Primary focus", "Earn the kitchen", "Raise serving-team arrival from about 50% toward 80%. Hit, read, then get up."],
    [Crosshair, "Decision focus", "Fourth-shot choice", "Keep back, dink or attack according to the incoming third."],
    [Repeat, "Technique focus", "Drive contact spacing", "Stop reaching outside the comfortable strike zone. Begin at 50–60% pace."],
    [ShieldCheck, "Defensive focus", "Recenter before contact", "Recover with your partner instead of pinching middle and staying displaced."],
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

function CoachSnapshot() {
  const metrics = [
    ["~50%", "Kitchen arrival", "One-match serving baseline"],
    ["80%+", "Kitchen arrival", "Coach’s target"],
    ["~⅓", "All-up kitchen rallies", "Longer points became less favorable"],
    ["80%", "Deep serves + returns", "Next placement target"],
  ];

  return (
    <section className="coach-snapshot" aria-labelledby="coach-snapshot-title">
      <div className="coach-snapshot__intro">
        <p className="eyebrow">Latest coach review · one-match snapshot</p>
        <h2 id="coach-snapshot-title">The finish is working. Improve how often you get there.</h2>
        <p>Aggression, targeting and finishing controlled the short rallies. Forward pressure, fourth-shot selection and organized recovery are the clearest opportunities.</p>
      </div>
      <div className="coach-snapshot__metrics">
        {metrics.map(([value, label, note]) => (
          <article key={`${value}-${label}`}>
            <strong>{value}</strong>
            <span>{label}</span>
            <small>{note}</small>
          </article>
        ))}
      </div>
      <div className="coach-snapshot__takeaways">
        <p><Check size={18} weight="bold" aria-hidden="true" /><span><strong>Protect:</strong> finishing ability, shot accuracy, targeting and aggressive identity.</span></p>
        <p><ArrowRight size={18} weight="bold" aria-hidden="true" /><span><strong>Build next:</strong> kitchen progress, fourth-shot touch, drive spacing, recentering and depth.</span></p>
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
          <p className="hero-description">Your repeatable plan for a dependable 4.0 game.</p>
          <div className="hero-shortcuts"><a href="#drills">Choose a session <ArrowRight size={16} aria-hidden="true" /></a><a href="#technique">Learn a shot</a><a href="#coaching">Plan a lesson</a></div>
        </div>
      </div>

      <CoachSnapshot />

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
            <blockquote>Hit. Read.<br />Get up.</blockquote>
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
            <div><span>Kitchen arrival</span><strong>Log</strong></div>
            <div><span>Fourth-shot choice</span><strong>Log</strong></div>
            <div><span>High drives</span><strong>Log</strong></div>
            <div><span>Recovered before contact</span><strong>Log</strong></div>
            <a className="text-link" href="#film-room">Open Film Room <ArrowRight size={16} aria-hidden="true" /></a>
          </div>
        </aside>
      </div>
    </section>
  );
}

function DrillSessionGuide({ id, eyebrow, title, description, icon: Icon, blocks, duration, note, variant = "", hidden }) {
  return (
    <article hidden={hidden} className={`session-guide ${variant ? `session-guide--${variant}` : ""}`} id={id}>
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

function GroupDrillLibrary() {
  const [players, setPlayers] = useState(2);

  return (
    <section className="group-drills" aria-labelledby="group-drills-title">
      <div className="group-drills__header">
        <div>
          <p className="eyebrow">Focused drill menu</p>
          <h3 id="group-drills-title">How many players are on court?</h3>
          <p>Two players is the default. Use the larger-group versions when the extra people improve feeding, observation or partner movement.</p>
        </div>
        <div className="player-count" role="group" aria-label="Choose total players">
          {[2, 3, 4].map((count) => (
            <button type="button" key={count} aria-pressed={players === count} onClick={() => setPlayers(count)}>
              <strong>{count}</strong><span>{count === 2 ? "players · default" : "players"}</span>
            </button>
          ))}
        </div>
      </div>
      <div className="group-drill-grid" aria-live="polite">
        {groupDrills[players].map(([title, time, setup, measure], index) => (
          <article key={title}>
            <div className="group-drill-card__top"><span>{String(index + 1).padStart(2, "0")}</span><strong>{time}</strong></div>
            <h4>{title}</h4>
            <p>{setup}</p>
            <div><Check size={17} weight="bold" aria-hidden="true" /><span><strong>Measure:</strong> {measure}</span></div>
          </article>
        ))}
      </div>
    </section>
  );
}

function DrillsSection() {
  const [session, setSession] = useState(() => practiceFormats.some((format) => format.href === window.location.hash) ? window.location.hash : "#standard-partner");
  useEffect(() => {
    const reveal = () => {
      if (practiceFormats.some((format) => format.href === window.location.hash)) setSession(window.location.hash);
    };
    window.addEventListener("hashchange", reveal);
    return () => window.removeEventListener("hashchange", reveal);
  }, []);
  useEffect(() => {
    if (window.location.hash === session) document.getElementById(session.slice(1))?.scrollIntoView();
  }, [session]);
  return (
    <section id="drills" className="content-section drills-section">
      <div className="section-heading">
        <p className="eyebrow">Drill guides</p>
        <h2>Know the session before you step on court.</h2>
        <p>Choose one complete recipe. The standard session keeps the whole game healthy, the focus session attacks one weakness, and the ball machine supplies clean solo repetition.</p>
      </div>

      <nav className="practice-formats" aria-label="Choose a drill-session format">
        {practiceFormats.map(({ label, title, duration, body, href, icon: Icon }) => (
          <a href={href} key={title} aria-current={session === href ? "true" : undefined}>
            <div className="practice-format__top"><Icon size={25} weight="duotone" aria-hidden="true" /><span>{label}</span></div>
            <h3>{title}</h3>
            <strong>{duration}</strong>
            <p>{body}</p>
            <span className="practice-format__link">{session === href ? "Selected session" : "View session"} <ArrowDown size={15} weight="bold" aria-hidden="true" /></span>
          </a>
        ))}
      </nav>

      <div className="session-recipes">
        <DrillSessionGuide
          id="standard-partner"
          hidden={session !== "#standard-partner"}
          eyebrow="Weekly baseline"
          title="Current two-hour partner session"
          description="Use the latest coach review to turn this session into a direct response: earn the kitchen, improve the fourth, organize defense and lower the drives."
          icon={UsersThree}
          blocks={standardPartnerBlocks}
          duration="120 minutes"
          variant="partner"
          note={{
            title: "Keep the aggressive identity that already works.",
            body: "The purpose is to create more controlled finishing opportunities—not turn an attacking player passive.",
          }}
        />

        <DrillSessionGuide
          id="focus-session"
          hidden={session !== "#focus-session"}
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
          hidden={session !== "#ball-machine"}
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

      <div className="drill-library-heading" id="patterns">
        <p className="eyebrow">Patterns + decisions</p>
        <h3>Pick the drill by the problem—and the people available.</h3>
        <p>Start with a group-size plan below, then use the current-priority notes for cues and evidence. The <a href="#technique">shot workshop</a> holds step-by-step technique.</p>
      </div>

      <GroupDrillLibrary />

      <div className="priority-heading"><p className="eyebrow">Current priorities</p><h3>What each drill is trying to change.</h3></div>
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
  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      const target = document.getElementById(window.location.hash.slice(1));
      if (target?.getClientRects().length) target.scrollIntoView();
    });
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <>
      <AppHeader />
      <main>
        <PlanSection />
        <DrillsSection />
        <TechniqueSection />
        <CoachingSection />
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
