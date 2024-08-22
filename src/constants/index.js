import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  reactquiz,
  threejs,
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
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  // {
  //   name: "figma",
  //   icon: figma,
  // },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Saksham is a great team worker and a valuable asset to the team.",
    name: "Sejal",
    designation: "Student",
    company: "KIIT",
    image: "https://www.rd.com/wp-content/uploads/2018/02/33_Adorable-Puppy-Pictures-that-Will-Make-You-Melt_696648019_michaelheim.jpg?fit=700%2C467",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about the team like Saksham does.",
    name: "Jasmin",
    designation: "Student",
    company: "KIIT",
    image: "https://t4.ftcdn.net/jpg/07/65/15/75/240_F_765157555_muSlnN0OtEeo2lfIm2MmE8rYB3pU26G4.jpg",
  },
  // {
  //   // testimonial:
  //   //   "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
  //   // name: "Lisa Wang",
  //   // designation: "CTO",
  //   // company: "456 Enterprises",
  //   // image: "https://randomuser.me/api/portraits/women/6.jpg",
  // },
];

const projects = [
  {
    name: "Swadishtha",
    description:
      "The Food Delivery App is a web application designed to facilitate the ordering and delivery of food from local restaurants. Users can browse through menus, place orders, and track deliveries in real-time. The app focuses on providing a seamless and intuitive user experience, with features like restaurant filtering, cart management, and order tracking.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/sakshamXcode/Swadishtha",
  },
  {
    name: "World-Wise",
    description:
      "WorldWise is a web application designed to help users keep track of their travel adventures. The app likely allows users to record, view, and possibly share their travel experiences by integrating interactive maps and other user-friendly features.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
       {
         name: "leaflet",
         color: "green-text-gradient",
       },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/sakshamXcode/World-Wise",
  },
  {
    name: "React-Quiz",
    description:
      "The React Quiz project is a web-based quiz application built using React and Vite. It allows users to take quizzes on various topics, with features like multiple-choice questions, score tracking, and instant feedback. The project is designed to be fast and responsive, providing a smooth user experience.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "vite",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: reactquiz,
    source_code_link: "https://github.com/sakshamXcode/React-Quiz",
  },
];

export { services, technologies, experiences, testimonials, projects };
