import './Instructor.css';

const expertise = [
  'Mentoring founders who build with AI',
  'Code review and quality assessment',
  'Debugging and problem solving',
  'Security in AI-generated code',
  'Full-stack fundamentals',
];

export default function Instructor() {
  return (
    <section className="instructor">
      <div className="container">
        <h2 className="section-title">MEET YOUR INSTRUCTOR</h2>
        <div className="instructor-content">
          <img
            src="/images/instructor.jpg"
            alt="Your instructor"
            className="instructor-photo"
          />
          <div className="instructor-bio">
            <h3>
              Kennis Maduka - Software Engineer & AI Automation Specialist
            </h3>
            <p>
              Our instructor has spent years helping founders, freelancers, and
              indie hackers who ship with AI but get stuck on engineering
              fundamentals. They built this program to teach those skills in
              plain language.
            </p>
            <div className="expertise-list">
              <h4>AREAS OF EXPERTISE:</h4>
              <ul>
                {expertise.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="social-links">
              <a
                href="https://x.com/k3nmaddy"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <span className="social-icon">𝕏</span> Twitter
              </a>
              <a
                href="https://www.linkedin.com/in/kennis-maduka/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <span className="social-icon">in</span> LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
