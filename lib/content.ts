/**
 * Single source of truth for landing page copy.
 *
 * Everything here traces back to contentPlan.md. The content bugs catalogued in
 * section 3 of that plan are fixed at this layer, so no component can reintroduce
 * them: no "CompQsoft" or "RSM" attributions, application routes to
 * recruitment@didsolutions.net, and the Leesburg address carries no stray space.
 */

export const company = {
  legalName: "Defense in Depth Solutions, Inc.",
  shortName: "DID Solutions",
  wordmark: "didsolutions",
  founded: 2007,
  president: "Madina Shaik",
  values: ["Customer Service", "Quality", "Problem Solving", "Dignity and Respect"],
} as const;

export const offices = [
  {
    label: "Corporate office",
    lines: ["11445 Compaq Center West Dr, Bldg CCA6", "Houston, TX 77070-1433"],
    phone: "281-968-0916",
    phoneHref: "tel:+12819680916",
    fax: "281-968-2077",
    email: "info@didsolutions.net",
  },
  {
    label: "Leesburg office",
    lines: ["161 Fort Evans Road, Unit #225", "Leesburg, VA 20176"],
    phone: "703-344-8445",
    phoneHref: "tel:+17033448445",
    fax: null,
    email: "sales@didsolutions.net",
  },
] as const;

export const emails = {
  general: "info@didsolutions.net",
  sales: "sales@didsolutions.net",
  recruitment: "recruitment@didsolutions.net",
} as const;

/** One label per intent, reused in the header, hero, sections and footer. */
export const primaryCta = {
  label: "Book a consultation",
  href: `mailto:${emails.sales}?subject=Consultation%20request`,
} as const;

export const nav = [
  { label: "Services", href: "#services" },
  { label: "Past performance", href: "#work" },
  { label: "Process", href: "#process" },
  { label: "About", href: "#about" },
  { label: "Careers", href: "#careers" },
] as const;

export const hero = {
  eyebrow: `Women-owned business enterprise, established ${company.founded}`,
  headlineLead: "Securing the mission through",
  headlineAccent: "people",
  headlineTail: "and engineering.",
  subtext:
    "IT staffing, software development and training for federal agencies and the enterprises that support them.",
  secondaryCta: { label: "See past performance", href: "#work" },
} as const;

/** Clients carried over verbatim from the existing site, in its own order. */
export const clients = [
  "Infostretch",
  "BMC",
  "Interactive Brokers",
  "Karma",
  "NS",
  "Tracfone",
  "Turnberry Solutions",
  "W3R",
  "Genesys",
  "Pinnacle",
  "Q4i",
  "Vision Eye",
] as const;

/**
 * Computed at render rather than hardcoded, so the years-in-business figure cannot
 * drift out of date the way the legacy site's copyright notice did.
 */
export function getCredentials() {
  const years = new Date().getFullYear() - company.founded;

  return [
    { figure: String(company.founded), label: "Founded", detail: `${years} years delivering IT services` },
    { figure: "WBE", label: "Certified", detail: "Women-owned business enterprise" },
    { figure: "2", label: "Offices", detail: "Houston, TX and Leesburg, VA" },
    { figure: "508", label: "Compliant", detail: "Accessibility built into federal delivery" },
  ];
}

/**
 * Platforms the documented engagements actually ran on. Labelled "platforms we
 * work on" rather than "partners", since a vendor partnership is a claim the
 * source material does not evidence for any specific vendor.
 */
export const platforms = [
  "Oracle",
  "SAP",
  "PeopleSoft",
  "Adobe",
  "BusinessObjects",
  "IBM Rational",
  "Micro Focus",
  "Apache JMeter",
] as const;

/**
 * Client wall. No headline figure: the source material names twelve clients and
 * makes no claim about totals, retention or geography beyond the work on record.
 */
export const clientWall = {
  headingLead: "Trusted across federal programs and",
  headingAccent: "commercial enterprises",
  headingTail: "nationwide",
  body: "Agencies, prime contractors and commercial teams, supported from Houston and Leesburg.",
} as const;

/**
 * Who we deliver for. Each segment is backed by a documented engagement rather
 * than an aspirational market we have not worked in.
 */
export const segments = [
  {
    id: "federal",
    name: "Federal agencies",
    body: "Section 508 compliant forms, Oracle E-Business Suite delivered to federal process, and business intelligence reporting at the Department of Agriculture.",
    icon: "bank",
  },
  {
    id: "primes",
    name: "Prime contractors",
    body: "We work underneath primes on large federal programs, supplying SAP BW and BusinessObjects implementation capacity across three full lifecycle projects.",
    icon: "handshake",
  },
  {
    id: "commercial",
    name: "Commercial enterprises",
    body: "PeopleSoft HRMS benefits administration for a windows and doors manufacturer, and performance testing for a major postal service provider.",
    icon: "buildings",
  },
] as const;

export type Service = {
  id: string;
  name: string;
  summary: string;
  points: readonly string[];
  /** Which of the two blue illustration beds this card uses. */
  tone: "light" | "deep";
};

