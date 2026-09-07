import './PainPoints.css'

const painPoints = [
  "AI generates code that looks good but has security holes, performance issues, or doesn't actually work",
  "You can't debug—every problem means going back to prompting instead of understanding and fixing",
  "You're stuck re-writing AI code because you don't understand what it's doing or how to modify it",
  "You feel like a fraud because you're not sure if you're actually engineering or just using a tool well",
  "You can't evaluate if code is maintainable, scalable, or follows best practices",
  "Building features is fast, but maintaining and improving the code is painful",
  "You can't spot security vulnerabilities in AI-generated code before it ships",
  "No way to improve without becoming a 'real programmer'—or so you think"
]

const notFor = [
  "You think being a founder/builder with AI means you don't need engineering skills",
  "You're not willing to invest time learning fundamentals alongside using AI",
  "You want to stay only at the prompting level and never understand the code",
  "You believe engineering is gatekept and not for you"
]

export default function PainPoints() {
  return (
    <section className="pain-points">
      <div className="container">
        <h3>THE REAL PROBLEMS BUILDERS FACE</h3>
        <ul>
          {painPoints.map((point, idx) => (
            <li key={idx}>{point}</li>
          ))}
        </ul>
        <div className="disclaimer">
          <h4>⚠️ THIS PROGRAM IS NOT FOR YOU IF:</h4>
          <ul>
            {notFor.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
