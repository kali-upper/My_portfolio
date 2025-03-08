import {
  creator,
  web,
  Portfolio,
  ytFilter,
  videoPortfolio,
  react,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React.js Developer",
    icon: react,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "Web Development",
    icon: web,
  },
  {
    name: "React.js",
    icon: react,
  },
  {
    name: "Content Creation",
    icon: creator,
  },
];

const experiences = [
  {
    title: "Web Developer",
    company_name: "Freelance",
    icon: web,
    iconBg: "#383E56",
    date: "Dec 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Creating responsive and user-friendly interfaces for various client projects.",
      "Implementing modern web development practices and ensuring cross-browser compatibility.",
      "Working closely with clients to understand their needs and deliver high-quality solutions.",
    ],
  },
  {
    title: "React.js Developer",
    company_name: "Web Projects",
    icon: react,
    iconBg: "#E6DEDD",
    date: "July 2024 - Present",
    points: [
      "Building Web applications using React.js and related technologies.",
      "Designing and implementing user interfaces for Web platforms.",
      "Optimizing Website performance and ensuring smooth user experience.",
      "Collaborating with clients to implement features and resolve technical issues.",
    ],
  },
  {
    title: "Content Creator",
    company_name: "Digital Media",
    icon: creator,
    iconBg: "#383E56",
    date: "Jan 2024 - Present",
    points: [
      "Creating engaging digital content for various platforms and audiences.",
      "Developing creative strategies and maintaining consistent brand identity.",
      "Collaborating with teams to produce high-quality multimedia content.",
      "Managing content calendars and meeting project deadlines effectively.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but FOTE proved me wrong.",
    name: "Sara Lee",
    designation: "Content Creator",
    company: "",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like FOTE does.",
    name: "Chris Brown",
    designation: "Video Editor",
    company: "",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After FOTE optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "Photographer",
    company: "",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Photo Editor Portfolio",
    description:
      "A professional portfolio website showcasing photo editing skills and creative work. Features a modern interface with responsive design and interactive galleries.",
    tags: [
      {
        name: "react.js",
        color: "blue-text-gradient",
      },
      {
        name: "next.js",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: Portfolio,
    source_code_link: "https://github.com/kali-upper/MY-portfolio",
    live_demo_link: "https://fote.vercel.app/"
  },
  {
    name: "Youtube Filter",
    description:
      "YT-Filter is a web application that allows users to filter YouTube videos based on specific criteria, providing a more personalized and convenient viewing experience.",
    tags: [
      {
        name: "react.js",
        color: "blue-text-gradient",
      },
      {
        name: "next.js",
        color: "green-text-gradient",
      },
      {
        name: "netlify",
        color: "pink-text-gradient",
      },
    ],
    image: ytFilter,
    source_code_link: "https://github.com/kali-upper/YT_Filter",
    live_demo_link: "https://yt-filter.netlify.app/"
  },
  {
    name: "Video Editor Portfolio",
    description:
      "A professional portfolio showcasing video editing projects and creative storytelling. Features post-production work samples and a modern interface for exploring visual content.",
    tags: [
      {
        name: "react.js",
        color: "blue-text-gradient",
      },
      {
        name: "next.js",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: videoPortfolio,
    source_code_link: "https://github.com/kali-upper/MY-portfolio",
    live_demo_link: "https://me-fote.netlify.app/"
  },
];

export { services, technologies, experiences, testimonials, projects };