export const services: readonly Service[] = [
  {
    id: "it-staffing",
    name: "IT staffing",
    summary:
      "We place highly skilled professionals on short and long term engagements, matched on skills, experience and working style rather than on keywords.",
    points: ["Contract and temporary", "Contract to hire", "Permanent placement"],
    tone: "light",
  },
  {
    id: "software-development",
    name: "Software development",
    summary:
      "Bespoke business software across enterprise workflow systems, content management and reporting, delivered with full project lifecycle management.",
    points: ["Enterprise workflow systems", "Content management", "Decision support and MIS"],
    tone: "deep",
  },
  {
    id: "training",
    name: "Training",
    summary:
      "Seminars and training that transfer knowledge to your team, lower business risk and open professional opportunities for the people you already employ.",
    points: [
      "Time management",
      "Presentation skills",
      "Stress management",
      "Professional selling skills",
      "Pre-employment and hiring",
      "Workplace safety",
    ],
    tone: "light",
  },
  {
    id: "web-services",
    name: "Web services",
    summary:
      "Web design and development built for reliability, with error free page loading and a structure flexible enough to grow with the organization.",
    points: ["Web design and build", "Accessible front ends", "Multi-office rollouts"],
    tone: "deep",
  },
] as const;

export type CaseStudy = {
  id: string;
  title: string;
  client: string;
  location: string | null;
  summary: string;
  tech: readonly string[];
};

/** Four featured engagements. Nine are documented in full on the past performance page. */
export const caseStudies: readonly CaseStudy[] = [
  {
    id: "adobe-forms",
    title: "Fillable federal forms with digital signatures",
    client: "Federal agency",
    location: "Atlanta, GA",
    summary:
      "Designed and built standard Adobe PDF forms with digital signatures for a federal enterprise application, verified for Section 508 accessibility, then supported the offices creating, automating and printing them. The same program carried ongoing data collection and analysis for disease, injury and general health surveillance.",
    tech: ["Adobe forms", "Digital signatures", "Section 508"],
  },
  {
    id: "sap-usda",
    title: "SAP business intelligence reporting lead",
    client: "United States Department of Agriculture",
    location: "New Orleans, LA",
    summary:
      "Led BI reporting in a support and sustainment role across integrated solutions spanning financial, CRM, material management, grant and fund management, and budgeting and forecasting modules.",
    tech: ["SAP HANA", "SAP BW", "BusinessObjects"],
  },
  {
    id: "oracle-ebs",
    title: "Oracle E-Business Suite build and break-fix",
    client: "Federal agency",
    location: null,
    summary:
      "Handled design, build and unit test of Oracle 11i RICE objects, produced the technical design for custom EBS objects, and carried break-fix support from test execution through to production deployment.",
    tech: ["Oracle EBS 11i", "RICEF", "BPEL"],
  },
  {
    id: "test-automation",
    title: "Performance and automation testing at postal scale",
    client: "Major postal service provider",
    location: null,
    summary:
      "Defined the performance test strategy, approach and planning for custom ERP systems, identified bottlenecks in the system under test, and trained junior team members on the methodology and tooling.",
    tech: ["LoadRunner", "Rational Performance Tester", "JMeter"],
  },
] as const;

/**
 * The published twelve step recruitment process, grouped into four phases.
 * A flat twelve item list is the wrong component for this much content.
 */
export const processPhases = [
  {
    name: "Define",
    steps: ["Write the job description against real business need", "Publish to our site and partner portals"],
  },
  {
    name: "Source",
    steps: ["Research to locate the talent", "Check our existing candidate databases"],
  },
  {
    name: "Qualify",
    steps: ["Qualify by initial telephone interview", "Run in-depth interviews with finalists", "Technical evaluation"],
  },
  {
    name: "Verify",
    steps: [
      "Reference checks on past performance",
      "Background screening",
      "Certificate screening",
      "On-site interview for technical and communication skills",
      "Selection",
    ],
  },
] as const;

/**
 * Grounded strictly in the stacks evidenced by documented past performance.
 * The legacy site also advertises WAP, J2ME, Bluetooth and Visual Basic; those
 * are deliberately omitted pending the client stack review noted in the plan.
 */
export const technologies = [
  { group: "Enterprise platforms", items: ["Oracle EBS 11i", "SAP BW", "SAP HANA", "PeopleSoft HRMS"] },
  { group: "Reporting and integration", items: ["BusinessObjects", "SAP ABAP", "SAP PI", "BPEL"] },
  { group: "Quality engineering", items: ["LoadRunner", "JMeter", "Rational Performance Tester"] },
  { group: "Accessibility and forms", items: ["Adobe LiveCycle", "Smart Forms", "Section 508"] },
] as const;

