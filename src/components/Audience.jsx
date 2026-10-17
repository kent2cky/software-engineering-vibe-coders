import './Audience.css';

const audiences = [
  {
    title: 'Software Developers',
    image: 'dev-at-laptop.png',
    points: [
      'Building with AI and need to understand the code',
      'Want to judge the quality and security of AI output',
      'Making technical decisions without a technical co-founder',
    ],
  },
  {
    title: 'Freelancers & Agency Builders',
    image: 'freelancer-working-laptop.jpg',
    points: [
      'Using AI to ship client projects faster',
      'Need the credibility to manage technical work',
      'Want to debug and improve AI code professionally',
    ],
  },
  {
    title: 'Career Switchers',
    image: 'small-business-owners.jpg',
    points: [
      'Learned to code through prompting rather than school',
      'Have gaps in foundational knowledge',
      'Building a portfolio for real opportunities',
    ],
  },
  {
    title: 'Indie Hackers',
    image: 'students-studying-together-medium-shot_23-2148913227.avif',
    points: [
      'Building side projects with AI tools',
      'Want products that scale and are easy to maintain',
      'Need to understand what they are shipping',
    ],
  },
];

export default function Audience() {
  return (
    <section className="audience">
      <div className="container">
        <h2 className="section-title">WHO THIS PROGRAM IS FOR</h2>
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
