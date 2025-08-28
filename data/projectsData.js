import { v4 as uuidv4 } from "uuid";
import {
  FiFacebook,
  FiInstagram,
  FiLinkedin,
  FiTwitter,
  FiYoutube,
} from "react-icons/fi";

export const projectsData = [
  {
    id: 1,
    title: "Beauty Salon",
    url: "https://vc-beauty-ba-git-main-danmartinez01.vercel.app/",
    github: "https://github.com/DanMartinez01/VcBeautyBA/",
    category: "Web Application",
    img: "/images/vcscreen.JPG",
    technologies: ["React", "CSS"],
    ProjectHeader: {
      title: "VcBeauty",
      publishDate: "2021",
      tags: "Frontend",
    },
    ProjectImages: [
      {
        id: uuidv4(),
        title: "Vc Beauty",
        img: "/images/vcscreen.jpg",
      },
    ],
    ProjectInfo: {
      ClientHeading: "About Client",
      CompanyInfo: [
        {
          id: uuidv4(),
          title: "Name",
          details: "VcBeauty Salon",
        },
        {
          id: uuidv4(),
          title: "Services",
          details: "Beauty & Wellness",
        },
        {
          id: uuidv4(),
          title: "Website",
          details: "https://vc-beauty-ba-git-main-danmartinez01.vercel.app/",
        },
        {
          id: uuidv4(),
          title: "Phone",
          details: "Contact via website",
        },
      ],
      ObjectivesHeading: "Objective",
      ObjectivesDetails:
        "A modern beauty salon website built with React and CSS. Features include appointment booking, service showcase, and responsive design for mobile and desktop users.",
      Technologies: [
        {
          title: "Tools & Technologies",
          techs: ["React", "CSS", "Responsive Design"],
        },
      ],
      ProjectDetailsHeading: "Challenge",
      ProjectDetails: [
        {
          id: uuidv4(),
          details:
            "Developed a professional beauty salon website that showcases services, allows online booking, and provides an excellent user experience across all devices. The project required careful attention to design aesthetics and user interface to match the beauty industry standards.",
        },
        {
          id: uuidv4(),
          details:
            "Implemented responsive design principles to ensure the website looks and functions perfectly on mobile phones, tablets, and desktop computers.",
        },
        {
          id: uuidv4(),
          details:
            "Created an intuitive navigation system and booking interface that makes it easy for customers to find services and schedule appointments.",
        },
        {
          id: uuidv4(),
          details:
            "The project demonstrates strong frontend development skills with React and modern CSS techniques, delivering a polished and professional web application.",
        },
      ],
      SocialSharingHeading: "Share This",
    },
  },
  {
    id: 2,
    title: "English corner",
    url: "https://theenglishcorner.vercel.app/",
    github: "https://github.com/DanMartinez01/MiniLibrary-with-Next.Js/",
    category: "Web Application",
    technologies: ["React", "Typescript", "ChakraUI"],
    img: "/images/bookcorner.JPG",
    ProjectHeader: {
      title: "Book Corner",
      publishDate: "2022",
      tags: "Web Application",
    },
    ProjectImages: [
      {
        id: uuidv4(),
        title: "Book Corner",
        img: "/images/bookcorner.JPG",
      },
    ],
    ProjectInfo: {
      ClientHeading: "About Client",
      CompanyInfo: [
        {
          id: uuidv4(),
          title: "Name",
          details: "Educational Platform",
        },
        {
          id: uuidv4(),
          title: "Services",
          details: "English Learning & Education",
        },
        {
          id: uuidv4(),
          title: "Website",
          details: "https://theenglishcorner.vercel.app/",
        },
        {
          id: uuidv4(),
          title: "Phone",
          details: "Contact via website",
        },
      ],
      ObjectivesHeading: "Objective",
      ObjectivesDetails:
        "An English learning platform built with Next.js and TypeScript. Features include interactive lessons, progress tracking, and a modern UI with Chakra UI components.",
      Technologies: [
        {
          title: "Tools & Technologies",
          techs: [
            "Next.js",
            "TypeScript",
            "Chakra UI",
            "React",
            "Responsive Design",
          ],
        },
      ],
      ProjectDetailsHeading: "Challenge",
      ProjectDetails: [
        {
          id: uuidv4(),
          details:
            "Created a comprehensive English learning platform that combines modern web technologies with educational content. The challenge was to build an intuitive interface that makes learning engaging while maintaining technical excellence.",
        },
        {
          id: uuidv4(),
          details:
            "Implemented TypeScript for better code quality and maintainability, ensuring a robust foundation for future development.",
        },
        {
          id: uuidv4(),
          details:
            "Used Chakra UI to create a consistent and accessible design system that works seamlessly across different devices and screen sizes.",
        },
        {
          id: uuidv4(),
          details:
            "The project demonstrates full-stack development skills with Next.js, showcasing both frontend and backend capabilities in a real-world application.",
        },
      ],
      SocialSharingHeading: "Share This",
    },
  },
  {
    id: 3,
    title: "Blog App",
    url: "project-management-ui",
    github: "https://github.com/DanMartinez01/myblogapp/",
    category: "Web application",
    technologies: ["NextJs", "Postgres", "Tailwind"],
    img: "/images/blogapp.JPG",
    ProjectHeader: {
      title: "Blog App",
      publishDate: "2024",
      tags: "Fullstack",
    },
    ProjectImages: [
      {
        id: uuidv4(),
        title: "Blog App",
        img: "/images/blogapp",
      },
    ],
    ProjectInfo: {
      ClientHeading: "About Client",
      CompanyInfo: [
        {
          id: uuidv4(),
          title: "Name",
          details: "Personal Blog Platform",
        },
        {
          id: uuidv4(),
          title: "Services",
          details: "Content Management & Blogging",
        },
        {
          id: uuidv4(),
          title: "Website",
          details: "Personal Project",
        },
        {
          id: uuidv4(),
          title: "Phone",
          details: "Contact via GitHub",
        },
      ],
      ObjectivesHeading: "Objective",
      ObjectivesDetails:
        "A full-stack blog application built with Next.js, PostgreSQL, and Tailwind CSS. Features include user authentication, content management, and a modern responsive design.",
      Technologies: [
        {
          title: "Tools & Technologies",
          techs: [
            "Next.js",
            "PostgreSQL",
            "Tailwind CSS",
            "Authentication",
            "Full-stack Development",
          ],
        },
      ],
      ProjectDetailsHeading: "Challenge",
      ProjectDetails: [
        {
          id: uuidv4(),
          details:
            "Developed a complete blog platform from scratch, implementing both frontend and backend functionality. The project required database design, user authentication, and content management systems.",
        },
        {
          id: uuidv4(),
          details:
            "Integrated PostgreSQL database for reliable data storage and management, ensuring data integrity and performance.",
        },
        {
          id: uuidv4(),
          details:
            "Implemented user authentication and authorization systems to provide secure access to blog features and content management.",
        },
        {
          id: uuidv4(),
          details:
            "Used Tailwind CSS for rapid UI development while maintaining a clean and professional design that enhances the reading experience.",
        },
      ],
      SocialSharingHeading: "Share This",
    },
  },
  {
    id: 4,
    title: "El almacen",
    url: "https://elalmacenjs.netlify.app/",
    github: "https://github.com/DanMartinez01/El-almacen/",
    category: "Frontend",
    technologies: ["HTML", "CSS"],
    img: "/images/almacen1.JPG",
    ProjectHeader: {
      title: "El almacen",
      publishDate: "2022",
      tags: "Frontend",
    },
    ProjectImages: [
      {
        id: uuidv4(),
        title: "El almacen",
        img: "/images/almacen1.jpg",
      },
    ],
    ProjectInfo: {
      ClientHeading: "About Client",
      CompanyInfo: [
        {
          id: uuidv4(),
          title: "Name",
          details: "El Almacen Store",
        },
        {
          id: uuidv4(),
          title: "Services",
          details: "Retail & E-commerce",
        },
        {
          id: uuidv4(),
          title: "Website",
          details: "https://elalmacenjs.netlify.app/",
        },
        {
          id: uuidv4(),
          title: "Phone",
          details: "Contact via website",
        },
      ],
      ObjectivesHeading: "Objective",
      ObjectivesDetails:
        "A retail store website built with HTML and CSS. Features include product showcase, store information, and a clean, professional design for local business.",
      Technologies: [
        {
          title: "Tools & Technologies",
          techs: ["HTML5", "CSS3", "Responsive Design", "Static Website"],
        },
      ],
      ProjectDetailsHeading: "Challenge",
      ProjectDetails: [
        {
          id: uuidv4(),
          details:
            "Created a professional retail store website using only HTML and CSS, demonstrating strong fundamentals in web development and design principles.",
        },
        {
          id: uuidv4(),
          details:
            "Implemented responsive design to ensure the website works perfectly on all devices, from mobile phones to desktop computers.",
        },
        {
          id: uuidv4(),
          details:
            "Designed an intuitive layout that effectively showcases products and store information while maintaining excellent user experience.",
        },
        {
          id: uuidv4(),
          details:
            "The project showcases clean, semantic HTML structure and well-organized CSS styling, demonstrating attention to code quality and best practices.",
        },
      ],
      SocialSharingHeading: "Share This",
    },
  },
  {
    id: 5,
    title: "Color Guessing Game",
    url: "https://guessthecolorrgb.netlify.app/",
    github: "https://github.com/DanMartinez01/colorGameJS/",
    category: "Web Application",
    technologies: ["HTML", "CSS", "Javascript"],
    img: "/images/rgbgame.JPG",
    ProjectHeader: {
      title: "Guess Color Game",
      publishDate: "2021",
      tags: "Frontend",
    },
    ProjectImages: [
      {
        id: uuidv4(),
        title: "Color Guessing Game",
        img: "/images/rgbgame.jpg",
      },
      {
        id: uuidv4(),
        title: "WeTalk Social Application",
        img: "/images/web-project-2.jpg",
      },
      {
        id: uuidv4(),
        title: "WeTalk Social Application",
        img: "/images/mobile-project-2.jpg",
      },
    ],
    ProjectInfo: {
      ClientHeading: "About Client",
      CompanyInfo: [
        {
          id: uuidv4(),
          title: "Name",
          details: "Educational Game",
        },
        {
          id: uuidv4(),
          title: "Services",
          details: "Interactive Learning & Entertainment",
        },
        {
          id: uuidv4(),
          title: "Website",
          details: "https://guessthecolorrgb.netlify.app/",
        },
        {
          id: uuidv4(),
          title: "Phone",
          details: "Play online",
        },
      ],
      ObjectivesHeading: "Objective",
      ObjectivesDetails:
        "An interactive color guessing game built with vanilla JavaScript. Players guess RGB color values while learning about web colors and improving their color recognition skills.",
      Technologies: [
        {
          title: "Tools & Technologies",
          techs: [
            "HTML5",
            "CSS3",
            "Vanilla JavaScript",
            "Game Development",
            "Interactive Design",
          ],
        },
      ],
      ProjectDetailsHeading: "Challenge",
      ProjectDetails: [
        {
          id: uuidv4(),
          details:
            "Developed an engaging educational game that teaches RGB color theory through interactive gameplay. The challenge was to create an intuitive interface that makes learning fun and accessible.",
        },
        {
          id: uuidv4(),
          details:
            "Implemented game logic using vanilla JavaScript, including random color generation, score tracking, and difficulty levels to enhance user engagement.",
        },
        {
          id: uuidv4(),
          details:
            "Created a responsive design that works seamlessly across different devices, ensuring the game is accessible to users on mobile, tablet, and desktop.",
        },
        {
          id: uuidv4(),
          details:
            "The project demonstrates strong JavaScript fundamentals and creative problem-solving skills in game development and user interface design.",
        },
      ],
      SocialSharingHeading: "Share This",
    },
  },
  {
    id: 6,
    title: "Jewelry Store",
    url: "https://otrocielostore.netlify.app/",
    github: "https://github.com/DanMartinez01/otrocielo-ecommerce/",
    category: "Web Application",
    img: "/images/oc.JPG",
    technologies: ["React", "CSS", "Firebase"],
    ProjectHeader: {
      title: "Otro Cielo Jewelry",
      publishDate: "2022",
      tags: "E-commerce",
    },
    ProjectImages: [
      {
        id: uuidv4(),
        title: "Otro Cielo Jewelry Store",
        img: "/images/ui-project-1.jpg",
      },
    ],
    ProjectInfo: {
      ClientHeading: "About Client",
      CompanyInfo: [
        {
          id: uuidv4(),
          title: "Name",
          details: "Otro Cielo Jewelry",
        },
        {
          id: uuidv4(),
          title: "Services",
          details: "Jewelry & Accessories",
        },
        {
          id: uuidv4(),
          title: "Website",
          details: "https://otrocielostore.netlify.app/",
        },
        {
          id: uuidv4(),
          title: "Phone",
          details: "Contact via website",
        },
      ],
      ObjectivesHeading: "Objective",
      ObjectivesDetails:
        "A modern e-commerce jewelry store built with React, CSS, and Firebase. Features include product catalog, shopping cart functionality, and secure payment processing.",
      Technologies: [
        {
          title: "Tools & Technologies",
          techs: [
            "React",
            "CSS",
            "Firebase",
            "E-commerce",
            "Payment Integration",
          ],
        },
      ],
      ProjectDetailsHeading: "Challenge",
      ProjectDetails: [
        {
          id: uuidv4(),
          details:
            "Developed a complete e-commerce platform for a jewelry store, implementing product management, shopping cart functionality, and secure payment processing using Firebase services.",
        },
        {
          id: uuidv4(),
          details:
            "Integrated Firebase for backend services including authentication, database management, and payment processing to create a scalable and secure e-commerce solution.",
        },
        {
          id: uuidv4(),
          details:
            "Created an elegant and professional design that showcases jewelry products effectively while providing an excellent shopping experience for customers.",
        },
        {
          id: uuidv4(),
          details:
            "The project demonstrates full-stack development capabilities with React frontend and Firebase backend, showcasing modern web development practices and e-commerce functionality.",
        },
      ],
      SocialSharingHeading: "Share This",
    },
  },
];
