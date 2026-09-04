import './Audience.css'

const audiences = [
  {
    title: "#1 Software Developers",
    image: "dev-at-laptop.png",
    points: [
      "Want to deploy apps to the cloud",
      "Need AWS knowledge for job growth",
      "Learn DevOps practices",
      "Build scalable systems"
    ]
  },
  {
    title: "#2 Systems & Infrastructure Engineers",
    image: "network-engineer-certification-1200x675.jpg",
    points: [
      "Transition to cloud infrastructure",
      "Earn cloud certifications",
      "Advance career opportunities",
      "Master enterprise architecture"
    ]
  },
  {
    title: "#3 Tech Entrepreneurs & Founders",
    image: "small-business-owners.jpg",
    points: [
      "Launch apps on AWS efficiently",
      "Control infrastructure costs",
      "Build scalable MVPs",
      "Secure your applications"
    ]
  },
  {
    title: "#4 Career Switchers & Students",
    image: "students-studying-together-medium-shot_23-2148913227.avif",
    points: [
      "Break into cloud computing",
      "Build industry-ready portfolio",
      "Get hands-on experience",
      "Launch tech careers"
    ]
  }
]

export default function Audience() {
  return (
    <section className="audience">
      <div className="container">
        <h2 className="section-title">THIS PROGRAM IS PERFECT FOR</h2>
        <div className="audience-grid">
          {audiences.map((aud, idx) => (
            <div key={idx} className="audience-card">
              <img src={`/images/${aud.image}`} alt={aud.title} className="audience-image" />
              <h4>{aud.title}</h4>
              <ul>
                {aud.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
