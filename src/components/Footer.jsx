import './Footer.css';
import { trackLead } from '../utils/pixel';

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <p>&copy; 2026 Smartcore Infosys Ltd. All rights reserved.</p>
        <a href="https://smartcore.vmerlabs.com" target="_blank" rel="noopener noreferrer" onClick={() => trackLead('footer')} className="btn">REGISTER NOW</a>
      </div>
    </footer>
  );
}
