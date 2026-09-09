import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import Media from './Media';

export default function ProjectCard({ project, index }) {
  // Card thumbnail: prefer the hero video's poster frame (a deliberately
  // chosen still; a playable <video> inside a link is awkward), then the first
  // real image, then the first placeholder.
  const real = project.media.filter((m) => m.src);
  const image = real.find((m) => m.type === 'image');
  const video = real.find((m) => m.type === 'video');
  const hero =
    (video?.poster && { type: 'image', src: video.poster, caption: video.caption }) ||
    image ||
    video ||
    project.media[0];

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
