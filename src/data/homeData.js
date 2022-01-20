import {
  appDesignDesktop,
  appDesignTablet,
  appDesignMobile,
  webDesignDesktopL,
  webDesignDesktopS,
  webDesignTablet,
  webDesignMobile,
  graphicDesignDesktop,
  graphicDesignTablet,
  graphicDesignMobile,
  friendly,
  passionate,
  resourceful,
} from "../assets/home";

const services = [
  {
    title: "web design",
    img: webDesignMobile,
    imgM: webDesignTablet,
    imgL: webDesignDesktopL,
    imgS: webDesignDesktopS,
  },
  {
    title: "app design",
    img: appDesignMobile,
    imgM: appDesignTablet,
    imgL: appDesignDesktop,
  },
  {
    title: "graphic design",
    img: graphicDesignMobile,
    imgM: graphicDesignTablet,
    imgL: graphicDesignDesktop,
  },
];

const features = [
  {
    img: passionate,
    title: "passionate",
    text:
      "Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions.",
  },
  {
    img: resourceful,
    title: "resourceful",
    text:
      "Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfill our clients’ needs.",
  },
  {
    img: friendly,
    title: "friendly",
    text:
      " We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we strive to give them the best experience a company can provide.",
  },
];

export { services, features };
