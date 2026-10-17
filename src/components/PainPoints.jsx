import './PainPoints.css'

const painPoints = [
  "AI-generated code looks right but has security holes, performance problems, or simply doesn't work",
  "Every bug sends you back to prompting instead of fixing the cause",
  "You rewrite AI code because you can't tell what it does or how to change it",
  "You can't judge whether code is maintainable, scalable, or secure",
  "Features ship fast, but maintaining them gets harder each week"
]

const notFor = [
  "You believe AI means you don't need engineering skills",
  "You're unwilling to invest time in the fundamentals",
  "You want to stay at the prompting level and never read the code"
]

export default function PainPoints() {
  return (
    <section className="pain-points">
      <div className="container">
        <h3>COMMON PROBLEMS FOR BUILDERS USING AI</h3>
        <ul>
          {painPoints.map((point, idx) => (
            <li key={idx}>{point}</li>
          ))}
        </ul>
        <div className="disclaimer">
          <h4>THIS PROGRAM MAY NOT BE FOR YOU IF:</h4>
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
