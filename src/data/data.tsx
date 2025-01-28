import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
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
import project_3 from '../images/portfolio/project_3.jpg';
import project_4 from '../images/portfolio/project_4.png';
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
        <strong className="text-stone-100">
          For me, control systems and robotic design are more than technical endeavors—they are keys to realizing the future. 
          From agriculture to healthcare, from industrial automation to everyday human life, these technologies have the potential to reshape how we interact with the world. 
          Currently, as a Master's student at UC Berkeley, I am immersing myself in advanced studies and hands-on projects in robotics and autonomous systems. 
          This environment not only sharpens my technical skills but also expands my perspective on how engineering can address global challenges.
        </strong>
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        <strong className="text-stone-100">
          Looking ahead, I aim to deepen my work at the intersection of control systems and robotic design, constantly pushing the boundaries of technology. 
          By combining theoretical knowledge with real-world needs, I hope to collaborate with like-minded individuals to drive the development of next-generation intelligent systems.
        </strong>
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/Resume_Qiyuan_LIU.pdf',
      text: 'Resume',
      primary: false,
      Icon: ArrowDownTrayIcon,
    },
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
  description: `In my exploration of mechanical engineering and robotics, I have always been committed to finding a balance between technology and real-world needs. Engineering is not just about optimizing existing technologies but also about the art of solving complex problems. From developing reinforcement learning-controlled robotic arms to designing algorithms for multi-robot task allocation, my work goes beyond the application of tools, focusing instead on the logic and potential behind the systems. Every experience has deepened my understanding that innovation stems not only from technical expertise but also from insight into the essence of a problem. 
  In these projects, I strive not only for efficient and precise solutions but also to infuse greater flexibility and adaptability into the technology, ensuring it serves complex and dynamic scenarios effectively.`,
  aboutItems: [
    {label: 'Location', text: 'California Bay Area, US', Icon: MapIcon},
    // {label: 'Age', text: '22', Icon: CalendarIcon},
    // {label: 'Nationality', text: 'Canadian / Irish', Icon: FlagIcon},
    {label: 'Interests', text: 'photography, traveling, Violin', Icon: SparklesIcon},
    {label: 'Study', text: 'University of California, Berkeley', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'Open to Work!', Icon: BuildingOffice2Icon},
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
  },
  {
    title: 'Weighted Voronoi Cell-based Task Allocation for Collaborative Objects Retrieval',
    description: 'Task allocation is a critical component of multi-robot collaboration. Among various approaches, space partitioning methods based on Voronoi cells (VSP) offer a straightforward and effective way to assign tasks. However, traditional VSP-based task allocation methods often lack adaptability to dynamic changes in tasks and environments. To address this limitation, our model introduces a task allocation algorithm that leverages vehicle-centered Voronoi region partitioning. By dynamically adjusting the weights of Voronoi cells, this method adapts to environmental and task changes in real time. As a result, it achieved a 57.14% increase in task efficiency, and a 21.71% improvement in task distribution balance.',
    url: 'https://github.com/iQiyuan/Task-Allocation-by-Dynamic-Voronoi-Partition',
    image: project_3,
  },
  {
    title: 'Autonomous Tennis Ball Fetcher',
    description: 'A self-designed mechatronics system capable of fully automated searching and retrieving tennis balls within a designated area.',
    url: 'https://github.com/iQiyuan/Autonomous-Tennis-Ball-Fetcher',
    image: project_4,
  }
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'August 2024 - Present',
    location: 'Masters in Engineering, Mechanical Engineering',
    title: 'University of California, Berkeley',
    content: (
      <>
        <p> Concentrated in Control of Robotics & Autonomous Systems.</p> 
        <p> Awarded UC Berkeley Eaton-Hachigian Fellowship.</p>
      </>
    )
  },
  {
    date: 'August 2020 - July 2024',
    location: 'Bachelor of Egineering, Mechanical Engineering',
    title: 'Nanyang Technological University, Singapore',
    content: (
      <>
        <p>Specialized in Robotics and Mechatronics, Graduated with Honors (Highest Distinction).</p> 
      </>
    )
  }
];

export const experience: TimelineItem[] = [
  {
    date: 'December 2022 - May 2023, 6 Months Internship',
    location: 'Satellite Research Center (SaRC)',
    title: 'Robotic Engineer',
    content: (
      <p>
        Developed a DRL-based robotic control system to ensure highly precise UR3 grasps in real-time and dynamic environments. Implemented a 3D pose estimation algorithm to extract skeletal motion data from video, achieving robust real-time performance. Additionally, designed a vision-based model for automating IC structure recognition, streamlining diagram generation, and removing the need for manual effort.
      </p>
    ),
  },
  {
    date: 'May 2022 - December 2022, 8 Months',
    location: 'Surbana Jurong - NTU Corporate Lab',
    title: 'Robotics Engineer & Reseach Assistant',
    content: (
      <p>
        Contributed to an indoor navigation algorithm for iScan2Bim, significantly enhancing pathfinding and operational efficiency. Designed a multi-agent simulation environment for collaborative tasks, facilitating interaction and coordination among robots. Additionally, debugged ROS to address operational challenges, ensuring robust software-hardware integration and optimizing robot performance.
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
  description: 'Whether you have a project in mind, need collaboration, or are looking for a dedicated Robotics Engineer, feel free to reach out. I’m always open to new opportunities and connections in the robotics and control systems field.',
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
