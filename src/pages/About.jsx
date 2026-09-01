import { FileText } from 'lucide-react';
import { InstagramIcon, LinkedinIcon } from '../components/SocialIcons';
import { site } from '../data/site';

const experience = [
  {
    period: 'Jan 2024 - Present',
    role: 'Immersive Technology Lead',
    org: 'CGS Immersive',
    body: 'Lead developer and project manager for production-grade XR training systems used by Fortune 500 clients, owning the full technical lifecycle from infrastructure design to delivery across VR, mobile, and web. Cut XR development time by 33% through pipeline automation and shared interaction infrastructure.',
  },
  {
    period: 'May 2022 - Jan 2024',
    role: 'Senior XR Consultant',
    org: 'Capco',
    body: 'Led cross-functional teams building multiplayer XR experiences (Normcore), immersive learning, and VR data visualization, coding hands-on while overseeing project execution and client communication.',
  },
];

const skills = [
  'Unity Development',
  'XR Interaction Toolkit',
  'Meta SDK',
  'Mixed Reality',
  'C# Programming',
  'Photon & Normcore Multiplayer',
  'Team Mentorship',
  'Cross-Functional Collaboration',
];

const awards = [
  { title: 'Best of VR', event: 'MIT Reality Hack, 2020' },
  { title: 'Best of Accessibility', event: 'MIT Reality Hack, 2020' },
];

export default function About() {
  return (
    <main className="about">
      <section className="about-intro">
        <img className="about-portrait" src="/NicastroHeadshot.jpg" alt="Luigi Nicastro" />
        <div>
          <h1 className="about-title">
            Hi, I’m Luigi. I’m passionate about using immersive technology to create
            transformative experiences.
          </h1>
          <div className="about-copy">
            <p>
              I’m the Immersive Technology Lead at CGS, where I lead a talented team of
              developers, designers, and professionals dedicated to pushing the boundaries of
              XR. My background in Unity lets me handle XR development end to end, and I spend
              a lot of my time mentoring the team and keeping us current on where the industry
              is headed.
            </p>
            <p>
              I work directly with clients throughout the project lifecycle, from
              understanding their needs to showcasing solutions and presenting updates. That
              work has spanned the aerospace, medical, financial, and learning industries,
              each with its own challenges and opportunities.
            </p>
            <p>
              Outside of my professional role, I’m committed to using XR for social impact. I
              build virtual reality galleries that give equity-seeking artists from around
              the world a platform to showcase their talents to a global audience.
            </p>
            <p>
              I believe XR can revolutionize industries, empower users, and bridge gaps in
              accessibility, and I’m excited to keep pushing what’s possible.
            </p>
          </div>
          <div className="about-actions">
            <a href={site.resume} target="_blank" rel="noreferrer" className="button">
              <FileText size={16} /> View resume
            </a>
            <a href={site.linkedin} target="_blank" rel="noreferrer" className="button button-ghost">
              <LinkedinIcon /> LinkedIn
            </a>
            <a href={site.instagram} target="_blank" rel="noreferrer" className="button button-ghost">
              <InstagramIcon /> Instagram
            </a>
          </div>
        </div>
      </section>

      <section className="about-section">
        <h2 className="section-title">Experience</h2>
        <div className="timeline">
          {experience.map((e) => (
            <div key={e.period} className="timeline-item">
              <span className="timeline-period">{e.period}</span>
              <div>
                <h3 className="timeline-role">
                  {e.role} · <span className="timeline-org">{e.org}</span>
                </h3>
                <p className="timeline-body">{e.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="about-section about-columns">
        <div>
          <h2 className="section-title">Skills</h2>
          <ul className="skill-list">
            {skills.map((s) => (
              <li key={s} className="skill-pill">
                {s}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="section-title">Awards</h2>
          <ul className="award-list">
            {awards.map((a) => (
              <li key={a.title}>
                <span className="award-title">{a.title}</span>
                <span className="award-event">{a.event}</span>
              </li>
            ))}
          </ul>
          <h2 className="section-title" style={{ marginTop: '2.5rem' }}>
            Education
          </h2>
          <ul className="award-list">
            <li>
              <span className="award-title">Honors BA, Interaction Design</span>
              <span className="award-event">Sheridan College</span>
            </li>
            <li>
              <span className="award-title">Business General</span>
              <span className="award-event">Sheridan College</span>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}
