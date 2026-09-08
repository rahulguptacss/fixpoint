export interface MenuItem {
  label: string;
  href: string;
  subItems?: MenuItem[];
}

export interface HeaderData {
  logo: string;
  logoImage: string;
  menu: MenuItem[];
  button: {
    label: string;
    href: string;
  };
  contactInfo: {
    address: string;
    phone: string;
    email: string;
    timing?: string;
  };
}

export interface HeroFeature {
  icon: string;
  title: string;
  description: string;
}

export interface HeroData {
  badge: string;
  titlePart1: string;
  titleHighlight: string;
  description: string;
  buttonPrimary: {
    label: string;
    href: string;
  };
  buttonSecondary: {
    label: string;
    href: string;
  };
  features: HeroFeature[];
  image: string;
}

export interface AboutFeature {
  text: string;
}

export interface AboutData {
  subtitle: string;
  title: string;
  description: string;
  features: AboutFeature[];
  buttonText: string;
  buttonLink: string;
  experienceYears: string;
  experienceText: string;
  images: string[];
}

export interface ServiceItem {
  id: number;
  title: string;
  description: string;
  icon: string;
  image: string;
}

export interface ServicesData {
  subtitle: string;
  titlePart1: string;
  titleHighlight: string;
  titlePart2: string;
  titleHighlight2?: string;
  titlePart3?: string;
  items: ServiceItem[];
}

export interface StatItem {
  id: number;
  value: string;
  label: string;
  icon: string;
}

export interface StatsData {
  items: StatItem[];
}

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  socials: { platform: string; url: string }[];
}

export interface TeamData {
  subtitle: string;
  title: string;
  description: string;
  members: TeamMember[];
}

export interface BlogItem {
  id: number;
  title: string;
  description: string;
  image: string;
  date: string;
  category: string;
  link: string;
}

export interface BlogData {
  subtitle: string;
  title: string;
  description: string;
  items: BlogItem[];
}

export interface FooterQuickLink {
  label: string;
  href: string;
}

export interface FooterFeature {
  title: string;
  description: string;
  icon: string;
}

export interface FooterData {
  logo: string;
  logoImage: string;
  description: string;
  quickLinks: FooterQuickLink[];
  servicesLinks: FooterQuickLink[];
  contact: {
    address: string;
    phone: string;
    email: string;
    workingHours: string;
  };
  socialLinks: { platform: string; url: string }[];
  newsletter: {
    title: string;
    description: string;
  };
  bottomFeatures: FooterFeature[];
  copyright: string;
  labels: {
    quickLinks: string;
    ourServices: string;
    contactUs: string;
    newsletter: string;
    subscribeBtn: string;
    newsletterPlaceholder: string;
  };
}

export interface PageComponent {
  key: string;
  component: string;
}

export interface RepairTemplateData {
  common: {
    Header: HeaderData;
    Footer: FooterData;
  };
  categories: {
    Repair: {
      sections: {
        Hero: { variants: { RepairHero: HeroData } };
        About: { variants: { RepairAbout: AboutData } };
        Services: { variants: { RepairServices: ServicesData } };
        Stats: { variants: { RepairStats: StatsData } };
        Team: { variants: { RepairTeam: TeamData } };
        Blog: { variants: { RepairBlog: BlogData } };
      };
      templateComponents: {
        "template-1": {
          pages: {
            home: {
              components: PageComponent[];
            };
          };
        };
      };
    };
  };
}
