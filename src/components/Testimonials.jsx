import './Testimonials.css';
import { trackLead } from '../utils/pixel';

const testimonials = [
  {
    quote:
      "I built my MVP with Claude, but after launch I couldn't debug or improve it. This course taught me to read what the AI wrote. Now I iterate on my product instead of rebuilding it each time.",
    author: 'Chinwe Okala',
    role: 'Founder',
  },
  {
    quote:
      "As a freelancer, I learned to review code, spot security issues, and deliver properly engineered work. My rates went up 40%, and I'm far more confident with clients.",
    author: 'Paul Edeogu',
    role: 'Freelance Developer',
  },
  {
    quote:
      'I built everything with ChatGPT until things broke and I had no idea how to debug. The course taught me the fundamentals without making me feel behind.',
    author: 'Ebuka Obidi',
    role: 'Software Developer',
  },
];

export default function Testimonials() {
  return (
    <section className="testimonials">
      <div className="container">
        <h2 className="section-title">WHAT BUILDERS SAY</h2>
        <div className="testimonials-grid">
          {testimonials.map((test, idx) => (
            <div key={idx} className="testimonial">
              <p>{test.quote}</p>
              <p className="testimonial-author">{test.author}</p>
              <p className="testimonial-role">{test.role}</p>
            </div>
          ))}
        </div>
        <div className="testimonials-cta">
          <a href="https://smartcore.vmerlabs.com" target="_blank" rel="noopener noreferrer" onClick={() => trackLead('testimonials')} className="btn btn-secondary">REGISTER NOW</a>
        </div>
      </div>
    </section>
  );
}
