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
    title: "Vc Beauty",
    url: "https://vc-beauty-ba-git-main-danmartinez01.vercel.app/",
    category: "Web Application",
    img: "/images/vccreen.JPG",
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
          details: "Company Ltd",
        },
        {
          id: uuidv4(),
          title: "Services",
          details: "Web Development",
        },
        {
          id: uuidv4(),
          title: "Website",
          details: "https://company.com",
        },
        {
          id: uuidv4(),
          title: "Phone",
          details: "555 8888 888",
        },
      ],
      ObjectivesHeading: "Objective",
      ObjectivesDetails:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, natus! Quibusdam enim quod in esse, mollitia molestias incidunt quas ipsa accusamus veniam.",
      Technologies: [
        {
          title: "Tools & Technologies",
          techs: ["NextJs", "CSS"],
        },
      ],
      ProjectDetailsHeading: "Challenge",
      ProjectDetails: [
        {
          id: uuidv4(),
          details:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.",
        },
        {
          id: uuidv4(),
          details:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?",
        },
        {
          id: uuidv4(),
          details:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?",
        },
        {
          id: uuidv4(),
          details:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.",
        },
      ],
      SocialSharingHeading: "Share This",
      // SocialSharing: [
      // 	{
      // 		id: uuidv4(),
      // 		name: 'Twitter',
      // 		icon: <FiTwitter />,
      // 		url: 'https://twitter.com/realstoman',
      // 	},
      // 	{
      // 		id: uuidv4(),
      // 		name: 'Instagram',
      // 		icon: <FiInstagram />,
      // 		url: 'https://instagram.com/realstoman',
      // 	},
      // 	{
      // 		id: uuidv4(),
      // 		name: 'Facebook',
      // 		icon: <FiFacebook />,
      // 		url: 'https://facebook.com/',
      // 	},
      // 	{
      // 		id: uuidv4(),
      // 		name: 'LinkedIn',
      // 		icon: <FiLinkedin />,
      // 		url: 'https://linkedin.com/',
      // 	},
      // 	{
      // 		id: uuidv4(),
      // 		name: 'Youtube',
      // 		icon: <FiYoutube />,
      // 		url: 'https://www.youtube.com/c/StomanStudio',
      // 	},
      // ],
    },
  },
  {
    id: 2,
    title: "English corner",
    url: "https://theenglishcorner.vercel.app/",
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
      //   {
      //     id: uuidv4(),
      //     title: "Phoenix Digital Agency",
      //     img: "/images/web-project-2.jpg",
      //   },
      //   {
      //     id: uuidv4(),
      //     title: "Phoenix Digital Agency",
      //     img: "/images/mobile-project-2.jpg",
      //   },
    ],
    ProjectInfo: {
      ClientHeading: "About Client",
      CompanyInfo: [
        {
          id: uuidv4(),
          title: "Name",
          details: "Company Ltd",
        },
        {
          id: uuidv4(),
          title: "Services",
          details: "UI Design & Frontend Development",
        },
        {
          id: uuidv4(),
          title: "Website",
          details: "https://company.com",
        },
        {
          id: uuidv4(),
          title: "Phone",
          details: "555 8888 888",
        },
      ],
      ObjectivesHeading: "Objective",
      ObjectivesDetails:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, natus! Quibusdam enim quod in esse, mollitia molestias incidunt quas ipsa accusamus veniam.",
      Technologies: [
        {
          title: "Tools & Technologies",
          techs: [
            "HTML",
            "CSS",
            "JavaScript",
            "Vue.js",
            "TailwindCSS",
            "AdobeXD",
          ],
        },
      ],
      ProjectDetailsHeading: "Challenge",
      ProjectDetails: [
        {
          id: uuidv4(),
          details:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.",
        },
        {
          id: uuidv4(),
          details:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?",
        },
        {
          id: uuidv4(),
          details:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?",
        },
        {
          id: uuidv4(),
          details:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.",
        },
      ],
      SocialSharingHeading: "Share This",
      // SocialSharing: [
      // 	{
      // 		id: uuidv4(),
      // 		name: 'Twitter',
      // 		icon: <FiTwitter />,
      // 		url: 'https://twitter.com/realstoman',
      // 	},
      // 	{
      // 		id: uuidv4(),
      // 		name: 'Instagram',
      // 		icon: <FiInstagram />,
      // 		url: 'https://instagram.com/realstoman',
      // 	},
      // 	{
      // 		id: uuidv4(),
      // 		name: 'Facebook',
      // 		icon: <FiFacebook />,
      // 		url: 'https://facebook.com/',
      // 	},
      // 	{
      // 		id: uuidv4(),
      // 		name: 'LinkedIn',
      // 		icon: <FiLinkedin />,
      // 		url: 'https://linkedin.com/',
      // 	},
      // 	{
      // 		id: uuidv4(),
      // 		name: 'Youtube',
      // 		icon: <FiYoutube />,
      // 		url: 'https://www.youtube.com/c/StomanStudio',
      // 	},
      // ],
    },
  },
  {
    id: 3,
    title: "Blog App",
    url: "project-management-ui",
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
      //   {
      //     id: uuidv4(),
      //     title: "Kabul Project Management UI",
      //     img: "/images/web-project-2.jpg",
      //   },
      //   {
      //     id: uuidv4(),
      //     title: "Kabul Project Management UI",
      //     img: "/images/mobile-project-2.jpg",
      //   },
    ],
    ProjectInfo: {
      ClientHeading: "About Client",
      CompanyInfo: [
        {
          id: uuidv4(),
          title: "Name",
          details: "Company Ltd",
        },
        {
          id: uuidv4(),
          title: "Services",
          details: "UI Design & Frontend Development",
        },
        {
          id: uuidv4(),
          title: "Website",
          details: "https://company.com",
        },
        {
          id: uuidv4(),
          title: "Phone",
          details: "555 8888 888",
        },
      ],
      ObjectivesHeading: "Objective",
      ObjectivesDetails:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, natus! Quibusdam enim quod in esse, mollitia molestias incidunt quas ipsa accusamus veniam.",
      Technologies: [
        {
          title: "Tools & Technologies",
          techs: [
            "HTML",
            "CSS",
            "JavaScript",
            "Vue.js",
            "TailwindCSS",
            "AdobeXD",
          ],
        },
      ],
      ProjectDetailsHeading: "Challenge",
      ProjectDetails: [
        {
          id: uuidv4(),
          details:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.",
        },
        {
          id: uuidv4(),
          details:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?",
        },
        {
          id: uuidv4(),
          details:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?",
        },
        {
          id: uuidv4(),
          details:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.",
        },
      ],
      SocialSharingHeading: "Share This",
      // SocialSharing: [
      // 	{
      // 		id: uuidv4(),
      // 		name: 'Twitter',
      // 		icon: <FiTwitter />,
      // 		url: 'https://twitter.com/realstoman',
      // 	},
      // 	{
      // 		id: uuidv4(),
      // 		name: 'Instagram',
      // 		icon: <FiInstagram />,
      // 		url: 'https://instagram.com/realstoman',
      // 	},
      // 	{
      // 		id: uuidv4(),
      // 		name: 'Facebook',
      // 		icon: <FiFacebook />,
      // 		url: 'https://facebook.com/',
      // 	},
      // 	{
      // 		id: uuidv4(),
      // 		name: 'LinkedIn',
      // 		icon: <FiLinkedin />,
      // 		url: 'https://linkedin.com/',
      // 	},
      // 	{
      // 		id: uuidv4(),
      // 		name: 'Youtube',
      // 		icon: <FiYoutube />,
      // 		url: 'https://www.youtube.com/c/StomanStudio',
      // 	},
      // ],
    },
  },
  {
    id: 4,
    title: "El almacen",
    url: "https://elalmacenjs.netlify.app/",
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
      //   {
      //     id: uuidv4(),
      //     title: "Kabul Cloud Storage Platform",
      //     img: "/images/web-project-2.jpg",
      //   },
      //   {
      //     id: uuidv4(),
      //     title: "Kabul Cloud Storage Platform",
      //     img: "/images/mobile-project-2.jpg",
      //   },
    ],
    ProjectInfo: {
      ClientHeading: "About Client",
      CompanyInfo: [
        {
          id: uuidv4(),
          title: "Name",
          details: "Company Ltd",
        },
        {
          id: uuidv4(),
          title: "Services",
          details: "UI Design & Frontend Development",
        },
        {
          id: uuidv4(),
          title: "Website",
          details: "https://company.com",
        },
        {
          id: uuidv4(),
          title: "Phone",
          details: "555 8888 888",
        },
      ],
      ObjectivesHeading: "Objective",
      ObjectivesDetails:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, natus! Quibusdam enim quod in esse, mollitia molestias incidunt quas ipsa accusamus veniam.",
      Technologies: [
        {
          title: "Tools & Technologies",
          techs: [
            "HTML",
            "CSS",
            "JavaScript",
            "Vue.js",
            "TailwindCSS",
            "AdobeXD",
          ],
        },
      ],
      ProjectDetailsHeading: "Challenge",
      ProjectDetails: [
        {
          id: uuidv4(),
          details:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.",
        },
        {
          id: uuidv4(),
          details:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?",
        },
        {
          id: uuidv4(),
          details:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?",
        },
        {
          id: uuidv4(),
          details:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.",
        },
      ],
      SocialSharingHeading: "Share This",
      // SocialSharing: [
      // 	{
      // 		id: uuidv4(),
      // 		name: 'Twitter',
      // 		icon: <FiTwitter />,
      // 		url: 'https://twitter.com/realstoman',
      // 	},
      // 	{
      // 		id: uuidv4(),
      // 		name: 'Instagram',
      // 		icon: <FiInstagram />,
      // 		url: 'https://instagram.com/realstoman',
      // 	},
      // 	{
      // 		id: uuidv4(),
      // 		name: 'Facebook',
      // 		icon: <FiFacebook />,
      // 		url: 'https://facebook.com/',
      // 	},
      // 	{
      // 		id: uuidv4(),
      // 		name: 'LinkedIn',
      // 		icon: <FiLinkedin />,
      // 		url: 'https://linkedin.com/',
      // 	},
      // 	{
      // 		id: uuidv4(),
      // 		name: 'Youtube',
      // 		icon: <FiYoutube />,
      // 		url: 'https://www.youtube.com/c/StomanStudio',
      // 	},
      // ],
    },
  },
  {
    id: 5,
    title: "Color Guessing Game",
    url: "https://guessthecolorrgb.netlify.app/",
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
          details: "Company Ltd",
        },
        {
          id: uuidv4(),
          title: "Services",
          details: "UI Design & Frontend Development",
        },
        {
          id: uuidv4(),
          title: "Website",
          details: "https://company.com",
        },
        {
          id: uuidv4(),
          title: "Phone",
          details: "555 8888 888",
        },
      ],
      ObjectivesHeading: "Objective",
      ObjectivesDetails:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, natus! Quibusdam enim quod in esse, mollitia molestias incidunt quas ipsa accusamus veniam.",
      Technologies: [
        {
          title: "Tools & Technologies",
          techs: [
            "HTML",
            "CSS",
            "JavaScript",
            "Vue.js",
            "TailwindCSS",
            "AdobeXD",
          ],
        },
      ],
      ProjectDetailsHeading: "Challenge",
      ProjectDetails: [
        {
          id: uuidv4(),
          details:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.",
        },
        {
          id: uuidv4(),
          details:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?",
        },
        {
          id: uuidv4(),
          details:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?",
        },
        {
          id: uuidv4(),
          details:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.",
        },
      ],
      SocialSharingHeading: "Share This",
      // SocialSharing: [
      // 	{
      // 		id: uuidv4(),
      // 		name: 'Twitter',
      // 		icon: <FiTwitter />,
      // 		url: 'https://twitter.com/realstoman',
      // 	},
      // 	{
      // 		id: uuidv4(),
      // 		name: 'Instagram',
      // 		icon: <FiInstagram />,
      // 		url: 'https://instagram.com/realstoman',
      // 	},
      // 	{
      // 		id: uuidv4(),
      // 		name: 'Facebook',
      // 		icon: <FiFacebook />,
      // 		url: 'https://facebook.com/',
      // 	},
      // 	{
      // 		id: uuidv4(),
      // 		name: 'LinkedIn',
      // 		icon: <FiLinkedin />,
      // 		url: 'https://linkedin.com/',
      // 	},
      // 	{
      // 		id: uuidv4(),
      // 		name: 'Youtube',
      // 		icon: <FiYoutube />,
      // 		url: 'https://www.youtube.com/c/realstoman',
      // 	},
      // ],
    },
  },
  {
    id: 6,
    title: "Jewelry Store",
    url: "https://otrocielostore.netlify.app/",
    category: "Web Application",
    img: "/images/oc.JPG",
    technologies: ["React", "CSS", "Firebase"],
    ProjectHeader: {
      title: "Apple New Design System",
      publishDate: "Jul 26, 2021",
      tags: "Frontend",
    },
    ProjectImages: [
      {
        id: uuidv4(),
        title: "Kabul Apple New Design System",
        img: "/images/ui-project-1.jpg",
      },
      // {
      //   id: uuidv4(),
      //   title: "Kabul Apple New Design System",
      //   img: "/images/web-project-2.jpg",
      // },
      // {
      //   id: uuidv4(),
      //   title: "Kabul Apple New Design System",
      //   img: "/images/mobile-project-2.jpg",
      // },
    ],
    ProjectInfo: {
      ClientHeading: "About Client",
      CompanyInfo: [
        {
          id: uuidv4(),
          title: "Name",
          details: "Company Ltd",
        },
        {
          id: uuidv4(),
          title: "Services",
          details: "UI Design & Frontend Development",
        },
        {
          id: uuidv4(),
          title: "Website",
          details: "https://company.com",
        },
        {
          id: uuidv4(),
          title: "Phone",
          details: "555 8888 888",
        },
      ],
      ObjectivesHeading: "Objective",
      ObjectivesDetails:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, natus! Quibusdam enim quod in esse, mollitia molestias incidunt quas ipsa accusamus veniam.",
      Technologies: [
        {
          title: "Tools & Technologies",
          techs: [
            "HTML",
            "CSS",
            "JavaScript",
            "Vue.js",
            "TailwindCSS",
            "AdobeXD",
          ],
        },
      ],
      ProjectDetailsHeading: "Challenge",
      ProjectDetails: [
        {
          id: uuidv4(),
          details:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.",
        },
        {
          id: uuidv4(),
          details:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?",
        },
        {
          id: uuidv4(),
          details:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?",
        },
        {
          id: uuidv4(),
          details:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.",
        },
      ],
      SocialSharingHeading: "Share This",
      // SocialSharing: [
      // 	{
      // 		id: uuidv4(),
      // 		name: 'Twitter',
      // 		icon: <FiTwitter />,
      // 		url: 'https://twitter.com/realstoman',
      // 	},
      // 	{
      // 		id: uuidv4(),
      // 		name: 'Instagram',
      // 		icon: <FiInstagram />,
      // 		url: 'https://instagram.com/realstoman',
      // 	},
      // 	{
      // 		id: uuidv4(),
      // 		name: 'Facebook',
      // 		icon: <FiFacebook />,
      // 		url: 'https://facebook.com/',
      // 	},
      // 	{
      // 		id: uuidv4(),
      // 		name: 'LinkedIn',
      // 		icon: <FiLinkedin />,
      // 		url: 'https://linkedin.com/',
      // 	},
      // 	{
      // 		id: uuidv4(),
      // 		name: 'Youtube',
      // 		icon: <FiYoutube />,
      // 		url: 'https://www.youtube.com/c/StomanStudio',
      // 	},
      // ],
    },
  },
];
