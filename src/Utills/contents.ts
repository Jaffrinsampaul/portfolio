import {
  Css,
  Github,
  Html,
  Javascript,
  Nest,
  Next,
  Postgresql,
  React,
  Redux,
  Tailwind,
  Typescript,
  abs,
  folder,
  ribbon,
  verified,
} from "../Assets";

export const ABOUT_CARD = [
  { img: ribbon, title: "Experience", subTitle: "1.8 year" },
  { img: folder, title: "Projects", subTitle: "Completed 4 Projects" },
];

export const about = `Hello, I'm JAFFRIN, delighted to have you in my space! I'm a Junior Software Developer at Alpha Business Solutions, with expertise 
in crafting mobile applications, web development,
 and backend solutions. If you have any queries or need assistance, don't hesitate to reach out—I'm here to help!`;

export const skills = {
  frontEnd: [
    {
      img: verified,
      name: "HTML 5",
    },
    {
      img: verified,
      name: "CSS 3",
    },
    {
      img: verified,
      name: "JavaScript",
    },
    {
      img: verified,
      name: "React",
    },
    {
      img: verified,
      name: "React Native",
    },
    {
      img: verified,
      name: "Tailwind",
    },
    {
      img: verified,
      name: "Prime Flex",
    },
    {
      img: verified,
      name: "Prime React",
    },
    {
      img: verified,
      name: "Material UI",
    },
    {
      img: verified,
      name: "Next JS",
    },
  ],
  backEnd: [
    {
      img: verified,
      name: "Nest JS",
    },
    {
      img: verified,
      name: "PostgresSQL",
    },
    {
      img: verified,
      name: "Swagger",
    },
    {
      img: verified,
      name: "Git/GitHub",
    },
  ],
};

export const experienceDetails = [
  {
    companyName: "Alpha Bussiness Solutions",
    companyLogo: abs,
    companyWebsite: "https://alphabsolutions.com/",
    companyLocation: "Tirunelveli",
    roles: [
      {
        role: "Junior Software developer",
        period: "May-2022 - present",
      },
      {
        role: "Internship",
        period: "Feb-2022-May-2022",
      },
    ],
  },
];

export const mailSubject = "Let's Connect";

export const TECH_SKILL = [
  {icons: Html, title: "html"},
  {icons: Css, title: "css"},
  {icons:Javascript, title: "javascript"},
  {icons: Typescript, title: "typescript"},
  {icons: React, title: "react"},
  {icons: Redux, title: "redux"},
  {icons: Next, title: "Next"},
  {icons: Tailwind, title: "tailwind css"},
  {icons: Nest, title: "nest js"},
  {icons: Postgresql, title: "postgress"},
  {icons: Github, title: "github"},
];

export const HEADER_DETAILS = {
  WELCOME_MESSAGE: "Hello I'm",
  ROLES: "Junior Software Developer",
  NAMES: "Jaffrin Sampaul",
};
