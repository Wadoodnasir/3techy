export interface ProjectGalleryImage {
  url: string;
  thumbnail: string;
  width: number;
  height: number;
  title: string;
}

export interface AccordionItem {
  title: string;
  content: string;
}

export interface Project {
  id: string;
  title: string;
  image: string;
  categories: string[];
  link: string;
  classes: string;
  // Detail page fields
  description?: string;
  galleryImages?: ProjectGalleryImage[];
  summary?: string;
  accordionItems?: AccordionItem[];
  client?: string;
  projectUrl?: string;
  tags?: string[];
  date?: string;
  previousProject?: { title: string; link: string };
  nextProject?: { title: string; link: string };
}

export const projects: Project[] = [
  {
    id: "8144",
    title: "MSPTech.ai Website Relaunch Case Study",
    image:
      "https://beetechy.com/wp-content/uploads/2025/10/bee-techy-case-study-msptech-ai-chatbot-demo.jpg-768x576.png",
    categories: ["UX/UI Design", "Web App Development", "Web Design"],
    link: "/project/msptech-ai-case-study-how-3techy-executed-a-2-month-rapid-website-relaunch-to-drive-beta-signups-for-an-ai-powered-msp-platform/",
    classes:
      "elementor elementor-1237 e-loop-item e-loop-item-8144 post-8144 project type-project status-publish has-post-thumbnail hentry category-ux-ui-design category-web-app-development category-web-design tag-css tag-figma tag-html tag-javascript tag-php industry-fintech",
  },
  {
    id: "8065",
    title: 'Talenver Case Study: How 3Techy Engineered a "Super-App"',
    image:
      "https://beetechy.com/wp-content/uploads/2025/10/bee-techy-case-study-talenver-professional-networking-platform-ui.jpg-768x642.png",
    categories: ["UX/UI Design", "Web App Development", "Web Design"],
    link: "/project/talenver-case-study-how-3techy-engineered-a-super-app-to-unify-networking-commerce-and-community-for-creative-professionals/",
    classes:
      "elementor elementor-1237 e-loop-item e-loop-item-8065 post-8065 project type-project status-publish has-post-thumbnail hentry category-ux-ui-design category-web-app-development category-web-design tag-css tag-figma tag-html tag-javascript tag-php industry-fintech",
    description: "Talenver super-app case study: See how 3Techy solved platform fragmentation for creatives with a unified digital ecosystem.",
    galleryImages: [
      {
        url: "https://beetechy.com/wp-content/uploads/2025/10/bee-techy-case-study-talenver-professional-networking-platform-ui.jpg.jpg",
        thumbnail: "https://beetechy.com/wp-content/uploads/2025/10/bee-techy-case-study-talenver-professional-networking-platform-ui.jpg-768x642.jpg",
        width: 768,
        height: 642,
        title: "bee-techy-case-study-talenver-professional-networking-platform-ui.jpg",
      },
      {
        url: "https://beetechy.com/wp-content/uploads/2025/10/bee-techy-case-study-talenver-super-app-project-overview.jpg.png",
        thumbnail: "https://beetechy.com/wp-content/uploads/2025/10/bee-techy-case-study-talenver-super-app-project-overview.jpg-768x934.png",
        width: 768,
        height: 934,
        title: "bee-techy-case-study-talenver-super-app-project-overview.jpg",
      },
      {
        url: "https://beetechy.com/wp-content/uploads/2025/10/bee-techy-case-study-talenver-problem-and-solution.png-scaled.png",
        thumbnail: "https://beetechy.com/wp-content/uploads/2025/10/bee-techy-case-study-talenver-problem-and-solution.png-768x1459.png",
        width: 768,
        height: 1459,
        title: "bee-techy-case-study-talenver-problem-and-solution.png",
      },
      {
        url: "https://beetechy.com/wp-content/uploads/2025/10/bee-techy-case-study-talenver-discovery-phase-and-ux-ui-design.jpg.jpg",
        thumbnail: "https://beetechy.com/wp-content/uploads/2025/10/bee-techy-case-study-talenver-discovery-phase-and-ux-ui-design.jpg-768x1197.jpg",
        width: 768,
        height: 1197,
        title: "bee-techy-case-study-talenver-discovery-phase-and-ux-ui-design.jpg",
      },
      {
        url: "https://beetechy.com/wp-content/uploads/2025/10/bee-techy-case-study-talenver-core-platform-development.jpg.png",
        thumbnail: "https://beetechy.com/wp-content/uploads/2025/10/bee-techy-case-study-talenver-core-platform-development.jpg-768x658.png",
        width: 768,
        height: 658,
        title: "bee-techy-case-study-talenver-core-platform-development.jpg",
      },
      {
        url: "https://beetechy.com/wp-content/uploads/2025/10/bee-techy-case-study-talenver-trust-and-safety-features.jpg-scaled.jpg",
        thumbnail: "https://beetechy.com/wp-content/uploads/2025/10/bee-techy-case-study-talenver-trust-and-safety-features.jpg-768x2341.jpg",
        width: 768,
        height: 2341,
        title: "bee-techy-case-study-talenver-trust-and-safety-features.jpg",
      },
      {
        url: "https://beetechy.com/wp-content/uploads/2025/10/bee-techy-case-study-talenver-future-roadmap-and-cta.jpg-scaled.jpg",
        thumbnail: "https://beetechy.com/wp-content/uploads/2025/10/bee-techy-case-study-talenver-future-roadmap-and-cta.jpg-768x1669.jpg",
        width: 768,
        height: 1669,
        title: "bee-techy-case-study-talenver-future-roadmap-and-cta.jpg",
      },
      {
        url: "https://beetechy.com/wp-content/uploads/2025/10/bee-techy-case-study-talenver-mvp-results.jpg.jpg",
        thumbnail: "https://beetechy.com/wp-content/uploads/2025/10/bee-techy-case-study-talenver-mvp-results.jpg-768x928.jpg",
        width: 768,
        height: 928,
        title: "bee-techy-case-study-talenver-mvp-results.jpg",
      },
    ],
    summary: `<p><span class="citation-418">This </span><b><code><span class="citation-418">Talenver Super-App Case Study</span></code></b><span class="citation-418 citation-end-418"> explores how 3Techy engineered a complex digital ecosystem for creative professionals</span>.</p><p><span class="citation-417 citation-end-417">Talenver identified a major inefficiency in the digital world for creatives</span>. <span class="citation-416">They were constrained by </span><b><span class="citation-416">"Platform Fragmentation"</span></b> <span class="citation-415">, a </span><b><span class="citation-415">"Lack of Integrated Community"</span></b> <span class="citation-414">, and </span><b><span class="citation-414">"Pervasive Trust & Authenticity Issues"</span></b>.</p><p>Their goal was to build a single "super-app" to solve this. <span class="citation-413">They needed a technical partner to deconstruct this ambitious vision and build a solution that could handle both </span><b><span class="citation-413">"Complexity & Trust"</span></b>.</p><p></p>`,
    accordionItems: [
      {
        title: "Bold Strategy",
        content: `<p><span class="citation-412">Our strategy began with </span><b><span class="citation-412">"Bold Strategy – Deconstructing the Super-App"</span></b>. <span class="citation-411">Our approach involved a comprehensive </span><b><span class="citation-411">"Discovery Phase & Strategic Roadmap"</span></b> <span class="citation-410">to break down the multi-service platform into a </span><b><span class="citation-410">"manageable, phased roadmap"</span></b>. <span class="citation-409 citation-end-409">We collaborated closely with the Talenver team to define core features, ensuring the project remained focused on a clear path for launch and future development</span>.</p>`,
      },
      {
        title: "Enterprise-Grade Execution",
        content: `<p><span class="citation-408">Our execution focused on </span><b><span class="citation-408">"Building for Complexity & Trust"</span></b>. <span class="citation-407">We engineered a scalable architecture and implemented a </span><b><span class="citation-407">"Foundational Architecture & UX/UI Design"</span></b>. <span class="citation-406">This was followed by </span><b><span class="citation-406">"Core Platform Development"</span></b> <span class="citation-405">and the implementation of multi-layered </span><b><span class="citation-405">"Trust & Safety Features"</span></b> <span class="citation-404">, including </span><b><span class="citation-404">"Profile Verification"</span></b> <span class="citation-403">, </span><b><span class="citation-403">"User Rating"</span></b> <span class="citation-402">, and </span><b><span class="citation-402">"Content Moderation Systems"</span></b>.</p>`,
      },
      {
        title: "Enduring Care & Assistance",
        content: `<p><span class="citation-401">The project's successful culmination was a </span><b><span class="citation-401">"fully-featured MVP, delivered to Talenver and ready for its market debut"</span></b>. <span class="citation-400">As part of our </span><b><span class="citation-400">"Enduring Care"</span></b><span class="citation-400 citation-end-400"> partnership</span>, our focus is on supporting their launch. <span class="citation-399">The future </span><b><span class="citation-399">"roadmap includes building out a dynamic discussion board"</span></b> <span class="citation-398">, </span><b><span class="citation-398">"Implementing the full marketplace functionality"</span></b> <span class="citation-397">, and </span><b><span class="citation-397">"developing the native mobile app"</span></b></p>`,
      },
    ],
    client: "Talenver",
    projectUrl: "https://talenver.com/",
    tags: ["CSS", "Figma", "HTML", "JavaScript", "PHP"],
    date: "October 29, 2025",
    previousProject: {
      title: "Pigeon Post AI Powered Gifting Platform",
      link: "/project/pigeon-post-ai-gifting-platform-case-study/",
    },
    nextProject: {
      title: "MSPTech.ai Website Relaunch Case Study",
      link: "/project/msptech-ai-case-study-how-3techy-executed-a-2-month-rapid-website-relaunch-to-drive-beta-signups-for-an-ai-powered-msp-platform/",
    },
  },
  {
    id: "8095",
    title: "Pigeon Post AI Powered Gifting Platform",
    image:
      "https://beetechy.com/wp-content/uploads/2025/10/pigeon-post-ai-case-study-768x432.png",
    categories: ["UX/UI Design", "Web App Development", "Web Design"],
    link: "/project/pigeon-post-ai-gifting-platform-case-study/",
    classes:
      "elementor elementor-1237 e-loop-item e-loop-item-8095 post-8095 project type-project status-publish has-post-thumbnail hentry category-ux-ui-design category-web-app-development category-web-design tag-css tag-figma tag-html tag-javascript tag-php industry-fintech",
  },
  {
    id: "7985",
    title: "FourMeasure Social Music Platform",
    image:
      "https://beetechy.com/wp-content/uploads/2025/10/A-768x683.jpg",
    categories: ["UX/UI Design", "Web App Development", "Web Design"],
    link: "/project/fourmeasure-music-app-case-study/",
    classes:
      "elementor elementor-1237 e-loop-item e-loop-item-7985 post-7985 project type-project status-publish has-post-thumbnail hentry category-ux-ui-design category-web-app-development category-web-design tag-css tag-figma tag-html tag-javascript tag-php industry-fintech",
  },
  {
    id: "8007",
    title: "Nduro AI Physical Endurance Fitness App",
    image:
      "https://beetechy.com/wp-content/uploads/2025/10/nduro-ai-fitness-app-case-study-768x576.png",
    categories: ["UX/UI Design", "Web App Development", "Web Design"],
    link: "/project/nduro-ai-fitness-app-case-study/",
    classes:
      "elementor elementor-1237 e-loop-item e-loop-item-8007 post-8007 project type-project status-publish has-post-thumbnail hentry category-ux-ui-design category-web-app-development category-web-design tag-css tag-figma tag-html tag-javascript tag-php industry-health-fitness",
  },
  {
    id: "6870",
    title:
      "Rizzo Network Web Platform Revamp with Web3 Blockchain Integration",
    image: "https://beetechy.com/wp-content/uploads/2025/04/01-2.jpg",
    categories: ["UX/UI Design", "Web App Development", "Web Design"],
    link: "/project/rizzo-network-web-platform-revamp-with-web3-blockchain-integration/",
    classes:
      "elementor elementor-1237 e-loop-item e-loop-item-6870 post-6870 project type-project status-publish has-post-thumbnail hentry category-ux-ui-design category-web-app-development category-web-design tag-css tag-figma tag-html tag-javascript tag-php industry-fintech",
  },
  {
    id: "6859",
    title: "Hey Caddie Golf Course Tracking and Scoring Mobile Application",
    image: "https://beetechy.com/wp-content/uploads/2025/04/01-1.jpg",
    categories: ["Mobile App Development", "UX/UI Design"],
    link: "/project/hey-caddie-golf-course-tracking-and-scoring-mobile-application/",
    classes:
      "elementor elementor-1237 e-loop-item e-loop-item-6859 post-6859 project type-project status-publish has-post-thumbnail hentry category-mobile-app-development category-ux-ui-design industry-sports-recreation",
  },
  {
    id: "6509",
    title: "The Many Meeting Management Mobile Application",
    image: "https://beetechy.com/wp-content/uploads/2025/03/1.jpg",
    categories: ["Mobile App Development", "UX/UI Design"],
    link: "/project/the-many-meeting-management-mobile-application/",
    classes:
      "elementor elementor-1237 e-loop-item e-loop-item-6509 post-6509 project type-project status-publish has-post-thumbnail hentry category-mobile-app-development category-ux-ui-design tag-css tag-figma tag-html tag-mobile-application tag-reactjs tag-ux-ui-design",
  },
  {
    id: "6494",
    title: "MAK Realty Group Zillow-like Real Estate Platform",
    image: "https://beetechy.com/wp-content/uploads/2025/03/01.jpg",
    categories: [
      "Industries",
      "Real Estate",
      "Real Estate Technology",
      "SaaS Development",
      "UX/UI Design",
      "Web App Development",
    ],
    link: "/project/mak-realty-group-zillow-like-real-estate-platform/",
    classes:
      "elementor elementor-1237 e-loop-item e-loop-item-6494 post-6494 project type-project status-publish has-post-thumbnail hentry category-industries category-real-estate category-real-estate-technology category-saas-development category-ux-ui-design category-web-app-development industry-real-estate",
  },
  {
    id: "6462",
    title: "YouWaggle Collaborative Wishlist Social Mobile Application",
    image: "https://beetechy.com/wp-content/uploads/2025/02/1.jpg",
    categories: ["Mobile App Development"],
    link: "/project/youwaggle-collaborative-wishlist-social-mobile-application/",
    classes:
      "elementor elementor-1237 e-loop-item e-loop-item-6462 post-6462 project type-project status-publish has-post-thumbnail hentry category-mobile-app-development tag-figma tag-mobile-application tag-reactjs tag-ux-ui-design",
  },
  {
    id: "6401",
    title: "Dorrus Hotel Booking and Rewards Platform",
    image: "https://beetechy.com/wp-content/uploads/2025/01/1-1.png",
    categories: ["SaaS Development", "Web App Development"],
    link: "/project/dorrus-hotel-booking-and-rewards-platform/",
    classes:
      "elementor elementor-1237 e-loop-item e-loop-item-6401 post-6401 project type-project status-publish has-post-thumbnail hentry category-saas-development category-web-app-development tag-mysql tag-node-js tag-react tag-sabre tag-travel",
  },
  {
    id: "6360",
    title: "TravelPal AI Powered Trip Planner",
    image: "https://beetechy.com/wp-content/uploads/2025/01/1.png",
    categories: ["SaaS Development"],
    link: "/project/travelpal-ai-powered-trip-planning-tool/",
    classes:
      "elementor elementor-1237 e-loop-item e-loop-item-6360 post-6360 project type-project status-publish has-post-thumbnail hentry category-saas-development",
  },
  {
    id: "6063",
    title: "CutThroat Fantasy Football Platform",
    image: "https://beetechy.com/wp-content/uploads/2024/08/1-1.jpg",
    categories: [
      "Game Development",
      "SaaS Development",
      "Web App Development",
    ],
    link: "/project/cutthroat-fantasy-football-platform/",
    classes:
      "elementor elementor-1237 e-loop-item e-loop-item-6063 post-6063 project type-project status-publish has-post-thumbnail hentry category-game-development category-saas-development category-web-app-development tag-css tag-figma tag-html tag-javascript tag-reactjs tag-ux-ui-design industry-sports-recreation",
  },
  {
    id: "6049",
    title:
      "San Diego Community Power Government Solar Program Enterprise Portal",
    image: "https://beetechy.com/wp-content/uploads/2024/08/01.jpg",
    categories: ["CRM Development", "Web App Development"],
    link: "/project/san-diego-community-power-government-solar-program-enterprise-portal/",
    classes:
      "elementor elementor-1237 e-loop-item e-loop-item-6049 post-6049 project type-project status-publish has-post-thumbnail hentry category-crm-development category-web-app-development tag-css tag-figma tag-html tag-javascript tag-reactjs industry-energy-utilities",
  },
  {
    id: "6039",
    title:
      "Automated Bushfire Risk Level Assessment Software (Lidar, AutoCAD)",
    image: "https://beetechy.com/wp-content/uploads/2024/08/1.jpg",
    categories: ["SaaS Development", "Web App Development"],
    link: "/project/automated-bushfire-risk-level-assessment-software-lidar-autocad/",
    classes:
      "elementor elementor-1237 e-loop-item e-loop-item-6039 post-6039 project type-project status-publish has-post-thumbnail hentry category-saas-development category-web-app-development tag-figma tag-reactjs tag-ux-ui-design",
  },
  {
    id: "5754",
    title: "Photomatica Photobooth Company CRM Development",
    image: "https://beetechy.com/wp-content/uploads/2024/07/1.png",
    categories: ["CRM Development", "Web App Development"],
    link: "/project/photomatica-photobooth-company-crm-development/",
    classes:
      "elementor elementor-1237 e-loop-item e-loop-item-5754 post-5754 project type-project status-publish has-post-thumbnail hentry category-crm-development category-web-app-development tag-javascript tag-nestjs tag-nextjs tag-nodejs tag-reactjs",
  },
  {
    id: "5730",
    title: "6CardGolf Mobile App Card Game",
    image: "https://beetechy.com/wp-content/uploads/2024/07/01-2.png",
    categories: ["Game Development", "Mobile App Development"],
    link: "/project/6cardgolf-mobile-app-card-game/",
    classes:
      "elementor elementor-1237 e-loop-item e-loop-item-5730 post-5730 project type-project status-publish has-post-thumbnail hentry category-game-development category-mobile-app-development tag-android-application tag-ios-application tag-javascript tag-mobile-application tag-react-native",
  },
];

