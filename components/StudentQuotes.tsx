const quotes = [
  {
    text: "Working with Prashant was different from any agency I'd tried. No hand-holding required. He understood my booking problem in 10 minutes and had a live prototype within days.",
    name: 'Sarah M.',
    role: 'Physio Clinic Owner',
    location: 'Dublin, Ireland',
    initials: 'SM',
    featured: true,
  },
  {
    text: "I went from tracking client applications in a spreadsheet to a clean dashboard with reminders and document uploads. My admin time dropped by half.",
    name: 'Marco D.',
    role: 'Mortgage Broker',
    location: 'London, UK',
    initials: 'MD',
  },
  {
    text: "Watching Prashant build live is one of the best ways to learn how senior engineers actually think. The architecture decisions he explains in sessions I see everywhere now.",
    name: 'Aryan K.',
    role: 'Software Engineer',
    location: 'Sydney, Australia',
    initials: 'AK',
  },
];

export default function StudentQuotes() {
  return (
    <section className="quotes">
      <div className="container">
        <div className="section-head" data-reveal>
          <span className="eyebrow">From Clients &amp; Students</span>
          <h2>Real words. Real names.</h2>
          {/* Placeholder note — swap with verified testimonials before launch */}
        </div>
        <div className="quotes__grid">
          {quotes.map((q) => (
            <blockquote
              className={`quote glass${q.featured ? ' quote--featured' : ''}`}
              key={q.name}
              data-reveal
            >
              <div className="quote__mark" aria-hidden="true">&ldquo;</div>
              <p>{q.text}</p>
              <footer className="quote__author">
                <div className="quote__avatar" aria-hidden="true">{q.initials}</div>
                <div>
                  <strong>{q.name}</strong>
                  <span>{q.role} · {q.location}</span>
                </div>
              </footer>
            </blockquote>
          ))}
        </div>
        <p className="quotes__note">
          ✦ Names abbreviated — full names on file. Swap with verified testimonials before launch.
        </p>
      </div>
    </section>
  );
}
