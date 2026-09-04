import './Curriculum.css'

const curriculumItems = [
  {
    number: 1,
    title: "AWS Fundamentals & Core Services",
    description: "Master the foundational AWS services: EC2, S3, RDS, VPC, and IAM. Understand regions, availability zones, and how to architect for high availability."
  },
  {
    number: 2,
    title: "Identity, Access & Security",
    description: "Deep dive into IAM policies, roles, and security best practices. Secure your infrastructure from day one with proper authentication and authorization."
  },
  {
    number: 3,
    title: "Networking & Content Delivery",
    description: "Design VPCs, configure subnets, implement load balancers, and optimize content delivery with CloudFront for global reach."
  },
  {
    number: 4,
    title: "Databases & Data Storage",
    description: "Learn relational (RDS) and NoSQL (DynamoDB) databases. Choose the right database for your use case and implement backup strategies."
  },
  {
    number: 5,
    title: "Compute & Application Services",
    description: "Master Lambda, API Gateway, and elastic compute solutions. Build serverless and traditional applications that scale automatically."
  },
  {
    number: 6,
    title: "Monitoring, Logging & Troubleshooting",
    description: "Implement CloudWatch, CloudTrail, and X-Ray for comprehensive monitoring. Debug and optimize your infrastructure in production."
  },
  {
    number: 7,
    title: "Cost Optimization & Best Practices",
    description: "Understand AWS pricing models, implement cost controls, and adopt architectural best practices recommended by AWS."
  },
  {
    number: 8,
    title: "Infrastructure as Code & Automation",
    description: "Master CloudFormation and Terraform to automate infrastructure deployment. Make your infrastructure reproducible and version-controlled."
  },
  {
    number: 9,
    title: "Capstone Project & Certification Prep",
    description: "Build a complete production-ready cloud solution. Prepare for AWS Certified Solutions Architect Associate certification exam."
  }
]

export default function Curriculum() {
  return (
    <section className="curriculum">
      <div className="container">
        <h2 className="section-title">YOUR 12-WEEK LEARNING PATH</h2>
        <div className="curriculum-grid">
          {curriculumItems.map(item => (
            <div key={item.number} className="curriculum-item">
              <h4>{item.number}. {item.title}</h4>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
        <div className="curriculum-cta">
          <button className="btn btn-secondary">RESERVE MY SEAT</button>
        </div>
      </div>
    </section>
  )
}
