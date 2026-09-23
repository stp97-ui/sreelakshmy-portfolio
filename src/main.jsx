import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowDown,ArrowUp, ArrowUpRight, BriefcaseBusiness, Code2, Database,
  Download, Github, GraduationCap, Linkedin, Mail, Menu, Moon,
  Server, Sparkles, Sun, X, Wrench
} from "lucide-react";
import "./styles.css";

const profile = {
  name: "Sreelakshmy TP",
  firstName: "Sreelakshmy",
  role: "Frontend Developer",
  nextRole: "Full Stack Developer",
  email: "sreelakshmy.tp@gmail.com",
  location: "Kerala, India",
  linkedin: "https://www.linkedin.com/in/YOUR_LINKEDIN",
  github: "https://github.com/YOUR_GITHUB"
};

const skills = [
  { title: "Frontend", icon: Code2, items: ["Angular", "React", "TypeScript", "JavaScript", "HTML", "CSS", "Ionic"] },
  { title: "Backend", icon: Server, items: ["Node.js", "Express.js", "REST APIs"] },
  { title: "Database", icon: Database, items: ["MongoDB", "SQL"] },
  { title: "Tools & Others", icon: Wrench, items: ["Git", "GitLab", "Jenkins", "VS Code", "Postman"] },
  { title: "AI / GenAI", icon: Sparkles, items: ["OpenAI", "Prompt Engineering", "AI APIs"] }
];

