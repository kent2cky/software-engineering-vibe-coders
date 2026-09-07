import './FAQ.css'

const faqs = [
  {
    question: "I build everything with AI. Is this for me?",
    answer: "Absolutely. This is specifically for you. You can build products quickly, but without engineering fundamentals, you're limited. This course teaches you to read, evaluate, debug, and improve AI code. You'll move from 'it works' to 'it's engineered well.'"
  },
  {
    question: "Do I need to know how to code already?",
    answer: "No. We start from the fundamentals—reading code, debugging, understanding how things work. You don't need to be a traditional programmer. If you've built anything with AI, you're in the right place."
  },
  {
    question: "I'm a non-technical founder building an MVP. Will this help?",
    answer: "Yes. Founders especially need this. You need to evaluate code quality, spot security issues, talk confidently with engineers, and iterate on your product without re-prompting from scratch every time. This course teaches exactly that."
  },
  {
    question: "What if I'm already writing code (with or without AI)?",
    answer: "If you've been building with AI but hitting walls—can't debug, can't maintain code, don't understand what you built—this fills those gaps. If you code traditionally but know something's missing in your fundamentals, this level-sets your knowledge."
  },
  {
    question: "Does this teach me a specific language or framework?",
    answer: "No. We teach principles that work everywhere. The skills—reading code, debugging, version control, security, system design—apply to Python, JavaScript, Go, or whatever you use. Examples are in multiple languages."
  },
  {
    question: "How much time per week do I need?",
    answer: "Plan for 5-7 hours per week of video, labs, and practice. It's self-paced, so you can go faster or slower. Live sessions are optional but recommended (1-2 hours weekly)."
  },
  {
    question: "What do I get at the end?",
    answer: "A certificate of completion, a hands-on portfolio project you can show employers or clients, and most importantly—real engineering skills. Plus access to our community of builders who get it."
  }
]

export default function FAQ() {
  return (
    <section className="faq">
      <div className="container">
        <h2 className="section-title">QUESTIONS? WE'VE GOT ANSWERS</h2>
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
