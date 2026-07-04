const JOB_TITLE = "Software Engineer, New Grad";
const JOB_TAGS = ["Python", "REST APIs", "AWS", "Distributed systems"];

const BEFORE_BULLETS = [
  "Responsible for various software tasks",
  "Worked on team projects using programming",
  "Good communication and problem-solving skills",
];

const AFTER_BULLETS = [
  "Built Python REST APIs serving 2M+ daily requests on AWS",
  "Designed distributed microservices cutting latency 60%",
  "Led squad of 6 delivering backend features ahead of schedule",
];

const FIXES = [
  { before: "vague duties", after: "Python + REST APIs + AWS" },
  { before: "generic teamwork", after: "distributed systems metrics" },
  { before: "soft skills only", after: "quantified leadership" },
];

export default function DemoTabs() {
  return (
    <div className="demo-unified">
      <div className="demo-unified-panel">
        <p className="demo-flow-job-title">{JOB_TITLE}</p>
        <div className="demo-jd-tags">
          {JOB_TAGS.map((tag) => (
            <span key={tag} className="demo-jd-tag">
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="demo-unified-connector" aria-hidden>
        <span className="demo-flow-arrow-inline">↓</span>
      </div>

      <div className="demo-unified-panel demo-unified-panel--fixes">
        <div className="demo-score-row">
          <span className="demo-score-pill demo-score-pill--weak">34% match</span>
          <span className="demo-flow-arrow-inline" aria-hidden>
            →
          </span>
          <span className="demo-score-pill demo-score-pill--strong">89% match</span>
        </div>
        <ul className="demo-fix-list">
          {FIXES.map((fix) => (
            <li key={fix.before} className="demo-fix-item">
              <span className="demo-fix-before">{fix.before}</span>
              <span className="demo-flow-arrow-inline" aria-hidden>
                →
              </span>
              <span className="demo-fix-after">{fix.after}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="demo-unified-connector" aria-hidden>
        <span className="demo-flow-arrow-inline">↓</span>
      </div>

      <div className="demo-unified-panel demo-unified-panel--resume">
        <div className="demo-compare demo-compare--stacked">
          <div className="demo-compare-col">
            <span className="demo-compare-label">Before</span>
            <ul className="demo-resume-bullets">
              {BEFORE_BULLETS.map((b) => (
                <li key={b} className="demo-resume-bullet demo-resume-bullet--weak">
                  <span className="demo-bullet-dot" aria-hidden />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="demo-compare-col demo-compare-col--after">
            <span className="demo-compare-label demo-compare-label--after">After</span>
            <ul className="demo-resume-bullets">
              {AFTER_BULLETS.map((b) => (
                <li key={b} className="demo-resume-bullet">
                  <span className="demo-bullet-dot" aria-hidden />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
