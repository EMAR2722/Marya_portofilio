export const profile = {
  name: "Marya Getu",
  headline: "Frontend Developer & Full-Stack Developer",
  intro: "I build clear, responsive web apps with React, Next.js and TypeScript, and I narrate Amharic poems and books.",
  about: "I'm a fifth-year Computer Science and Engineering student at Adama Science and Technology University. I have worked on team projects from a hackathon, an internship and company work, always on the frontend. I'm learning data analytics at ALX, I'm trained in data annotation, and I've studied graphic design and video editing.",
  quote: "I have overcome yesterday by leaning on You, and I will face tomorrow too, because You are my Father.",
  email: "maryagetu04@gmail.com",
  phone: "+251992067572",
  github: "https://github.com/EMAR2722",
  linkedin: "https://www.linkedin.com/in/marya-getu-14003b319",
  telegram: "https://t.me/Mar_ye_27",
};
export const skills = [
  { group: "Frontend", items: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "HTML5", "CSS3"] },
  { group: "Backend & data", items: ["PostgreSQL", "REST APIs", "JWT auth", "Django REST", "Python (basic)"] },
  { group: "Creative", items: ["Adobe Illustrator", "Adobe Photoshop", "Adobe Premiere Pro", "Amharic voice narration"] },
  { group: "Learning", items: ["Data analytics (ALX)", "Data annotation"] },
];
// TODO: edit descriptions below. repo: null hides the code button (use for private repos).
export const projects = [
  { title: "Gibi Gubae Management System", tag: "Hackathon 2026", stack: ["React", "Django REST", "PostgreSQL", "JWT", "Chapa"],
    text: "Platform for a campus community to manage students, service groups, donations and anonymous counseling, with Student and Admin roles and Chapa payments.", repo: null as string | null },
  { title: "Help Desk Management System", tag: "Company project", stack: ["Next.js", "PostgreSQL"],
    text: "Team-built help desk for handling support tickets and requests. I worked on the frontend.", repo: null },
  { title: "Driver License School Management System", tag: "Team project", stack: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    text: "Four portals (student, instructor, supervisor, manager) with role-based login, exam management, progress tracking and certificates, built for Ethiopian driving schools.", repo: "https://github.com/Moh-Sad/Driver-License-School-Management-System" },
  { title: "Smart Agriculture Monitoring System", tag: "Integrated project", stack: ["Frontend"],
    text: "Monitoring dashboard built with a team as part of our integrated project.", repo: "https://github.com/bayedhaf/Smart-Agriculture-Monitoring-System-Integrated-Project" },
  { title: "Infnova Applicant Dashboard", tag: "Solo project", stack: ["Frontend"],
    text: "A dashboard for managing applicants.", repo: "https://github.com/EMAR2722/infnova-applicant-dashboard" },
  { title: "University Collaboration System", tag: "Internship", stack: ["React", "Tailwind CSS"],
    text: "Web platform that helps university departments communicate and share resources, with a clean responsive dashboard.", repo: null },
  { title: "Radiant Rose Designs", tag: "Solo project", stack: ["Frontend"], text: "A design-focused website I built on my own.", repo: "https://github.com/EMAR2722/radiant-rose-designs" },
  { title: "CodeAlpha: Calculator, Music Player, Image Gallery", tag: "CodeAlpha internship", stack: ["HTML", "CSS", "JavaScript"],
    text: "Three small apps built during my CodeAlpha internship, plus my portfolio site.", repo: "https://github.com/EMAR2722/CodeAlpha_PortfolioSite" },
];
export const experience = [
  { when: "Summer 2026", title: "Help Desk Management System Developer", org: "Company project, team of developers", text: "Built the interface and features for a help desk system using Next.js and PostgreSQL." },
  { when: "Jul – Sep 2025", title: "Computer Science & Engineering Intern", org: "Ministry of Innovation and Technology", text: "Built responsive interfaces for internal web apps with React, JavaScript and Tailwind CSS, and created the University Collaboration System." },
  { when: "3+ years", title: "Volunteer", org: "Community and campus activities", text: "Volunteer work that built my teamwork, organization and communication skills." },
];
export const certificates = [
  { title: "Graphic Design & Video Editing", org: "Mesob Schools", date: "2026", note: "Adobe Illustrator, Photoshop, Premiere Pro", img: "/certs/mesob.jpg", file: "/certs/mesob.jpg" },
  { title: "Data Annotation with AnnotatePlus", org: "R&D Group", date: "July 2025", note: "", img: "/certs/annotate.jpg", file: "/certs/annotate.jpg" },
  { title: "Data Analysis Fundamentals", org: "Udacity", date: "Dec 2024", note: "", img: "/certs/data-analysis.png", file: "/docs/data-analysis.pdf" },
  { title: "Android Developer Fundamentals", org: "Udacity", date: "Dec 2024", note: "", img: "/certs/android.png", file: "/docs/android.pdf" },
  { title: "Digital Literacy Skills", org: "Dereja, Mastercard Foundation & ASTU", date: "July 2024", note: "", img: "/certs/dereja.png", file: "/docs/dereja.pdf" },
];
export const voices = [
  { title: "ቅማል በ 10ሺ ብር", src: "/audio/voice1.mp3" },
  { title: "ዘመም ይላል እንጂ", src: "/audio/voice2.mp3" },
  { title: "የጨለልኩበት ቀን", src: "/audio/voice3.mp3" },
];
