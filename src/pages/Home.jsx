import { projects } from '../data/projects';
import { site } from '../data/site';
import ProjectCard from '../components/ProjectCard';

export default function Home() {
  return (
    <main>
      <section className="hero">
        <p className="hero-kicker">{site.location} · Available for immersive work</p>
        <h1 className="hero-title">
          VR Creator &<br />
          <span className="hero-title-accent">Immersive Designer</span>
        </h1>
        <p className="hero-tagline">{site.tagline}</p>
        <p className="hero-intro">{site.intro}</p>
      </section>

      <section className="work" id="work">
        <div className="section-header">
          <h2 className="section-title">Selected work</h2>
          <span className="section-count">{String(projects.length).padStart(2, '0')}</span>
        </div>
        <div className="project-grid">
          {projects.map((p, i) => (
            <ProjectCard key={p.slug} project={p} index={i} />
          ))}
        </div>
      </section>
    </main>
  );
}
