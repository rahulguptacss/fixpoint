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
  slug?: string;
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
  hideViewAll?: boolean;
}

export interface BlogDetailPost {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  heroImage: string;
  intro: string;
  signs: { title: string; image: string; text: string; bullet: string }[];
}

export interface BlogDetailData {
  posts: BlogDetailPost[];
  sidebar: {
    aboutTitle: string;
    aboutText: string;
    aboutButtonLabel: string;
    aboutButtonLink: string;
    recentTitle: string;
    recentPosts?: { title: string; date: string; image: string; href: string }[];
    categoriesTitle: string;
    categories: { label: string; href: string }[];
    helpTitle: string;
    helpText: string;
    helpPhone: string;
    helpEmail: string;
    helpButtonLabel: string;
    helpButtonLink: string;
  };
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

export interface ServiceDetailItem {
  slug: string;
  title: string;
  icon: string;
  heroImage: string;
  description: string;
  body: string;
  features: string[];
  gallery: string[];
  highlights: {
    title: string;
    description: string;
    icon: string;
  }[];
}

export interface ServiceDetailData {
  sidebar: {
    services: {
      title: string;
      items: SidebarServiceItem[];
    };
    getStarted: {
      title: string;
      description: string;
      phone: string;
      email: string;
      address: string;
      buttonText: string;
      buttonLink: string;
    };
    downloads: {
      title: string;
      items: SidebarDownloadItem[];
    };
  };
  items: ServiceDetailItem[];
}

export interface TestimonialsData {
  subtitle: string;
  titlePart1: string;
  titleHighlight: string;
  description: string;
  verifiedLabel: string;
  items: {
    name: string;
    city: string;
    avatar: string;
    title: string;
    quote: string;
    rating: number;
  }[];
  cta?: {
    title: string;
    description: string;
    buttonLabel: string;
    buttonLink: string;
  };
  stats?: {
    background: string;
    items: { value: string; label: string }[];
  };
  team?: {
    subtitle: string;
    title: string;
    description: string;
    members: { name: string; role: string; image: string }[];
  };
}

export interface FaqData {
  subtitle: string;
  titlePart1: string;
  titleHighlight: string;
  description: string;
  groups: {
    id: string;
    icon: string;
    title: string;
    items: { question: string; answer: string }[];
  }[];
}

export interface GalleryData {
  titlePart1: string;
  titleHighlight: string;
  description: string;
  tabs: { id: "photo" | "video"; label: string; icon: string }[];
  filters: { id: string; label: string }[];
  photos: { src: string; alt: string; category: string }[];
  videos: { src: string; alt: string; category: string; videoUrl: string }[];
  cta: {
    title: string;
    description: string;
    phone: string;
    buttonLabel: string;
    buttonLink: string;
  };
}

export interface PricingData {
  subtitle: string;
  titlePart1: string;
  titleHighlight: string;
  description: string;
  highlights: { icon: string; title: string; description: string }[];
  table: {
    headers: { service: string; description: string; price: string };
    rows: {
      icon: string;
      iconBg: string;
      iconColor: string;
      title: string;
      description: string;
      price: string;
    }[];
  };
  popular: {
    title: string;
    items: { icon: string; title: string; price: string; duration: string; image: string }[];
  };
}

export interface BookRepairData {
  intro: {
    subtitle: string;
    titlePart1: string;
    titleHighlight: string;
    description: string;
    image: string;
    features: { icon: string; title: string; description: string }[];
  };
  form: {
    title: string;
    icon: string;
    submitLabel: string;
    privacyNote: string;
    pickupNote: {
      title: string;
      description: string;
    };
    fields: {
      fullName: string;
      phone: string;
      email: string;
      deviceType: string;
      brand: string;
      model: string;
      issueType: string;
      issueDetails: string;
      preferredDate: string;
      preferredTime: string;
    };
    options: {
      deviceTypes: string[];
      brands: string[];
      models: string[];
      issueTypes: string[];
      times: string[];
    };
  };
  process: {
    subtitle: string;
    title: string;
    steps: { number: string; icon: string; title: string; description: string }[];
  };
}

export interface CareerData {
  whyJoin: {
    subtitle: string;
    titlePart1: string;
    titleHighlight: string;
    description: string;
    cards: { icon: string; title: string; description: string }[];
  };
  openings: {
    subtitle: string;
    titlePart1: string;
    titleHighlight: string;
    description: string;
    buttonLabel: string;
    buttonLink: string;
    applyLabel: string;
    jobs: {
      icon: string;
      title: string;
      description: string;
      location: string;
      type: string;
      applyLink: string;
    }[];
  };
}

export interface CareerDetailJob {
  slug: string;
  subtitle: string;
  title: string;
  intro: string;
  location: string;
  type: string;
  posted: string;
  facts: { icon: string; label: string; value: string }[];
  overviewTitle: string;
  overview: string;
  responsibilitiesTitle: string;
  responsibilities: string[];
  requirementsTitle: string;
  requirements: string[];
  offerTitle: string;
  offer: { icon: string; title: string }[];
  cta: {
    title: string;
    description: string;
    buttonLabel: string;
    buttonLink: string;
  };
}

export interface CareerDetailData {
  form: {
    title: string;
    fullName: string;
    email: string;
    phone: string;
    experience: string;
    experiencePlaceholder: string;
    experienceOptions: string[];
    location: string;
    resume: string;
    resumeHint: string;
    coverLetter: string;
    coverPlaceholder: string;
    submitLabel: string;
    privacyNote: string;
  };
  whyJoin: {
    title: string;
    items: { icon: string; text: string }[];
    image: string;
  };
  jobs: CareerDetailJob[];
}

export interface PolicyPageData {
  slug: string;
  breadcrumbTitle: string;
  titlePart1: string;
  titleHighlight: string;
  intro: string;
  sections: { title: string; text: string }[];
}

export interface PolicyData {
  bgImage: string;
  pages: PolicyPageData[];
}

export interface SitemapLink {
  label: string;
  href: string;
}

export interface SitemapGroup {
  number: string;
  title: string;
  icon: string;
  links: SitemapLink[];
}

export interface SitemapData {
  logo: string;
  tagline: string;
  groups: SitemapGroup[];
  others: SitemapGroup[];
}

export interface ContactData {
  subtitle: string;
  titlePart1: string;
  titleHighlight: string;
  description: string;
  info: { icon: string; title: string; lines: string[] }[];
  form: {
    title: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    service: string;
    servicePlaceholder: string;
    services: string[];
    message: string;
    submitLabel: string;
    privacyNote: string;
  };
  map: {
    embedUrl: string;
    cardTitle: string;
    cardAddress: string;
    mapsLabel: string;
    mapsUrl: string;
  };
}

export interface PageComponent {
  key: string;
  component: string;
}

export interface NotFoundData {
  code: string;
  titlePart1: string;
  titlePart2: string;
  description: string;
  homeLabel: string;
  homeLink: string;
  bookLabel: string;
  bookLink: string;
  image: string;
}

export interface RepairTemplateData {
  common: {
    Header: HeaderData;
    Footer: FooterData;
    NotFound?: NotFoundData;
  };
  categories: {
    Repair: {
      sections: {
        Hero: { variants: { RepairHero: HeroData } };
        About: { variants: { RepairAbout: AboutData } };
        Services: { variants: { RepairServices: ServicesData; RepairServicesPage?: ServicesData } };
        ServiceDetail: { variants: { RepairServiceDetail: ServiceDetailData } };
        Stats: { variants: { RepairStats: StatsData } };
        Team: { variants: { RepairTeam: TeamData; RepairTeamPage?: TeamData; } };
        TeamDetail: { variants: { RepairTeamDetail: TeamDetailData } };
        BrandsWeRepair: { variants: { RepairBrandsWeRepair: BrandsWeRepairData } };
        Blog: { variants: { RepairBlog: BlogData; RepairBlogPage?: BlogData } };
        BlogDetail: { variants: { RepairBlogDetail: BlogDetailData } };
        BookRepair: { variants: { RepairBookRepair: BookRepairData } };
        Pricing: { variants: { RepairPricing: PricingData } };
        Gallery: { variants: { RepairGallery: GalleryData } };
        Testimonials: { variants: { RepairTestimonials: TestimonialsData } };
        Faq: { variants: { RepairFaq: FaqData } };
        Contact: { variants: { RepairContact: ContactData } };
        Career: { variants: { RepairCareer: CareerData } };
        CareerDetail: { variants: { RepairCareerDetail: CareerDetailData } };
        Policy: { variants: { RepairPolicy: PolicyData } };
        Sitemap: { variants: { RepairSitemap: SitemapData } };
        Breadcrumb: { variants: { RepairBreadcrumb: BreadcrumbData; RepairBreadcrumbWhyChooseUs?: BreadcrumbData; RepairBreadcrumbOurTeams?: BreadcrumbData; RepairBreadcrumbTeamDetail?: BreadcrumbData; RepairBreadcrumbBrandsWeRepair?: BreadcrumbData; RepairBreadcrumbServices?: BreadcrumbData; RepairBreadcrumbServiceDetail?: BreadcrumbData; RepairBreadcrumbBook?: BreadcrumbData; RepairBreadcrumbPricing?: BreadcrumbData; RepairBreadcrumbGallery?: BreadcrumbData; RepairBreadcrumbTestimonials?: BreadcrumbData; RepairBreadcrumbFaq?: BreadcrumbData; RepairBreadcrumbBlog?: BreadcrumbData; RepairBreadcrumbBlogDetail?: BreadcrumbData; RepairBreadcrumbContact?: BreadcrumbData; RepairBreadcrumbCareer?: BreadcrumbData; RepairBreadcrumbCareerDetail?: BreadcrumbData; } };
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
