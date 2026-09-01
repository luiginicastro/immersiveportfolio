import { NavLink, Link } from 'react-router-dom';
import { site } from '../data/site';

export default function Nav() {
  return (
    <header className="nav">
      <Link to="/" className="nav-logo">
        <span className="nav-logo-mark" />
        {site.name}
      </Link>
      <nav className="nav-links">
        <NavLink to="/" end className="nav-link">
          Work
        </NavLink>
        <NavLink to="/about" className="nav-link">
          About
        </NavLink>
        <a href={`mailto:${site.email}`} className="nav-link nav-cta">
          Contact
        </a>
      </nav>
    </header>
  );
}
