import {
  AcademicCapIcon,
  // ArrowDownTrayIcon,
  // BuildingOffice2Icon,
  // CalendarIcon,
  // FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
// import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
// import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/header-background.webp';
import project_1 from '../images/portfolio/project_1.jpg';
import project_2 from '../images/portfolio/project_2.jpg';
import profilepic from '../images/profilepic.jpg';
// import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  // SkillGroup,
  Social,
  // TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Qiyuan | Robotics & Control',
  description: "A personal website built to record my projects, educations, and experiences.",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'Hero',
  About: 'About',
  Contact: 'Contact',
  Projects: 'Projects',
  Experience: 'Experience',
  // Skills: 'Skills',
  // Stats: 'Stats',
  // Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `Hi! I'm Qiyuan LIU.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        As a Master's student in <strong className="text-stone-100">Mechanical Engineering</strong> at <strong className="text-stone-100">University of California, Berkeley</strong>, 
        I'm specializing  in <strong className="text-stone-100">Robotics and Intelligent Control</strong>, and driven by a mission to advance autonomous systems. 
        My work blends technical rigor with creative problem-solving, aimed at making robots smarter and more capable.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        Looking ahead to my career as a <strong className="text-stone-100">Robotics Engineer</strong>, 
        I'm eager to develop technologies that enhance both the intelligence and personality of robots.
        After all, who says robots can't be smart and fun at the same time?
      </p>
    </>
  ),
  actions: [
    // {
    //   href: '/assets/Resume_Qiyuan LIU.pdf',
    //   text: 'Resume',
    //   primary: true,
    //   Icon: ArrowDownTrayIcon,
    // },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `I am a Robotics Engineer with a strong focus on robotics control and multi-agent systems. 
  Graduating with the highest distinction in Mechanical Engineering from Nanyang Technological University, 
  I have developed and deployed advanced algorithms, including Deep Reinforcement Learning (DRL) for robotic manipulation and collaborative systems. 
  My experience spans implementing complex robotic solutions in real-world environments and leading projects that enhance robotic intelligence and autonomy. 
  Additionally, I bring strong leadership and management skills, driving successful team collaborations and strategic decision-making.`,
  aboutItems: [
    {label: 'Location', text: 'California Bay Area, US', Icon: MapIcon},
    // {label: 'Age', text: '22', Icon: CalendarIcon},
    // {label: 'Nationality', text: 'Canadian / Irish', Icon: FlagIcon},
    {label: 'Interests', text: 'photography, traveling, Violin', Icon: SparklesIcon},
    {label: 'Study', text: 'University of California, Berkeley', Icon: AcademicCapIcon},
    // {label: 'Employment', text: 'Instant Domains, inc.', Icon: BuildingOffice2Icon},
  ],
};

// /**
//  * Skills section
//  */
// export const skills: SkillGroup[] = [
//   {
//     name: 'Spoken languages',
//     skills: [
//       {
//         name: 'English',
//         level: 10,
//       },
//       {
//         name: 'French',
//         level: 4,
//       },
//       {
//         name: 'Spanish',
//         level: 3,
//       },
//     ],
//   },
//   {
//     name: 'Frontend development',
//     skills: [
//       {
//         name: 'React',
//         level: 9,
//       },
//       {
//         name: 'Typescript',
//         level: 7,
//       },
//       {
//         name: 'GraphQL',
//         level: 6,
//       },
//     ],
//   },
//   {
//     name: 'Backend development',
//     skills: [
//       {
//         name: 'Node.js',
//         level: 8,
//       },
//       {
//         name: 'Rust',
//         level: 5,
//       },
//       {
//         name: 'Golang',
//         level: 4,
//       },
//     ],
//   },
//   {
//     name: 'Mobile development',
//     skills: [
//       {
//         name: 'React Native',
//         level: 9,
//       },
//       {
//         name: 'Flutter',
//         level: 4,
//       },
//       {
//         name: 'Swift',
//         level: 3,
//       },
//     ],
//   },
// ];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Behavior Imitation for Manipulator Control with Deep Reinforcement Learning',
    description: 'Motion imitation is a challenging task in robotics and computer vision, typically requiring expert data obtained through MoCap devices. However, acquiring such data is resource-intensive in terms of financial resources, manpower, and time. Our project addresses this challenge by proposing a novel model that simplifies Motion Imitation into a prediction problem of joint angle values in reinforcement learning.',
    url: 'https://github.com/iQiyuan/Imitate-Motions-from-Videos',
    image: project_1,
  },
  {
    title: 'Intelligence Scan to Building Information Model (iScan2BIM)',
    description: 'Please click this page to visit the official iScan2BIM website. This project was my first exposure to industrial robotics, where I worked as a research assistant. My contributions included assisting in the development of indoor navigation algorithms and path planning, delving deeply into debugging the ROS system, and designing a multi-agent simulation framework.',
    url: 'https://chilx.ai/iscan2bim-saas/',
    image: project_2,
  }
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'August 2024 - Present',
    location: 'University of California, Berkeley',
    title: 'Masters in Engineering, Mechanical Engineering',
    content: (
      <>
        <p>Concentrated in Control of Robotics & Autonomous Systems.</p> 
        <p>with Intellectual Property & Entrepreneurship Strategies (IPES).</p>
      </>
    )
  },
  {
    date: 'August 2020 - July 2024',
    location: 'Nanyang Technological University, Singapore',
    title: 'Bachelor of Egineering, Mechanical Engineering',
    content: (
      <>
        <p>Specialized in Robotics and Mechatronics.</p> 
        <p>Graduated with Honors (Highest Distinction).</p>
      </>
    )
  }
];

export const experience: TimelineItem[] = [
  {
    date: 'December 2022 - May 2023, 6 Months Internship',
    location: 'Satellite Research Center (SaRC)',
    title: 'Development & Deployment Engineer',
    content: (
      <p>
        Deployed a DRL algorithm on the UR3 robot for visual-based pushing and grasping, achieving stable real-time performance and accurate object placement in dynamic environments. Implemented a 3D Human Pose Estimation system to capture and reconstruct human skeletal movements in real-time, enhancing robot interaction. Labeled chip images and trained a vision model to recognize chip structures and automatically generate diagrams, eliminating the need for manual detection.
      </p>
    ),
  },
  {
    date: 'May 2022 - December 2022, 8 Months',
    location: 'Surbana Jurong - NTU Corporate Lab',
    title: 'Robotics Engineer & Reseach Assistant',
    content: (
      <p>
        Assisted in developing an indoor navigation algorithm focused on waypoint selection, enhancing pathfinding and obstacle avoidance for autonomous mobile robots. Developed a multi-agent Gazebo simulation environment for testing collaborative tasks, enabling multiple robots to interact for coordination and resource sharing. Managed ROS debugging and troubleshooting to resolve mobile robot operation issues, ensuring seamless integration between software and hardware components.
      </p>
    ),
  },
];

/**
 * Testimonial section
 */
// export const testimonial: TestimonialSection = {
//   imageSrc: testimonialImage,
//   testimonials: [
//     {
//       name: 'John Doe',
//       text: 'Use this as an opportunity to promote what it is like to work with you. High value testimonials include ones from current or past co-workers, managers, or from happy clients.',
//       image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
//     },
//     {
//       name: 'Jane Doe',
//       text: 'Here you should write some nice things that someone has said about you. Encourage them to be specific and include important details (notes about a project you were on together, impressive quality produced, etc).',
//       image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
//     },
//     {
//       name: 'Someone else',
//       text: 'Add several of these, and keep them as fresh as possible, but be sure to focus on quality testimonials with strong highlights of your skills/work ethic.',
//       image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
//     },
//   ],
// };

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch!',
  description: 'Whether you have a project in mind, need collaboration, or are looking for a dedicated Robotics Engineer, feel free to reach out. I’m always open to discussing new opportunities and forging connections in the robotics and control systems field.',
  items: [
    {
      type: ContactType.Email,
      text: 'qiyuann@berkeley.edu',
      href: 'mailto:qiyuann@berkeley.edu',
    },
    {
      type: ContactType.Instagram,
      text: '@qiyuuuan',
      href: 'https://www.instagram.com/qiyuuuan/',
    },
    {
      type: ContactType.Github,
      text: 'iQiyuan',
      href: 'https://github.com/iQiyuan',
    },
    {
      type: ContactType.Location,
      text: 'University of California, Berkeley, CA',
      href: 'https://maps.app.goo.gl/T4xJ3abJJ4wWuhP97',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/iQiyuan'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/qiyuan-liu-b22844231/'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/qiyuuuan/'},
];