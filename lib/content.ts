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

/**
 * Every nav target is now a route of its own. The landing page keeps `#process`
 * and `#about` sections as teasers, but the header points at the full pages, so
 * the same header works identically from any route.
 */
export const routes = {
  home: "/",
  services: "/services",
  work: "/past-performance",
  process: "/process",
  about: "/about",
  careers: "/careers",
} as const;

export const nav = [
  { label: "Services", href: routes.services },
  { label: "Past performance", href: routes.work },
  { label: "Process", href: routes.process },
  { label: "About", href: routes.about },
  { label: "Careers", href: routes.careers },
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
  /** Which of the two blue illustration beds this card uses. */
  tone: "light" | "deep";
  /** Long form, rendered on /services. The landing page only reads name and summary. */
  detail: {
    body: readonly string[];
    listTitle: string;
    items: readonly { name: string; detail: string }[];
    chipsTitle?: string;
    chips?: readonly string[];
  };
};

/*
  The legacy service copy advertises WAP, SMS, Bluetooth, J2ME, Visual Basic,
  MS Access upsizing, SOAP and ASP/JSP: a stack roughly twenty years old, flagged
  in the content plan as needing a full rewrite with the client. The structure of
  that copy is kept here; the technology claims are not, and the long form below
  describes what we do rather than what we once did it in.
*/
export const services: readonly Service[] = [
  {
    id: "it-staffing",
    name: "IT staffing",
    summary:
      "We place highly skilled professionals on short and long term engagements, matched on skills, experience and working style rather than on keywords.",
    tone: "light",
    detail: {
      body: [
        "We staff short and longer term engagements with professionals matched on skills, experience and working style. Years of placement work have built a network deep enough to find the right person for the role rather than the one who happens to be available.",
        "We work from your requirements to define a strategic profile before sourcing begins, and we keep a screened pool that is constantly extending, so a critical position does not start from zero. Cost control is part of the brief, not a separate conversation: a resource who cannot do the work was never the cheaper option.",
      ],
      listTitle: "How the engagement is structured",
      items: [
        {
          name: "Contract or temporary",
          detail: "Defined scope and a defined end date, for a delivery push or a programme increment.",
        },
        {
          name: "Contract to hire",
          detail: "Evaluate someone on the actual work before making a permanent commitment.",
        },
        {
          name: "Permanent placement",
          detail: "A full search against a strategic profile agreed with you before sourcing opens.",
        },
      ],
    },
  },
  {
    id: "software-development",
    name: "Software development",
    summary:
      "Bespoke business software across enterprise workflow systems, content management and reporting, delivered with full project lifecycle management.",
    tone: "deep",
    detail: {
      body: [
        "We deliver cost-effective bespoke business software across a broad range of sectors. The portfolio covers enterprise workflow systems, content management, and decision support built on warehoused data so reporting reflects the business rather than a snapshot of it.",
        "We analyze, design, develop and implement, and we manage the full project lifecycle rather than handing back a build and leaving. Consultancy sits alongside it: system appraisals, analysis of existing processes, process re-engineering, feasibility studies, and support formulating IT strategy and business planning.",
      ],
      listTitle: "What we build",
      items: [
        {
          name: "Enterprise workflow systems",
          detail: "Process-heavy internal systems, built to the way the organization actually works.",
        },
        {
          name: "Content management",
          detail: "Structured publishing and document handling across offices and roles.",
        },
        {
          name: "Decision support and MIS",
          detail: "Management information drawn from warehoused data, for people who have to decide on it.",
        },
        {
          name: "Consultancy and appraisal",
          detail: "System appraisals, process re-engineering, feasibility studies and IT strategy.",
        },
      ],
    },
  },
  {
    id: "training",
    name: "Training",
    summary:
      "Seminars and training that transfer knowledge to your team, lower business risk and open professional opportunities for the people you already employ.",
    tone: "light",
    detail: {
      body: [
        "Consulting is one way to handle a complex people problem. Transferring knowledge is another, and it is the one that lasts. Seminars and training sessions add value to the organization and to the people in it: teams that work more effectively, individuals with more professional opportunity, and materially lower business risk.",
        "Programs are needs-based rather than sold from a catalogue. We also support corporate HR initiatives and corporate social responsibility programs where those are part of the same brief.",
      ],
      listTitle: "How training is delivered",
      items: [
        {
          name: "Needs analysis first",
          detail: "We establish what the gap actually is before proposing a program to close it.",
        },
        {
          name: "Seminars and sessions",
          detail: "Delivered to your team, in your context, against your working practices.",
        },
        {
          name: "Corporate initiatives",
          detail: "Support for specific HR and corporate social responsibility programs.",
        },
      ],
      chipsTitle: "Named programs",
      chips: [
        "Time management",
        "Presentation skills",
        "Stress management",
        "Professional selling skills",
        "Professional development",
        "Pre-employment and hiring",
        "Workplace safety",
      ],
    },
  },
  {
    id: "web-services",
    name: "Web services",
    summary:
      "Web design and development built for reliability, with error free page loading and a structure flexible enough to grow with the organization.",
    tone: "deep",
    detail: {
      body: [
        "Web design and development built for reliability. The federal healthcare engagement on record spans multiple offices, with error free page loading and a structure flexible enough to support expansion rather than be rebuilt after it.",
        "Accessibility is a delivery standard here, not a retrofit. The same Section 508 discipline that governs our forms work governs the front ends we build.",
      ],
      listTitle: "What the work covers",
      items: [
        {
          name: "Web design and build",
          detail: "Design through to production, for organizations that cannot afford a broken page.",
        },
        {
          name: "Accessible front ends",
          detail: "Section 508 treated as a requirement of the build, not an audit afterwards.",
        },
        {
          name: "Multi-office rollouts",
          detail: "One structure serving several offices, extended as the organization grows.",
        },
      ],
    },
  },
] as const;

