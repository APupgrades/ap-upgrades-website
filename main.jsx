import React from 'react';
import { createRoot } from 'react-dom/client';
import { motion } from 'framer-motion';
import { ArrowRight, BadgeCheck, Brush, Building2, CheckCircle2, ClipboardCheck, DollarSign, FileText, Mail, MapPin, Menu, Paintbrush, Phone, Ruler, ShieldCheck, Sparkles, Users } from 'lucide-react';
import './styles.css';

const services = [
  ['Premium Exterior Painting', 'High-end prep, coatings, color execution, trim detail, fascia finishing, and final walkthrough standards.', Paintbrush],
  ['Exterior Consulting', 'Property walkthroughs, upgrade recommendations, scope planning, trade sequencing, and owner guidance.', ClipboardCheck],
  ['Budgeting & Phasing', 'Clear budgets, priority lists, cost ranges, allowances, and phased improvement plans for smarter decisions.', DollarSign],
  ['Siding, Trim & Fascia', 'Repair direction, material selection, wood replacement coordination, trim upgrades, and exterior detail planning.', Ruler],
  ['Commercial Coatings', 'Professional coating support for apartments, offices, retail, common areas, stucco, metal, and wood surfaces.', Building2],
  ['Project Coordination', 'Schedule alignment, subcontractor coordination, material decisions, owner updates, and punch-list control.', Users],
];

