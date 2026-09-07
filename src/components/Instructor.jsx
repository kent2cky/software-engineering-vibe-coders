import './Instructor.css'

const expertise = [
  "Mentoring non-technical founders building with AI",
  "Code review and quality assessment",
  "Debugging and problem-solving strategies",
  "Security in AI-generated code",
  "Full-stack fundamentals",
  "Making engineering accessible (not gatekept)",
  "Mentoring 100+ AI-first builders"
]

export default function Instructor() {
  return (
    <section className="instructor">
      <div className="container">
        <h2 className="section-title">MEET YOUR INSTRUCTOR</h2>
        <div className="instructor-content">
          <div className="instructor-photo">
            [INSTRUCTOR PHOTO PLACEHOLDER]
          </div>
          <div className="instructor-bio">
            <h3>Engineer & AI-Builder Mentor</h3>
            <p className="title">Expert in Teaching Engineering Without Gatekeeping</p>
            <p>Our instructor has spent years working with builders—founders, freelancers, and indie hackers—who are shipping products with AI but hit walls because they lack engineering fundamentals. They've seen the struggles firsthand and built this course to solve them.</p>
            <p>They believe being a non-technical founder building with AI doesn't make you less of an engineer—it makes you a modern engineer. Their mission is to teach the skills you actually need to succeed, in language that makes sense, without the gatekeeping or jargon.</p>
            <div className="expertise-list">
              <h4>EXPERTISE AREAS:</h4>
              <ul>
                {expertise.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