export const servicesPage = {
  eyebrow: "Services",
  heading: "Staffing, software and training under one contract.",
  intro: [
    "Four service lines, run by one firm that is accountable for all of them. Most suppliers separate the people from the delivery; we are answerable for both, which is why the screening process below applies to our own placements as strictly as it does to our own hires.",
    "Everything here is a service we have delivered and can point to in past performance, not a capability added to a list because a solicitation asked for it.",
  ],
  stats: [
    { figure: "4", label: "Service lines", detail: "Staffing, software, training, web" },
    { figure: "12", label: "Screening steps", detail: "Before anyone reaches your team" },
    { figure: "9", label: "Engagements", detail: "Documented in past performance" },
    { figure: "508", label: "Compliant", detail: "Accessibility built into delivery" },
  ],
  approach: {
    heading: "How the work runs",
    body: "The same four movements on every engagement, whatever the service line. Full project lifecycle management means we are still there at implementation, not just at design.",
    steps: [
      { name: "Analyze", detail: "Establish the real requirement, including the parts the brief does not state." },
      { name: "Design", detail: "Produce the technical and functional design, and agree it before anyone builds." },
      { name: "Develop", detail: "Build and unit test against that design, with progress visible throughout." },
      { name: "Implement", detail: "Carry it through test execution into production, and support what we deployed." },
    ],
    feedbackNote:
      "We seek feedback from clients regularly, positive and negative, through surveys and questionnaires. Preferred supplier status with several of them came from that habit rather than from a sales cycle.",
  },
} as const;

export type Engagement = {
  id: string;
  title: string;
  client: string;
  location: string | null;
  /** Service line the work sat under, used to group the dossier on /past-performance. */
  discipline: string;
  summary: string;
  /** Line items, where the source material documents them. */
  deliverables?: readonly string[];
  tech: readonly string[];
  /** Carried onto the landing page teaser. Four of the nine. */
  featured?: true;
};

/**
 * The nine documented engagements, in the order the content plan lists them.
 * This is the firm's strongest credibility asset, so it lives in full on
 * /past-performance; the landing page shows only the four marked featured.
 */
