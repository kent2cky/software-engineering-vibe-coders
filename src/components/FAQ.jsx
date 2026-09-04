import './FAQ.css'

const faqs = [
  {
    question: "What will I be able to do after this program?",
    answer: "You'll be able to design, deploy, and manage production-grade AWS infrastructure. You'll understand how to architect for scalability, security, and cost-efficiency. Most importantly, you'll be confident in interviews and real-world cloud infrastructure projects. Many graduates have landed cloud engineering roles within 30 days."
  },
  {
    question: "What's the focus of this program?",
    answer: "This is a hands-on, practical program focused on real-world AWS usage. We don't waste time on theoretical lectures. You'll build actual infrastructure, work with real AWS services, complete 20+ labs, and deploy a capstone project. By the end, your GitHub portfolio will demonstrate cloud architecture expertise."
  },
  {
    question: "How will I know if this program is working?",
    answer: "Success metrics include: passing AWS certification exams, getting hired for cloud roles, successfully deploying production applications, reducing infrastructure costs, and joining our community of 2,000+ employed graduates earning $80K-$200K+ in cloud roles."
  },
  {
    question: "How much does this program cost?",
    answer: "This intensive 12-week program is available for 50,000 naira. We believe cloud education should be accessible. Flexible payment plans are available. Compared to traditional university programs, this is exceptional value with hands-on AWS experience and certification prep included."
  }
]

export default function FAQ() {
  return (
    <section className="faq">
      <div className="container">
        <h2 className="section-title">FREQUENTLY ASKED QUESTIONS</h2>
        <div>
          {faqs.map((faq, idx) => (
            <div key={idx} className="faq-item">
              <h4>{faq.question}</h4>
              <p>{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
