import './PainPoints.css'

const painPoints = [
  "Struggling to understand AWS's 200+ services and how they work together",
  "Deploying applications manually without Infrastructure as Code",
  "Paying thousands extra monthly due to poorly optimized resources",
  "Spending hours troubleshooting security vulnerabilities and misconfigurations",
  "Building monolithic applications that can't scale to meet demand",
  "Unable to implement disaster recovery and high availability strategies",
  "Lacking hands-on experience for AWS certification interviews",
  "Wasting time on outdated on-premise infrastructure knowledge"
]

const notFor = [
  "You expect to become a cloud expert in 2 days",
  "You're not willing to get your hands dirty with labs and coding",
  "You're looking for shortcut hacks instead of real knowledge",
  "You have zero interest in learning infrastructure fundamentals"
]

export default function PainPoints() {
  return (
    <section className="pain-points">
      <div className="container">
        <h3>THE CLOUD INFRASTRUCTURE CHALLENGES YOU FACE</h3>
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
