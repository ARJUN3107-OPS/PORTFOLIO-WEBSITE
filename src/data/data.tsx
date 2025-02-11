import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Arjun Singh',
  description: "Portfolio Website",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Arjun Singh.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
      Toronto-based <strong className="text-stone-100">Cloud & DevOps Enthusiast</strong>, with AWS certifications <strong className="text-stone-100">passionate about building scalable, automated cloud solutions.</strong>
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        "Beyond tech, I enjoy playing <strong className="text-stone-100"> Football,Cricket</strong>,
        and learn about the<strong className="text-stone-100"> latest tech trends."</strong>
      </p>
    </>
  ),
  actions: [
    {
      href: '/Arjun_Singh_Resume.pdf',
      text: 'Resume',
      primary: true,
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
  description: `I'm a Cloud & DevOps Engineer with a strong foundation in AWS, automation, and cloud infrastructure. With hands-on experience in CI/CD, networking, and security, I enjoy designing scalable, efficient, and resilient cloud solutions.
I have a background in VoIP engineering and networking, which gives me a deep understanding of system reliability, troubleshooting, and performance optimization. I'm passionate about learning new technologies, staying up-to-date with the latest trends in cloud computing, DevOps, and security best practices.
Outside of work, you'll find me watching football and cricket or exploring the latest advancements in the tech industry. 🚀`,
  aboutItems: [
    {label: 'Location', text: 'Toronto, ON', Icon: MapIcon},
    {label: 'Age', text: '27', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Indian', Icon: FlagIcon},
    {label: 'Interests', text: 'Football, Cricket, Trading', Icon: SparklesIcon},
    {label: 'Study', text: 'Centennial College', Icon: AcademicCapIcon},
   /* {label: 'Employment', text: 'Instant Domains, inc.', Icon: BuildingOffice2Icon},*/
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Cloud Platforms',
    skills: [
      {
        name: 'AWS',
        level: 9,
      },
      {
        name: 'Azure',
        level: 7,
      },
      {
        name: 'Google Cloud Platform (GCP)',
        level: 6,
      },
    ],
  },
  {
    name: 'DevOps Tools',
    skills: [
      {
        name: 'Docker',
        level: 8,
      },
      {
        name: 'Kubernetes',
        level: 7,
      },
      {
        name: 'Jenkins',
        level: 6,
      },
      {
        name: 'Terraform',
        level: 7,
      },
      {
        name: 'Ansible',
        level: 6,
      },
    ],
  },
  {
    name: 'Programming & Scripting',
    skills: [
      {
        name: 'Python',
        level: 8,
      },
      {
        name: 'Bash/Shell',
        level: 7,
      },
    ],
  },
  {
    name: 'Monitoring & Logging',
    skills: [
      {
        name: 'Prometheus',
        level: 6,
      },
      {
        name: 'Grafana',
        level: 6,
      },
      {
        name: 'CloudWatch',
        level: 7,
      },
    ],
  },
  {
    name: 'Networking & Security',
    skills: [
      {
        name: 'Cisco Routing & Switching',
        level: 8,
      },
      {
        name: 'Wireshark',
        level: 6,
      },
      {
        name: 'IAM (Identity and Access Management)',
        level: 7,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'LIFT-AND-SHIFT',
    description: 'AWS infrastructure, automation, and scalable app deployment',
    url: 'https://github.com/ARJUN3107-OPS/LIFT-AND-SHIFT-APPLICATION-WORKLOAD.',
    image: porfolioImage1,
  },
  {
    title: 'ACCESS S3 FROM A VPC',
    description: 'Integration of Amazon VPC and S3 using an EC2 instance',
    url: 'https://github.com/ARJUN3107-OPS/Access-S3-from-a-VPC',
    image: porfolioImage2,
  },
  {
    title: 'AWS Cloud Re-Architecture',
    description: 'Re-architect the existing VPROFILE multi-tier web application stack on AWS',
    url: 'https://github.com/ARJUN3107-OPS/AWS-Cloud-Re-Architecture',
    image: porfolioImage3,
  },
  {
    title: 'Aurora Database with EC2',
    description: 'Set up and connect an Amazon Aurora relational database to an EC2 instance',
    url: 'https://github.com/ARJUN3107-OPS/AWS-DATABASE-PROJECTS/tree/main/Aurora%20Database%20with%20EC2',
    image: porfolioImage4,
  },
  {
    title: 'Load and Query DynamoDB Tables',
    description: 'Explore Amazon DynamoDB, create tables, load data, and interact with it using AWS CloudShell and the AWS CLI.',
    url: 'https://github.com/ARJUN3107-OPS/AWS-DATABASE-PROJECTS/tree/main/Query%20Data%20with%20DynamoDB',
    image: porfolioImage5,
  },
  {
    title: 'Cloud Security with AWS IAM',
    description: 'AWS IAM to secure AWS resources by managing user access, roles, policies, and permissions.',
    url: 'https://github.com/ARJUN3107-OPS/Cloud-Security-with-AWS-IAM',
    image: porfolioImage6,
  },
  {
    title: 'DEVOPS',
    description: 'DEVOPS PROJECTS',
    url: 'https://github.com/ARJUN3107-OPS/DEVOPS',
    image: porfolioImage7,
  },
  {
    title: 'Project title 8',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage8,
  },
  {
    title: 'Project title 9',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage9,
  },
  {
    title: 'Project title 10',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage10,
  },
  {
    title: 'Project title 11',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage11,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'April 2024',
    location: 'Centennial College',
    title: 'Computer Systems Technology - Networking',
    content: <p>During my time in the Computer Systems Technology - Networking program, I gained a strong understanding of computer networks, protocols, and security practices. I developed hands-on experience with a range of technologies, including routing and switching, network design, and virtualization. I acquired valuable skills in troubleshooting network issues, configuring routers and switches, and working with various operating systems. This foundation has greatly enhanced my ability to design and manage scalable, secure network architectures in cloud and DevOps environments.</p>,
  },
  {
    date: 'August 2019',
    location: 'BBDIT, India',
    title: 'Computer Science Engineering',
    content: <p>Throughout my Bachelor’s in Computer Science Engineering, I gained a deep understanding of core computer science concepts such as data structures, algorithms, software engineering, and database management systems. I also explored various programming languages, including Python, C++, and Java, which helped me strengthen my problem-solving abilities. Additionally, I learned about operating systems, computer networks, and software development methodologies, all of which contributed to building a solid foundation for my career in cloud computing and DevOps. This education laid the groundwork for my skills in systems design, automation, and cloud architecture.</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'Feb 2020 - Dec 2022',
    location: 'NTT Data Services',
    title: 'VoIP Engineer',
    content: (
      <p>
         As a VoIP Engineer at NTT Data Services, I played a key role in maintaining and optimizing Cisco IPT systems, 
      ensuring a 99.9% service availability for enterprise clients. I led a team of 4 L1 engineers, providing expert 
      guidance and support to enhance network reliability and minimize service disruptions by 30%. My responsibilities 
      included configuring CUCM features such as Extension Mobility, Hunt Groups, and Route Plans, improving user 
      communication efficiency for over 3,000 users. Additionally, I collaborated with third-party vendors to troubleshoot 
      network issues, reducing downtime and boosting operational efficiency. This role strengthened my expertise in VoIP, 
      network security, and system reliability—skills that seamlessly transition into cloud and DevOps environments.
      </p>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'John Doe',
      text: 'Use this as an opportunity to promote what it is like to work with you. High value testimonials include ones from current or past co-workers, managers, or from happy clients.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: 'Jane Doe',
      text: 'Here you should write some nice things that someone has said about you. Encourage them to be specific and include important details (notes about a project you were on together, impressive quality produced, etc).',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    {
      name: 'Someone else',
      text: 'Add several of these, and keep them as fresh as possible, but be sure to focus on quality testimonials with strong highlights of your skills/work ethic.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Feel free to reach out job opportunities, or just to chat about cloud computing, DevOps, and emerging technologies. I’m always open to connecting and discussing new ideas!',
  items: [
    {
      type: ContactType.Email,
      text: 'aju.singh3107@gmail.com',
      href: 'mailto:aju.singh3107@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Toronto ON, Canada',
      href: 'https://www.google.com/maps/place/Toronto,+ON/@43.7182412,-79.3780581,11z/data=!3m1!4b1!4m6!3m5!1s0x89d4cb90d7c63ba5:0x323555502ab4c477!8m2!3d43.653226!4d-79.3831843!16zL20vMGg3aDY?entry=ttu&g_ep=EgoyMDI1MDIwMy4wIKXMDSoASAFQAw%3D%3D',
    },
    {
      type: ContactType.Instagram,
      text: '@arjun_singh04',
      href: 'https://www.instagram.com/arjun_singh04/',
    },
    {
      type: ContactType.Github,
      text: 'ARJUN3107-OPS',
      href: 'https://github.com/ARJUN3107-OPS',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/ARJUN3107-OPS'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/arjunsingh3107/'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/arjun_singh04/'},
];
