import './Audience.css';

const audiences = [
  {
    title: '#1 Software Developers',
    image: 'dev-at-laptop.png',
    points: [
      'Building your idea with AI, need to understand the code',
      'Want to evaluate AI output quality and security',
      'Need to make technical decisions confidently',
      'Building without a technical co-founder',
    ],
  },
  {
    title: '#2 Freelancers & Agency Builders',
    image: 'freelancer-working-laptop.jpg',
    points: [
      'Using AI to ship client projects faster',
      'Need credibility to manage technical work',
      'Want to debug and improve AI code professionally',
      "Building a reputation as a 'real engineer'",
    ],
  },
  {
    title: '#3 Career Switchers via AI',
    image: 'small-business-owners.jpg',
    points: [
      'Learned coding through prompting, not school',
      'Have gaps in foundational knowledge',
      "Want to level up beyond 'it works'",
      'Building a portfolio for real opportunities',
    ],
  },
  {
    title: '#4 Early-Stage Indie Hackers',
    image: 'students-studying-together-medium-shot_23-2148913227.avif',
    points: [
      'Building side projects with AI tools',
      'Want products that scale and maintain',
      'Learning as you build in public',
      "Need to understand what you're shipping",
    ],
  },
];

export default function Audience() {
  return (
    <section className="audience">
      <div className="container">
        <h2 className="section-title">THIS PROGRAM IS FOR BUILDERS USING AI</h2>
        <div className="audience-grid">
          {audiences.map((aud, idx) => (
            <div key={idx} className="audience-card">
              <img
                src={`/images/${aud.image}`}
                alt={aud.title}
                className="audience-image"
              />
              <h4>{aud.title}</h4>
              <ul>
                {aud.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
