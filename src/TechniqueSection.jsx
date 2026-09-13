import { useEffect, useState } from "react";
import { ArrowRight, CaretDown } from "@phosphor-icons/react";

const sliceSource = "https://www.selkirk.com/blogs/pickleball-education/when-and-how-to-execute-aggressive-dinks-tips-from-pro-catherine-parenteau";
const footworkSource = "https://www.selkirk.com/blogs/pickleball-education/dinking-in-pickleball-the-shot-that-changes-everything-6-keys-to-success";

const shots = [
  {
    id: "punch-volley", title: "Punch volley", category: "Hands", cue: "Short punch. Ready again.",
    use: "Use on a manageable volley around net height or higher. If it dips low or jams you, soften and reset.",
    steps: ["Set your paddle in front with a stable wrist and a comfortable, balanced stance outside the kitchen.", "Meet the ball ahead of your body with a short forward action. Use its incoming pace; avoid pulling the paddle behind you.", "Aim through a generous target, then return immediately to ready position. Keep your momentum out of the kitchen."],
    drill: "Partner feeds 10 manageable volleys to your backhand, then 10 to your forehand. Switch roles. Next, alternate sides at modest pace; finish with a live rally after each feed.",
    measure: "Log clean contacts out of 20 and whether you were ready for the next ball. Increase feed speed only when contact stays controlled.",
    miss: "Late contact: shorten the preparation. Balls sailing: check the face angle and reduce the punch. Paddle stranded: shorten the finish.",
    coach: "Check my grip, contact point and punch length. Show me when to punch versus block or reset.",
    source: ["OnCourt OffCourt · volley drill manual", "https://oncourtoffcourt.com/content/pickleball-tutor-drill-manual-short.pdf"],
  },
  {
    id: "drive-spacing", title: "Drive contact spacing", category: "Drives", cue: "Let it enter the strike zone.",
    use: "Use a drive when the incoming ball and your balance give you a comfortable strike. The current coaching diagnosis is that reaching too far away lifts the ball.",
    steps: ["Prepare early and adjust your feet so the ball can enter the comfortable strike zone your coach showed you.", "Begin at 50–60% pace. Avoid reaching away from your body; find clean contact and drive through the ball without trying to manufacture extra power.", "Recover for the next shot. Judge the drive by whether it stays controlled and produces a manageable fifth—not merely whether it lands in."],
    drill: "Use a repeatable partner or machine feed. Hit 10 forehands, then 10 backhands, classifying every result. Next, have a partner volley the drive back so you must handle the fifth shot.",
    measure: "Log controlled, high-and-attackable, net and long/wide. Increase pace or feed variation only when comfortable contact becomes repeatable.",
    miss: "Ball lifts: check whether contact drifted outside the comfortable strike zone. Reaching or falling: reset the feet before changing the swing. Do not add a new mechanical cue without your coach.",
    coach: "Show me the exact spacing you want on both sides. Film one side view and one rear view so I can see forward and lateral distance.",
    source: ["Current coaching cue", "#coaching"],
  },
  {
    id: "backhand-slice", title: "Backhand slice dink", category: "Dinking", cue: "Stable face. Gentle cut.",
    use: "A controlled backhand dink with backspin; start with comfortable feeds before adding width.",
    steps: ["Create space on the backhand side and set a slightly open paddle face.", "Keep the wrist steady and guide the paddle from the shoulder, gently undercutting the ball with a small forward swing.", "Give the ball enough lift to clear the net. Add placement only while balanced."],
    drill: "Start crosscourt with 10 cooperative dinks. Then alternate a middle target and a wider target for three short rounds, switching feeding roles. Count neutral balls separately from popups.",
    measure: "Record your longest controlled rally and neutral balls out of 20. Make the feed wider only when you can recover before the next shot.",
    miss: "Net misses: check lift and contact spacing. Popups: check an overly open face or excessive cut.",
    coach: "Check my paddle angle, shoulder motion and backhand spacing. Compare my comfortable dink with my stretched dink.",
    source: ["Catherine Parenteau · slice dink guidance", sliceSource],
  },
  {
    id: "forehand-slice", title: "Forehand slice dink", category: "Dinking", cue: "Small swing. Soft landing.",
    use: "Practise a controlled forehand dink with gentle backspin, initially straight ahead.",
    steps: ["Move into comfortable forehand spacing with the paddle in front.", "Use a slightly open face, a quiet wrist and a compact shoulder-led motion to brush under the ball.", "Guide the ball toward a broad kitchen target. Keep the finish short enough to recover."],
    drill: "Play 10 straight-on cooperative dinks, then 10 crosscourt. Alternate a neutral dink and a gentle slice from similar preparation. Swap roles and compare control.",
    measure: "Track neutral balls out of 20 for each direction. Keep the slice only if its control holds up against your ordinary dink.",
    miss: "Floating balls: reduce face opening or swing size. Net misses: check for a downward chop.",
    coach: "Check my grip and swing path on this side. Show me a repeatable slice without excessive wrist action.",
    source: ["Catherine Parenteau · slice dink guidance", sliceSource],
  },
  {
    id: "wide-left", title: "Wide-left dink + recovery", category: "Footwork", cue: "Reach. Neutralize. Recover.",
    use: "For a right-handed player pulled wide on the left: handle the backhand, buy time, then restore coverage with your partner.",
    steps: ["Read the width early. Move your feet to create space and stay balanced; let a difficult ball bounce when needed.", "If stretched, play a soft, high-margin dink toward the middle of the kitchen. Avoid forcing a sharp angle while off balance.", "Recover toward the position that covers the next shot with your partner. Set your feet before the opponent hits; do not automatically retreat into midcourt."],
    drill: "Partner feeds one comfortable dink, one wide-left dink, then a ball toward your recovery position. Neutralize the wide ball toward the middle and play all three. Swap after 10 sequences; add random width later.",
    measure: "Count sequences where the wide ball stays neutral AND you handle the next ball. A made dink without recovery is only half the job.",
    miss: "Still stranded: check how early you moved and how much time your return bought. Middle exposed: review your recovery position together with your partner.",
    coach: "Film my feet. Check whether I reach late, over-lunge, drift backward or recover too far toward the center.",
    source: ["Selkirk · dinking footwork fundamentals", footworkSource],
  },
];

