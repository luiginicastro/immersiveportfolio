import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Download } from 'lucide-react';
import { projects } from '../data/projects';
import Media from '../components/Media';

export default function Project() {
  const { slug } = useParams();
  const index = projects.findIndex((p) => p.slug === slug);
  if (index === -1) return <Navigate to="/" replace />;

  const project = projects[index];
  const next = projects[(index + 1) % projects.length];
  const [hero, ...gallery] = project.media;

  return (
    <main
      className="case-study"
      style={{ '--accent-a': project.accent[0], '--accent-b': project.accent[1] }}
    >
      <Link to="/" className="back-link">
        <ArrowLeft size={16} /> All work
      </Link>

      <header className="case-header">
        <h1 className="case-title">{project.title}</h1>
        <p className="case-tagline">{project.tagline}</p>
      </header>

      <Media item={hero} accent={project.accent} className="case-hero" />

      <dl className="case-meta">
        <div>
          <dt>Role</dt>
          <dd>{project.role}</dd>
        </div>
        <div>
          <dt>Platform</dt>
          <dd>{project.platform}</dd>
        </div>
        <div>
          <dt>Tools</dt>
          <dd>{project.tools}</dd>
        </div>
        <div>
          <dt>Year</dt>
          <dd>{project.year}</dd>
        </div>
      </dl>

      <p className="case-summary">{project.summary}</p>

      {project.sections.map((s) => (
        <section key={s.heading} className="case-section">
          <h2>{s.heading}</h2>
          <p>{s.body}</p>
          {s.note && <p className="case-note">{s.note}</p>}
        </section>
      ))}

      {project.download && (
        <section className="case-download">
          <div className="case-download-text">
            <h2>Try it yourself</h2>
            <p>{project.download.note}</p>
          </div>
          {project.download.href ? (
            <a href={project.download.href} className="button" download>
              <Download size={16} />
              {project.download.label}
              {project.download.size && <span className="case-download-size">{project.download.size}</span>}
            </a>
          ) : (
            <span className="button case-download-soon" aria-disabled="true">
              <Download size={16} /> APK coming soon
            </span>
          )}
        </section>
      )}

      {gallery.length > 0 && (
        <div className="case-gallery">
          {gallery.map((item) => (
            <figure key={item.caption}>
              <Media item={item} accent={project.accent} />
              <figcaption>{item.caption}</figcaption>
            </figure>
          ))}
        </div>
      )}

      {project.credits && (
        <section className="case-credits">
          <h2>Team</h2>
          <ul>
            {project.credits.map((c) => (
              <li key={c.name}>
                <span className="credit-name">{c.name}</span>
                <span className="credit-role">{c.role}</span>
              </li>
            ))}
          </ul>
        </section>
      )}

      <Link
        to={`/work/${next.slug}`}
        className="next-project"
        style={{ '--accent-a': next.accent[0], '--accent-b': next.accent[1] }}
      >
        <span className="next-project-label">Next project</span>
        <span className="next-project-title">
          {next.title} <ArrowRight size={20} />
        </span>
      </Link>
    </main>
  );
}
