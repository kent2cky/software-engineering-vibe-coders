import './FAQ.css'

const faqs = [
  {
    question: "I build everything with AI. Is this for me?",
    answer: "Yes. The program is designed for people who can already build quickly with AI and want to read, evaluate, debug, and improve the code it produces."
  },
  {
    question: "Do I need to know how to code already?",
    answer: "No. We start with the basics of reading code, debugging, and how software fits together. If you have built anything with AI, you are ready."
  },
  {
    question: "I'm a non-technical founder building an MVP. Will this help?",
    answer: "Yes. You will learn to evaluate code quality, spot security issues, talk with engineers more effectively, and iterate on your product without starting over."
  },
  {
    question: "I already write code. Is it still worth it?",
    answer: "If you hit walls with debugging or maintenance, or you sense gaps in your fundamentals, this program fills them in."
  },
  {
    question: "Does this teach a specific language or framework?",
    answer: "No. The skills apply to Python, JavaScript, Go, or whatever you use, and examples span several languages."
  },
  {
    question: "How much time per week do I need?",
    answer: "Plan on 5 to 7 hours a week for lessons, labs, and practice. It is a 12-week intensive program delivered online through video lessons and interactive labs."
  },
  {
    question: "What do I get at the end?",
    answer: "You become Expert Ready and receive a Smartcore Certificate of Completion, plus real production systems you have built to show employers or clients."
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
