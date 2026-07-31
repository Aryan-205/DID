# Content Plan — Defense In Depth Solutions

Source: **https://www.didsolutions.net/** (Wix site, audited 2026-07-31)
Purpose: capture every piece of real content from the existing site so we can rebuild it from scratch without losing anything, plus flag what must NOT be carried over.

---

## 1. Company facts (single source of truth)

| Field | Value |
|---|---|
| Legal name | Defense in Depth Solutions, Inc. |
| Short name | DID Solutions |
| Founded | 2007 |
| Ownership | Women-owned Business Enterprise (WBE) |
| President | Madina Shaik |
| Sector | IT services, staffing, software development, federal/government contracting |
| HQ | 11445 Compaq Center West Dr, Bldg CCA6, Houston, TX 77070-1433 |
| HQ phone | 281-968-0916 |
| HQ fax | 281-968-2077 |
| HQ email | info@didsolutions.net |
| 2nd office | 161 Fort Evans Road, Unit #225, Leesburg, VA 20176 |
| Leesburg phone | 703-344-8445 |
| Sales email | sales@didsolutions.net |
| Recruiting email | recruitment@didsolutions.net |
| Core values | Customer Service, Quality, Problem Solving, Dignity & Respect |

---

## 2. Existing sitemap (17 pages + 14 blog posts)

**In main nav:** Home · About Us · Services · Our Clients · Past Performance · Recruitment · Careers · Contact Us · More

| URL | Status | Verdict for rebuild |
|---|---|---|
| `/` | Real content (thin) | Rebuild + expand |
| `/aboutus` | Real content | Rebuild |
| `/our-vision` | Real content (duplicate of About section) | **Merge into About** |
| `/services` | Rich content — the best page on the site | Rebuild + split |
| `/it-staffing` | **Empty stub** (nav + footer only) | Build for real from `/services` copy |
| `/software-development` | **Empty stub** | Build for real from `/services` copy |
| `/training` | **Empty stub** | Build for real from `/services` copy |
| `/web-services` | **Empty stub** | Build for real from `/past-performance` copy |
| `/past-performance` | Rich content — 8 case studies | Rebuild as case-study cards |
| `/our-clients` | Logos only, no text | Rebuild + add captions |
| `/clients` | **Wix placeholder lorem text** | **Delete** — duplicate of `/our-clients` |
| `/recruitment` | Real content (12-step process) | Rebuild |
| `/careers` | Rich content — longest page | Rebuild + split |
| `/benefits` | Real content (duplicate of Careers section) | **Merge into Careers** |
| `/currentopenings` | Wix blog listing of job posts | Rebuild as real job board |
| `/job-application` | Form page, near-empty | Rebuild as real form |
| `/contactus` | Real content, 2 offices + map | Rebuild |

---

## 3. ⚠️ Content bugs on the live site — DO NOT copy these over

These are real errors currently published. Fix every one during the rebuild.

1. **`/services` credits the wrong company — twice.** The Training and Software Development sections say *"CompQsoft Solutions will implement Training Needs Analysis…"* and *"…includes CompQsoft Solutions Solutions' model for filling a position."* Copy-pasted from another firm. → Replace with "Defense In Depth Solutions".
2. **`/our-vision` and `/aboutus` say "We make RSM a better place."** RSM is a different (accounting) firm. The entire five-value block appears lifted from RSM's values page. → Rewrite in DID's own voice, or at minimum swap the name.
3. **Job posts link to a competitor's domain.** Every `/single-post/*` job ends with *"Email Resume: info@compqsoftsolutions.com"* and links to `compqsoftsolutions.com/job-application`. → Must be `recruitment@didsolutions.net` and our own form.
4. **`/clients` is unedited Wix boilerplate** — "I'm a paragraph. Click here to add your own text and edit me", eight "I'm a title / I'm a description" tiles, and two fake testimonials from "Samantha Jones, Project Manager". → Delete the page; write real testimonials or ship none.
5. **Four pages are completely empty** — `/it-staffing`, `/software-development`, `/training`, `/web-services` render nothing but header and footer. They're linked from nav/footer, so they're live dead ends.
6. **Copyright year is inconsistent** — homepage body says 2020, every footer says 2022. → Use a dynamic year.
7. **Contact page typo** — email rendered as `sales @didsolutions.net` (stray space).
8. **Dead social links** — footer links Facebook, Twitter, LinkedIn, **Google+** (shut down 2019) and **Pinterest**. → Keep LinkedIn only unless the others are verified active.
9. **All 14 job posts are from July–September 2017.** A careers page advertising nine-year-old roles reads as abandoned. → Either refresh or hide the archive.
10. **`/currentopenings` lists 6 posts in the feed but 10 in the sidebar** — the two lists disagree.
11. Homepage meta description mentions *"cloud, AI, cybersecurity, and digital transformation"* — **none of which appear anywhere in the actual site copy.** Either the site is under-selling those capabilities or the meta is aspirational. → Resolve with the client before writing the new homepage.
12. Missing meta descriptions on 10 of 17 pages.

