/**
 * All site content lives here as plain data. This is a static,
 * backend-free build — index.html, css/, and js/ read directly from
 * window.MADALASA_FALLBACK, no server or database involved.
 */
window.MADALASA_FALLBACK = {
  projects: [
    {
      slug: "llm-prompt-injection-security-evaluation",
      title: "Unified Security Evaluation of LLMs",
      category: "AI_ML",
      shortDescription: "A structured security evaluation framework for detecting prompt injection, SQL-style attacks, and prompt leakage in LLMs.",
      problemStatement: "Large language models are increasingly exposed to prompt injection and prompt leakage attacks, but there is no unified, quantifiable way to evaluate how robust a given model is against them.",
      solution: "Built an evaluation framework grounded in the OWASP Top 10 (2025) LLM vulnerabilities, using DEFCON-based severity scoring alongside statistical and visual security metrics to quantify attack impact.",
      architectureNotes: "Attack test cases are run against target models -> responses are scored for leakage/injection success -> results are aggregated into DEFCON-based severity levels and visualized.",
      challenges: "Designing severity scoring that is comparable across very different attack types.",
      futureImprovements: "Expand the attack corpus and add automated regression testing against new model versions.",
      technologies: ["Python", "LLM APIs", "Data Visualization"],
      features: [
        "OWASP Top 10 (2025)-based test suite",
        "DEFCON-based severity scoring",
        "Statistical and visual security metrics",
        "Detects prompt injection, SQL-style attacks and prompt leakage"
      ],
      githubUrl: "https://github.com/Madiee1",
      liveDemoUrl: null,
      featured: true
    },
    {
      slug: "service-health-monitor",
      title: "Service Health Monitor",
      category: "PYTHON",
      shortDescription: "Built during my internship at Tekchant, Bangalore — watches a set of channels/services and automatically alerts the admin the moment one goes inactive.",
      problemStatement: "Teams often find out a service or channel has gone down only after someone notices manually — by then, the impact has already spread.",
      solution: "A Python monitoring script that periodically checks whether each configured channel/service is active, logs its state to MySQL, and fires an email alert to the admin the moment a channel flips to inactive.",
      architectureNotes: "Scheduler polls each channel on an interval -> status is diffed against the last known state in MySQL -> a state change to inactive triggers an SMTP email alert to the admin -> all checks and alerts are logged for later review.",
      challenges: "TODO — add the specific edge cases you handled (e.g. flapping channels, avoiding duplicate alerts).",
      futureImprovements: "TODO — e.g. a small dashboard for live channel status, SMS/Slack alerts in addition to email.",
      technologies: ["Python", "MySQL", "SMTP"],
      features: [
        "Continuous active/inactive checks per channel",
        "Automatic email alert to the admin on status change",
        "Persistent status history in MySQL",
        "Configurable check interval per channel"
      ],
      githubUrl: "https://github.com/Madiee1",
      liveDemoUrl: null,
      featured: true
    },
    {
      slug: "smartpg",
      title: "SmartPG",
      category: "WEB",
      shortDescription: "A PG (paying guest) accommodation management platform — currently in development.",
      problemStatement: "TODO — describe the specific problem SmartPG solves for PG owners/residents once the scope is finalized.",
      solution: "TODO — add the solution summary as the build progresses.",
      architectureNotes: "TODO",
      challenges: "TODO",
      futureImprovements: "TODO",
      technologies: ["TODO"],
      features: ["TODO — add features as they're built"],
      githubUrl: "https://github.com/Madiee1",
      liveDemoUrl: null,
      featured: false
    },
    {
      slug: "network-security-simulation-ongc",
      title: "Network Security & Communication Simulation",
      category: "SECURITY",
      shortDescription: "Network design and security simulation work using Cisco Packet Tracer, done during my cybersecurity internship at ONGC.",
      problemStatement: "Understanding how real network infrastructure is designed, secured, and monitored requires hands-on practice with routing, switching, and communication protocols — not just theory.",
      solution: "Built and analyzed network topologies in Cisco Packet Tracer to understand routing, switching, and communication protocols, applying that understanding alongside network security and cryptography fundamentals to support risk assessment and vulnerability identification work during the internship.",
      architectureNotes: "TODO — add specific topology diagrams/configurations if you'd like to showcase them.",
      challenges: "TODO",
      futureImprovements: "TODO",
      technologies: ["Cisco Packet Tracer", "Network Security", "Cryptography"],
      features: [
        "Simulated network topologies covering routing and switching",
        "Applied network security and cryptography fundamentals",
        "Supported risk assessment and vulnerability identification"
      ],
      githubUrl: null,
      liveDemoUrl: null,
      featured: false
    },
    {
      slug: "hostel-management-system",
      title: "Hostel Management System",
      category: "JAVA",
      shortDescription: "A web application for managing hostel operations, built with Java, Spring MVC and MySQL.",
      problemStatement: "Manual hostel administration — room allocation, occupancy tracking, and student records — is slow and error-prone on paper or spreadsheets.",
      solution: "A Spring MVC web application with separate student and administrator access, covering room and occupancy management and student information handling, with a responsive interface for both desktop and mobile.",
      architectureNotes: "Java + Spring MVC + Maven on the backend, MySQL for persistence, server-rendered views styled with JavaScript-enhanced interactions on the frontend.",
      challenges: "TODO — add specific challenges (e.g. concurrent room allocation, role-based access).",
      futureImprovements: "TODO — e.g. online fee payment, complaint tracking, notice board.",
      technologies: ["Java", "Spring MVC", "Maven", "JavaScript", "MySQL"],
      features: [
        "Separate student and administrator access",
        "Room and occupancy management",
        "Student information handling",
        "Responsive interface for desktop and mobile"
      ],
      githubUrl: "https://github.com/Madiee1",
      liveDemoUrl: null,
      featured: true
    },
    {
      slug: "smart-hotels",
      title: "Smart Hotels",
      category: "WEB",
      shortDescription: "A hotel service platform exploring QR-based, contactless hotel operations. TODO — add the finalized scope and details.",
      problemStatement: "TODO — describe the specific hotel workflow this project streamlines (e.g. contactless check-in, in-room service requests).",
      solution: "TODO — describe the solution once finalized.",
      architectureNotes: "TODO",
      challenges: "TODO",
      futureImprovements: "TODO",
      technologies: ["TODO"],
      features: ["TODO — add finalized feature list"],
      githubUrl: "https://github.com/Madiee1",
      liveDemoUrl: null,
      featured: false
    }
  ],

  skills: [
    { name: "Java", category: "PROGRAMMING" },
    { name: "Python", category: "PROGRAMMING" },
    { name: "JavaScript", category: "PROGRAMMING" },
    { name: "SQL", category: "PROGRAMMING" },

    { name: "HTML", category: "WEB_DEVELOPMENT" },
    { name: "CSS", category: "WEB_DEVELOPMENT" },
    { name: "JavaScript", category: "WEB_DEVELOPMENT" },
    { name: "Spring", category: "WEB_DEVELOPMENT" },
    { name: "Spring MVC", category: "WEB_DEVELOPMENT" },
    { name: "Maven", category: "WEB_DEVELOPMENT" },
    { name: "REST APIs", category: "WEB_DEVELOPMENT" },

    { name: "Machine Learning", category: "AI_ML" },
    { name: "YOLOv8 (fundamentals)", category: "AI_ML" },
    { name: "Network Security", category: "AI_ML" },

    { name: "MySQL", category: "DATABASE" },

    { name: "Git", category: "TOOLS" },
    { name: "GitHub", category: "TOOLS" },
    { name: "Figma", category: "TOOLS" }
  ],

  experience: [
    {
      role: "Training Program",
      organization: "KVK Technoid",
      location: null,
      startDate: "2026-01-01",
      endDate: "2026-01-01",
      description: "Completed practical training in software development with hands-on exposure to Java, Python, MySQL, web development, and application development workflows.",
      technologies: ["Java", "Python", "MySQL", "Spring MVC", "Maven"],
      highlights: [
        "Gained experience in Spring MVC and Maven-based project development",
        "Practiced UI/UX design and testing"
      ]
    },
    {
      role: "Intern",
      organization: "Tekchant",
      location: "Bangalore",
      startDate: "2026-03-01",
      endDate: "2026-05-31",
      description: "Worked on Python and MySQL-based projects for monitoring systems, testing functionalities, and generating real-time alerts and updates during failures or abnormal activities.",
      technologies: ["Python", "MySQL"],
      highlights: [
        "Assisted in identifying system issues and automating status tracking",
        "Improved operational reliability through backend testing and database management"
      ]
    },
    {
      role: "Cybersecurity Intern",
      organization: "ONGC",
      location: "Kakinada",
      startDate: "2025-06-01",
      endDate: "2025-07-31",
      description: "Applied fundamentals of network security, cryptography, and threat analysis in a real organizational setting.",
      technologies: ["Network Security", "Cryptography"],
      highlights: ["Assisted in risk assessment and identification of system vulnerabilities"]
    }
  ],

  education: [
    {
      degree: "B.Tech in Information Technology",
      institution: "Gayatri Vidya Parishad College of Engineering for Women",
      location: "Visakhapatnam",
      startDate: "2022-11-01",
      endDate: "2026-05-31",
      detail: "CGPA: 7.65 (through 8th semester)"
    },
    {
      degree: "Intermediate (IPE)",
      institution: "Aditya Junior College",
      location: null,
      startDate: "2020-06-01",
      endDate: "2022-08-31",
      detail: "Percentage: 56.2%"
    },
    {
      degree: "CBSE Secondary School",
      institution: "Akshara School",
      location: "Kakinada",
      startDate: null,
      endDate: "2020-06-01",
      detail: "Percentage: 69.4%"
    }
  ],

  certifications: [
    { name: "Data Analytics Job Simulation", issuer: "Deloitte" },
    { name: "Fabric Data Warehouse", issuer: "Microsoft" },
    { name: "Data Visualisation: Empowering Business with Effective Insights", issuer: "Tata" },
    { name: "IT Networking and Communication", issuer: "ONGC" },
    { name: "APTIS ESOL English Proficiency (B2)", issuer: "British Council" },
    { name: "Product Development Department", issuer: "Tekchant" }
  ],

  achievements: [
    {
      title: "Wonder Book of Records — Kuchipudi",
      description: "Recognized in the Wonder Book of Records for Kuchipudi classical dance.",
      category: "AWARD"
    }
  ],

  activities: [
    {
      title: "Personality Development Club",
      role: "Secretary",
      dateRange: null,
      description: "Managed event planning, coordinated team members, and conducted skill-development sessions to foster confidence, communication, and leadership among students.",
      category: "LEADERSHIP"
    }
  ]
};
