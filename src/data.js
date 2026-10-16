import hotelImage from "../assets/img/portfolio/hotel.png";
import campingImage from "../assets/img/portfolio/kasongo.png";
import gymnasticsImage from "../assets/img/portfolio/gymnastique.png";
import healthcareImage from "../assets/img/portfolio/knh.png";
import niaMartImage from "../assets/img/niamart.png";
import obhImage from "../assets/img/services/obh.png";
import bernardAvatar from "../assets/img copy/person/mukhaya.png";
import ibrahimAvatar from "../assets/img copy/person/ibrahim.png";
import denzelAvatar from "../assets/img copy/person/denzel gitonnga.png";

export const profile = {
  name: "Hassan Byekwaso Onyango",
  email: "hassan00byekwaso@gmail.com",
  phone: "+254 794 290 546",
  phoneHref: "+254794290546",
  location: "Lang'ata, Nairobi, Kenya",
  linkedin: "https://www.linkedin.com/in/hassan-byekwaso-66874b306",
  instagram: "https://www.instagram.com/hassan00byekwaso/",
  facebook: "https://www.facebook.com/me/",
};

export const projects = [
  {
    title: "Nia Mart",
    category: "MERN Apps",
    image: niaMartImage,
    description:
      "A full-stack e-commerce application featuring product browsing, a shopping cart, order management, and M-Pesa Daraja payment integration.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "M-Pesa Daraja"],
    liveUrl: "https://nia-mart-git-main-hassans-projects-e7789bee.vercel.app",
    linkLabel: "Review live app",
    status: "Completed project",
  },
  {
    title: "Hotel Website",
    category: "Websites",
    image: hotelImage,
    description:
      "A hospitality website concept presenting hotel services in a clear, welcoming, responsive layout.",
    technologies: ["Responsive design", "Web development"],
    liveUrl: "https://hassan-byekwaso.github.io/my_first_hotel_project/",
    status: "Live website",
  },
  {
    title: "Camping Retreat",
    category: "Websites",
    image: campingImage,
    description:
      "A nature-inspired retreat website with visitor-focused information and an inviting visual direction.",
    technologies: ["Responsive design", "Web development"],
    liveUrl: "https://tinyurl.com/kasongo-camping",
    status: "Live website",
  },
  {
    title: "Gymnastics Club",
    category: "Websites",
    image: gymnasticsImage,
    description:
      "A club website that introduces the organization, its activities, and useful information for visitors.",
    technologies: ["Responsive design", "Web development"],
    liveUrl: "https://hassan-byekwaso.github.io/gymnastic/",
    status: "Live website",
  },
  {
    title: "Healthcare Website",
    category: "Websites",
    image: healthcareImage,
    description:
      "A healthcare website project focused on making service information easier for visitors to find.",
    technologies: ["Responsive design", "Web development"],
    liveUrl: "https://hassan-byekwaso.github.io/my-first-website-knh/",
    status: "Live website",
  },
  {
    title: "Personal Portfolio Backend",
    category: "MERN Apps",
    description:
      "A backend practice project for profile and project APIs, validation, featured-project settings, and Cloudinary uploads.",
    technologies: ["Node.js", "Express", "MongoDB", "Cloudinary"],
    status: "Personal project",
  },
  {
    title: "Savings Group Management App",
    category: "MERN Apps",
    description:
      "An application concept for member and group-savings dashboards, administrative tools, and potential M-Pesa integration.",
    technologies: ["MongoDB", "Express", "React", "Node.js"],
    status: "Concept / in development",
  },
  {
    title: "Smart Budget Tracker",
    category: "Design Concepts",
    description:
      "A personal-finance application concept for recording income and expenses, with planned MERN and M-Pesa Daraja exploration.",
    technologies: ["MERN concept", "Personal finance", "M-Pesa"],
    status: "Application concept",
  },
];

export const services = [
  {
    title: "Web Design & Development",
    description:
      "Responsive websites, landing pages, and online business platforms with clean layouts and a focus on usability.",
    icon: "code",
  },
  {
    title: "French-English Language Services",
    description:
      "French-English translation, proofreading, localization, and interpretation support on request.",
    icon: "languages",
  },
  {
    title: "Website Maintenance & Support",
    description:
      "Practical help with routine website updates, troubleshooting, bug fixes, and improvements to existing sites.",
    icon: "wrench",
  },
  {
    title: "UI/UX Design",
    description:
      "Simple, user-friendly page layouts and digital design support for a consistent online brand presence.",
    icon: "panels",
  },
  {
    title: "ICT & Digital Productivity Support",
    description:
      "Computer assistance, online applications, document preparation, and everyday digital tasks.",
    icon: "laptop",
  },
  {
    title: "Digital Presence Support",
    description:
      "Content and online-visibility support for individuals and small businesses, including digital marketing foundations.",
    icon: "megaphone",
  },
];

export const skillGroups = [
  {
    title: "Web Development",
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
      "Bootstrap",
      "REST APIs",
    ],
  },
  {
    title: "Tools & Additional Skills",
    skills: [
      "Git",
      "GitHub",
      "MongoDB Atlas",
      "Cloudinary",
      "WordPress",
      "Elementor",
      "Microsoft Office",
      "Excel",
      "UI/UX fundamentals",
      "Responsive design",
      "Website deployment",
      "Graphic design",
    ],
  },
  {
    title: "Languages",
    skills: ["French", "English", "Swahili"],
  },
];

export const testimonials = [
  {
    quote:
      "Hassan Byekwaso displayed outstanding professionalism and dedication during his internship at Language Connections Centre. His contributions to translation, interpretation, and curriculum support, along with his quick learning and teamwork, made him a valuable asset to our team.",
    name: "Bernard Mukhaya",
    title: "Director, Language Connections Centre",
    avatar: bernardAvatar,
  },
  {
    quote:
      "Working with Hassan Byekwaso was a great experience. He designed and developed a clean, professional, and responsive website for my business, exactly matching my vision. His attention to detail, clear communication, and ability to deliver on time made the whole process smooth and stress-free. The site has improved how my clients interact with my services, and I highly recommend him to anyone seeking quality web design.",
    name: "Ibrahim Mboli",
    title: "Client",
    avatar: ibrahimAvatar,
  },
  {
    quote:
      "Hassan Byekwaso was an exceptional trainee. He showed a strong grasp of IT concepts, quickly mastered practical skills, and consistently applied what he learned in real-world scenarios. His curiosity, dedication, and problem-solving mindset make him well-prepared for success in the tech industry.",
    name: "Denzel Gitonga",
    title: "IT Trainer",
    avatar: denzelAvatar,
  },
];

export const portrait = obhImage;
