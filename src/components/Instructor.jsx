import './Instructor.css'

const expertise = [
  "AWS Architecture & Design Patterns",
  "Infrastructure as Code (CloudFormation, Terraform)",
  "DevOps & CI/CD Pipelines",
  "Cloud Security & Compliance",
  "Cost Optimization Strategies",
  "Multi-region & Disaster Recovery",
  "Mentoring 500+ Cloud Professionals"
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
            <h3>Smartcore Cloud Mentor</h3>
            <p className="title">Cloud Infrastructure Expert</p>
            <p>Our lead instructor brings years of cloud infrastructure experience, having architected and deployed enterprise-grade AWS solutions for companies and individuals across healthcare, fintech, e-commerce, and SaaS industries.</p>
            <p>With a proven track record of building scalable, secure, and cost-optimized cloud systems, they're passionate about demystifying cloud computing and helping ambitious professionals master AWS from first principles.</p>
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
