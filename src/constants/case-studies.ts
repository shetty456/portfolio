export interface CaseStudy {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  tags: string[];
  metrics: string[];
  pdfUrl: string;
}

export const caseStudies: CaseStudy[] = [
  {
    id: 1,
    title: "User Onboarding Optimization",
    description: "Analyzed user behavior data and conducted interviews to identify friction points in the onboarding flow. Implemented changes that reduced drop-off by 35% and increased new user activation.",
    tags: ["User Research", "Data Analysis", "UX Design"],
    pdfUrl: "/case-studies/onboarding-optimization.pdf",
    metrics: ["35% drop-off reduction", "25% faster completion", "92% satisfaction"],
    technologies: ["User Research", "Data Analysis", "UX Design"]
  },
  {
    id: 2,
    title: "Feature Prioritization Framework",
    description: "Developed and implemented a structured approach to feature prioritization using impact vs effort analysis and user feedback loops. Resulted in more strategic product decisions.",
    tags: ["Product Strategy", "Stakeholder Management", "Analytics"],
    pdfUrl: "/case-studies/prioritization-framework.pdf",
    metrics: ["40% faster decisions", "3x user engagement", "Team alignment"],
    technologies: ["Product Strategy", "Stakeholder Management", "Analytics"]
  },
  {
    id: 3,
    title: "Cross-functional Collaboration",
    description: "Led a collaborative initiative between design, engineering, and marketing teams to launch a new product feature. Demonstrated strong communication and project management skills.",
    tags: ["Leadership", "Communication", "Project Management"],
    pdfUrl: "/case-studies/cross-functional-project.pdf",
    metrics: ["On-time delivery", "Zero scope creep", "Team satisfaction"],
    technologies: ["Leadership", "Communication", "Project Management"]
  }
]