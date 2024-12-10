import project1 from "../assets/projects/fraud.webp";
import project2 from "../assets/projects/scdepth.jpg";
import project3 from "../assets/projects/project-3.jpg";

export const HERO_CONTENT = `Hi! I’m Hari, a backend-focused engineer by day and a writer, mixed martial artist, and avid reader by night. I’m passionate about building efficient, scalable systems, and when I’m not coding, I’m on the field playing football or training in MMA. I believe in the power of storytelling and technology to drive change, and I’m always eager for challenges that push my limits, both mentally and physically. Let’s make something impactful together !`;

export const ABOUT_TEXT = `I am a dedicated backend-focused engineer with a Bachelor's degree in Computer Science and 3 years of hands-on experience in server-side engineering, application backend, cloud migration, and machine learning/data science. I am skilled in leveraging technologies like Node.js, MS SQL, Python (Flask), C# .NET, and cloud solutions to build reliable and efficient systems. My toolset also includes Docker, C++, JavaScript, and React, giving me a well-rounded capability to support full-stack needs when required. I’m passionate about creating scalable and innovative solutions that drive efficiency and growth for modern businesses.`;

export const EXPERIENCES = [
  {
    year: "2018 - 2022",
    role: "B.Tech In Computer Science & Engineering",
    company: "Govt. Model Engineering College, Thrikkakara",
    description: `Graduated with a Bachelor’s degree in Computer Science from Model Engineering College in 2022.`,
    type: "edu",
    cgpa: "8.3",
  },
  {
    year: "2021 Dec - 2022 Jan",
    role: "Software Developer",
    company: "App Mastery",
    type: 'internship',
    description: `Completed an internship where I designed and developed user interfaces for mobile applications using Flutter. Collaborated closely with backend developers to integrate frontend components with Flask/Python APIs and implemented optimizations for frontend performance.`,
    technologies: ["Flutter", "Dart", "Python"],
  },
  {
    year: "2022 - Present",
    role: "Associate Software Engineer - Server Backend",
    company: "iManage LLC",
    type: 'fte',
    description: `Worked with the main server-side backend team on iManage Work, developing features, delivering bug fixes, and implementing storage optimizations. Built background services and collaborated with the team using C++ and Python/Flask.`,
    technologies: ["C++", "Python", "Flask"],
  },
  {
    year: "2022 - Present",
    role: "Associate Software Engineer - Cloud Migration",
    company: "iManage LLC",
    type: 'fte',
    description: `Contributed to a cloud migration project, implementing new migration APIs, functional tests, and query optimizations. Worked on several new migrations and handled performance improvements using C#, .NET, and Python for functional tests.`,
    technologies: ["C#", ".NET", "Python", "Docker"],
  }
];

export const PROJECTS = [
  {
    title: "OK Computer",
    image: project1,
    role: "ML Developer",
    description:
      "A web application that tells you whether a transaction is fraudulent or not based on the transaction details collected from the user.",
    technologies: ["Python", "Flask", "Tensorflow", "React", "Scikit Learn"],
  },
  {
    title: "SC Depth",
    image: project2,
    role: "ML Developer, Fullstack Developer",
    description:
      "An application that feeds on real time video input and provides a depth map output.",
    technologies: ["OpenCV", "Python", "Flask", "Tensorflow"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    role: "Fullstack Developer",
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "Tailwind CSS", "ReactJS"],
  }
];

export const CONTACT = {
  address: "Kochi, Kerala",
  phoneNo: "+91 6238154294 ",
  email: "harigovindv.mec@gmail.com",
};
