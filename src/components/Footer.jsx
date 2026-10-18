import './Footer.css';
import { trackLead } from '../utils/pixel';

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <p>&copy; 2026 Vibe Coders. All rights reserved.</p>
        <a href="https://chat.whatsapp.com/L6Ntto3LKv2AZquxjSIUvn" target="_blank" rel="noopener noreferrer" onClick={() => trackLead('footer')} className="btn">SECURE YOUR SEAT HERE</a>
      </div>
    </footer>
  );
}
