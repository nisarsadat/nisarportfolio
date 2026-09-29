// ============================================================================
//  ALL PORTFOLIO CONTENT LIVES IN THIS ONE FILE.
//  Filled in from your CV — update anything here and the whole site follows.
// ============================================================================

export const profile = {
  name: 'Sayed Nisar Sadat',
  firstName: 'Nisar',
  initials: 'SN',

  location: 'Kabul, Afghanistan',

  email: 'nisarjo1234@gmail.com',

  // Your phone numbers (first one is treated as primary)
  phones: ['0782606740', '+93 729 288 173', '+93 744 845 257'],

  languages: 'Dari (Native), Pashto (Fluent), English, Urdu',

  tagline:
    'Full Stack Software Engineer building responsive web applications with Vue.js, Laravel and MySQL — from database design to Ubuntu server deployment.',

  // Rotating roles under your name in the hero
  roles: ['Full Stack Web Applications', 'Vue.js & Laravel Systems', 'Database Design', 'Server Deployment'],

  // Your photo — placed in public/me.jpeg
  photo: 'me.jpeg',

  // Your CV — already placed in public/cv.pdf, powers the "Download CV" button
  resumeUrl: 'cv.pdf',

  openToWork: true,
}

export const socials = {
  github: 'https://github.com/nisarsadat',
  linkedin: 'https://www.linkedin.com/in/sayed-nisar-sadaat-7a60a5411',
  facebook: 'https://www.facebook.com/share/1JSNVhMYpT/?mibextid=wwXIfr',
}

export const about = {
  paragraphs: [
    "I'm Sayed Nisar Sadat, a Full Stack Software Engineer from Kabul, Afghanistan. I build responsive web applications with Vue.js, Vuetify, Laravel, PHP and MySQL — and I handle the whole journey, from designing the database to deploying on Ubuntu servers with Nginx and PHP-FPM.",
    "Beyond web development, I work on database systems, server maintenance and IT support — from LAN/WAN troubleshooting to hardware and software problem-solving. I also love teaching: I volunteer as a web development instructor, helping university students learn Vue.js, Laravel and MySQL through real-world projects.",
    "I'm comfortable working remotely with teams, supporting customers, and mentoring junior developers. I enjoy solving technical problems with clear communication, and I'm always looking for the next challenge worth solving.",
  ],
}

export const stats = [
  { value: '3+', label: 'Years of Experience' },
  { value: '8+', label: 'Projects Shipped' },
  { value: '15+', label: 'Technologies Mastered' },
  { value: '4', label: 'Languages Spoken' },
]

export const skills = [
  {
    icon: 'code',
    name: 'Frontend',
    blurb: 'Building responsive, user-friendly interfaces and components.',
    items: ['Vue.js', 'Vuetify', 'React.js', 'React Native', 'JavaScript', 'HTML & CSS', 'Axios', 'Responsive UI'],
  },
  {
    icon: 'server',
    name: 'Backend',
    blurb: 'Designing solid APIs, authentication and backend logic.',
    items: ['Laravel', 'PHP', 'REST APIs', 'Laravel Sanctum', 'Authentication', 'CRUD Systems'],
  },
  {
    icon: 'database',
    name: 'Databases',
    blurb: 'Modeling, maintaining and protecting data.',
    items: ['MySQL', 'PostgreSQL', 'Database Design', 'Backup & Recovery', 'Query Optimization', 'Data Management'],
  },
  {
    icon: 'cloud',
    name: 'Servers & Deployment',
    blurb: 'Shipping and running apps in production environments.',
    items: ['Ubuntu Server', 'Windows Server', 'Nginx', 'PHP-FPM', 'Domain Setup', 'Deployment'],
  },
  {
    icon: 'wrench',
    name: 'IT Support',
    blurb: 'Keeping infrastructure and users up and running.',
    items: ['LAN/WAN', 'Network Cabling', 'Hardware Troubleshooting', 'PC & Laptop Maintenance', 'Printers/Scanners'],
  },
  {
    icon: 'tools',
    name: 'Tools & Teamwork',
    blurb: 'Everything that keeps the process smooth.',
    items: ['Git', 'GitHub', 'Microsoft Office', 'Technical Documentation', 'Remote Teamwork', 'Mentoring'],
  },
]

