import './Testimonials.css'

const testimonials = [
  {
    quote: "I had zero cloud experience. After this program, I deployed my first production application on AWS and got promoted to Senior DevOps Engineer. The hands-on labs were game-changing.",
    author: "Chioma Udeh",
    role: "Software Engineer → DevOps Engineer"
  },
  {
    quote: "This is exactly what I needed to transition from on-premise infrastructure. The instructor explained complex concepts simply. I passed my AWS SAA exam on the first try and landed a cloud architect role.",
    author: "Ahmed Hassan",
    role: "Systems Administrator → Cloud Architect"
  },
  {
    quote: "As a startup founder, this program saved me thousands in infrastructure costs. I learned how to optimize my architecture and now our AWS bill is 60% lower. Plus, I got AWS certified!",
    author: "Zainab Ibrahim",
    role: "SaaS Founder & AWS Certified"
  }
]

export default function Testimonials() {
  return (
    <section className="testimonials">
      <div className="container">
        <h2 className="section-title">SUCCESS STORIES FROM OUR COMMUNITY</h2>
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
          <button className="btn btn-secondary">RESERVE MY SEAT</button>
        </div>
      </div>
    </section>
  )
}