export const engagements: readonly Engagement[] = [
  {
    id: "federal-healthcare-web",
    title: "Web development and services for a federal healthcare organization",
    client: "Federal healthcare organization",
    location: null,
    discipline: "Web services",
    summary:
      "Designed and developed web services across multiple offices of a federal healthcare organization, with error free page loading and a structure flexible enough to support the organization's expansion rather than be rebuilt after it.",
    tech: ["Web design", "Web development", "Multi-office rollout"],
  },
  {
    id: "adobe-forms",
    title: "Fillable federal forms with digital signatures",
    client: "Federal agency",
    location: "Atlanta, GA",
    discipline: "Software development",
    summary:
      "Designed and built standard Adobe PDF forms with digital signatures for a federal enterprise application, verified for Section 508 accessibility, then supported the offices creating, automating and printing them. The same program carried ongoing data collection and analysis for disease, injury and general health surveillance.",
    deliverables: [
      "Fillable standard Adobe PDF forms with digital signatures",
      "Section 508 accessibility compliance across the form set",
      "Support for federal offices creating, automating, modifying and printing forms",
      "Standardized collection and dissemination of information",
      "Ongoing data collection and analysis for disease, injury and general health surveillance",
    ],
    tech: ["Adobe forms", "Digital signatures", "Section 508"],
    featured: true,
  },
  {
    id: "oracle-ebs-functional",
    title: "Oracle E-Business Suite functional design and testing",
    client: "Federal agency",
    location: null,
    discipline: "Software development",
    summary:
      "Created the functional design, test conditions and test scripts for Oracle 11i business processes, then executed testing through release completion and production deployment, following federal process throughout.",
    tech: ["Oracle EBS 11i", "RICEF", "Functional testing"],
  },
  {
    id: "oracle-ebs",
    title: "Oracle E-Business Suite build and break-fix",
    client: "Federal agency",
    location: null,
    discipline: "Software development",
    summary:
      "Handled design, build and unit test of Oracle 11i RICE objects, produced the technical design for custom EBS objects, and carried break-fix support from test execution through to production deployment.",
    tech: ["Oracle EBS 11i", "RICEF", "BPEL"],
    featured: true,
  },
  {
    id: "federal-facilities",
    title: "Sustainment and modernization of federal facilities systems",
    client: "Federal agency",
    location: null,
    discipline: "Software development",
    summary:
      "Worked in a multi-disciplinary team on requirements analysis and definition, use case and user story design, and validation of business case requests, alongside the product owner and development team on the technical solution and implementation plan.",
    tech: ["Requirements analysis", "User story design", "Agile delivery"],
  },
  {
    id: "sap-usda",
    title: "SAP business intelligence reporting lead",
    client: "United States Department of Agriculture",
    location: "New Orleans, LA",
    discipline: "Software development",
    summary:
      "Led BI reporting in a support and sustainment role across integrated solutions spanning financial, CRM, material management, grant and fund management, and budgeting and forecasting modules.",
    tech: ["SAP HANA", "SAP BW", "BusinessObjects"],
    featured: true,
  },
  {
    id: "sap-bw-prime",
    title: "SAP BW and BusinessObjects implementation under a prime",
    client: "Federal program, via the prime contractor",
    location: null,
    discipline: "Software development",
    summary:
      "Supported the prime contractor through development, design and implementation of SAP BW 7.0 and BusinessObjects, covering Web Intelligence, the Information Design Tool and Data Services, across three full lifecycle SAP projects.",
    deliverables: [
      "Integrated planning applications",
      "SAP ABAP development and enhancement framework work",
      "SAP workflow design and PI development",
      "Interactive Adobe forms, Smart Forms and ALV reports",
    ],
    tech: ["SAP BW 7.0", "BusinessObjects", "SAP ABAP", "SAP PI"],
  },
  {
    id: "peoplesoft-hrms",
    title: "PeopleSoft HRMS benefits administration",
    client: "Windows and doors manufacturer",
    location: "Minnesota",
    discipline: "Software development",
    summary:
      "Implemented benefits administration for a major manufacturer: customized PeopleSoft code, translated business requirements into technical documents, and provided functional HR and technical expertise to the program.",
    tech: ["PeopleSoft HRMS", "Benefits administration"],
  },
  {
    id: "test-automation",
    title: "Performance and automation testing at postal scale",
    client: "Major postal service provider",
    location: null,
    discipline: "Quality engineering",
    summary:
      "Defined the performance test strategy, approach and planning for custom ERP systems, identified bottlenecks in the system under test, and trained junior team members on the methodology and tooling.",
    deliverables: [
      "Define the performance test strategy for the system under test",
      "Create the performance test plan",
      "Train junior team members on performance test methodology and tools",
      "Identify bottlenecks in the system under test",
      "Ensure performance testing adheres to industry standards",
    ],
    tech: ["LoadRunner", "Rational Performance Tester", "JMeter"],
    featured: true,
  },
] as const;