export const projects = [
  {
    title: 'EliteBookPro — ERP System',
    description:
      'A full ERP platform for business management, built as a team project at Elite Valley — I was part of the development team, working on web development of the system for real production use.',
    tech: ['Vue.js', 'Laravel', 'MySQL', 'Team Project'],
    github: '',
    live: 'https://elitebookpro.com',
  },
  {
    title: 'EliteBookPro — Live Demo',
    description:
      'The live demo environment of our ERP platform, open for anyone to explore. Team project — I contributed to the development as part of the team. Demo login: admin@elitevalley.af / 123456.',
    tech: ['Vue.js', 'Laravel', 'MySQL', 'REST APIs'],
    github: '',
    live: 'https://demo.elitebookpro.com',
  },
  {
    title: 'Hammad Chemical Website',
    description:
      'A company website for Hammad Chemical, deployed on Vercel with a Dari-language interface — reachable at /fa for Dari visitors.',
    tech: ['React', 'Vercel', 'Bilingual UI'],
    github: '',
    live: 'https://hammadchemicall.vercel.app/fa',
  },
  {
    title: 'Internal Business Apps — HR & HEMIS',
    description:
      'A range of offline and non-published business applications — HR systems, HEMIS-related tools and company websites — built for real internal use, from database design to deployment.',
    tech: ['Vue.js', 'Laravel', 'MySQL', 'Internal Tools'],
    github: '',
    live: '',
  },
  {
    title: 'Employee Management System',
    description:
      'Full-featured employee management platform with secure authentication (Laravel Sanctum) and REST APIs. Includes a real-time chat module built with Laravel Reverb — voice & video calling, file sharing and live notifications — wrapped in a responsive Vuetify UI.',
    tech: ['Vue.js', 'Vuetify', 'Laravel', 'MySQL', 'Laravel Reverb'],
    github: '',
    live: '',
  },
  {
    title: 'Clothing Shop Management System',
    description:
      'Database-driven system for managing a clothing shop — CRUD operations for inventory, sales and customers, with a clean, responsive interface built for daily shop use.',
    tech: ['Vue.js', 'Laravel', 'MySQL'],
    github: '',
    live: '',
  },
  {
    title: 'Elite Valley Internship Projects',
    description:
      'Multiple production-level applications built during a two-year internship — responsive frontend interfaces with API integration, plus backend systems and database structures in Laravel and MySQL.',
    tech: ['Vue.js', 'Laravel', 'MySQL', 'REST APIs'],
    github: '',
    live: '',
  },
  {
    title: 'Web Deployment & Server Management',
    description:
      'Deployed and maintained production web applications on Ubuntu servers — configuring Nginx and PHP-FPM, managing domain setup, optimizing performance and supporting system stability and security.',
    tech: ['Ubuntu Server', 'Nginx', 'PHP-FPM', 'Domain Setup'],
    github: '',
    live: '',
  },
]

export const experience = [
  {
    period: 'April 2026 — Present',
    role: 'Full Stack Web Developer',
    company: 'Elite Valley Company, Kabul',
    summary:
      'Working on web development — building and maintaining company web systems and applications. Alongside development, I handle customer service (supporting clients, answering questions and solving service issues) and office management for the team.',
  },
  {
    period: 'Current',
    role: 'English & Computer Instructor',
    company: 'Faza English and Computer Academy',
    summary:
      'Teaching English language and practical computer skills to academy students — helping them build strong foundations in both.',
  },
  {
    period: '2025 — Present',
    role: 'Full Stack Developer',
    company: 'Ronika Brand, Kabul (Remote)',
    summary:
      'Developing and maintaining full-stack web applications with a Vue.js frontend and Laravel backend, collaborating with a remote team on real-world tasks and improving system performance and user experience.',
  },
  {
    period: '2023 — 2025',
    role: 'Frontend & Full Stack Developer (Intern)',
    company: 'Elite Valley, Kabul',
    summary:
      'Year 1 — built responsive web interfaces using JavaScript, Vue.js and UI components. Year 2 — developed full-stack applications with Vue.js and Laravel, building REST APIs and database structures for production-level features.',
  },
  {
    period: 'Current',
    role: 'Web Development Instructor (Volunteer)',
    company: 'Kabul',
    summary:
      'Teaching university students Vue.js, Laravel and MySQL — helping them build real-world projects, mentoring junior developers and training students in practical computer skills.',
  },
  {
    period: '2023 — 2025',
    role: 'Computer Skills Trainer (Volunteer)',
    company: 'Kabul University',
    summary:
      'Taught Microsoft Office (Word, Excel, PowerPoint) and practical computer use to students from non-technical departments.',
  },
]

export const education = [
  {
    period: '2021 — 2025',
    role: "Bachelor's Degree in Software Engineering",
    company: 'Kabul University, Kabul',
    summary:
      'Studied software engineering, programming, database systems and web development foundations.',
  },
  {
    period: '2009 — 2021',
    role: 'High School Diploma',
    company: 'Dar-ul-Huda Private High School, Logar',
    summary: 'Completed secondary education.',
  },
]
