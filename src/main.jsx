import React from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowDown, ArrowUpRight, Github, Linkedin, Mail, MapPin, Phone,
  Code2, GraduationCap, BriefcaseBusiness, ExternalLink, Download,
  Menu, X, Cpu, Database, Cloud, Globe, Terminal, Sparkles
} from 'lucide-react';
import './styles.css';

const skills = [
  { title: 'Programming', items: ['Python', 'Java', 'JavaScript', 'SQL', 'C++'], icon: Code2 },
  { title: 'Web development', items: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'HTML5', 'CSS3', 'Streamlit'], icon: Globe },
  { title: 'Data & computer vision', items: ['OpenCV', 'Data Visualization', 'Excel'], icon: Database },
  { title: 'Tools & platforms', items: ['Git', 'GitHub', 'VS Code', 'Netlify', 'Blynk Cloud', 'AWS DevOps'], icon: Cloud }
];

const projects = [
  {
    number: '01',
    title: 'Smart AI-Based Multi-Camera Traffic Signal Control System',
    category: 'AI · Computer Vision · Smart Mobility',
    description: 'A smart traffic-management project focused on using AI and multiple camera feeds to support adaptive traffic-signal control.',
    tags: ['Python', 'Computer Vision', 'AI', 'Multi-camera'],
    link: 'https://github.com/Yash552003/AI_Traffic-Signal-Control-System',
    featured: true
  },
  {
    number: '02',
    title: 'PG Finder for Students',
    category: 'Full-stack web application',
    description: 'Designed and developed a student accommodation discovery and booking application with a responsive interface and RESTful APIs.',
    tags: ['MongoDB', 'Express.js', 'React.js', 'Node.js'],
    link: 'https://github.com/Yash552003',
  },
  {
    number: '03',
    title: 'Automated Face Attendance System',
    category: 'Python · Computer Vision',
    description: 'Developed a facial-recognition attendance system using OpenCV to automate attendance tracking and Excel report generation.',
    tags: ['Python', 'OpenCV', 'Excel'],
    link: 'https://github.com/Yash552003',
  }
];

const courses = [
  { name: 'Java + DSA', provider: 'Apna College', status: 'Completed', detail: 'Java programming, OOP, data structures and algorithms.' },
  { name: 'Web Development', provider: 'Apna College', status: 'In progress', detail: 'React.js, Node.js, Express.js, MongoDB, REST APIs and deployment.' },
  { name: 'AI & Machine Learning', provider: 'Apna College', status: 'In progress', detail: 'ML fundamentals, Python libraries, data preprocessing and AI concepts.' },
  { name: 'AWS DevOps Certification', provider: 'Provider not specified in resume', status: 'Certification', detail: 'AWS cloud services, CI/CD pipelines, deployment workflows and DevOps practices.' }
];