export function TechniqueSection() {
  const [filter, setFilter] = useState("All shots");
  const [openShot, setOpenShot] = useState("punch-volley");
  useEffect(() => {
    const reveal = () => {
      const id = window.location.hash.slice(1);
      if (shots.some((shot) => shot.id === id)) {
        setFilter("All shots");
        setOpenShot(id);
        requestAnimationFrame(() => document.getElementById(id)?.scrollIntoView());
      }
    };
    reveal();
    window.addEventListener("hashchange", reveal);
    return () => window.removeEventListener("hashchange", reveal);
  }, []);
  return (
    <section id="technique" className="content-section technique-section">
      <div className="section-heading">
        <p className="eyebrow">Shot workshop</p>
        <h2>A cue. A drill. A better next ball.</h2>
        <p>Start here when you know the shot you want to improve. These practice templates turn technique into reps you can take to your coach.</p>
      </div>
      <div className="shot-filters" role="group" aria-label="Filter shot guides">
        {["All shots", "Drives", "Hands", "Dinking", "Footwork"].map((label) => <button key={label} type="button" aria-pressed={filter === label} onClick={() => setFilter(label)}>{label}</button>)}
      </div>
      <div className="shot-guides">
        {shots.filter((shot) => filter === "All shots" || shot.category === filter).map((shot) => (
          <article className="shot-guide" key={shot.id} id={shot.id}>
            <h3><button type="button" aria-expanded={openShot === shot.id} aria-controls={`${shot.id}-body`} onClick={() => setOpenShot(openShot === shot.id ? null : shot.id)}>
              <span><small>{shot.category}</small>{shot.title}</span><CaretDown size={22} aria-hidden="true" />
            </button></h3>
            <div id={`${shot.id}-body`} hidden={openShot !== shot.id} className="shot-body">
              <div className="shot-method"><p className="shot-cue">{shot.cue}</p><p>{shot.use}</p><h4>How to hit it</h4><ol>{shot.steps.map((step) => <li key={step}>{step}</li>)}</ol><h4>Common misses</h4><p>{shot.miss}</p></div>
              <div className="shot-practice"><h4>Take it to the court</h4><p>{shot.drill}</p><h4>Measure your reps</h4><p>{shot.measure}</p><h4>Ask your coach</h4><p>{shot.coach}</p><a href={shot.source[1]} {...(shot.source[1].startsWith("http") ? { target: "_blank", rel: "noreferrer" } : {})}>{shot.source[0]} {shot.source[1].startsWith("http") ? "↗" : "→"}</a></div>
            </div>
          </article>
        ))}
      </div>
      <p className="workshop-note">Drill sequences and scoring are suggested practice templates, not official rating tests. Technique references are linked in each guide. Slice guides here cover kitchen dinks.</p>
    </section>
  );
}

export function CoachingSection() {
  const priorities = [
    ["Current · primary", "Kitchen arrival", "Review the third, fifth and seventh. Show me when the ball earned a step and when I rushed or stayed back.", "#standard-partner"],
    ["Current · decision", "Fourth-shot selection", "Mix third-shot drives, drops and high balls. Check whether I correctly keep back, dink or attack.", "#patterns"],
    ["Current · technique", "Drive contact spacing", "Confirm the comfortable strike zone on both sides and why reaching away is lifting my drive.", "#drive-spacing"],
    ["Current · defense", "Recenter before contact", "Film my movement after I pinch middle. Check whether I restore coverage and split before the next hit.", "#patterns"],
    ["Current · placement", "Serve + return depth", "Preserve my accuracy while moving more balls from midcourt into the back third.", "#standard-partner"],
    ["Hands", "Punch volley + ready position", "Check my contact point and compact finish, then test whether I am ready for the next ball.", "#punch-volley"],
    ["Dinking", "Slice on both sides", "Check backhand and forehand separately: grip, face angle, spacing and a stable wrist.", "#backhand-slice"],
    ["Footwork", "Wide-left dink + recovery", "Feed the wide backhand, then the next ball. Check my middle reset and recovery position.", "#wide-left"],
    ["Develop next", "Rolls + backhand flick", "Check mechanics and attackable ball height once the neutral dink and counter are dependable.", "#ball-machine"],
  ];
  return (
    <section id="coaching" className="content-section coaching-section">
      <div className="section-heading"><p className="eyebrow">Coaching · every two weeks</p><h2>Bring a question to every lesson.</h2><p>Choose one primary priority from this list, with one supporting shot if time allows. Let recent footage decide what comes first.</p></div>
      <div className="coaching-agenda">Bring 2–3 clips <ArrowRight aria-hidden="true" /> Diagnose one pattern <ArrowRight aria-hidden="true" /> Leave with a drill + cue</div>
      <div className="coaching-priorities">{priorities.map(([label, title, body, href], index) => <a href={href} key={title}><span className="coaching-number">0{index + 1}</span><div><small>{label}</small><h3>{title}</h3><p>{body}</p></div><ArrowRight size={20} aria-hidden="true" /></a>)}</div>
      <p className="workshop-note">Before leaving: agree on a measurable practice target, record the corrected motion with permission, and ask what the coach will retest at the next lesson.</p>
    </section>
  );
}
