import './Testimonials.css'

const testimonials = [
  {
    quote: "I built my startup MVP with Claude, but after shipping I realized I couldn't debug or improve the code. This course taught me to actually read and understand what AI generated. Now I can iterate on my product instead of re-building from scratch each time.",
    author: "Sarah Chen",
    role: "Founder → Technical Founder"
  },
  {
    quote: "As a freelancer, I was embarrassed that I didn't 'really know' programming—I just worked with AI. This course reframed that for me. I learned to review code professionally, spot security issues, and deliver actual engineered solutions. My rates went up 40% and I have confidence now.",
    author: "Marcus Johnson",
    role: "Freelancer building with AI → Professional Developer"
  },
  {
    quote: "I built everything with ChatGPT but hit a wall when things broke. I didn't know how to debug. This course taught me the fundamentals without making me feel stupid for not knowing them. Now I can actually engineer products instead of just prompting them into existence.",
    author: "Alex Rodriguez",
    role: "Indie Hacker → Competent Builder"
  }
]

export default function Testimonials() {
  return (
    <section className="testimonials">
      <div className="container">
        <h2 className="section-title">BUILDERS LIKE YOU</h2>
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
          <button className="btn btn-secondary">ENROLL NOW</button>
        </div>
      </div>
    </section>
  )
}
