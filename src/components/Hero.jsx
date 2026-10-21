import './Hero.css';
import { trackLead } from '../utils/pixel';

export default function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <p className="hero-brand">Smartcore Infosys Ltd</p>
        <h1>Master A.I. Software Engineering in 12 Weeks</h1>
        <p>
          A 12-week intensive program starting November 2, 2026. Master
          software engineering with AI and build real production systems.
        </p>
        <div className="hero-pricing">
          <p className="price">Investment: ₦50,000</p>
          <p className="installment">
            Flexible Payment: 2 Installments of ₦25,000
          </p>
        </div>
        <a
          href="https://smartcore.vmerlabs.com"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackLead('hero')}
          className="btn"
        >
          REGISTER NOW
        </a>
      </div>
    </section>
  );
}
