import './Curriculum.css'

const curriculumItems = [
  {
    number: 1,
    title: "Reading Code",
    description: "Read AI-generated code line by line and recognize common patterns such as loops, conditionals, error handling, and async code. Know what code does before you change it."
  },
  {
    number: 2,
    title: "Debugging Fundamentals",
    description: "Replace re-prompting with a repeatable process. Use breakpoints, step through code, inspect variables, and read stack traces to isolate and fix bugs."
  },
  {
    number: 3,
    title: "Problem Decomposition",
    description: "Break vague feature requests into small, testable pieces. This is what lets you direct an AI tool well and recover when it goes off track."
  },
  {
    number: 4,
    title: "Version Control (Git)",
    description: "Work with commits, branches, merges, and conflict resolution. Write clear commit messages and use pull requests and code review the way professional teams do."
  },
  {
    number: 5,
    title: "Data Structures & Algorithms Basics",
    description: "Understand time and space complexity well enough to choose the right structure, such as an array or a hash map, and to reason about performance."
  },
  {
    number: 6,
    title: "Testing",
    description: "Write unit tests, understand what good coverage means, and define expected behavior before you write code. Confirm that AI output actually works."
  },
  {
    number: 7,
    title: "Understanding the Full Stack",
    description: "Learn how HTTP requests, database queries, and deployments work at a practical level, so you can move beyond copy and paste."
  },
  {
    number: 8,
    title: "System Design Basics",
    description: "Organize a project with sound structure and separation of concerns. Understand how APIs, databases, and services communicate."
  },
  {
    number: 9,
    title: "Security Basics",
    description: "Cover input validation, SQL injection, XSS, and secrets management. AI-generated code often contains security gaps, and you will learn to find them."
  },
  {
    number: 10,
    title: "Code Review & Documentation",
    description: "Judge whether AI-suggested code is idiomatic, efficient, and maintainable, and know when to rewrite it. Write clear READMEs and useful comments."
  }
]

export default function Curriculum() {
  return (
    <section className="curriculum">
      <div className="container">
        <h2 className="section-title">THE 10 SKILLS YOU'LL BUILD</h2>
        <div className="curriculum-grid">
          {curriculumItems.map(item => (
            <div key={item.number} className="curriculum-item">
              <h4>{item.number}. {item.title}</h4>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
        <div className="curriculum-cta">
          <a href="https://chat.whatsapp.com/L6Ntto3LKv2AZquxjSIUvn" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">SECURE YOUR SEAT HERE</a>
        </div>
      </div>
    </section>
  )
}
