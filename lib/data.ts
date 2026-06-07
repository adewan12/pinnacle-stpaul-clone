export const schoolInfo = {
  name: "Pinnacle Montessori of St. Paul",
  address: "2931 Parker Rd, Wylie, TX 75098",
  addressLine1: "2931 Parker Rd,",
  addressLine2: "Wylie, TX 75098",
  phone: "972-455-8230",
  phoneFormatted: "972.455.8230",
  phoneTel: "9724558230",
  emails: [
    "pmastpaul@pinnaclemontessori.com",
    "stpaul@pinnaclemontessori.com",
  ],
  hours: "Mon-Fri 6:30am-6:30pm",
  facebook: "https://www.facebook.com/pmastpaul",
  youtube: "https://www.youtube.com/channel/UCdPaSxluO3BbUFy2RDZ_XLA",
  twitter: "https://twitter.com/PinnacleMonte",
  mapEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3344.2306128628056!2d-96.55677568481099!3d33.0503949808903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c051855c143d9%3A0x67c40eeebde043cf!2s2931+Parker+Rd%2C+Wylie%2C+TX+75098%2C+USA!5e0!3m2!1sen!2sin!4v1538501089687",
};

export const corporateInfo = {
  name: "Corporate Office",
  address: "811 S Central Expressway, Suite#306",
  city: "Richardson, TX 75080",
  hours: "Mon-Fri 6:30am-6:30pm",
  phone: "1-866-333-68670",
  phoneTel: "18663336867",
};

export interface NavDropdownItem {
  label: string;
  href: string;
}

export interface NavItem {
  label: string;
  href: string;
  external?: boolean;
  dropdown?: NavDropdownItem[];
}

export const navItems: NavItem[] = [
  { label: "HOME", href: "/" },
  {
    label: "ABOUT US",
    href: "#",
    dropdown: [
      { label: "About Pinnacle", href: "/about" },
      { label: "Our Mission", href: "/about/mission" },
      { label: "Our Team", href: "/about/team" },
      { label: "Accreditations", href: "/about/accreditations" },
    ],
  },
  {
    label: "OUR PROGRAMS",
    href: "#",
    dropdown: [
      { label: "Infant Programs", href: "/programs/infant-programs" },
      { label: "Toddler Programs", href: "/programs/toddler-programs" },
      { label: "Pre-Primary", href: "/programs/pre-primary-programs" },
      { label: "Primary", href: "/programs/primary-programs" },
      { label: "Lower Elementary", href: "/programs/lower-elementary-programs" },
      { label: "Summer Camp", href: "/programs/summer-camp" },
      { label: "Before & After School", href: "/programs/before-after-school" },
    ],
  },
  { label: "CURRICULUM", href: "/curriculum" },
  {
    label: "PARENT INFO",
    href: "#",
    dropdown: [
      { label: "Parent Handbook", href: "/parent-info/handbook" },
      { label: "School Calendar", href: "/parent-info/calendar" },
      { label: "Tuition & Fees", href: "/parent-info/tuition" },
      { label: "FAQs", href: "/parent-info/faqs" },
    ],
  },
  { label: "GALLERY", href: "/gallery" },
  {
    label: "BLOG",
    href: "https://www.pinnaclemontessori.com/blog/",
    external: true,
  },
  {
    label: "SHOP",
    href: "https://pinnaclemontessoristore.com/",
    external: true,
  },
  { label: "CAREERS", href: "/careers" },
  { label: "FEEDBACK", href: "/send-feedback" },
  { label: "CONTACT US", href: "/contact-us" },
];

export interface Program {
  id: string;
  title: string;
  ageRange: string;
  description: string;
  href: string;
  image: string;
  imageAlt: string;
}

export const programs: Program[] = [
  {
    id: "infants",
    title: "Infants",
    ageRange: "6 weeks - 13 months",
    description:
      "The program focuses on specific aspects of learning such as non-verbal communication, gross motor skills, and socialization.",
    href: "/programs/infant-programs",
    image: "/images/programs/infants.webp",
    imageAlt: "Infants program",
  },
  {
    id: "toddlers",
    title: "Toddlers",
    ageRange: "13 months - 17 months",
    description:
      "The Toddler program helps to promote independence and cultivate each child's unique character.",
    href: "/programs/toddler-programs",
    image: "/images/programs/toddlers.webp",
    imageAlt: "Toddlers program",
  },
  {
    id: "pre-primary",
    title: "Pre Primary",
    ageRange: "18 months - 38 months",
    description:
      "The Preprimary program allows children the opportunity to explore and develop their language skills by expanding their growing vocabulary.",
    href: "/programs/pre-primary-programs",
    image: "/images/programs/pre-primary.webp",
    imageAlt: "Pre Primary program",
  },
  {
    id: "primary",
    title: "Primary",
    ageRange: "3 - 6 years",
    description:
      "This environment blends practical life and sensorial activities with social and academic skills.",
    href: "/programs/primary-programs",
    image: "/images/programs/primary.webp",
    imageAlt: "Primary program",
  },
  {
    id: "lower-elementary",
    title: "Lower Elementary",
    ageRange: "6 - 9 years",
    description:
      "The program encourages the children to function at their full potential regardless of their age or grade level.",
    href: "/programs/lower-elementary-programs",
    image: "/images/programs/lower-elementary.webp",
    imageAlt: "Lower Elementary program",
  },
  {
    id: "summer-camp",
    title: "Summer Camp",
    ageRange: "",
    description:
      "Our summer sessions have been designed by experts who care about developing a respectful, peaceful, and nurturing environment for the kids.",
    href: "/programs/summer-camp",
    image: "/images/programs/summer-camp.webp",
    imageAlt: "Summer Camp program",
  },
  {
    id: "before-after-school",
    title: "Before After School",
    ageRange: "",
    description:
      "The program encourages the children to function at their full potential regardless of their age or grade level.",
    href: "/programs/before-after-school",
    image: "/images/programs/before-after-school.webp",
    imageAlt: "Before After School program",
  },
];

export const quickLinks = [
  { label: "Shop", href: "https://pinnaclemontessoristore.com/" },
  { label: "Careers", href: "https://pinnaclemontessori.com/main/careers/" },
  {
    label: "Daycare",
    href: "https://pinnaclemontessori.com/main/our-programs/daycare/",
  },
  {
    label: "Child Care",
    href: "https://pinnaclemontessori.com/main/our-programs/childcare/",
  },
  {
    label: "Preschool",
    href: "https://pinnaclemontessori.com/main/our-programs/preschool-in-frisco/",
  },
  { label: "Employee Login", href: "#" },
  {
    label: "Pinnacle Franchise",
    href: "http://www.franchise.pinnaclemontessori.com/",
  },
];