/** Landing page teaser set. Derived, so the two views cannot drift apart. */
export const caseStudies = engagements.filter((engagement) => engagement.featured);

export const workPage = {
  eyebrow: "Past performance",
  heading: "Nine engagements, delivered to federal process.",
  intro: [
    "Every engagement below is work this firm has delivered. Client names are given where we are free to give them, and described by type where we are not.",
    "The pattern across them is consistent: enterprise systems of record, the reporting built on top of them, and the testing and accessibility work that decides whether either survives contact with a federal review.",
  ],
  stats: [
    { figure: "9", label: "Engagements", detail: "Documented end to end" },
    { figure: "3", label: "Full lifecycles", detail: "SAP projects, start to finish" },
    { figure: "7", label: "Federal programs", detail: "Agencies, healthcare and via primes" },
    { figure: "508", label: "Compliant", detail: "Verified on federal form sets" },
  ],
  note: "Client references are available on request for the engagements listed here.",
} as const;

/**
 * The published twelve step recruitment process, grouped into four phases.
 * A flat twelve item list is the wrong component for this much content.
 *
 * `intent` states what the phase is for. The landing page teaser ignores it and
 * shows the steps alone; /process leads with it, because a reader who has come to
 * a page about process wants the reasoning, not just the checklist.
 */