export const values = [
  {
    name: "Respect",
    statement: "Treat others as we would like to be treated.",
    points: ["Our clients", "Our employees", "Our partners"],
  },
  {
    name: "Integrity",
    statement: "Do the right thing.",
    points: ["In decisions", "In negotiations", "In communications"],
  },
  {
    name: "Teamwork",
    statement: "Work together effectively.",
    points: ["In workgroups", "Across functions", "Among leaders"],
  },
  {
    name: "Excellence",
    statement: "Be the best at everything we do.",
    points: ["Our work product", "Our standards", "Our operations"],
  },
  {
    name: "Stewardship",
    statement: "Better our firm and develop our people.",
    points: ["Developing our people", "Building our brand", "Supporting our communities"],
  },
] as const;

export const about = {
  heading: "Not a generic reseller. A firm that staffs, builds and trains.",
  body: [
    "Defense In Depth Solutions is one of the fast emerging leaders among women-owned business enterprises, established in 2007. We provide affordable, current IT services for organizations of any size, backed by a large pool of personnel with deep experience mitigating complex IT challenges and integrating emerging technology in demanding environments.",
    "We partner with leading IT vendors so our clients benefit from rapid change rather than absorbing it. Our aim is to be a single source for very different needs, with services tailored to each client rather than sold from a catalogue.",
  ],
  leaderPoints: [
    {
      title: "Why the firm exists",
      body: "Most suppliers separate the people from the delivery. We are accountable for both.",
    },
    {
      title: "What the president brings",
      body: "Direct involvement in every engagement, and the four core values applied to hiring decisions as much as to client work.",
    },
    {
      title: "What we believe about talent",
      body: "A resource who cannot do the work is not a saving. Screening is where cost control actually happens.",
    },
  ],
} as const;

export const careers = {
  heading: "Careers at DID Solutions",
  body: "We recruit and retain people who create value for our customers, and we treat a workplace as somewhere people spend a third of their lives.",
  benefits: [
    { name: "Medical and dental", detail: "Employee and family. The firm pays 80 percent of premium on a low deductible plan." },
    { name: "Vision care", detail: "VSP, free to the employee with the firm covering the full premium." },
    { name: "Life insurance", detail: "$50,000 of cover for every eligible employee." },
    { name: "Long term disability", detail: "Fully funded by the firm for employees on the offered medical plan." },
    { name: "Safe Harbor 401(k)", detail: "Available after three months of service, with the first 4 percent of gross wages matched." },
    { name: "Paid time off", detail: "Ten days accrued weekly, plus ten designated federal holidays." },
  ],
  applyNote: "Send a resume to",
} as const;

export const faqs = [
  {
    q: "What does Defense In Depth Solutions actually do?",
    a: "Three things. We staff IT roles on contract, contract to hire and permanent terms. We build bespoke business software, from enterprise workflow and content management through to decision support systems. And we run training programs that transfer knowledge to teams already in place.",
  },
  {
    q: "Do you have federal experience?",
    a: "Yes. Documented engagements include a federal healthcare organization, an agency program in Atlanta covering Section 508 compliant forms and health surveillance data, Oracle E-Business Suite work delivered to federal process, and a business intelligence reporting lead role at the United States Department of Agriculture in New Orleans.",
  },
  {
    q: "How does your screening process work?",
    a: "Twelve steps grouped into four phases. We define the role against real business need, source through research and our existing databases, qualify through telephone screening, in-depth interviews and technical evaluation, then verify through references, background screening, certificate screening and an on-site interview before selection.",
  },
  {
    q: "What staffing arrangements do you offer?",
    a: "Contract and temporary placement for defined projects, contract to hire when you want to evaluate before committing, and permanent placement. We work from your requirements to define the strategic profile before sourcing begins.",
  },
  {
    q: "Where are you based?",
    a: "The corporate office is in Houston, Texas, at 11445 Compaq Center West Drive. A second office operates from Leesburg, Virginia. We place and support personnel outside both metros.",
  },
  {
    q: "How do I apply for a role?",
    a: `Send your resume to ${emails.recruitment}, or post it to Defense in Depth Solutions, Inc., 11445 Compaq Center W. Drive Building CCA6, Houston, TX 77070. Applications are read by our own recruiters.`,
  },
] as const;

export const closing = {
  heading: "Let us look at the requirement",
  body: "Tell us the role, the system or the program. We will tell you honestly whether we are the right firm for it.",
} as const;

export const footerColumns = [
  {
    title: "Services",
    links: services.map((service) => ({ label: service.name, href: `#${service.id}` })),
  },
  {
    title: "Company",
    links: [
      { label: "About us", href: "#about" },
      { label: "Past performance", href: "#work" },
      { label: "Our process", href: "#process" },
      { label: "Clients", href: "#clients" },
    ],
  },
  {
    title: "Careers",
    links: [
      { label: "Working here", href: "#careers" },
      { label: "Benefits", href: "#careers" },
      { label: "Apply", href: `mailto:${emails.recruitment}?subject=Application` },
      { label: "Contact", href: `mailto:${emails.general}` },
    ],
  },
] as const;

export const linkedIn = "https://www.linkedin.com/company/defense-in-depth-solutions";