const projects = [
  ['Luxury Exterior Repaint', 'Los Alamitos, CA', 'Residential', 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=80'],
  ['Modern Stucco Refresh', 'Seal Beach, CA', 'Exterior Modernization', 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=900&q=80'],
  ['Siding & Trim Upgrade', 'Huntington Beach, CA', 'Carpentry + Finish', 'https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?auto=format&fit=crop&w=900&q=80'],
  ['Apartment Exterior Coating', 'Long Beach, CA', 'Commercial', 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=80'],
];

function Button({children, outline=false}) { return <button className={outline ? 'btn btn-outline' : 'btn'}>{children}</button>; }
function IconCard({children}) { return <div className="icon-card">{children}</div>; }

function App() {
  return <div className="site">
    <header className="header">
      <div className="container header-inner">
        <div className="brand">
          <div className="logo">AP<Brush className="brush" /></div>
          <div><div className="brand-title">UPGRADES</div><div className="brand-sub">Exterior Solutions & Consulting</div><div className="tagline">Preparation. Precision. Perfection.</div></div>
        </div>
        <nav className="nav"><a>Home</a><a>Services</a><a>Portfolio</a><a>Process</a><a>Consulting</a><a>Contact</a></nav>
        <div className="header-cta"><div className="small-contact"><b>(562) 221-3125</b><span>info@apupgrades.com</span></div><Button>Request Consultation</Button></div>
        <button className="menu"><Menu /></button>
      </div>
    </header>

    <section className="hero">
      <img src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2200&q=85" />
      <div className="hero-overlay"></div><div className="hero-fade"></div>
      <div className="container hero-inner">
        <motion.div initial={{opacity:0,y:22}} animate={{opacity:1,y:0}} transition={{duration:.65}} className="hero-copy">
          <div className="eyebrow"><ShieldCheck size={20}/> Licensed C-33 Painting & Decorating Contractor</div>
          <h1>High-End Exterior Solutions For Properties That Need To Look Exceptional.</h1>
          <p>AP Upgrades brings premium painting, exterior consulting, budgeting, material planning, and project coordination together under one polished, professional process.</p>
          <div className="hero-actions"><Button>Request A Private Consultation <ArrowRight size={16}/></Button><Button outline>View Exterior Services</Button></div>
          <div className="stats"><div><b>C-33</b><span>Licensed Trade</span></div><div><b>Premium</b><span>Prep Standards</span></div><div><b>SoCal</b><span>Service Area</span></div></div>
        </motion.div>
      </div>
    </section>

    <section className="trust"><div className="container trust-grid">
      {[[ShieldCheck,'Licensed & Insured','C-33 Painting & Decorating'],[Sparkles,'Premium Finish','Preparation before perfection'],[FileText,'Detailed Scope','Clean, organized, transparent'],[BadgeCheck,'Owner-Level Care','Communication and follow-through']].map(([Icon,t,txt])=><div className="trust-item" key={t}><Icon size={44}/><div><b>{t}</b><span>{txt}</span></div></div>)}
    </div></section>

    <section className="container section">
      <div className="section-head"><div><span className="kicker">What We Do</span><h2>Exterior Solutions & Consulting</h2></div><p>A luxury exterior project is not just paint. It is preparation, product selection, repair planning, trade coordination, budget control, and a sharp final presentation.</p></div>
      <div className="service-grid">{services.map(([title,text,Icon])=><IconCard key={title}><div className="service-icon"><Icon /></div><h3>{title}</h3><p>{text}</p></IconCard>)}</div>
    </section>

    <section className="standard"><div className="standard-img"><img src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1500&q=85" /></div><div className="standard-copy"><span className="kicker light">The AP Standard</span><h2>Built like a premium brand. Managed like a serious project.</h2><p>AP Upgrades is designed for homeowners and property owners who want more than a basic contractor experience: cleaner scope, better communication, sharper finish, and a property that feels thoughtfully upgraded.</p><div className="diff-grid">{['Licensed C-33 Painting & Decorating Contractor','Premium preparation standards before finish coats','Exterior advisory, budgeting, and project planning','Clear scope writing and organized trade sequencing','Color, material, and curb-appeal recommendations','Professional communication from start to finish'].map(x=><div><CheckCircle2 size={20}/><span>{x}</span></div>)}</div></div></section>

    <section className="container section"><div className="portfolio-head"><div><span className="kicker">Selected Work</span><h2>Project Experience</h2><p>Use this section for your real before-and-after work, exterior concepts, color palettes, and finished project photography.</p></div><Button outline>View Project Gallery</Button></div><div className="portfolio-grid">{projects.map(([t,c,tag,img])=><div className="project" key={t}><div className="project-img"><img src={img}/><span>{tag}</span></div><div className="project-body"><b>{t}</b><small>{c}</small></div></div>)}</div></section>

    <section className="process"><div className="container"><span className="kicker">Our Process</span><h2>A Clear Process From First Walkthrough To Final Finish.</h2><div className="process-grid">{[['01','Discover','Photos, site visit, project goals, priorities, and problem areas are reviewed first.'],['02','Define','We build a clean scope, identify repairs, clarify assumptions, and separate must-haves from upgrades.'],['03','Budget','We organize pricing, allowances, phasing options, and trade coordination before work starts.'],['04','Deliver','Prep, execution, updates, quality review, cleanup, and final walkthrough are managed professionally.']].map(([n,t,txt])=><div className="step"><strong>{n}</strong><h3>{t}</h3><p>{txt}</p></div>)}</div></div></section>

    <section className="container consulting section"><div><span className="kicker">Consulting & Advisory</span><h2>For owners who want the right plan before spending serious money.</h2><p>Consulting can be included with an exterior project or provided separately to help you make informed decisions before hiring trades, choosing materials, or approving a large budget.</p></div><div className="consult-list">{['Exterior modernization strategy','Color and material selections','Scope review and budget guidance','Siding, trim, fascia, and surface planning','Proposal review and trade comparison','Project oversight recommendations'].map(x=><div><CheckCircle2 size={20}/><b>{x}</b></div>)}</div></section>

    <section className="contact"><img src="https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1800&q=80"/><div className="contact-overlay"></div><div className="container contact-inner"><div><span className="kicker light">Start Your Project</span><h2>Let’s create a cleaner, sharper, higher-value exterior.</h2><p>Send photos, your goals, and your ideal budget range. AP Upgrades will help organize the next step with a professional exterior consultation.</p></div><form className="form"><h3>Request Consultation</h3><input placeholder="Name"/><input placeholder="Phone / Email"/><input placeholder="Project Address / City"/><textarea placeholder="Tell us about your project"></textarea><Button>Submit Request</Button><div className="form-contact"><span><Phone size={18}/> (562) 221-3125</span><span><Mail size={18}/> info@apupgrades.com</span><span><MapPin size={18}/> Serving Southern California</span></div></form></div></section>

    <footer><div className="container footer-grid"><div><h3>AP UPGRADES</h3><span>Exterior Solutions & Consulting</span><b>Preparation. Precision. Perfection.</b></div><div><h4>Contact</h4><p>(562) 221-3125<br/>info@apupgrades.com<br/>www.apupgrades.com</p></div><div><h4>Core Services</h4><p>Exterior Painting<br/>Consulting & Budgeting<br/>Siding, Trim & Fascia<br/>Project Coordination</p></div><div><h4>License & Insurance</h4><p>Licensed C-33 Painting & Decorating Contractor. Fully insured. CSLB number to be confirmed before publishing.</p></div></div><div className="copyright">© 2025 AP Upgrades. All rights reserved. | Privacy Policy | Terms of Service</div></footer>
  </div>
}

createRoot(document.getElementById('root')).render(<App/>);