function App() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const closeMenu = () => setMenuOpen(false);
  return (
    <>
      <div className="noise" />
      <header className="topbar">
        <a className="brand" href="#home" onClick={closeMenu}><span className="brand-mark">YK</span><span>YASH<span className="muted">.DEV</span></span></a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">{menuOpen ? <X /> : <Menu />}</button>
        <nav className={menuOpen ? 'nav open' : 'nav'}>
          {['About', 'Skills', 'Projects', 'Journey', 'Contact'].map(x => <a key={x} href={`#${x.toLowerCase()}`} onClick={closeMenu}>{x}</a>)}
          <a className="nav-cta" href="/assets/Yash_Mahesh_Kosumbkar_Resume.pdf" download>Resume <Download size={14}/></a>
        </nav>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <div className="eyebrow"><span className="pulse" /> OPEN TO IT INTERNSHIP OPPORTUNITIES</div>
            <h1>Building ideas<br/>into <span className="gradient-text">digital reality.</span></h1>
            <p className="hero-lead">I'm <strong>Yash Mahesh Kosumbkar</strong> — an Information Technology student and aspiring software developer interested in web technologies, AI and practical engineering.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">Explore my work <ArrowUpRight size={17}/></a>
              <a className="button button-ghost" href="/assets/Yash_Mahesh_Kosumbkar_Resume.pdf" download><Download size={16}/> Download CV</a>
            </div>
            <div className="social-row">
              <a href="https://github.com/Yash552003" target="_blank" rel="noreferrer"><Github size={17}/> GitHub <ArrowUpRight size={13}/></a>
              <a href="https://www.linkedin.com/in/yash-kosumbkar-022ab6281" target="_blank" rel="noreferrer"><Linkedin size={17}/> LinkedIn <ArrowUpRight size={13}/></a>
              <a href="mailto:yashkosumbkar.work@gmail.com"><Mail size={17}/> Email <ArrowUpRight size={13}/></a>
            </div>
          </div>
          <div className="hero-visual">
            <div className="orbit orbit-one"></div><div className="orbit orbit-two"></div>
            <div className="profile-frame">
              <img src="/assets/profile.jpg" alt="Yash Mahesh Kosumbkar" onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.nextElementSibling.style.display = 'grid'; }} />
              <div className="profile-fallback">YK</div>
            </div>
            <div className="floating-card card-code"><Terminal size={15}/><span>const mindset = "build";</span></div>
            <div className="floating-card card-status"><span className="status-dot"/><span>Always learning</span></div>
            <div className="visual-caption"><span>01 / DEVELOPER PROFILE</span><span>MUMBAI, INDIA</span></div>
          </div>
          <a className="scroll-cue" href="#about"><ArrowDown size={15}/> SCROLL TO EXPLORE</a>
        </section>

        <section className="section-wrap about-section" id="about">
          <div className="section-kicker">01 — ABOUT ME</div>
          <div className="about-grid">
            <div><h2>Curious by nature.<br/><span className="muted-heading">Driven to create.</span></h2></div>
            <div className="about-text">
              <p>I'm pursuing a B.Tech in Information Technology at Konkan Gyanpeeth College of Engineering. I enjoy turning concepts into useful applications and learning how software, data and connected systems can solve real-world problems.</p>
              <p>My academic journey also includes a Diploma in Mechanical Engineering, giving me a cross-disciplinary engineering perspective. I'm currently strengthening my skills in full-stack development and AI/ML.</p>
              <div className="quick-facts">
                <div><span className="fact-value">2027</span><span className="fact-label">Expected graduation</span></div>
                <div><span className="fact-value">3</span><span className="fact-label">Featured projects</span></div>
                <div><span className="fact-value">MERN</span><span className="fact-label">Web stack focus</span></div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-wrap" id="skills">
          <div className="section-heading"><div><div className="section-kicker">02 — TOOLKIT</div><h2>Skills & technologies</h2></div><p>A growing toolkit for building, analyzing<br/>and shipping useful digital products.</p></div>
          <div className="skill-grid">
            {skills.map(({title, items, icon: Icon}, i) => <article className="skill-card" key={title}><div className="skill-card-top"><span className="skill-icon"><Icon size={19}/></span><span className="mono">0{i+1}</span></div><h3>{title}</h3><div className="tag-list">{items.map(item => <span className="tag" key={item}>{item}</span>)}</div></article>)}
          </div>
        </section>

        <section className="section-wrap projects-section" id="projects">
          <div className="section-heading"><div><div className="section-kicker">03 — SELECTED WORK</div><h2>Projects in focus</h2></div><a className="text-link" href="https://github.com/Yash552003" target="_blank" rel="noreferrer">More on GitHub <ArrowUpRight size={16}/></a></div>
          <div className="project-list">
            {projects.map(p => <article className={`project-card ${p.featured ? 'featured' : ''}`} key={p.number}>
              <div className="project-number">{p.number}</div>
              <div className="project-content"><div className="project-category">{p.category}</div><h3>{p.title}</h3><p>{p.description}</p><div className="tag-list">{p.tags.map(t => <span className="tag" key={t}>{t}</span>)}</div></div>
              <a className="project-link" href={p.link} target="_blank" rel="noreferrer" aria-label={`Open ${p.title} on GitHub`}><ArrowUpRight size={21}/></a>
            </article>)}
          </div>
          <p className="small-note">Project descriptions are based on the information currently available. Add live demos, screenshots and verified repository links as each project is ready to showcase.</p>
        </section>

        <section className="section-wrap journey-section" id="journey">
          <div className="section-heading"><div><div className="section-kicker">04 — THE JOURNEY</div><h2>Education & learning</h2></div><p>Building a strong foundation<br/>and continuing to learn.</p></div>
          <div className="timeline">
            <div className="timeline-item"><div className="timeline-marker"><GraduationCap size={17}/></div><div className="timeline-date">EXPECTED 2027</div><div className="timeline-main"><h3>B.Tech — Information Technology</h3><p>Konkan Gyanpeeth College of Engineering</p><span className="timeline-detail">Current focus: web technologies, data structures and embedded systems.</span></div></div>
            <div className="timeline-item"><div className="timeline-marker"><GraduationCap size={17}/></div><div className="timeline-date">COMPLETED 2022</div><div className="timeline-main"><h3>Diploma — Mechanical Engineering</h3><p>Government Polytechnic College, Ratnagiri</p><span className="timeline-detail">Final percentage: 61.56%</span></div></div>
          </div>
          <div className="courses-grid">
            {courses.map((c, i) => <article className="course-card" key={c.name}><div className="course-status">{c.status}</div><h3>{c.name}</h3><div className="course-provider">{c.provider}</div><p>{c.detail}</p></article>)}
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="section-wrap contact-inner">
            <div className="section-kicker">05 — LET'S CONNECT</div>
            <h2>Have an opportunity<br/>or an idea? <span className="gradient-text">Let's talk.</span></h2>
            <p>I'm interested in internships, collaborative projects and opportunities to grow as a developer.</p>
            <a className="button button-primary" href="mailto:yashkosumbkar.work@gmail.com">Get in touch <ArrowUpRight size={17}/></a>
            <div className="contact-details">
              <a href="mailto:yashkosumbkar.work@gmail.com"><Mail size={16}/> yashkosumbkar.work@gmail.com</a>
              <a href="tel:+919359670992"><Phone size={16}/> +91 93596 70992</a>
              <span><MapPin size={16}/> Mumbai, Maharashtra, India</span>
            </div>
          </div>
        </section>
      </main>
      <footer className="footer"><a className="brand" href="#home"><span className="brand-mark">YK</span><span>YASH<span className="muted">.DEV</span></span></a><span>Designed & built by Yash Mahesh Kosumbkar · © {new Date().getFullYear()}</span><a href="#home">Back to top ↑</a></footer>
    </>
  );
}

createRoot(document.getElementById('root')).render(<App />);