const projects = [
  {
    title: "Insurance Management Application",
    description: "Claims and policy management experience with role-based access, reporting workflows and enterprise UI components.",
    tech: ["Angular", "TypeScript", "Ionic"],
    type: "Professional Project",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=900&q=80"
  },
  {
    title: "MERN E-commerce Application",
    description: "Full-stack commerce platform concept with product browsing, cart, authentication and order workflows.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    type: "Full Stack Project",
    image: "https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=900&q=80"
  },
  {
    title: "GenAI Assistant",
    description: "AI assistant concept using an LLM API, structured prompts and a conversational interface.",
    tech: ["React", "Node.js", "OpenAI"],
    type: "GenAI Project",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=900&q=80"
  },
  {
    title: "Admin Analytics Dashboard",
    description: "Responsive dashboard experience with reusable components, data tables, filters and visual analytics.",
    tech: ["Angular", "TypeScript", "Charts"],
    type: "Frontend Project",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80"
  }
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dark, setDark] = useState(true);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      const sections = ["home", "about", "skills", "projects", "experience", "education", "contact"];
      const y = window.scrollY + 120;
      let current = "home";
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= y) current = id;
      }
      setActive(current);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div className={dark ? "app" : "app light"}>
      <header className="nav">
        <button className="brand" onClick={() => go("home")}>TP</button>
        <nav className={menuOpen ? "nav-links open" : "nav-links"}>
          {["home","about","skills","projects","experience","education","contact"].map(id => (
            <button key={id} className={active === id ? "active" : ""} onClick={() => go(id)}>
              {id[0].toUpperCase() + id.slice(1)}
            </button>
          ))}
        </nav>
        <div className="nav-actions">
          <button className="icon-btn" aria-label="Toggle theme" onClick={() => setDark(!dark)}>
            {dark ? <Sun size={17}/> : <Moon size={17}/>}
          </button>
          <a className="resume-btn" href="/resume.pdf" download><Download size={15}/> Download Resume</a>
          <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
            {menuOpen ? <X/> : <Menu/>}
          </button>
        </div>
      </header>

      <main>
        <section id="home" className="hero section">
          <div className="hero-copy">
            <div className="eyebrow">AVAILABLE FOR OPPORTUNITIES</div>
            <p className="hello">Hi, I'm</p>
            <h1>{profile.name}</h1>
            <h2>{profile.role} <span>→</span> <em>{profile.nextRole}</em></h2>
            <p className="lead">I build scalable, user-friendly web applications with Angular and React, and I'm expanding into Node.js, MongoDB and GenAI.</p>
            <div className="hero-buttons">
              <button className="primary-btn" onClick={() => go("projects")}>View My Projects <ArrowDown size={16}/></button>
              <a className="secondary-btn" href="/resume.pdf" download><Download size={16}/> Download Resume</a>
            </div>
            <div className="socials">
              <a href={profile.github} target="_blank" rel="noreferrer"><Github/></a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin/></a>
              <a href={`mailto:${profile.email}`}><Mail/></a>
            </div>
          </div>
          <div className="hero-visual">
            <div className="orbit orbit-one"></div>
            <div className="orbit orbit-two"></div>
            <div className="profile-placeholder">
              <div className="avatar">ST</div>
              <span>BUILD</span><span>LEARN</span><span>GROW</span>
            </div>
          </div>
        </section>

        <section id="about" className="section">
          <SectionTitle eyebrow="ABOUT ME" title="A Passionate Developer"/>
          <div className="about-grid">
            <div className="about-copy">
              <p>I'm a frontend developer with <strong>5+ years of experience</strong> building responsive and scalable web applications.</p>
              <p>My strongest areas are Angular, React, TypeScript and modern UI development. I'm currently growing into full-stack development with Node.js, Express, MongoDB and GenAI.</p>
              <p>I enjoy solving real-world problems, learning new technologies and turning complex requirements into simple experiences.</p>
            </div>
            <div className="facts">
              <Fact icon={BriefcaseBusiness} label="Experience" value="5+ Years"/>
              <Fact icon={Code2} label="Focus" value="Frontend → Full Stack"/>
              <Fact icon={Mail} label="Email" value={profile.email}/>
              <Fact icon={Sparkles} label="Goal" value="Full Stack + GenAI"/>
            </div>
            <div className="edu-mini">
              <GraduationCap size={28}/>
              <div><b>B.Tech in Electronics & Communication Engineering</b><span>2014 – 2018 · CGPA 7.4</span></div>
            </div>
          </div>
        </section>

        <section id="skills" className="section">
          <SectionTitle eyebrow="MY SKILLS" title="Technologies I Work With"/>
          <div className="skills-grid">
            {skills.map(({title, icon: Icon, items}) => (
              <div className="skill-card" key={title}>
                <div className="skill-icon"><Icon size={20}/></div>
                <h3>{title}</h3>
                <div className="chips">{items.map(x => <span key={x}>{x}</span>)}</div>
              </div>
            ))}
          </div>
        </section>

        <section id="projects" className="section">
          <SectionTitle eyebrow="FEATURED PROJECTS" title="Some of My Recent Work"/>
          <div className="projects-grid">
            {projects.map(p => (
              <article className="project-card" key={p.title}>
                <div className="project-image" style={{backgroundImage: `url(${p.image})`}}><span>{p.type}</span></div>
                <div className="project-body">
                  <h3>{p.title}</h3>
                  <p>{p.description}</p>
                  <div className="chips">{p.tech.map(x => <span key={x}>{x}</span>)}</div>
                  <button className="project-link">View Project <ArrowUpRight size={15}/></button>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="experience" className="section">
          <SectionTitle eyebrow="WORK EXPERIENCE" title="Professional Journey"/>
          <div className="timeline">
            <div className="timeline-dot"></div>
            <div className="timeline-date">JAN 2024 – PRESENT</div>
            <div className="timeline-grid">
              <div><h3>Tristar / ICAST</h3><p className="accent">Frontend Developer</p></div>
              <ul>
                <li>Develop and maintain Angular applications with reusable enterprise components.</li>
                <li>Work across requirements, development, testing, bug fixing and deployment workflows.</li>
                <li>Collaborate with backend and QA teams to deliver features and resolve root-cause issues.</li>
                <li>Technologies: Angular, Ionic, TypeScript, RxJS, GitLab and Jenkins.</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="education" className="section split-section">
          <div>
            <SectionTitle eyebrow="EDUCATION" title="My Education"/>
            <div className="education-card">
              <div className="skill-icon"><GraduationCap/></div>
              <div><h3>B.Tech — Electronics & Communication Engineering</h3><p>2014 – 2018 · CGPA 7.4</p></div>
            </div>
          </div>
          <div id="contact">
            <SectionTitle eyebrow="GET IN TOUCH" title="Let's Work Together"/>
            <p className="contact-copy">I'm open to discussing new opportunities, exciting projects and full-stack roles. Feel free to reach out.</p>
            <a className="primary-btn inline-btn" href={`mailto:${profile.email}`}><Mail size={16}/> Get In Touch</a>
          </div>
        </section>

        <section className="contact-strip">
          <div><Mail size={19}/><span>Email<strong>{profile.email}</strong></span></div>
          <div><Linkedin size={19}/><span>LinkedIn<strong>linkedin.com/in/YOUR_LINKEDIN</strong></span></div>
          <div><Github size={19}/><span>GitHub<strong>github.com/YOUR_GITHUB</strong></span></div>
        </section>
      </main>

      <footer>
        <span>© {new Date().getFullYear()} Sreelakshmy TP. All rights reserved.</span>
        <span>Built with React + Vite</span>
      </footer>
      <button className="top-btn" onClick={() => go("home")} aria-label="Back to top"><ArrowUp size={17}/></button>
    </div>
  );
}

function Fact({icon: Icon, label, value}) {
  return <div className="fact"><div className="fact-icon"><Icon size={17}/></div><span>{label}<strong>{value}</strong></span></div>
}

function SectionTitle({eyebrow, title}) {
  return <div className="section-title"><div className="eyebrow">{eyebrow}</div><h2>{title}</h2></div>
}

createRoot(document.getElementById("root")).render(<App />);