export const processPhases = [
  {
    name: "Define",
    intent:
      "A role written against a real business need, not a template. Most bad placements are decided here, before anyone has been sourced.",
    steps: ["Write the job description against real business need", "Publish to our site and partner portals"],
  },
  {
    name: "Source",
    intent:
      "Research first, database second. The screened pool is constantly extending, so a critical position does not start from zero.",
    steps: ["Research to locate the talent", "Check our existing candidate databases"],
  },
  {
    name: "Qualify",
    intent:
      "Three separate reads on the same person: a conversation, a depth interview, and an evaluation against the actual technical work.",
    steps: ["Qualify by initial telephone interview", "Run in-depth interviews with finalists", "Technical evaluation"],
  },
  {
    name: "Verify",
    intent:
      "Everything claimed on the resume is checked against a source that is not the candidate, and the last interview happens face to face.",
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
 * /process. Two documented processes sit under this firm: the twelve step
 * screening every candidate moves through, and the four delivery movements every
 * project runs on. Both already exist elsewhere in this file, so the page composes
 * them rather than restating them: `processPhases` supplies the screening steps and
 * `servicesPage.approach.steps` supplies the movement names and intents. Only the
 * material that exists nowhere else - the artifact each movement hands over, and
 * the principles the two processes share - is declared here.
 */
export const processPage = {
  eyebrow: "How we work",
  heading: "Two processes: one for the people, one for the delivery.",
  intro: [
    "Whichever service line you engage, the work runs on one of two documented processes. People go through twelve screening steps before they reach your team. Projects go through four movements, and we are still accountable at the last one rather than handing over at design.",
    "Both are published here in full, because process is easy to claim and harder to show. If a step below is not happening on your engagement, that is a fair question to put to us.",
  ],
  stats: [
    { figure: "12", label: "Screening steps", detail: "Before a candidate reaches your team" },
    { figure: "4", label: "Screening phases", detail: "Define, source, qualify, verify" },
    { figure: "3", label: "Interviews", detail: "Telephone, in depth, then on site" },
    { figure: "4", label: "Delivery movements", detail: "Analyze, design, develop, implement" },
  ],
  screening: {
    eyebrow: "Recruitment process",
    heading: "Twelve steps before anyone reaches your team.",
    body: "Screening is deliberately slow at the front so that delivery is not slow later. A resource who cannot do the work was never the cheaper option, which is why cost control sits in this process rather than in a rate negotiation.",
    closingNote:
      "The same process governs our own hires. Candidates applying for a role at the firm move through it exactly as candidates we place for a client do.",
  },
  delivery: {
    eyebrow: "Delivery process",
    heading: "Four movements, and we are still there at the last one.",
    /**
     * Keyed by the step names in servicesPage.approach.steps. What each movement
     * hands over, drawn from the documented engagements rather than invented: the
     * Oracle EBS and federal facilities work evidences every line below.
     */
    artifacts: {
      Analyze: "Requirements analysis and definition, use cases and user stories",
      Design: "Functional and technical design, signed off before anyone builds",
      Develop: "Build and unit test against that design, progress visible throughout",
      Implement: "Test execution, production deployment, and break-fix support after it",
    } as Record<string, string>,
    handoverNote:
      "Full project lifecycle management is the whole point of the fourth movement. Break-fix support from test execution through to production deployment is work we have done under federal process, not a line in a proposal.",
  },
  principles: [
    {
      name: "Screening is where cost control happens",
      detail:
        "Not in the rate. A placement who cannot do the work costs more than the expensive candidate you passed on, and it costs it later, when it is harder to fix.",
    },
    {
      name: "Design is agreed before build",
      detail:
        "The technical and functional design is produced and accepted first. Everything after it is measured against something both sides already signed off.",
    },
    {
      name: "Feedback is asked for, not waited on",
      detail:
        "We survey clients through the engagement, positive and negative. Preferred supplier status with several of them came from that habit rather than from a sales cycle.",
    },
  ],
} as const;

/**
 * Grounded strictly in the stacks evidenced by documented past performance.
 * The legacy site also advertises WAP, J2ME, Bluetooth and Visual Basic; those
 * are deliberately omitted pending the client stack review noted in the plan.
 */
export const technologiesIntro = {
  eyebrow: "Platforms",
  heading: "The platforms our engagements actually run on.",
  body: "Not a capability matrix assembled from vendor brochures. Every platform below appears in work we have delivered and can point to.",
  note: "Four disciplines, one thread: systems of record, the reporting built on top of them, the testing that proves they hold, and the accessibility standards federal delivery is judged against.",
  linkLabel: "See past performance",
  linkHref: routes.work,
} as const;

export const technologies = [
  {
    group: "Enterprise platforms",
    detail: "The systems of record we build on, extend and support.",
    items: ["Oracle EBS 11i", "SAP BW", "SAP HANA", "PeopleSoft HRMS"],
  },
  {
    group: "Reporting and integration",
    detail: "How data moves between those systems and reaches the people deciding on it.",
    items: ["BusinessObjects", "SAP ABAP", "SAP PI", "BPEL"],
  },
  {
    group: "Quality engineering",
    detail: "Proving a build holds under load before it reaches production.",
    items: ["LoadRunner", "JMeter", "Rational Performance Tester"],
  },
  {
    group: "Accessibility and forms",
    detail: "Federal delivery standards, met at the level of the individual document.",
    items: ["Adobe LiveCycle", "Smart Forms", "Section 508"],
  },
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
  {
    name: "Growth",
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

/**
 * /about. The landing page section above states the firm's position in two
 * paragraphs and a values list; this page is the record behind it. The hero reads
 * its figures from getCredentials(), so the years-in-business number stays live
 * here for the same reason it does on the landing page.
 */
export const aboutPage = {
  eyebrow: "About us",
  heading: "One firm, answerable for the people and the delivery.",
  intro: [
    "Defense in Depth Solutions has been placing IT professionals and delivering software since 2007, from Houston and Leesburg, as a women-owned business enterprise. The work is federal in character even when the client is commercial: systems of record, the reporting built on them, and the accessibility and testing standards that decide whether either survives review.",
    "The firm is deliberately small enough that the president is involved in engagements rather than briefed on them, and deliberately structured so that the team who screened a candidate is the team accountable for how that candidate performs.",
  ],
  story: {
    eyebrow: "Position",
    heading: "Most suppliers separate the people from the delivery.",
    body: [
      "A staffing firm sends you resumes and stops there. An integrator sends you a team and subcontracts the sourcing. Either way the accountability splits at exactly the point where an engagement usually fails, and you are left arbitrating between two suppliers who each have a defensible story.",
      "We do both, which means neither story is available to us. The twelve step screening process and the four delivery movements are run by one firm, and the same four values govern a hiring decision as govern a client deliverable.",
      "That is also the limit we work to. We take work we can point to in past performance and decline work we cannot, which is a shorter list than most capability statements and a more useful one.",
    ],
  },
  factsTitle: "The firm at a glance",
  facts: [
    { label: "Legal name", value: "Defense in Depth Solutions, Inc." },
    { label: "Established", value: "2007" },
    { label: "Ownership", value: "Women-owned business enterprise" },
    { label: "President", value: "Madina Shaik" },
    { label: "Corporate office", value: "Houston, TX" },
    { label: "Second office", value: "Leesburg, VA" },
    { label: "Service lines", value: "Staffing, software, training, web" },
    { label: "Delivery standard", value: "Section 508 accessibility" },
  ],
  leadership: {
    eyebrow: "Leadership",
    heading: "The president is on the engagement, not briefed about it.",
    body: "Madina Shaik has led the firm since it was established in 2007. Superior performance awards are determined by the project manager together with the president, which is a small detail that says most of what there is to say about how close leadership sits to delivery here.",
  },
  valuesIntro: {
    eyebrow: "Values",
    heading: "Six values, applied to hiring as strictly as to client work.",
    body: "These are not wall decoration. Every employee is expected to exemplify them, and the annual performance award is evaluated against them using customer input and direct supervisor feedback.",
  },
  next: {
    heading: "Where to look next",
    body: "The claims on this page are all evidenced elsewhere on the site. Start wherever you are most sceptical.",
  },
} as const;

/**
 * Landing page teaser only. Three figures and a link: the full benefits table,
 * workplace commitments, rewards and the open role live on /careers, so the
 * landing page is not carrying a second page's worth of copy.
 */
export const careers = {
  eyebrow: "Careers",
  heading: "A workplace worth a third of a life.",
  body: "We recruit and retain people who create value for our customers, then back them with a benefits package comparable to those found in leading Fortune 500 companies.",
  highlights: [
    { figure: "80%", label: "Medical and dental", detail: "Share of premium the firm pays on a low deductible plan." },
    { figure: "4%", label: "401(k) match", detail: "First 4 percent of gross wages, after three months of service." },
    { figure: "20", label: "Paid days a year", detail: "Ten days of PTO plus ten designated federal holidays." },
  ],
  nowHiring: "Now hiring: Project Manager, Houston TX",
  ctaLabel: "Explore careers",
  applyNote: "Send a resume to",
} as const;

/**
 * Full careers content, rendered at /careers. Sourced from section 5.7 of the
 * content plan, with the two documented defects fixed: applications route to
 * recruitment@didsolutions.net rather than a competitor's domain, and the 2018
 * IRS contribution limits are omitted rather than published stale. The plan's
 * broken list nesting under "enriching work-life environment" is corrected here
 * by giving that item its own structure instead of four orphaned siblings.
 */
export const careersPage = {
  eyebrow: "Careers at DID Solutions",
  heading: "Our employees are the firm's most valuable asset.",
  intro: [
    "Defense In Depth Solutions strives to recruit and retain fully qualified individuals dedicated to creating value for our customers through consistent, high quality delivery. Our goal is to be the best of the best.",
    "We also understand that our employees spend about a third of their life working, so a workplace should be somewhere people want to be. We searched for insurance providers covering health, dental, vision, life and long term disability that meet the needs of every employee, whatever state they live in.",
  ],
  stats: [
    { figure: "80%", label: "Medical and dental", detail: "Of premium paid by the firm" },
    { figure: "$50k", label: "Life insurance", detail: "For every eligible employee" },
    { figure: "4%", label: "401(k) match", detail: "Of gross wages contributed" },
    { figure: "5%", label: "Performance award", detail: "Of base pay, at the top end" },
  ],
  opening: {
    eyebrow: "Featured opening",
    title: "Project Manager",
    location: "Houston, TX",
    note: "Occasional travel to client locations within the U.S., a few days once every three months.",
    dutiesTitle: "What the role covers",
    duties: [
      "Support management in preparing RFPs and proposals",
      "Conduct Robotic Process Automation assessments and process analysis",
      "Develop solution design documents and oversee proof of concept projects",
      "Estimate development effort and manage deployment of developer resources",
      "Identify and resolve process bottlenecks using Lean, Six Sigma and related methods",
      "Run daily sprints, track project changes and ensure effective handover to clients",
      "Provide technical guidance, mentor teams and facilitate decision making",
      "Establish dashboards for project tracking and troubleshooting",
    ],
    requirementsTitle: "What we ask for",
    requirements: [
      "Bachelor's degree in business administration, commerce, computer information systems, computer science, management information systems or a related field",
      "Twelve months of experience as a project manager, RPA project manager, associate director, automation manager, team leader, software engineer, delivery excellence assistant manager, quality executive or a related role",
      "Any suitable combination of education, training or experience is acceptable",
    ],
  },
  benefits: {
    heading: "Compensation and benefits",
    body: "Benefits are administered through ADP. Additional life insurance and short term disability cover are available through ADP, managed by Mercer.",
    items: [
      {
        name: "Medical",
        detail: "Employee and family, on a low deductible plan. The firm pays 80 percent of the employee premium; family member premiums are covered by the employee.",
      },
      {
        name: "Dental",
        detail: "Employee and family, on a low deductible plan. The firm pays 80 percent of the premium.",
      },
      {
        name: "Vision care",
        detail: "VSP, free to the employee with the firm covering the full premium. Dependent cover is out of pocket.",
      },
      { name: "Life insurance", detail: "$50,000 of cover for every eligible employee." },
      {
        name: "Long term disability",
        detail: "Premium paid in full by the firm, for employees who elected the offered medical plan.",
      },
      {
        name: "Additional cover",
        detail: "Supplementary life insurance and short term disability, arranged through ADP and managed by Mercer.",
      },
    ],
    support: {
      label: "Benefits administrator",
      lines: ["ADP, toll free 1-800-554-1802", "mytotalsource.com"],
    },
  },
  leave: {
    heading: "Leave and retirement",
    items: [
      { name: "Paid time off", detail: "Ten days per calendar year, accrued weekly." },
      { name: "Holidays", detail: "Ten designated days on the US federal holiday schedule. Client holiday schedules are followed where a contract requires it." },
      { name: "Safe Harbor 401(k)", detail: "Administered through ADP and available after three months of service." },
      { name: "Employer match", detail: "The firm matches the first 4 percent of gross wages contributed." },
    ],
  },
  worklife: {
    heading: "An enriching work-life environment",
    points: [
      "Challenging and rewarding positions and tasks",
      "A relentless focus on providing value-added services to our clients",
      "Work that stretches every individual, yet still allows for some enjoyment",
      "Executive commitment to work-life balance alongside customer satisfaction",
    ],
  },
  workplace: {
    heading: "A respectful workplace",
    body: "Respect begins with a commitment to ethical principles and practices. It continues with understanding the value that each of our diverse talents, perspectives and abilities brings to the success of the company. This is more than compliance with Equal Opportunity and Affirmative Action rules: we believe our diversity is what makes us strong.",
    vowsTitle: "Defense In Depth Solutions vows to",
    vows: [
      "Never discriminate on the basis of race, color, religion, sex, national origin, age, handicap or disability, genetic information, veteran's status or military status, with respect to recruitment, hiring, training, promotion and other terms and conditions of employment",
      "Base employment decisions solely on an individual's qualifications against the requirements of the position",
      "Recruit, hire and promote the best qualified person for every job",
      "Maximize each employee's ability to contribute their own talents, perspectives and abilities",
      "Treat everyone equally across compensation, benefits, transfers, layoffs, company-sponsored training, promotions, terminations and disciplinary actions",
      "Keep an open door policy available to every employee",
    ],
  },
  rewards: {
    heading: "Rewards",
    body: "Most firms measure an employee's effort as a cost. We measure it as a contribution, against the four core values every employee is expected to exemplify.",
    items: [
      {
        name: "Superior Performance Award",
        figure: "Up to 5% of base pay",
        detail: "For those who routinely exceed customer expectations through the year, awarded and paid at the end of each contract year. Evaluation draws on customer input and direct supervisor feedback, and is determined by the project manager together with the president.",
      },
      {
        name: "Net New Business Bonus",
        figure: "$500 per full-time-equivalent",
        detail: "Recognizes employees who play a significant role in adding resources to a program. The test is simple: would the addition have happened without that employee's involvement.",
      },
    ],
  },
  growth: {
    heading: "Job growth and advancement",
    body: "Exceptional employees demand the ability to grow and mature within a company. Potential growth here is limited only by an employee's talent, contribution and commitment.",
    items: [
      {
        name: "Growth-focused training",
        detail: "We work with each employee to define a training plan that advances the individual and moves company operations forward.",
      },
      {
        name: "Continual corporate growth",
        detail: "As the firm grows, so does the room to advance within it.",
      },
      {
        name: "Equal access to openings",
        detail: "Existing employees are considered for every new internal position.",
      },
    ],
  },
  pay: {
    heading: "How pay is set",
    items: [
      {
        name: "Base pay",
        detail: "Competitive base salaries set against skills and qualifications, specialized technical skills and certifications, geographic location, and travel requirements.",
      },
      {
        name: "Bonus pay",
        detail: "An annual bonus based on company and individual performance. The pool is formed at corporate level on attainment of company goals and profitability, then disbursed on individual contribution.",
      },
    ],
  },
  apply: {
    heading: "How to apply",
    body: "Send a resume and tell us the kind of work you want. Applications are read by our own recruiters, not routed to a third party.",
    postalLabel: "Or post it to",
    postal: [
      "Defense in Depth Solutions, Inc.",
      "11445 Compaq Center W. Drive, Building CCA6",
      "Houston, TX 77070",
    ],
    processNote: "Curious what happens next? Every candidate moves through the same twelve step screening process.",
  },
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
    links: services.map((service) => ({
      label: service.name,
      href: `${routes.services}#${service.id}`,
    })),
  },
  {
    title: "Company",
    links: [
      { label: "About us", href: routes.about },
      { label: "Past performance", href: routes.work },
      { label: "Our process", href: routes.process },
      { label: "Values", href: `${routes.about}#values` },
      { label: "Clients", href: "/#clients" },
    ],
  },
  {
    title: "Careers",
    links: [
      { label: "Working here", href: routes.careers },
      { label: "Benefits", href: `${routes.careers}#benefits` },
      { label: "Open roles", href: `${routes.careers}#opening` },
      { label: "Apply", href: `mailto:${emails.recruitment}?subject=Application` },
      { label: "Contact", href: `mailto:${emails.general}` },
    ],
  },
] as const;

export const linkedIn = "https://www.linkedin.com/company/defense-in-depth-solutions";
