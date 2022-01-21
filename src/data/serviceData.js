import {
  blogr,
  express,
  transfer,
  photon,
  builder,
  camp,
  airfilter,
  eyecam,
  faceit,
  todo,
  loopstudios,
  boxedWater,
  change,
  science,
} from "../assets";

const projectData = [
  {
    pageTitle: "graphic design",
    description:
      "We deliver eye-catching branding materials that are tailored to meet your business objectives.",
    projects: [
      {
        img: change,
        title: "Tim Brown",
        description:
          "A book cover designed for Tim Brown’s new release, ‘Change’",
      },
      {
        img: boxedWater,
        title: "Boxed water",
        description: "A simple packaging concept made for Boxed Water",
      },
      {
        img: science,
        title: "Science!",
        description:
          "A poster made in collaboration with the Federal Art Project",
      },
    ],
  },

  {
    pageTitle: "web design",
    description:
      "We build websites that serve as powerful marketing tools and bring memorable brand experiences",
    projects: [
      {
        img: express,
        title: "express",
        description:
          "A multi-carrier shipping website for ecommerce businesses",
      },
      {
        img: transfer,
        title: "transfer",
        description:
          "Site for low-cost money transfers and sending money within seconds",
      },
      {
        img: photon,
        title: "photon",
        description:
          "Get to meet your favorite internet superstar with the faceit app",
      },
      {
        img: builder,
        title: "builder",
        description:
          "Connects users with local contractors based on their location",
      },
      {
        img: blogr,
        title: "blogr",
        description:
          "Blogr is a platform for creating an online blog or publication",
      },
      {
        img: camp,
        title: "camp",
        description:
          "Get expert training in coding, data, design, and digital marketing",
      },
    ],
  },

  {
    pageTitle: "app design",
    description:
      "Our mobile designs bring intuitive digital solutions to your customers right at their fingertips.",
    projects: [
      {
        img: airfilter,
        title: "airfilter",
        description:
          "Solving the problem of poor indoor air quality by filtering the air",
      },
      {
        img: eyecam,
        title: "eyecam",
        description:
          "Product that lets you edit your favorite photos and videos at any time",
      },
      {
        img: faceit,
        title: "faceit",
        description:
          "Get to meet your favorite internet superstar with the faceit app",
      },
      {
        img: todo,
        title: "todo",
        description:
          "A todo app that features cloud sync with light and dark mode",
      },
      {
        img: loopstudios,
        title: "loopstudios",
        description: "A VR experience app made for Loopstudios",
      },
    ],
  },
];

export { projectData };
