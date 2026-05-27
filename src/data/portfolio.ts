import ermsDashboard1 from "@/assets/images/erms_collage_cover1.png";
import bakyasDashboard1 from "@/assets/images/bakyas_collage_alternate1.png";
import cynyxDashboard1 from "@/assets/images/cynyx_collage_diagonal.png";
export const projects = [
  {
    title: "Equipment Requisition Management System",
    description:
      "Centralized digital platform designed to streamline the requesting, tracking, and approval of hardware assets to ensure efficient resource allocation across an organization.",
    techStack: ["React", "TypeScript", "Docker", "Supabase", "Express", "Node", "GitHub Actions"],
    liveUrl: "https://erms-lime.vercel.app/auth",
    githubUrl: "",
    image: ermsDashboard1,
  },
  {
    title: "Bakyas Profiling",
    description:
      "A community profiling and participant management system for the Bakyas organization in the Philippines. It tracks Self-Help Groups (SHGs), Children's/Youth Groups (CYGs), Community Learning Associations (CLAs), Federations, and individual adult/child participants with detailed demographic, livelihood, and resource data.",
    techStack: ["React", "Typescript", "MUI", "Azure", "MSSQL", "C# Web API Core", "Claude Code"],
    liveUrl: "",
    githubUrl: "",
    gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    image: bakyasDashboard1,
  },
  {
    title: "Cynyx",
    description:
      "A company landing page for Cynyx (software dev agency) with a lead-capture contact form.",
    techStack: ["React", "Vercel", "Node", "Express", "Supabase"],
    liveUrl: "https://cynyx.vercel.app/",
    githubUrl: "",
    gradient: "linear-gradient(135deg, #11998e 0%, #38ef7d 100%)",
    image: cynyxDashboard1,
  },

];

export const experience = [
  {
    role: "Senior Frontend Engineer",
    company: "Nexus Technologies",
    dates: "Jan 2022 – Present",
    description:
      "Leading the frontend architecture for a suite of enterprise products, mentoring junior developers, and driving design system adoption.",
  },
  {
    role: "Frontend Developer",
    company: "Bright Pixel Studio",
    dates: "Mar 2019 – Dec 2021",
    description:
      "Built responsive web applications and collaborated closely with designers to deliver pixel-perfect interfaces.",
  },
  {
    role: "Junior Developer",
    company: "CodeCraft Labs",
    dates: "Jun 2017 – Feb 2019",
    description:
      "Developed features for client projects using React and contributed to internal tooling.",
  },
];

export const education = [
  {
    degree: "M.Sc. Computer Science",
    school: "Stanford University",
    dates: "2015 – 2017",
  },
  {
    degree: "B.Sc. Information Technology",
    school: "University of California, Berkeley",
    dates: "2011 – 2015",
  },
];
