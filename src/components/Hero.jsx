import './Hero.css';
import { trackLead } from '../utils/pixel';

export default function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <h1>You Can Build With AI. Now Understand the Code.</h1>
        <p>
          A 12-week program that teaches the engineering fundamentals behind the
          code AI writes for you.
        </p>
        <div className="hero-pricing">
          <p className="price">Investment: ₦50,000</p>
          <p className="installment">
            Flexible Payment: 2 Installments of ₦25,000
          </p>
        </div>
        <a
          href="https://chat.whatsapp.com/L6Ntto3LKv2AZquxjSIUvn"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackLead('hero')}
          className="btn"
        >
          SECURE YOUR SEAT HERE
        </a>
      </div>
    </section>
  );
}
