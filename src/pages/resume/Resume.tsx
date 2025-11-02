import './resume.css';

export default function Resume() {
  return (
    <div className="resume-container">
      {/* Header */}
      <header className="resume-header">
        <h1 className="resume-name">PARKER POND</h1>
        <div className="contact-info">
          <span>📍 Parker, CO 80138</span>
          <span>📧 parker.a.pond@gmail.com</span>
          <span>📞 (702) 524-2117</span>
          <a href="https://github.com/yourusername" className="contact-link">GitHub</a>
          <a href="https://linkedin.com/in/yourusername" className="contact-link">LinkedIn</a>
        </div>
      </header>

      {/* Professional Summary */}
      <section className="resume-section">
        <h2 className="section-title">PROFESSIONAL SUMMARY</h2>
        {/* //TODO have this change depending on the URL with sets in the Json so i can just add one there and have it customixed by who is checking it out */}
        <p className="section-content">
          Full-Stack Developer with expertise in JavaScript, TypeScript, React, Node.js, Nest.js, Express.js, and PostgreSQL. Built production-ready web applications featuring real-time updates, third-party API integrations, user authentication, and complex data relationships. Proven technical leader with experience resolving 50+ support tickets weekly, designing comprehensive training programs, and mentoring team members. Strong problem-solver combining hands-on development skills with customer-facing technical support experience.
        </p>
      </section>

      {/* Technical Skills */}
      <section className="resume-section">
        <h2 className="section-title">TECHNICAL SKILLS</h2>
        <div className="skills-grid">
          <div className="skill-item">
            <strong>Languages & Frameworks:</strong> JavaScript, TypeScript, HTML, CSS, React, React Native, Node.js, Nest.js, SQL, Express.js
          </div>
          <div className="skill-item">
            <strong>Databases:</strong> PostgreSQL, MySQL
          </div>
          <div className="skill-item">
            <strong>Tools & Technologies:</strong> Git, REST APIs, Socket.io, Axios, Prisma, Google Drive API, VS Code, Nodemon
          </div>
          <div className="skill-item">
            <strong>Development Practices:</strong> Responsive Design, API Integration, Real-time Communication, User Authentication, CRUD Operations
          </div>
          <div className="skill-item">
            <strong>Spoken Languages:</strong> English (Native), Spanish (Fluent)
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="resume-section">
        <h2 className="section-title">PROJECTS</h2>
        
        <div className="project">
          <div className="project-header">
            <h3 className="project-title">Fleet Management System</h3>
            <p className="project-tech">Tech Stack: React, Node.js, Express.js, PostgreSQL, Google Drive API, Axios</p>
          </div>
          <ul className="project-list">
            <li>Developed full-stack application enabling drivers to report vehicle issues in real-time and mechanics to track repairs through a centralized system</li>
            <li>Implemented role-based authentication with separate driver and mechanic dashboards featuring work order queues and priority management</li>
            <li>Built receipt upload functionality with Google Drive API integration for expense tracking and documentation</li>
            <li>Engineered analytics dashboard displaying vehicle health metrics, issue trends, and maintenance schedules</li>
            <li>Designed relational database schema tracking vehicles, issues, work orders, and user relationships</li>
          </ul>
          <div className="project-links">
            <a href="https://github.com/yourusername/fleet-management" className="project-link">GitHub</a>
            <a href="https://your-fleet-app.com" className="project-link">Live Demo</a>
          </div>
        </div>

        <div className="project">
          <div className="project-header">
            <h3 className="project-title">Food Truck Notification System</h3>
            <p className="project-tech">Tech Stack: React, Node.js, Express.js, PostgreSQL, Socket.io</p>
          </div>
          <ul className="project-list">
            <li>Created real-time order management system allowing food trucks to generate QR code tickets for customer notifications</li>
            <li>Implemented Socket.io for live order status updates, delivering push notifications to Android devices and automatic screen refreshes for iOS</li>
            <li>Built dual dashboard system: active orders view and historical order archive for business analytics</li>
            <li>Developed drag-and-drop menu builder with dynamic resizing capabilities for on-the-fly menu customization</li>
            <li>Architected WebSocket connections handling concurrent customer connections and real-time state synchronization</li>
          </ul>
          <div className="project-links">
            <a href="https://github.com/yourusername/food-truck-notifier" className="project-link">GitHub</a>
            <a href="https://your-foodtruck-app.com" className="project-link">Live Demo</a>
          </div>
        </div>
      </section>

      {/* Professional Experience */}
      <section className="resume-section">
        <h2 className="section-title">PROFESSIONAL EXPERIENCE</h2>
        
        <div className="job">
          <div className="job-header">
            <h3 className="job-title">Flex Dental Solutions — Tier 2 Technical Support Lead & New Hire Trainer</h3>
            <p className="job-date">Feb 2024 – Present</p>
          </div>
          <ul className="job-list">
            <li>Resolve 50+ technical support tickets weekly, consistently ranking among top performers for speed and customer satisfaction</li>
            <li>Designed and implemented comprehensive new hire training program, reducing onboarding time by 40% and improving team consistency</li>
            <li>Mentor and coach 10+ new team members on technical troubleshooting, customer communication, and product expertise</li>
            <li>Collaborate with product and engineering teams to escalate complex issues and provide user feedback for feature improvements</li>
            <li>Document technical solutions and create knowledge base articles to improve team efficiency and self-service resources</li>
          </ul>
        </div>

        <div className="job">
          <div className="job-header">
            <h3 className="job-title">Cafe Zupas — Assistant Manager</h3>
            <p className="job-date">Dec 2021 – May 2024</p>
          </div>
          <ul className="job-list">
            <li>Managed daily operations and led team of 15+ employees in fast-paced, high-volume environment</li>
            <li>Trained new staff on operational procedures, customer service standards, and POS systems</li>
            <li>Optimized scheduling and workflow processes to improve team efficiency during peak hours</li>
          </ul>
        </div>
      </section>

      {/* Additional Experience */}
      <section className="resume-section">
        <h2 className="section-title">ADDITIONAL EXPERIENCE</h2>
        
        <div className="job-compact">
          <p><strong>IHOP</strong> — Assistant Manager</p>
          <p>Managed restaurant operations including inventory management, employee supervision, and customer relations</p>
        </div>

        <div className="job-compact">
          <p><strong>Sunrise Medical</strong> — Personal Aide (Autism Support)</p>
          <p>Provided specialized one-on-one care and developed customized behavior support strategies for young adult with autism</p>
        </div>
      </section>
    </div>
  );
}


