import React from "react";

import Project from "./components/Project";

import heroSectionProfile from "./assets/Hero Section Profile.png";
import aboutMeProfile from "./assets/About Section Profile.jpg";
import project1 from "./assets/Project 1.jpg";
import project2 from "./assets/Project 2.jpg";
import project3 from "./assets/Project 3.jpg";
import johnDoe from "./assets/John Doe.jpg";

import "./stylesheets/app.scss";
import Service from "./components/Service";
import Testimonial from "./components/Testimonial";

const App = () => {
  return (
    <div>
      <header></header>
      <main>
        <section className="hero-section">
          <div className="visual-container">
            <div className="circle"></div>
            <img src={heroSectionProfile} alt="" />
          </div>
          <div className="introduction">
            <h1>Welcome to John Smith Consulting.</h1>
            <p>
              I specialize in business strategy and digital transformation,
              helping businesses grow and adapt in a digital world.
            </p>
            <a href="#">
              <button>Schedule a Consultation</button>
            </a>
          </div>
        </section>
        <section className="portfolio">
          <Project
            thumbnail={project1}
            title="Digital Transformation for XYZ Corp"
            description="Led a digital transformation project for XYZ Corp, resulting in a 30% increase in operational efficiency."
          />
          <Project
            thumbnail={project2}
            title="Business Strategy Development for ABC Inc"
            description="Developed a comprehensive business strategy for ABC Inc, leading to a 20% growth in revenue."
          />
          <Project
            thumbnail={project3}
            title="E-commerce Optimization for DEF Ltd"
            description="Optimized e-commerce operations for DEF Ltd, resulting in a 15% increase in online sales."
          />
        </section>
        <section className="about-me">
          <div className="details">
            <p>
              <span>Background: </span> With over 10 years of experience in
              business consulting, I have a proven track record of helping
              companies achieve their goals through innovative strategies and
              digital solutions.
            </p>
            <p>
              <span>Expertise: </span> Business Strategy, Digital
              Transformation, Operational Efficiency.
            </p>
            <p>
              <span>Values: </span> Commitment to excellence, innovation, and
              client success.
            </p>
            <p>
              <span>Contact Information: </span>{" "}
              <a href="mailto:john.smith@example.com">john.smith@example.com</a>
            </p>
          </div>
          <img src={aboutMeProfile} alt="" />
        </section>
        <section className="services-offered">
          <h2>Services Offered</h2>
          <div className="services-container">
            <Service
              title="Business Strategy Development"
              description="I work closely with businesses to develop comprehensive strategies that drive growth and success. This includes market analysis, competitive positioning, and long-term planning."
              details={[
                "Market research and analysis",
                "Competitive benchmarking",
                "Business model innovation",
                "Strategic planning and execution",
                "Performance monitoring and adjustment",
              ]}
            />
            <Service
              title="Digital Transformation"
              description="I help organizations transition to digital platforms and integrate advanced technologies to enhance their operations and customer experience."
              details={[
                "Digital maturity assessment",
                "IT infrastructure modernization",
                "Process automation",
                "Data analytics and insights",
                "Customer experience enhancement",
              ]}
            />
            <Service
              title="Operational Efficiency Optimization"
              description="I provide expert advice on streamlining business processes to improve efficiency and reduce costs."
              details={[
                "Process mapping and analysis",
                "Lean and Six Sigma methodologies",
                "Resource optimization",
                "Workflow automation",
                "Performance metrics and KPIs",
              ]}
            />
            <Service
              title="Market Entry and Expansion Strategy"
              description="I assist companies in entering new markets and expanding their reach through tailored market entry strategies."
              details={[
                "Market entry feasibility studies",
                "Entry strategy formulation",
                "Partner identification and negotiation",
                "Risk assessment and mitigation",
                "Post-entry support and monitoring",
              ]}
            />
            <Service
              title="Change Management"
              description="I guide organizations through change initiatives, ensuring smooth transitions and minimal disruption."
              details={[
                "Change readiness assessment",
                "Change strategy development",
                "Communication planning",
                "Stakeholder engagement",
                "Training and support programs",
              ]}
            />
            <Service
              title="Leadership and Team Development"
              description="I offer coaching and development programs to enhance the skills and capabilities of leaders and teams."
              details={[
                "Leadership coaching and mentoring",
                "Team building and collaboration",
                "Skills assessment and development",
                "Performance management",
                "Succession planning",
              ]}
            />
          </div>
        </section>
        <section className="testimonials">
          <Testimonial
            testimonial="John's expertise in digital transformation helped our company achieve unprecedented growth."
            image={johnDoe}
            name="Jane Doe"
            company="CEO of XYZ Corp"
          />
          <Testimonial
            testimonial="Thanks to John's strategic insights, our revenue increased significantly."
            image={johnDoe}
            name="Jane Doe"
            company="CEO of ABC Inc"
          />
        </section>
        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
          <h4>Let's Elevate Your Business Together - Reach Out to Us Today!</h4>
          <label htmlFor="name">
            Name
            <input type="text" id="name" />
          </label>
          <label htmlFor="email">
            Email <input type="email" id="email" />
          </label>
          <label htmlFor="subject">
            Subject <input type="text" id="subject" />
          </label>
          <label htmlFor="message">
            Message
            <textarea id="message"></textarea>
          </label>
          <button>Send</button>
        </form>
      </main>
      <footer>
        <div className="links">
          <h2>John Smith Consulting</h2>
          <div className="social-media-links">
            <span>Social Media Links</span>
            <ul>
              <li>
                <a href="#">https://www.linkedin.com/in/johnsmith</a>
              </li>
              <li>
                <a href="#">https://twitter.com/johnsmith</a>
              </li>
              <li>
                <a href="#">https://facebook.com/johnsmith</a>
              </li>
            </ul>
          </div>
          <div className="other-links">
            <span>Other Links</span>
            <ul>
              <li>
                Privacy Policy Link:
                <a href="#">https://example.com/privacy-policy</a>
              </li>
            </ul>
          </div>
        </div>
        <span>© 2024 John Smith Consulting. All rights reserved.</span>
      </footer>
    </div>
  );
};

export default App;
