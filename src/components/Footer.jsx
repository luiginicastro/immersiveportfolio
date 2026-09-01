import { Mail, FileText } from 'lucide-react';
import { InstagramIcon, LinkedinIcon } from './SocialIcons';
import { site } from '../data/site';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div>
          <p className="footer-heading">Let’s build something immersive.</p>
          <a href={`mailto:${site.email}`} className="footer-email">
            {site.email}
          </a>
        </div>
        <div className="footer-links">
          <a href={site.instagram} target="_blank" rel="noreferrer" className="footer-link">
            <InstagramIcon /> Instagram
          </a>
          <a href={site.linkedin} target="_blank" rel="noreferrer" className="footer-link">
            <LinkedinIcon /> LinkedIn
          </a>
          <a href={`mailto:${site.email}`} className="footer-link">
            <Mail size={16} /> Email
          </a>
          <a href={site.resume} target="_blank" rel="noreferrer" className="footer-link">
            <FileText size={16} /> Resume
          </a>
        </div>
      </div>
      <p className="footer-copy">
        © {new Date().getFullYear()} {site.name} · {site.location}
      </p>
    </footer>
  );
}
