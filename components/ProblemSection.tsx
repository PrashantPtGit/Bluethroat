const before = [
  '8–12 hours a week lost to admin and spreadsheets',
  'Client bookings still over WhatsApp and paper',
  'Billing done manually — chasing invoices every month',
  'Scheduling chaos with no system of record',
  'Follow-ups missed, clients lost, revenue left behind',
];

const after = [
  'Bookings handled automatically — 24/7 online',
  'Payments collected at point of service',
  'Scheduling logic built into your platform',
  'Automated reminders sent to your clients',
  'You stay focused on your actual work',
];

export default function ProblemSection() {
  return (
    <section className="problem">
      <div className="container">
        <div className="section-head" data-reveal>
          <span className="eyebrow">The Problem</span>
          <h2>Your admin is software&apos;s job.</h2>
          <p>
            Booking, billing, scheduling, reporting, follow-ups. If you&apos;re still doing
            it in spreadsheets or WhatsApp, you&apos;re paying for software in hours instead
            of euros.
          </p>
        </div>
        <div className="problem__grid">
          {/* Before card */}
          <div className="problem__card problem__card--before glass" data-reveal>
            <div className="problem__card-eyebrow">
              <svg aria-hidden="true" width="14" height="14"><use href="#icon-x" /></svg>
              Right now
            </div>
            <div className="problem__card-stat">8–12hrs</div>
            <div className="problem__card-stat-label">lost to admin every week</div>
            <ul>
              {before.map((item) => (
                <li key={item}>
                  <svg aria-hidden="true" width="13" height="13"><use href="#icon-x" /></svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* After card */}
          <div className="problem__card problem__card--after" data-reveal>
            <div className="problem__card-eyebrow problem__card-eyebrow--green">
              <svg aria-hidden="true" width="14" height="14"><use href="#icon-check" /></svg>
              After your platform
            </div>
            <div className="problem__card-stat problem__card-stat--green">Same work</div>
            <div className="problem__card-stat-label">automated, always on</div>
            <ul>
              {after.map((item) => (
                <li key={item}>
                  <svg aria-hidden="true" width="13" height="13"><use href="#icon-check" /></svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
