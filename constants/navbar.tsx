import { createId } from "@/lib/utils";
import { FaCodepen, FaLinkedin, FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebookSquare, FaGithubSquare } from "react-icons/fa";

export const navLinks = [
  {
    id: createId(),
    name: "Home",
    to: "/",
  },
  {
    id: createId(),
    name: "About",
    to: "/about",
  },
  {
    id: createId(),
    name: "Projects",
    to: "/projects",
  },
  {
    id: createId(),
    name: "Articles",
    to: "/articles",
  },
  {
    id: createId(),
    name: "Pricing",
    to: "/pricing",
  },
];

export const socialLinks = [
  {
    id: createId(),
    icon: <FaSquareXTwitter />,
    url: "https://twitter.com/TanzirIbneAli",
  },
  {
    id: createId(),
    icon: <FaGithubSquare />,
    url: "https://github.com/devtanzir",
  },
  {
    id: createId(),
    icon: <FaLinkedin fill="#0A66C2" />,
    url: "https://www.linkedin.com/in/tanziribneali/",
  },
  {
    id: createId(),
    icon: <FaFacebookSquare fill="#1877F2" />,
    url: "https://www.facebook.com/tanziribneali.me",
  },
  {
    id: createId(),
    icon: <FaCodepen />,
    url: "https://codepen.io/tanziribneali/pens/showcase",
  },
];
