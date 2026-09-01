import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import Media from './Media';

export default function ProjectCard({ project, index }) {
  // Prefer real media for the card thumbnail; fall back to the first placeholder.
  const hero = project.media.find((m) => m.src) || project.media[0];

  return (
    <Link
      to={`/work/${project.slug}`}
      className="project-card"
      style={{ '--accent-a': project.accent[0], '--accent-b': project.accent[1] }}
    >
      <div className="project-card-media">
        <Media item={hero} accent={project.accent} />
      </div>
      <div className="project-card-body">
        <div className="project-card-top">
          <span className="project-card-index">{String(index + 1).padStart(2, '0')}</span>
          <span className="project-card-year">{project.year}</span>
        </div>
        <h3 className="project-card-title">
          {project.title}
          <ArrowUpRight size={18} className="project-card-arrow" />
        </h3>
        <p className="project-card-tagline">{project.tagline}</p>
        <p className="project-card-meta">{project.platform}</p>
      </div>
    </Link>
  );
}