---

## 4. Proposed IA for the rebuild

```
/                       Home
/about                  About Us  (absorbs /our-vision)
/services               Services overview
  /services/it-staffing
  /services/software-development
  /services/training
  /services/web-services
/past-performance       Case studies
/clients                Client logos + testimonials  (absorbs /our-clients, kills /clients lorem)
/careers                Careers  (absorbs /benefits)
  /careers/openings     Job board
  /careers/apply        Application form
/recruitment            Our recruitment process
/contact                Contact
```

Net: 17 messy pages → 13 real ones, zero empty stubs, zero duplicates.

---

## 5. Page-by-page content

### 5.1 Home — `/`

**Title:** Defense In Depth Solutions | IT Company | United States
**Meta:** DID Solutions delivers cloud, AI, cybersecurity, and digital transformation services to help businesses innovate, scale, and achieve secure growth. *(verify — see bug #11)*

**Hero rotator — 3 slides (reuse verbatim, they're strong):**
1. "Protection Starts with People. Prevent, Defend Against and Respond to Cyber Attacks."
2. "Driving Growth Through Technology and Workforce Solutions"
3. "Securing Our Nation and its Allies through Advanced Engineering and Technology Solutions"

**Section: OUR FIRM**
> Defense In Depth Solutions is one of the fast emerging leaders Women-owned Business Enterprise established in 2007. We provide affordable and cutting-edge IT services for organizations of any size. We have a large pool of IT personnel…

*(Note: sentence is truncated mid-thought on the live site. Full version exists on `/aboutus` — use that.)*
CTA: **Find More** → `/about`

**Section: CONTACT US** — HQ address + phone (see §1)
**Section: TELL US** — contact form, success state "Success! Message received.", button **Send**
**Section: SUBSCRIBE NOW** — "Join our mailing list / Never miss an update" + email field + **Subscribe Now**

**New sections to add (homepage is currently too thin):**
- 3-card services teaser (Staffing / Software Dev / Training)
- Client logo strip (12 logos already exist — §5.6)
- 2–3 featured case studies from Past Performance
- Trust bar: Founded 2007 · Women-Owned Business Enterprise · Federal contractor · Houston TX + Leesburg VA

---

### 5.2 About Us — `/about`

**Title:** Defense In Depth Solutions | US IT Company | United States
**H1:** About Us

**Body (verbatim, keep):**
> Defense In Depth Solutions is one of the fast emerging leaders Women-owned Business Enterprise established in 2007. We provide affordable and cutting-edge IT services for organizations of any size. We have a large pool of IT personnel who carry extensive experience and expertise in litigating complex IT challenges and integration of emerging technologies in a dynamic environment. Our services are high quality, reliable, resilient and responsive that helps to manage your IT operations efficiently. Our services include supreme technical support with access to specific and skilled people who can assist in streamlining the processes.

> We partner with leading IT vendors who help us in ensuring that our clients benefit from the rapidly changing technology. We also ensure that our clients develop the ability to identify and meet their customer needs to achieve sustained leadership in their markets. We strive hard to become one-stop solution provider for different needs and prove excellence in providing the tailor-made services to our clients of different horizontal and vertical segments.

*Copy note: "litigating complex IT challenges" is almost certainly meant to be "mitigating". Fix.*

**Our Vision — 5 values** (merged in from `/our-vision`; **rewrite the Stewardship line**, see bug #2):

| Value | Statement | Sub-points |
|---|---|---|
| Respect | Treat others as we'd like to be treated — *We display respect in each interaction with:* | Our clients · Our employees · Our partners |
| Integrity | Do the right thing — *We stay true to our values:* | In decisions · In negotiations · In communications |
| Teamwork | Work together effectively — *We cultivate genuine collaboration:* | In workgroups · Across functions · Among leaders |
| Excellence | Be the best in everything we do — *We achieve distinction through:* | Our work product · Our standards · Our operations |
| Stewardship | Better our firm and develop our people — *We make ~~RSM~~ **DID Solutions** a better place by:* | Developing our people · Building our brand · Supporting our communities |

**Missing — worth adding:** leadership bios (Madina Shaik, President), certifications/NAICS codes, contract vehicles, years-in-business stat block.

---

### 5.3 Services — `/services` (+ 4 child pages)

**Title:** Services | United States | Defense In Depth Solutions
**Meta:** A wide range of product specific and general services to solve your toughest challenges.
**H1:** Services — three pillars: **IT Staffing · Software Development · Training**

#### → `/services/it-staffing`
> Defense In Depth Solutions specializes in staffing services that provides the most relevant and highly skilled professionals for short-term or longer-term projects for an organization. We have an expert team who can find professionals with the skills, experience and work style that match an organization's unique requirements. We source the resources who are motivated workers and who can keep your business moving forward. We carry years of experience and developed a deep network that allow us to identify the right talent for different business needs of the clients. In order to meet your business goals, you need to fill your workspace with the right people.

> We work closely with clients their requirements and define strategic profiles to fill the positions. We maintain a substantial network of personal relationships and screen the right resources for future needs. Our large pool of qualified, screened talent is constantly extending, enabling us to provide the specific talent that fills your critical positions right away. We not only provide the best resource, but look for cost-effective staffing to ensure we are a value-added partner to analyze

*(Both paragraphs have grammar breaks — "clients their requirements", trailing "to analyze". Copy-edit.)*

**Our Staffing Services Include:**
- Contract or temporary staffing
- Contract-to-hire staffing
- Permanent staffing

#### → `/services/software-development`
> Defense In Depth Solutions specializes in delivering cost-effective bespoke business software across a broad range of industry sectors. Our portfolio of work includes enterprise-level workflow systems, content management systems and training services.

> We offer a wide range of software development services geared around building client-server and N-tier solutions using Sun technologies especially in Enterprise Java applications and J2ME, Mobile technologies like WAP, SMS, Bluetooth technologies and Microsoft technologies, typically Visual Basic and SQL Server and ORACLE.

> We can upsize Microsoft Access database applications to SQL Server and ORACLE, or, merge multiple Access databases into a single SQL Server or ORACLE solution. We can build large scalable N-tier systems utilizing the new and emerging Internet technologies such as XML and SOAP a perfect solution for many types of Distributed applications. We can develop sophisticated decision support and management information systems (MIS) exploiting Data Warehousing technology to provide real business intelligence to the organization.

> Our range of consultancy services brings together our business and technical expertise to offer advice and recommend solutions that maximize the benefit to our organization. We can perform system appraisals, analyze existing business processes and perform process re-engineering and feasibility studies. We can assist with formulating all areas of IT strategy and business planning. All our consultants are highly skilled professionals…

> Our belief in working closely with our clients has brought us a notable praise and recognition. As a result, we now enjoy preferred IT partner status with many of our clients… we regularly seek feedback from our clients, both positive and negative, by way of regular surveys and questionnaires.

**Sub-blocks:** Our Team · The Tools · Our Approach · Development · Training
- *Our Approach:* "We analyze, design, develop and implement solutions quickly and effectively and offer full project lifecycle management."
- *The Tools:* Microsoft & SUN platforms, RAD tools (MS Visual Basic .NET), ASP and JSP.
- *Training:* "Where necessary ~~CompQsoft Solutions~~ **Defense In Depth Solutions** will implement Training Needs Analysis (TNA)…"

> **🚩 Tech-stack warning:** this entire section describes WAP, SMS, Bluetooth, J2ME, Visual Basic, MS Access upsizing, SOAP, and ASP/JSP — a stack that is roughly 20 years out of date. Keep the *structure* (Team / Tools / Approach / Development / Training) but the technology list needs a full rewrite with the client before launch.

#### → `/services/training`
> Acting as consultants is just one way our Portfolio helps you handle complex HR issues. Transferring knowledge is another. Through seminars and training sessions in the areas of Professional development, pre-employment and hiring, workplace safety and others, you bring added value to your organization. Such programs also benefit your employees. Developing your team and improving their effectiveness provides them more professional opportunities and dramatically lowers business risk.

> We assist companies in need-based training like Time Management, Enhancing Presentation skills, Stress Management, Professional Selling skills. We assist Corporations to take specific HR initiatives & Corporate Social responsibility initiatives.

**Named programs:** Time Management · Presentation Skills · Stress Management · Professional Selling Skills · Professional Development · Pre-employment & Hiring · Workplace Safety

#### Our Hiring Process Model — 12 steps (lives on `/services`; consider moving to `/recruitment`)

1. **Review Workforce Analysis and Understand Skill Gaps** — recruiter reviews workforce analysis, identifies skill gaps, classifies position and recruitment method. *Max 1 day.*
2. **Review Position Description for Alignment with Organizational Mission and Job Requirements** — recruiters are briefed on client objectives; standard/pre-classified descriptions validated for accuracy.
3. **Conduct Job Analysis** — identify KSAs and competencies; maintain a job-analysis library for mission-critical and frequently-filled roles; validated annually.
4. **Create Candidate Assessment Tool** — structured interview, optional written test, panel SME interview questions.
5. **Choose the Ranking Method** — candidates ranked via KSA process, sent to the posting organization.
6. **Conduct Appropriate Recruitment Activities** — outreach and targeted recruitment; vacancy open-period set by role complexity.
7. **Screen Applicants for Minimum Qualifications / Selective Factors**
8. **Rate Qualified Applicants** — per the assessment method from Step 5; panels booked before the vacancy posts.
9. **Review Applications** — HR panel shortlists for interview.
10. **Schedule and Conduct Interviews**
11. **Check References** — applicants notified of status.
12. **Conduct Background Check**

---

### 5.4 Past Performance — `/past-performance` (8 case studies)

**Title:** Past Performance | United States | Defense In Depth Solutions
**Meta:** A wide range of product specific and general services to solve your toughest challenges.

Rebuild each as a card with **Client type · Location · Technologies · What we did**. This is the strongest credibility asset on the site — feature it prominently.

| # | Case study | Client / Location | Tech |
|---|---|---|---|
| 1 | **Web Development and Services** — web design + development for a Federal Healthcare Organization across multiple offices; error-free page loading and a flexible structure supporting business expansion. | Federal Healthcare Org | Web design, web development |
| 2 | **IT Support — PDF Adobe Forms** — designed/developed fillable standard Adobe PDF forms with digital signatures for a federal enterprise application; ensured **Section 508** accessibility compliance; supported federal offices to create, automate, modify and print forms; standardized collection and dissemination of information. Supported ongoing data collection, analysis and distribution for disease/injury/general-health surveillance. | Federal agency, **Atlanta, GA** | Adobe forms, digital signatures, Section 508 |
| 3 | **Oracle EBS Functional / Testing** — created functional design, test conditions and test scripts; executed tests for Oracle 11i business processes through release completion and production deployment, following federal processes. | Federal agency | Oracle EBS 11i, RICEF, Functional Testing |
| 4 | **Oracle EBS Developer** — design, build and unit test of Oracle 11i RICE objects; technical design of custom EBS objects; break/fix support from test execution through production deployment. | Federal agency | Oracle EBS 11i, RICEF, BPEL |
| 5 | **Software Developer** — multi-disciplinary team on sustainment and modernization of federal facilities: requirements analysis, definition, use case/user story design, validation of business-case requests; worked with product owner and dev team on technical solution and implementation plan. | Federal | Requirements/agile |
| 6 | **SAP BW/HANA/IP/BO Services** — SAP BI Reporting lead in a support and sustainment role for USDA integrated BI solutions across Financial, CRM, Material Management, Grant/Fund Management, Budgeting & Forecasting modules. | **USDA, New Orleans, LA** | SAP HANA, BO, BW |
| 7 | **SAP BW/BOBJ Implementation for federal client** — supported the prime contractor in development, design and implementation of SAP BW 7.0 and BOBJ (Web Intelligence, Information Design Tool, Data Services); integrated planning applications; SAP ABAP development; **3 full lifecycle SAP projects**; SAP workflow design, PI development, enhancement framework, interactive Adobe Forms, Smart Forms, ALV reports. | Federal (via prime) | SAP BW 7.0, BOBJ, ABAP, PI |
| 8 | **PeopleSoft HRMS Benefits Administration** — implementation for a major windows-and-doors manufacturer; customized PeopleSoft code, translated business requirements into technical documents, provided functional HR/tech expertise. | Manufacturer, **Minnesota** | PeopleSoft HRMS |
| 9 | **Test Automation Project** — performance and automation testing of a major postal service provider's web applications. Defined test approach, planning and strategy for custom ERP systems. | Major postal service provider | LoadRunner, Rational Performance Tester, JMeter |

**Test Automation deliverables (keep as a bullet list):**
- Define Performance Test Strategy for system under test
- Create Performance Test Plan
- Train junior team members on Performance Test Methodology and Tools
- Identify bottlenecks in system under test
- Ensure that Performance Testing adheres to industry standards

---

### 5.5 Recruitment — `/recruitment`

**Title:** Recruitment | United States | Defense In Depth Solutions
**H1:** RECRUITMENT

> Defense In Depth Solutions regularly posts positions on its website; individuals can visit its website for updated job postings. We look for people who are performance driven to support our company. Our process is rigorous to meet consistency and objectivity. But our goal is always to find the right person for the job. Our recruiters use a search process that is highly effective to identify, provide and place best talent. We consider applications from everyone who meets the required criteria and qualifications. Our process utilizes a high-quality, disciplined approach to sourcing, validating and selecting candidates.

**Our recruitment process (12 steps — render as a numbered timeline):**
1. Creating job description based on our business needs
2. Posting on our website and other portals
3. Research to locate the talent
4. Checking our existing databases for talent
5. Qualifying resources by initial telephone interview
6. Perform in-depth interviews with finalists
7. References check to find out the performance
8. Technical Evaluation
9. Background Screening
10. Certificates Screening
11. On-site Interview (technical and communication skills)
12. Selection

> **Note:** this overlaps heavily with the 12-step Hiring Process Model on `/services`. Decide which is client-facing (hiring model) vs candidate-facing (this one) and differentiate the framing, or merge.

---

### 5.6 Clients — `/clients`

**H1:** Our Clients
**Content:** logo grid only — no copy exists today. 12 logos, in the site's own order:

1. Infostretch
2. BMC
3. Interactive Brokers
4. Karma
5. NS
6. Tracfone
7. Turnberry Solutions
8. W3R
9. Genesys
10. Pinnacle
11. Q4i
12. Vision Eye

**To write:** a short intro paragraph, and ideally 1–2 lines per client on what we delivered. **Do not** carry over the "Samantha Jones" placeholder testimonials — get real ones or omit the section.

---

### 5.7 Careers — `/careers`

**Title:** Careers | United States | Defense In Depth Solutions
**Meta:** Creating a dynamic and conducive environment is imperative for bolstering growth in an organisation.
**H1:** Careers
**Apply CTA (everywhere):** Submit resume to **recruitment@didsolutions.net**, or mail to Defense in Depth Solutions, Inc., 11445 Compaq Center W. Drive Building CCA6, Houston, TX 77070

#### Featured opening — Project Manager (Houston, TX)

**Job Duties:**
- Support management in preparing RFPs and proposals
- Conduct Robotic Process Automation (RPA) assessments and process analysis
- Develop solution design documents and oversee proof of concept projects
- Estimate development efforts and manage deployment of developer resources
- Identify and resolve process bottlenecks using Lean, Six Sigma, and related methods
- Conduct daily sprints, track project changes, and ensure effective handover to clients
- Optimize processes for efficiency and automation
- Provide technical guidance, mentor teams, and facilitate decision-making
- Establish dashboards for project tracking and troubleshooting

**Requirements:**
- Bachelor's degree in Business Administration, Commerce, Computer Information Systems, Computer Science, Management Information Systems, or a related field
- 12 months of experience as Project Manager, RPA Project Manager, Associate Director, Manager Automation, MS Team Leader, Software Engineer, Delivery Excellence Assistant Manager, Quality Executive, or related role
- Any suitable combination of education, training, or experience acceptable
- Travel to unanticipated client locations within the U.S. for a few days once every three months

#### Section: Commitment to Our Most Valuable Asset — Our Employees
> At Defense In Depth Solutions, we recognize that our employees are our most valuable corporate asset.

#### Section: A Respectful Workplace
> Respect begins with a strong commitment to ethical principles and practices… Respect continues with understanding the value each of our diverse talents, perspectives and abilities bring to the success of our company. At Defense In Depth Solutions, we embrace diversity and inclusion in the workplace. This is more than compliance with Equal Opportunity & Affirmative Action rules and regulations. Defense In Depth Solutions firmly believes that it is our diversity that makes us strong and successful.

**Defense In Depth Solutions vows to:**
- Never discriminate on the basis of race, color, religion, sex, national origin, age, handicap or disability, genetic information, veteran's status, or military status with respect to recruitment, hiring, training, promotion and other terms and conditions of employment
- Always base employment decisions solely upon an individual's qualifications relating to the requirements of the position
- Recruit, hire, and promote the best qualified persons for all jobs without regard to [protected classes]
- Strive to maximize each employee's ability to contribute their unique talents, perspectives, and abilities
- Always treat everyone equally in all personnel actions — compensation, benefits, transfers, layoffs, company-sponsored training, promotions, terminations and disciplinary actions
- Encourage every employee to abide by an open door policy

#### Section: Compensation & Benefits

> Defense In Depth Solutions strives to recruit and retain fully qualified individuals who are dedicated to creating value for our customers based on consistent high quality delivery of required services. Our goal is to be the "best of the best." … Defense In Depth Solutions understands that our employees will spend about a third of their life working. Therefore, Defense In Depth Solutions believes a workplace should be a fun and enjoyable place.

> Defense In Depth Solutions is proud to offer its employees a benefits package comparable to those found in leading Fortune 500 companies. We have searched and found insurance providers for health, dental, vision care, life, and LTD that will meet the needs of all employees irrespective of their state of residence.

**Administrator:** ADP — toll-free **1-800-554-1802**, portal **www.mytotalsource.com**. Additional coverage via ADP, managed by Mercer.

| Benefit | Detail |
|---|---|
| Medical | Employee + family. DID pays **80%** of premium; low deductible; employee covers family-member premiums. |
| Dental | Employee + family. DID pays **80%** of premium; low deductible. |
| Vision Care | **VSP**, free to the employee. DID pays 100% of premium; out-of-pocket for dependents. |
| Life Insurance | **$50,000**, all eligible employees. |
| Long Term Disability | Only for employees who elected the offered medical insurance. DID pays 100% of premium. |
| Additional | Extra life insurance and short-term disability via ADP/Mercer. |

**Leave and retirement:**
1. **Ten days PTO** per calendar year (Jan–Dec), accrued weekly
2. **Ten designated holidays** on the US Federal Holiday Schedule (client holidays followed when required)
3. **Safe Harbor 401(k)** via ADP, after **3 months** of service
4. Employee contribution up to **$18,500/yr** (+**$6,500** catch-up for 50+) — *⚠️ these are 2018 IRS limits; update or make dynamic*
5. DID **matches the first 4%** of gross wages contributed
6. Enriching work-life environment, achieved through:
7. Challenging and rewarding positions and tasks
8. A relentless focus on providing value-added services to our clients
9. Work that stretches every individual, yet also allows for some fun and enjoyment
10. Executive commitment to work/life balance in addition to customer satisfaction

*(Structural bug: items 6–10 are sub-points of 6, not siblings. Fix the nesting in the rebuild.)*

#### Section: Rewards
> Most firms focus on an employee's efforts in terms of cost; at Defense In Depth Solutions we focus on employee's efforts in terms of contribution. In order to meet customer expectations, Defense In Depth Solutions expects every employee to exemplify our four core values: **Customer Service, Quality, Problem Solving and Dignity & Respect.**

1. **The Superior Performance Award** — for those who routinely exceed customer expectations through the year. Awarded and paid at the end of each contract year. Evaluation draws on customer input and direct-supervisor feedback via the performance assessment process. Determined by the DID Project Manager and **Madina Shaik, President**. Worth up to **5% of base pay**.
2. **Net New Business Bonus Plan** — recognizes employees who play a significant role in adding resources to a program. **$500** per annual full-time-equivalent person added. Primary criterion: whether the addition would have happened without the employee's involvement.

#### Section: Job Growth & Advancement
> Exceptional employees demand the ability to grow and mature within a company… An employee's potential growth is limited only by the employee's talent, contributions, and commitment.

1. **Growth-focused training** — DID works with each employee to define a training plan that advances the employee and impacts company operations
2. **Continual corporate growth** — when the company grows, advancement potential grows
3. **Equal access to all new job opportunities** — existing employees considered for all new internal positions

> We are in a dynamic industry that is heralded because of the ever-changing technologies and innovations. We will strive to offer our employees continuous growth to help them evolve with Defense In Depth Solutions as we grow and evolve within our industry.

#### Compensation components (from `/benefits`, merge here)
- **Base Pay** — "competitive base pay salaries based upon skills and qualifications, specialized technical skills and certifications, geographic location, and high travel requirements, a.k.a. 'Road Warrior'"
- **Bonus Pay** — annual bonus based on company and individual performance; Bonus Pool formed at corporate level on attainment of company goals and profitability, then disbursed on individual performance and contribution
- **Benefits list:** 401(k) with generous employer match commitment · Life Insurance · Health Insurance · Vision Insurance · Dental Insurance · Long & Short Term Disability Insurance · Sick Leave · Training, Education, and Certification Assistance · Vacation and Holiday Plan

> **Consistency check:** `/careers` says 10 days PTO; `/benefits` says "Sick Leave" + "Vacation and Holiday Plan" as separate items. Reconcile into one benefits table.

---

### 5.8 Current Openings — `/careers/openings`

Currently a Wix blog. Rebuild as a real job board with filters by **location**, **role type**, **contract vs permanent**.

**14 archived postings (all Jul–Sep 2017 — decide whether to migrate or retire):**

| Role | Location |
|---|---|
| Quality Assurance | Austin, TX |
| Programmer Analyst | Austin, TX |
| Programmer Analyst (2nd posting) | Austin, TX |
| Software Quality Assurance Analyst | Austin, TX |
| Database Administrator | Austin, TX |
| Programmer Analyst — Programmer/Consultant | South Carolina, SC |
| Acro requirement for the Network Administrator | South Carolina, SC |
| Senior Oracle PL/SQL Developer — 9+ month contract | Springfield, MA |
| Performance Tester — onsite, 6-month contract | Albany, NY |
| Network Administrator / Network Engineer — Advanced | — |
| Programmer Analyst [Programmer 4 / PR4] | — |
| Project Manager — Level IV / Project Manager 2 | — |
| Project Manager — Project Manager 2 | — |
| Database Administrator — Data/Information Architect Consultant | — |

**Job-post template (derived from the existing posts — reuse this schema):**
```
Title · Location · Posted date · Contract length
Position Description
Key Responsibilities
Required Experience
Skills Required        (years × skill table)
Skills Preferred       (years × skill table)
Essential Job Functions
Knowledge, Skills & Abilities
Initial Selection Criteria + Special Requirements
Apply → recruitment@didsolutions.net   ← FIX: currently points to compqsoftsolutions.com
Tags · Category
```

Clients named in postings: **Texas Department of Information Resources (DIR)**, **Texas Health and Human Services Commission (HHSC)** — worth surfacing as government credentials.
Existing taxonomy: category "Job Postings"; tags by location (Austin, Albany, Springfield, South Carolina), by role, and "Contract Job".

---

### 5.9 Job Application — `/careers/apply`

**H1:** Careers
- "For More Current Openings Click Here" → `/careers/openings`
- "Fields marked with an asterisk (*) must be filled out before submitting."
- "Send your Resume — info@didsolutions.net"

**Build a real form:** Name* · Email* · Phone* · Position applying for (dropdown from open roles) · Location · Work authorization · LinkedIn · Resume upload* · Cover note. Add spam protection and a confirmation email.

---

### 5.10 Contact Us — `/contact`

**Title:** Contact Us | United States | Defense In Depth Solutions
**Meta:** Company information, business information, directors/partners details and director/partners contact information of Defense In Depth Solutions
**H1:** Contact Us

**Corporate Office**
11445 Compaq Center West Dr, Bldg CCA6
Houston, TX 77070-1433
Phone: 281-968-0916 · Fax: 281-968-2077
Email: info@didsolutions.net

**Leesburg Office**
161 Fort Evans Road, Unit #225
Leesburg, VA 20176
Phone: 703-344-8445
Email: sales@didsolutions.net *(live site has a typo: "sales @…")*

Plus: embedded map ("View Larger Map"), **Support** and **Reach Us** blocks, contact form → "Success! Message received." / **Send**

---

## 6. Global elements

### Header
Logo + nav: Home · About Us · Services · Our Clients · Past Performance · Recruitment · Careers · Contact Us
(Live site overflows into a "More" item — the rebuild should use a proper responsive nav with a Services dropdown.)
Accessibility string present today: "Use tab to navigate through the menu items."

### Footer
- **Link columns:** Careers · Clients · News Flashes · Services · About Us · Contact Us
  *("News Flashes" and "Give us your feedback" have no destination — either build them or drop them.)*
- **Newsletter:** "Join our mailing list" / "Never miss an update" / Email field / **Subscribe Now**
- **Social:** Facebook · Twitter · LinkedIn · ~~Google+~~ · ~~Pinterest~~ (see bug #8)
- **Copyright:** © Defense In Depth Solutions. All Rights Reserved {currentYear}
- **Add:** Privacy Policy, Terms, Accessibility statement, EEO statement — none exist today

---

## 7. Rebuild priorities

**Must fix before launch**
1. Remove every "CompQsoft" and "RSM" reference (bugs #1, #2, #3)
2. Delete the Wix lorem page `/clients` (bug #4)
3. Fill or remove the four empty stub pages (bug #5)
4. Point all apply links to `recruitment@didsolutions.net` (bug #3)
5. Refresh or retire the 2017 job archive (bug #9)

**High value adds the current site lacks**
- Leadership / team page (Madina Shaik is only mentioned in passing, buried in the Rewards section)
- Certifications, NAICS codes, CAGE code, contract vehicles, WBE certification badge — critical for federal buyers and completely absent
- Real testimonials
- Case studies given proper cards with outcomes/metrics, not walls of prose
- Modern tech-stack story (bug #11 — the meta promises cloud/AI/cybersecurity, the copy delivers WAP and Visual Basic)

**Copy-editing pass required throughout** — the source text has consistent grammar breaks: truncated sentences, "litigating" for "mitigating", missing prepositions, inconsistent capitalization of the company name ("DefenseIn Depth Solutions" appears twice).

---

*Raw page extractions archived at:*
`/private/tmp/claude-501/-Users-aryan-Documents-newProjects1-defence-in-depth/aa240830-cbb6-4135-a275-ed74b553d728/scratchpad/txt/`
