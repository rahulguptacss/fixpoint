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
  socials: { platform: string; url: string }[];
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
  videoUrl?: string;
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

export interface SocialLink {
  platform: string;
  url: string;
}

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  socials: SocialLink[];
}

export interface TeamData {
  subtitle: string;
  title: string;
  description: string;
  members: TeamMember[];
}

export interface TeamDetailData {
  name: string;
  role: string;
  image: string;
  description: string;
  contact: {
    phone: string;
    email: string;
    location: string;
  };
  stats: {
    experience: string;
    specialization: string;
    completedRepairs: string;
  };
  socials: SocialLink[];
  about: {
    paragraphs: string[];
    features: string[];
  };
  education: {
    title: string;
    institute: string;
    year: string;
  }[];
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

export interface BreadcrumbPath {
  label: string;
  url: string;
}

export interface BreadcrumbData {
  title: string;
  paths: BreadcrumbPath[];
  bgImage?: string;
}

export interface WhyChooseUsFeature {
  text: string;
}

export interface WhyChooseUsProgress {
  label: string;
  percentage: number;
}

export interface WhyChooseUsData {
  subtitle: string;
  title: string;
  features: WhyChooseUsFeature[];
  progressBars: WhyChooseUsProgress[];
  image: string;
  videoLink?: string;
  overlayCard: {
    subtitle: string;
    title: string;
    description: string;
  };
}

export interface BlogData {
  subtitle: string;
  title: string;
  description: string;
  items: BlogItem[];
  viewAllButtonText?: string;
  readMoreText?: string;
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

export interface BrandItem {
  name: string;
  logo: string;
}

export interface SidebarServiceItem {
  title: string;
  icon: string;
  link: string;
}

export interface SidebarDownloadItem {
  title: string;
  icon: string;
  link: string;
}

export interface BrandsWeRepairData {
  sidebar: {
    services: {
      title: string;
      items: SidebarServiceItem[];
    };
    getInTouch: {
      title: string;
      description: string;
      phone: string;
      email: string;
      address: string;
      buttonText: string;
      buttonLink: string;
    };
    whyChoose: {
      title: string;
      features: string[];
    };
    downloads: {
      title: string;
      items: SidebarDownloadItem[];
    };
  };
  mainContent: {
    hero: {
      titlePart1: string;
      titleHighlight: string;
      description: string;
      image: string;
    };
    brandsSection: {
      title: string;
      description: string;
      brands: BrandItem[];
    };
    moreThanPhones: {
      title: string;
      description: string;
      image: string;
      devices: { name: string; icon: string }[];
    };
    cta: {
      icon: string;
      title: string;
      description: string;
      buttonText: string;
      buttonLink: string;
    };
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
        Team: { variants: { RepairTeam: TeamData; RepairTeamPage?: TeamData; } };
        TeamDetail: { variants: { RepairTeamDetail: TeamDetailData } };
        BrandsWeRepair: { variants: { RepairBrandsWeRepair: BrandsWeRepairData } };
        Blog: { variants: { RepairBlog: BlogData } };
        Breadcrumb: { variants: { RepairBreadcrumb: BreadcrumbData; RepairBreadcrumbWhyChooseUs?: BreadcrumbData; RepairBreadcrumbOurTeams?: BreadcrumbData; RepairBreadcrumbTeamDetail?: BreadcrumbData; RepairBreadcrumbBrandsWeRepair?: BreadcrumbData; } };
        WhyChooseUs: { variants: { RepairWhyChooseUs: WhyChooseUsData } };
      };
      templateComponents: {
        "template-1": {
          pages: Record<string, {
            components: PageComponent[];
          }>;
        };
      };
    };
  };
}
