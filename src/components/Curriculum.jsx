import './Curriculum.css'

const curriculumItems = [
  {
    number: 1,
    title: "Reading Code",
    description: "Learn to read AI-generated code line by line. Recognize common patterns like loops, conditionals, error handling, and async code. Understand what code does before you try to modify it."
  },
  {
    number: 2,
    title: "Debugging Fundamentals",
    description: "Stop re-prompting when things break. Use a debugger with breakpoints, step through code, inspect variables, read stack traces. Systematically isolate and fix bugs."
  },
  {
    number: 3,
    title: "Problem Decomposition",
    description: "Break vague feature requests into small, testable pieces. This is the skill that determines whether you can direct an AI tool well and fix it when it goes sideways."
  },
  {
    number: 4,
    title: "Version Control (Git)",
    description: "Master commits, branches, merges, and conflict resolution. Write meaningful commit messages. Use GitHub/GitLab workflows (PRs, code review). Manage your project professionally."
  },
  {
    number: 5,
    title: "Data Structures & Algorithms Basics",
    description: "Understand time/space complexity enough to pick the right structure (array vs. hash map vs. list). Reason about performance without competitive programming math."
  },
  {
    number: 6,
    title: "Testing",
    description: "Write unit tests and understand what 'good coverage' means. Learn test-driven thinking: define expected behavior before and while writing code. Verify AI output actually works."
  },
  {
    number: 7,
    title: "Understanding the Full Stack",
    description: "Learn what's actually happening in your framework. How HTTP requests work, how databases query, how deployment works—at a basic level. Move beyond copy-paste."
  },
  {
    number: 8,
    title: "System Design Basics",
    description: "Structure a project professionally. Folder organization, separation of concerns. Understand APIs, databases, and how pieces communicate. Think architecturally."
  },
  {
    number: 9,
    title: "Security Basics",
    description: "Input validation, SQL injection, XSS, secrets management (don't hardcode API keys). AI-generated code frequently has security holes if unreviewed. Learn to spot them."
  },
  {
    number: 10,
    title: "Code Review & Documentation",
    description: "Evaluate whether AI-suggested code is idiomatic, efficient, maintainable. Know when to reject/rewrite AI output. Write clear READMEs and meaningful comments."
  }
]

export default function Curriculum() {
  return (
    <section className="curriculum">
      <div className="container">
        <h2 className="section-title">THE 10 SKILLS YOU'LL MASTER</h2>
        <div className="curriculum-grid">
          {curriculumItems.map(item => (
            <div key={item.number} className="curriculum-item">
              <h4>{item.number}. {item.title}</h4>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
        <div className="curriculum-cta">
          <button className="btn btn-secondary">ENROLL NOW</button>
        </div>
      </div>
    </section>
  )
}
