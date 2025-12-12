import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://donor-hubs.pages.dev/", // replace this with your deployed domain
  author: "The Donor Hubs",
  desc: "This website is dedicated to supporting innocent families forced to flee the war. Our mission is to provide transparent, immediate assistance to civilians displaced by ongoing conflict. Your donation helps provide safe evacuation, shelter, food, and urgent relief for those who are in urgent need.",
  title: "The Donor Hubs",
  ogImage: "datasr.jpg",
  lightAndDarkMode: true,
  postPerPage: 6,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
};

export const LOCALE = {
  lang: "en", // html lang code. Set this empty and default will be "en"
  langTag: ["en-EN"], // BCP 47 Language Tags. Set this empty [] to use the environment default
} as const;

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com",
    linkTitle: ` ${SITE.title} on Github`,
    active: true,
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/datasrco.kh",
    linkTitle: `${SITE.title} on Facebook`,
    active: true,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/",
    linkTitle: `${SITE.title} on Instagram`,
    active: true,
  },
  {
    name: "Mail",
    href: "mailto:yourmail@gmail.com",
    linkTitle: `Send an email to ${SITE.title}`,
    active: false,
  },
  {
    name: "Telegram",
    href: "https://telegram.org/",
    linkTitle: `${SITE.title} on Telegram`,
    active: false,
  },
];
