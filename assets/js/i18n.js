/* ============================================================
   TRIPLEXD — bilingual (EN / AR) dictionary + engine
   HTML attributes inside values use single quotes.
   ============================================================ */
(function () {
  'use strict';

  var I18N = {
    en: {
      /* ---- nav / footer ---- */
      "nav.services": "Services",
      "nav.how": "How we work",
      "nav.about": "About",
      "nav.contact": "Contact",
      "nav.talk": "Talk to us",
      "nav.book": "Book a consultation",
      "nav.email": "Email us",
      "nav.home": "Home",
      "skip": "Skip to content",
      "foot.tag": "TriplexD — Turning data into decisions.",
      "foot.rights": "© <span id='year'>2026</span> TriplexD. Technology services &amp; business consulting.",

      /* ---- shared buttons ---- */
      "btn.bookConsult": "Book a consultation",
      "btn.howWeWork": "See how we work",
      "btn.browseServices": "Browse our services",
      "btn.bookFree": "Book a free consultation",
      "btn.explore": "Explore what we do",
      "btn.allServices": "See all eleven services",
      "btn.moreAbout": "More about who we are &amp; who we serve →",

      /* ---- home hero ---- */
      "home.kick": "Turning data into decisions",
      "home.h1": "See your business clearly. Decide with <em>confidence.</em>",
      "home.sub": "TriplexD builds the ERP systems, custom applications, and intelligent KPI dashboards that turn scattered operations into decisions you can stand behind — backed by hands-on product ownership from discovery to long after go-live.",
      "home.trust": "<b>ERP · Custom apps · KPI dashboards</b><span aria-hidden='true'>•</span><b>Arabic-native, RTL-ready</b><span aria-hidden='true'>•</span><b>Egypt &amp; the Gulf</b>",
      "home.figcap": "Scattered data &nbsp;·&nbsp; a clear threshold &nbsp;·&nbsp; one confident decision",
      "strip": "<span><b>Serving:</b> Egypt</span><span class='sep'></span><span>Saudi Arabia</span><span class='sep'></span><span>the wider Gulf</span><span class='sep'></span><span><b>Bilingual</b> Arabic (RTL-native) &amp; English</span><span class='sep'></span><span><b>Odoo ERP</b> partner-grade delivery</span>",

      /* ---- problem ---- */
      "prob.eyebrow": "Does this sound like you?",
      "prob.h2": "The reporting always arrives too late to act on.",
      "prob.p": "Most owners we meet aren't short on data — they're short on a clear, trustworthy view of it. If any of these are true, it's the right time to talk.",
      "prob.c1": "You're running a growing business on spreadsheets that no longer scale.",
      "prob.c2": "Reports arrive too late — the decision has already passed by the time the numbers land.",
      "prob.c3": "You have multiple systems that don't talk to each other, and no single source of truth.",
      "prob.c4": "There's a legacy application nobody can maintain — and everyone is afraid to touch.",
      "prob.c5": "An ERP was implemented, but never really adopted. It shipped, then stalled.",
      "prob.c6": "You need reliable KPIs for board reporting — without hiring a whole analytics team.",
      "prob.foot": "Recognise a few of these? <b>That's exactly the distance we close</b> — between what your business knows and what you decide. &nbsp;<a href='contact.html' style='color:var(--teal);font-weight:600;text-decoration:none;'>Let's talk →</a>",

      /* ---- services shared heads ---- */
      "svc.eyebrow": "What we do",
      "svc.h2": "Eleven disciplines, one outcome.",
      "svc.p": "Not a menu of separate service lines — one connected argument. The ERP generates trustworthy data, the dashboards turn it into something you can act on, and product ownership keeps both aimed at real business goals.",

      /* ---- home service cards ---- */
      "home.svc.po.t": "Product Ownership",
      "home.svc.po.d": "Clear roadmaps, ruthless prioritisation, and accountability from discovery to launch — the backbone of every engagement.",
      "home.svc.da.t": "Data Analytics",
      "home.svc.da.d": "Operational data turned into KPI dashboards leaders actually use — built around your questions, not a template.",
      "home.svc.erp.t": "ERP Solutions",
      "home.svc.erp.d": "Odoo implemented around the way you genuinely run — then extended with the dashboards off-the-shelf can't provide.",
      "home.svc.ca.t": "Custom Applications",
      "home.svc.ca.d": "When standard software doesn't fit, we build what does — Arabic-first, bilingual, shaped around your processes.",
      "home.svc.int.t": "Integration Solutions",
      "home.svc.int.d": "Most businesses have a connection problem, not a data problem. We make systems talk — one source of truth.",
      "home.svc.ai.t": "AI Solutions",
      "home.svc.ai.d": "We apply AI where it creates real value — intelligent reporting, document processing, and ML inside existing systems.",

      /* ---- home why ---- */
      "why.eyebrow": "Why TriplexD",
      "homewhy.h2": "We connect the ERP to the decision.",
      "homewhy.p": "Many firms implement ERP. Fewer build the dashboard layer on top that turns it into a management tool. That connection is our core competence.",

      /* ---- differentiators (shared) ---- */
      "diff.speak.t": "We speak business before technology",
      "diff.speak.d": "Our team has sat on the client side — product owners who've defended roadmaps and lived with the consequences of bad requirements.",
      "diff.arabic.t": "Arabic-native, not Arabic-translated",
      "diff.arabic.d": "RTL layouts, Arabic content handling, and regional workflow conventions are built in from the start — never retrofitted after an English version ships.",
      "diff.connect.t": "We connect the ERP to the decision",
      "diff.connect.d": "The dashboard layer that turns an operational system into a management tool is exactly where most vendors stop — and where we begin.",
      "diff.own.t": "We take ownership, not just tickets",
      "diff.own.d": "Product ownership is the thread through everything we do. It's why our systems get adopted instead of abandoned.",
      "diff.honest.t": "We're honest about what tech can't fix",
      "diff.honest.d": "If the problem is a process problem, we'll say so before we sell you software. Naming a limitation builds more trust than hiding it.",
      "diff.stay.t": "We stay accountable after go-live",
      "diff.stay.d": "Support and iteration are part of the relationship. Most of a system's value is created after launch — so that's where we keep working.",

      /* ---- CTA bands ---- */
      "cta.home.h": "Let's turn your data into a decision you can <span>stand behind.</span>",
      "cta.home.p": "Bring us the problem, not the spec. A short, no-obligation conversation is usually enough for us to tell you where the real leverage is — in Arabic or English.",
      "cta.serv.h": "Not sure which of these you need? <span>Let's figure it out together.</span>",
      "cta.serv.p": "Bring us the problem, not the spec. A short, no-obligation conversation is usually enough for us to tell you where the real leverage is — and whether we're the right partner for it.",
      "cta.how.h": "Ready to state your outcome in a sentence? <span>Let's start there.</span>",
      "cta.how.p": "The first conversation is about your business, not our software. Tell us what you're trying to decide, and we'll tell you the shortest path to getting there.",
      "cta.about.h": "If any of this sounds like your kind of partner, <span>let's talk.</span>",
      "cta.about.p": "A short, no-obligation conversation — in Arabic or English — is usually enough to know whether we're the right fit for what you're trying to decide.",

      /* ---- tags ---- */
      "tag.roadmaps": "Roadmaps", "tag.agile": "Agile delivery",
      "tag.execkpi": "Executive KPIs", "tag.rtbi": "Real-time BI",
      "tag.odoo": "Odoo", "tag.automation": "Automation",
      "tag.webapps": "Web apps", "tag.rtl": "RTL / LTR",
      "tag.apis": "APIs", "tag.middleware": "Middleware",
      "tag.appliedml": "Applied ML", "tag.assistants": "Assistants",
      "tag.roadmapBacklog": "Roadmap & backlog", "tag.stakeholder": "Stakeholder alignment", "tag.govEnt": "Gov & enterprise",
      "tag.requirements": "Requirements", "tag.processModel": "Process modeling", "tag.gap": "Gap analysis", "tag.userStories": "User stories",
      "tag.metricFrameworks": "Metric frameworks", "tag.selfService": "Self-service",
      "tag.forecasting": "Forecasting", "tag.statistical": "Statistical analysis", "tag.segmentation": "Segmentation", "tag.anomaly": "Anomaly detection",
      "tag.odooImpl": "Odoo implementation", "tag.moduleDev": "Module development", "tag.workflowAuto": "Workflow automation", "tag.legacyMig": "Legacy migration",
      "tag.webDev": "Web development", "tag.processAuto": "Process automation", "tag.modernization": "Modernization",
      "tag.native": "Native", "tag.crossPlatform": "Cross-platform", "tag.approvals": "Approvals", "tag.offline": "Offline-capable",
      "tag.apiDesign": "API design", "tag.thirdParty": "Third-party", "tag.govPlatforms": "Gov platforms",
      "tag.planning": "Planning", "tag.cleansing": "Cleansing & QA", "tag.reconciliation": "Reconciliation", "tag.zeroLoss": "Zero-loss",
      "tag.transformStrategy": "Transformation strategy", "tag.optimisation": "Optimisation", "tag.archAdvisory": "Architecture advisory", "tag.kpiFrameworks": "KPI frameworks",
      "tag.intelReporting": "Intelligent reporting", "tag.docProcessing": "Document processing", "tag.embeddedML": "Embedded ML",

      /* ---- services page ---- */
      "serv.crumb": "Services",
      "serv.h1": "Eleven disciplines,<br>one <span>outcome.</span>",
      "serv.p": "Each capability below exists for the same reason: to shorten the distance between what a business knows and what it decides. They aren't separate service lines — the ERP feeds the dashboards, and product ownership keeps both aimed at the right target.",
      "sv.po.t": "Product Ownership",
      "sv.po.d": "Hands-on product ownership as the backbone of delivery — clear roadmaps, ruthless prioritisation, and accountability from discovery to launch.",
      "sv.ba.t": "Business Analysis",
      "sv.ba.d": "We dig into how your business actually operates before a line of code is written — the difference between a system that works and one that gets abandoned.",
      "sv.da.t": "Data Analytics",
      "sv.da.d": "Operational data turned into KPI dashboards leaders actually use — built around the questions you need answered, not a generic template.",
      "sv.ds.t": "Data Science",
      "sv.ds.d": "Beyond reporting what happened — understanding why, and what's likely to happen next, with decision-support models tuned to your business context.",
      "sv.erp.t": "ERP Solutions",
      "sv.erp.d": "Odoo ERP implemented around the way you genuinely run — then extended with the custom dashboards and modules off-the-shelf systems never provide.",
      "sv.ca.t": "Custom Applications",
      "sv.ca.d": "When standard software doesn't fit, we build what does — scalable, maintainable, Arabic-first and bilingual applications shaped around your real processes.",
      "sv.mob.t": "Mobile Applications",
      "sv.mob.d": "We extend systems to where decisions actually happen — in the field, on the move, with mobile dashboards, approvals, and offline-capable operations.",
      "sv.int.t": "Integration Solutions",
      "sv.int.d": "Most businesses don't have a data problem — they have a connection problem. We make systems talk, with one reliable source of truth.",
      "sv.mig.t": "Data Migration",
      "sv.mig.d": "The riskiest moment in any transformation, handled with care — mapping, cleansing, validation, and zero-loss strategies with rollback safeguards.",
      "sv.con.t": "Business Consultations",
      "sv.con.d": "Technology decisions are business decisions. We advise before we build — strategy, process optimisation, technology selection, and KPI framework design.",
      "sv.ai.t": "AI Solutions",
      "sv.ai.d": "We apply AI where it creates real value — not where it makes a good headline — from intelligent reporting to ML embedded inside existing systems.",

      /* ---- how we work ---- */
      "how.crumb": "How we work",
      "how.eyebrow": "How we work",
      "how.h1": "We speak business before we speak <span>technology.</span>",
      "how.p": "Every engagement starts with understanding what success looks like for you — before we talk about software. If we can't state the business outcome in a sentence, we're not ready to build.",
      "commit.eyebrow": "Our commitments",
      "commit.h2": "Four promises, on every engagement.",
      "commit.1t": "Business first",
      "commit.1d": "Every engagement starts with what success looks like for you — before we talk about software. If we can't state the outcome in a sentence, we're not ready to build.",
      "commit.2t": "We own the outcome",
      "commit.2d": "Product ownership isn't a role we fill on your org chart. It's how we operate. We're accountable for whether the system improves decisions, not just whether it shipped on time.",
      "commit.3t": "Built to last",
      "commit.3d": "Scalable architecture, clean documentation, and knowledge transfer come as standard. You should never be trapped with us because nobody else can understand the system.",
      "commit.4t": "We stay after go-live",
      "commit.4d": "Support, iteration, and continuous improvement are part of the relationship, not an add-on line item. Most of a system's value is created after launch.",
      "flow.eyebrow": "The engagement flow",
      "flow.h2": "Six phases, and what you get at each.",
      "flow.p": "Working increments, not a black box. Here's the path a typical engagement follows — and the tangible deliverable you walk away with at every step.",
      "flow.discover": "Discover", "flow.define": "Define", "flow.build": "Build",
      "flow.migrate": "Migrate & integrate", "flow.launch": "Launch", "flow.improve": "Improve",
      "flow.1": "Business goals, current-state processes, pain points, decision gaps. <strong style='color:var(--ink)'>You get</strong> a findings report and success criteria.",
      "flow.2": "Solution design, KPI framework, scope, and roadmap. <strong style='color:var(--ink)'>You get</strong> a functional specification and delivery plan.",
      "flow.3": "Iterative delivery with regular demos and feedback. <strong style='color:var(--ink)'>You get</strong> working increments, not a black box.",
      "flow.4": "Data movement, validation, and system connections. <strong style='color:var(--ink)'>You get</strong> verified data and connected systems.",
      "flow.5": "Training, handover, documentation. <strong style='color:var(--ink)'>You get</strong> a team that can run the system itself.",
      "flow.6": "Support, iteration, and dashboard refinement. <strong style='color:var(--ink)'>You get</strong> a system that keeps getting sharper.",
      "phil.h2": "Technology should serve the decision, not complicate it.",
      "phil.p1": "TriplexD works at the intersection of software engineering, data, and business understanding. Our teams don't just deliver systems — they take ownership of outcomes, working alongside you to make sure what gets built actually moves the business forward.",
      "phil.p2": "From enterprise ERP rollouts to custom applications, from raw data migration to AI-powered insight, we cover the full journey: <strong>from scattered operations to clear, confident decisions.</strong> And we're honest about the limits — if the problem is a process problem, we'll say so before we sell you software.",

      /* ---- about ---- */
      "about.crumb": "About",
      "about.eyebrow": "About TriplexD",
      "about.h1": "The systems that let owners see clearly &amp; <span>decide with confidence.</span>",
      "about.p": "TriplexD is a technology and consulting company built on a simple belief: technology should serve the decision, not complicate it. We work at the intersection of software engineering, data, and business understanding.",
      "name.eyebrow": "The name",
      "name.stmt": "One promise runs through everything we build — <em>turning data into decisions.</em>",
      "name.body": "Whether we're implementing an ERP, migrating a database, or building a predictive model, the end product is always the same: a business owner who can make a call and stand behind it. The full stop in our wordmark is deliberate — it reads as a decision made, a statement closed.",
      "name.pron": "TriplexD &nbsp;·&nbsp; تريبلكس دي",
      "vision.eyebrow": "Our vision",
      "vision.stmt": "A world where complex decisions and leadership are made <em>easier</em> for owners through trustworthy data and KPIs.",
      "vision.alt": "عالمٌ تكون فيه القرارات المعقّدة والقيادة أكثر يُسراً على أصحاب الأعمال، من خلال بيانات ومؤشرات أداء جديرة بالثقة.",
      "mission.eyebrow": "Our mission",
      "mission.stmt": "We shape smart applications around each business we serve, turning its data into intelligent, custom KPI dashboards.",
      "mission.body": "Guided by hands-on product ownership and business consultation, we build systems that make complex decisions clearer — and leadership easier.",
      "mission.alt": "نبني تطبيقات ذكية مصمّمة خصيصاً لكل عميل، تحوّل بياناته إلى لوحات مؤشرات أداء واضحة ومخصّصة. وبفضل خبرتنا في إدارة المنتج والاستشارات، نصنع أنظمة تجعل القرارات الصعبة أوضح — والقيادة أسهل.",
      "who.eyebrow": "Who we serve",
      "who.h2": "Built for people carrying responsibility.",
      "who.p": "Our client isn't a user — it's a person accountable for other people. We build for the leaders who need to see clearly and decide well.",
      "who.o1t": "Business owners & founders",
      "who.o1d": "Need visibility across a growing operation — without hiring an analytics team to get it.",
      "who.o2t": "C-level & general managers",
      "who.o2d": "Need reliable KPIs for board reporting and strategic decisions they can defend.",
      "who.o3t": "Operations & finance leaders",
      "who.o3d": "Need process automation and accurate, timely operational reporting.",
      "who.o4t": "Government & public sector",
      "who.o4d": "Need Arabic-first, compliant, integration-heavy systems built to regional conventions.",
      "sectors.title": "Sectors we're built for",
      "sec.s1": "Government & public sector", "sec.s2": "Education & training", "sec.s3": "Professional services",
      "sec.s4": "Manufacturing & distribution", "sec.s5": "Retail & trading", "sec.s6": "Healthcare administration",
      "triggers.title": "Typical triggers that bring clients to us",
      "trg.t1": "Spreadsheets that no longer scale", "trg.t2": "Reporting that arrives too late", "trg.t3": "Systems that don't talk",
      "trg.t4": "A legacy app nobody can maintain", "trg.t5": "An ERP that was never adopted",
      "why.h2b": "What makes us different.",
      "why.pb": "Many firms implement ERP. Fewer build the dashboard layer on top that turns it into a management tool. That connection is our core competence — and it's not the only thing that sets us apart.",

      /* ---- contact ---- */
      "contact.crumb": "Contact",
      "contact.eyebrow": "Get in touch",
      "contact.h2": "Let's turn your data into a decision you can <span>stand behind.</span>",
      "contact.lede": "Tell us what's slowing your decisions down. We'll come back within one business day to set up a short, no-obligation conversation — in Arabic or English.",
      "ci.emailL": "Email",
      "ci.phoneL": "Phone / WhatsApp",
      "ci.basedL": "Based in",
      "ci.basedV": "Cairo, Egypt — serving Egypt, Saudi Arabia & the Gulf",
      "ci.langL": "Languages",
      "ci.langV": "Arabic (RTL-native) & English",
      "ci.respL": "Response time",
      "ci.respV": "Within one business day",
      "form.title": "Book a consultation",
      "form.note": "No sales script. Just a conversation about what you're trying to decide.",
      "form.name": "Name <span class='req'>*</span>",
      "form.company": "Company",
      "form.email": "Work email <span class='req'>*</span>",
      "form.phone": "Phone",
      "form.help": "What do you need help with?",
      "opt.notsure": "Not sure yet — let's talk",
      "opt.erp": "ERP implementation (Odoo)",
      "opt.kpi": "KPI dashboards & analytics",
      "opt.custom": "Custom / mobile application",
      "opt.integ": "System integration",
      "opt.mig": "Data migration",
      "opt.ds": "Data science / AI",
      "opt.consult": "Business consultation",
      "form.msgLabel": "What's slowing your decisions down? <span class='req'>*</span>",
      "form.msgPh": "A sentence or two is plenty — the reporting that arrives too late, the systems that don't talk, the ERP nobody adopted…",
      "form.submit": "Send & book a call",
      "form.legal": "Clicking the button opens your email app with the details ready to fill. We reply within one business day.",
      "form.status": "Thanks — your email app should open with the message ready to send. Prefer to email us directly? info@triplexd.com",
      "mail.title": "Book a consultation",
      "mail.note": "Ready to talk? Send us an email with the details below and we'll reply within one business day — in Arabic or English.",
      "mail.include": "Please include in your email:",
      "inc.name": "Your name",
      "inc.company": "Company",
      "inc.email": "Work email",
      "inc.phone": "Phone (or WhatsApp)",
      "inc.help": "What you need help with",
      "inc.msg": "What's slowing your decisions down",
      "mail.btn": "Email us — info@triplexd.com",
      "mail.subject": "Consultation request — TriplexD",
      "mail.body": "Hello TriplexD team,\n\nI'd like to book a consultation. My details:\n\nName: \nCompany: \nWork email: \nPhone: \nWhat I need help with: \nWhat's slowing my decisions down: \n\nThank you."
    },

    ar: {
      /* ---- nav / footer ---- */
      "nav.services": "الخدمات",
      "nav.how": "كيف نعمل",
      "nav.about": "من نحن",
      "nav.contact": "تواصل معنا",
      "nav.talk": "تحدّث إلينا",
      "nav.book": "احجز استشارة",
      "nav.email": "راسلنا",
      "nav.home": "الرئيسية",
      "skip": "تخطَّ إلى المحتوى",
      "foot.tag": "تريبلكس دي — نحوّل البيانات إلى قرارات.",
      "foot.rights": "© <span id='year'>2026</span> تريبلكس دي. خدمات تقنية واستشارات أعمال.",

      /* ---- shared buttons ---- */
      "btn.bookConsult": "احجز استشارة",
      "btn.howWeWork": "شاهد كيف نعمل",
      "btn.browseServices": "تصفّح خدماتنا",
      "btn.bookFree": "احجز استشارة مجانية",
      "btn.explore": "تعرّف على ما نقدّمه",
      "btn.allServices": "شاهد جميع الخدمات الإحدى عشرة",
      "btn.moreAbout": "المزيد عن هويتنا ومن نخدم ←",

      /* ---- home hero ---- */
      "home.kick": "نحوّل البيانات إلى قرارات",
      "home.h1": "رؤية أوضح لأعمالك، وقرارٌ <em>تثق به.</em>",
      "home.sub": "تبني تريبلكس دي أنظمة تخطيط الموارد، والتطبيقات المخصّصة، ولوحات مؤشرات الأداء الذكية التي تحوّل عملياتك المبعثرة إلى قرارات تقف خلفها بثقة — مدعومةً بإدارة منتج عملية من مرحلة الاكتشاف وحتى ما بعد الإطلاق بوقت طويل.",
      "home.trust": "<b>تخطيط الموارد · تطبيقات مخصّصة · لوحات مؤشرات</b><span aria-hidden='true'>•</span><b>عربية أصيلة، بواجهة من اليمين لليسار</b><span aria-hidden='true'>•</span><b>مصر والخليج</b>",
      "home.figcap": "بيانات مبعثرة &nbsp;·&nbsp; عتبة واضحة &nbsp;·&nbsp; قرارٌ واحد واثق",
      "strip": "<span><b>نخدم:</b> مصر</span><span class='sep'></span><span>السعودية</span><span class='sep'></span><span>ومنطقة الخليج</span><span class='sep'></span><span><b>بلغتين:</b> العربية (أصيلة) والإنجليزية</span><span class='sep'></span><span>تنفيذ <b>Odoo</b> باحترافية شريك معتمد</span>",

      /* ---- problem ---- */
      "prob.eyebrow": "هل يبدو هذا مألوفاً؟",
      "prob.h2": "التقارير تصل دائماً بعد فوات أوان القرار.",
      "prob.p": "معظم أصحاب الأعمال الذين نلتقيهم لا تنقصهم البيانات — بل تنقصهم رؤية واضحة وجديرة بالثقة لها. إن انطبق أيٌّ ممّا يلي، فهذا هو الوقت المناسب للحديث.",
      "prob.c1": "تدير عملاً متنامياً على جداول بيانات لم تعد تكفي.",
      "prob.c2": "التقارير تصل متأخرة — يكون القرار قد فات حين تصل الأرقام.",
      "prob.c3": "لديك أنظمة متعددة لا تتحدث إلى بعضها، ولا مصدر واحد موثوق للحقيقة.",
      "prob.c4": "لديك تطبيق قديم لا أحد يستطيع صيانته — والجميع يخشى الاقتراب منه.",
      "prob.c5": "نظام تخطيط موارد تم تنفيذه لكنه لم يُعتمد فعلياً. أُطلق ثم تعطّل.",
      "prob.c6": "تحتاج مؤشرات أداء موثوقة لتقارير مجلس الإدارة — دون توظيف فريق تحليلات كامل.",
      "prob.foot": "تعرف بعضها؟ <b>هذه بالضبط المسافة التي نختصرها</b> — بين ما يعرفه عملك وما تقرّره. &nbsp;<a href='contact.html' style='color:var(--teal);font-weight:600;text-decoration:none;'>لنتحدث ←</a>",

      /* ---- services shared heads ---- */
      "svc.eyebrow": "ما الذي نقدّمه",
      "svc.h2": "إحدى عشرة تخصّصاً، ونتيجة واحدة.",
      "svc.p": "ليست قائمة خدمات منفصلة — بل منظومة واحدة مترابطة. نظام تخطيط الموارد يولّد بيانات موثوقة، واللوحات تحوّلها إلى ما يمكنك التصرّف بناءً عليه، وإدارة المنتج تُبقي الاثنين موجَّهين نحو أهداف عمل حقيقية.",

      /* ---- home service cards ---- */
      "home.svc.po.t": "إدارة المنتج",
      "home.svc.po.d": "خرائط طريق واضحة، وترتيب أولويات صارم، ومساءلة من الاكتشاف حتى الإطلاق — العمود الفقري لكل مشروع.",
      "home.svc.da.t": "تحليلات البيانات",
      "home.svc.da.d": "بيانات تشغيلية تتحوّل إلى لوحات مؤشرات يستخدمها القادة فعلاً — مبنية حول أسئلتك، لا على قالب جاهز.",
      "home.svc.erp.t": "حلول تخطيط الموارد",
      "home.svc.erp.d": "تنفيذ Odoo حول طريقة عملك الحقيقية — ثم توسعته بلوحات لا توفّرها الأنظمة الجاهزة.",
      "home.svc.ca.t": "التطبيقات المخصّصة",
      "home.svc.ca.d": "حين لا يناسبك البرنامج الجاهز، نبني ما يناسبك — عربيّ أولاً، ثنائي اللغة، مصمّم حول عملياتك.",
      "home.svc.int.t": "حلول التكامل",
      "home.svc.int.d": "معظم الشركات لديها مشكلة اتصال لا مشكلة بيانات. نجعل الأنظمة تتحدث — بمصدر واحد للحقيقة.",
      "home.svc.ai.t": "حلول الذكاء الاصطناعي",
      "home.svc.ai.d": "نطبّق الذكاء الاصطناعي حيث يصنع قيمة حقيقية — تقارير ذكية، ومعالجة مستندات، وتعلّم آلي داخل أنظمتك القائمة.",

      /* ---- home why ---- */
      "why.eyebrow": "لماذا تريبلكس دي",
      "homewhy.h2": "نربط نظام تخطيط الموارد بالقرار.",
      "homewhy.p": "كثير من الشركات تنفّذ أنظمة تخطيط الموارد. قليلون يبنون فوقها طبقة اللوحات التي تحوّلها إلى أداة إدارة. هذا الربط هو جوهر تميّزنا.",

      /* ---- differentiators (shared) ---- */
      "diff.speak.t": "نتحدث لغة الأعمال قبل التقنية",
      "diff.speak.d": "فريقنا جلس في مقعد العميل — مالكو منتج دافعوا عن خرائط الطريق وعاشوا نتائج المتطلبات السيئة.",
      "diff.arabic.t": "عربية أصيلة، لا مُترجَمة",
      "diff.arabic.d": "تخطيطات من اليمين لليسار، ومعالجة محتوى عربي، وأعراف سير عمل إقليمية، مبنية من البداية — لا مُضافة لاحقاً بعد إطلاق نسخة إنجليزية.",
      "diff.connect.t": "نربط نظام تخطيط الموارد بالقرار",
      "diff.connect.d": "طبقة اللوحات التي تحوّل النظام التشغيلي إلى أداة إدارة هي بالضبط حيث يتوقّف معظم المورّدين — وحيث نبدأ نحن.",
      "diff.own.t": "نتحمّل المسؤولية، لا مجرد التذاكر",
      "diff.own.d": "إدارة المنتج هي الخيط الذي يمرّ عبر كل ما نفعله. لهذا تُعتمد أنظمتنا بدل أن تُهجر.",
      "diff.honest.t": "نصدُق بشأن ما لا تصلحه التقنية",
      "diff.honest.d": "إن كانت المشكلة في العملية، سنقولها قبل أن نبيعك برنامجاً. الإفصاح عن حدٍّ يبني ثقة أكثر من إخفائه.",
      "diff.stay.t": "نبقى مسؤولين بعد الإطلاق",
      "diff.stay.d": "الدعم والتحسين جزء من العلاقة. معظم قيمة النظام تُصنع بعد الإطلاق — لذا هناك نواصل العمل.",

      /* ---- CTA bands ---- */
      "cta.home.h": "لنحوّل بياناتك إلى قرارٍ <span>تقف خلفه بثقة.</span>",
      "cta.home.p": "أحضِر لنا المشكلة، لا المواصفات. غالباً تكفي محادثة قصيرة بلا التزام لنخبرك أين تكمن الفرصة الحقيقية — بالعربية أو الإنجليزية.",
      "cta.serv.h": "لست متأكداً أيها تحتاج؟ <span>لنكتشف ذلك معاً.</span>",
      "cta.serv.p": "أحضِر لنا المشكلة، لا المواصفات. غالباً تكفي محادثة قصيرة بلا التزام لنخبرك أين تكمن الفرصة الحقيقية — وهل نحن الشريك المناسب لها.",
      "cta.how.h": "مستعدّ لصياغة نتيجتك في جملة؟ <span>لنبدأ من هناك.</span>",
      "cta.how.p": "المحادثة الأولى عن عملك، لا عن برمجياتنا. أخبرنا بما تحاول أن تقرّره، ونخبرك بأقصر طريق للوصول إليه.",
      "cta.about.h": "إن بدا هذا شريكك المناسب، <span>لنتحدث.</span>",
      "cta.about.p": "محادثة قصيرة بلا التزام — بالعربية أو الإنجليزية — تكفي عادةً لمعرفة ما إذا كنا الأنسب لما تحاول أن تقرّره.",

      /* ---- tags ---- */
      "tag.roadmaps": "خرائط طريق", "tag.agile": "تسليم رشيق",
      "tag.execkpi": "مؤشرات تنفيذية", "tag.rtbi": "ذكاء أعمال فوري",
      "tag.odoo": "Odoo", "tag.automation": "أتمتة",
      "tag.webapps": "تطبيقات ويب", "tag.rtl": "يمين/يسار",
      "tag.apis": "واجهات برمجية", "tag.middleware": "وسيطات",
      "tag.appliedml": "تعلّم آلي تطبيقي", "tag.assistants": "مساعدون",
      "tag.roadmapBacklog": "خريطة الطريق والمهام", "tag.stakeholder": "مواءمة الأطراف", "tag.govEnt": "حكومي ومؤسسي",
      "tag.requirements": "المتطلبات", "tag.processModel": "نمذجة العمليات", "tag.gap": "تحليل الفجوات", "tag.userStories": "قصص المستخدم",
      "tag.metricFrameworks": "أطر القياس", "tag.selfService": "تحليلات ذاتية",
      "tag.forecasting": "التنبؤ", "tag.statistical": "تحليل إحصائي", "tag.segmentation": "التقسيم", "tag.anomaly": "كشف الشذوذ",
      "tag.odooImpl": "تنفيذ Odoo", "tag.moduleDev": "تطوير الوحدات", "tag.workflowAuto": "أتمتة سير العمل", "tag.legacyMig": "ترحيل الأنظمة القديمة",
      "tag.webDev": "تطوير الويب", "tag.processAuto": "أتمتة العمليات", "tag.modernization": "تحديث",
      "tag.native": "أصلي", "tag.crossPlatform": "متعدد المنصّات", "tag.approvals": "الموافقات", "tag.offline": "يعمل دون اتصال",
      "tag.apiDesign": "تصميم واجهات", "tag.thirdParty": "أطراف ثالثة", "tag.govPlatforms": "منصّات حكومية",
      "tag.planning": "التخطيط", "tag.cleansing": "تنظيف وضمان جودة", "tag.reconciliation": "مطابقة", "tag.zeroLoss": "بلا فقدان",
      "tag.transformStrategy": "استراتيجية التحوّل", "tag.optimisation": "التحسين", "tag.archAdvisory": "استشارات معمارية", "tag.kpiFrameworks": "أطر المؤشرات",
      "tag.intelReporting": "تقارير ذكية", "tag.docProcessing": "معالجة المستندات", "tag.embeddedML": "تعلّم آلي مدمج",

      /* ---- services page ---- */
      "serv.crumb": "الخدمات",
      "serv.h1": "إحدى عشرة تخصّصاً،<br>ونتيجة <span>واحدة.</span>",
      "serv.p": "كل قدرة أدناه موجودة للسبب نفسه: اختصار المسافة بين ما يعرفه العمل وما يقرّره. وهي ليست خدمات منفصلة — نظام تخطيط الموارد يغذّي اللوحات، وإدارة المنتج تُبقي الاثنين موجَّهين نحو الهدف الصحيح.",
      "sv.po.t": "إدارة المنتج",
      "sv.po.d": "إدارة منتج عملية بوصفها العمود الفقري للتسليم — خرائط طريق واضحة، وترتيب أولويات صارم، ومساءلة من الاكتشاف حتى الإطلاق.",
      "sv.ba.t": "تحليل الأعمال",
      "sv.ba.d": "نتعمّق في كيفية عمل مؤسستك فعلياً قبل كتابة أي سطر برمجي — وهو الفرق بين نظام ينجح وآخر يُهجر.",
      "sv.da.t": "تحليلات البيانات",
      "sv.da.d": "بيانات تشغيلية تتحوّل إلى لوحات مؤشرات يستخدمها القادة فعلاً — مبنية حول الأسئلة التي تريد إجابتها، لا على قالب عام.",
      "sv.ds.t": "علم البيانات",
      "sv.ds.d": "أبعد من رصد ما حدث — فهم لماذا حدث، وما المرجّح أن يحدث تالياً، بنماذج دعم قرار مُهيَّأة لسياق عملك.",
      "sv.erp.t": "حلول تخطيط الموارد",
      "sv.erp.d": "تنفيذ نظام Odoo حول طريقة عملك الحقيقية — ثم توسعته بلوحات ووحدات مخصّصة لا توفّرها الأنظمة الجاهزة.",
      "sv.ca.t": "التطبيقات المخصّصة",
      "sv.ca.d": "حين لا يناسبك البرنامج الجاهز، نبني ما يناسبك — تطبيقات قابلة للتوسّع والصيانة، عربية أولاً وثنائية اللغة، مصمّمة حول عملياتك الحقيقية.",
      "sv.mob.t": "تطبيقات الجوال",
      "sv.mob.d": "نمدّ الأنظمة إلى حيث تُتَّخذ القرارات فعلاً — في الميدان وأثناء التنقّل، بلوحات جوال وموافقات وعمليات تعمل دون اتصال.",
      "sv.int.t": "حلول التكامل",
      "sv.int.d": "معظم الشركات لا تعاني مشكلة بيانات — بل مشكلة اتصال. نجعل الأنظمة تتحدث، بمصدر واحد موثوق للحقيقة.",
      "sv.mig.t": "ترحيل البيانات",
      "sv.mig.d": "أخطر لحظة في أي تحوّل، نتعامل معها بعناية — مطابقة وتنظيف وتحقّق، واستراتيجيات بلا فقدان مع ضمانات تراجُع.",
      "sv.con.t": "استشارات الأعمال",
      "sv.con.d": "قرارات التقنية هي قرارات أعمال. ننصح قبل أن نبني — الاستراتيجية، وتحسين العمليات، واختيار التقنية، وتصميم أطر المؤشرات.",
      "sv.ai.t": "حلول الذكاء الاصطناعي",
      "sv.ai.d": "نطبّق الذكاء الاصطناعي حيث يصنع قيمة حقيقية — لا حيث يصنع عنواناً برّاقاً — من التقارير الذكية إلى تعلّم آلي مدمج داخل أنظمتك القائمة.",

      /* ---- how we work ---- */
      "how.crumb": "كيف نعمل",
      "how.eyebrow": "كيف نعمل",
      "how.h1": "نتحدث لغة الأعمال قبل أن نتحدث لغة <span>التقنية.</span>",
      "how.p": "يبدأ كل مشروع بفهم شكل النجاح بالنسبة إليك — قبل أن نتحدث عن البرمجيات. وإن لم نستطع صياغة نتيجة العمل في جملة واحدة، فلسنا مستعدين للبناء بعد.",
      "commit.eyebrow": "التزاماتنا",
      "commit.h2": "أربعة وعود، في كل مشروع.",
      "commit.1t": "الأعمال أولاً",
      "commit.1d": "يبدأ كل مشروع بشكل النجاح بالنسبة إليك — قبل الحديث عن البرمجيات. وإن لم نصغ النتيجة في جملة، فلسنا مستعدين للبناء.",
      "commit.2t": "نملك النتيجة",
      "commit.2d": "إدارة المنتج ليست منصباً نشغله في هيكلك التنظيمي، بل أسلوب عملنا. نحن مسؤولون عمّا إذا كان النظام يحسّن القرارات، لا مجرد تسليمه في موعده.",
      "commit.3t": "بُني ليدوم",
      "commit.3d": "معمارية قابلة للتوسّع، وتوثيق نظيف، ونقل معرفة كمعيار أساسي. يجب ألّا تبقى أسيراً لدينا لأن لا أحد غيرنا يفهم النظام.",
      "commit.4t": "نبقى بعد الإطلاق",
      "commit.4d": "الدعم والتحسين المستمر جزء من العلاقة، لا بنداً إضافياً. معظم قيمة النظام تُصنع بعد الإطلاق.",
      "flow.eyebrow": "مسار المشروع",
      "flow.h2": "ستّ مراحل، وما تحصل عليه في كلٍّ منها.",
      "flow.p": "دفعات عمل قابلة للاستخدام، لا صندوقاً مغلقاً. هذا هو المسار الذي يتّبعه مشروع نموذجي — والمُخرَج الملموس الذي تخرج به في كل خطوة.",
      "flow.discover": "الاكتشاف", "flow.define": "التعريف", "flow.build": "البناء",
      "flow.migrate": "الترحيل والتكامل", "flow.launch": "الإطلاق", "flow.improve": "التحسين",
      "flow.1": "أهداف العمل، والعمليات الحالية، ونقاط الألم، وفجوات القرار. <strong style='color:var(--ink)'>تحصل على</strong> تقرير نتائج ومعايير نجاح.",
      "flow.2": "تصميم الحل، وإطار المؤشرات، والنطاق، وخريطة الطريق. <strong style='color:var(--ink)'>تحصل على</strong> مواصفات وظيفية وخطة تسليم.",
      "flow.3": "تسليم تكراري مع عروض ومراجعات منتظمة. <strong style='color:var(--ink)'>تحصل على</strong> دفعات عاملة، لا صندوقاً مغلقاً.",
      "flow.4": "نقل البيانات والتحقّق منها وربط الأنظمة. <strong style='color:var(--ink)'>تحصل على</strong> بيانات موثّقة وأنظمة مترابطة.",
      "flow.5": "تدريب وتسليم وتوثيق. <strong style='color:var(--ink)'>تحصل على</strong> فريق قادر على تشغيل النظام بنفسه.",
      "flow.6": "دعم وتحسين وصقل للوحات. <strong style='color:var(--ink)'>تحصل على</strong> نظام يزداد حدّةً باستمرار.",
      "phil.h2": "ينبغي أن تخدم التقنية القرار، لا أن تُعقّده.",
      "phil.p1": "تعمل تريبلكس دي عند تقاطع هندسة البرمجيات والبيانات وفهم الأعمال. لا تكتفي فرقنا بتسليم الأنظمة — بل تتحمّل مسؤولية النتائج، وتعمل إلى جانبك لتضمن أن ما يُبنى يدفع العمل فعلاً إلى الأمام.",
      "phil.p2": "من عمليات تخطيط الموارد المؤسسية إلى التطبيقات المخصّصة، ومن ترحيل البيانات الخام إلى الرؤى المدعومة بالذكاء الاصطناعي، نغطّي الرحلة كاملة: <strong>من عمليات مبعثرة إلى قرارات واضحة وواثقة.</strong> ونحن صادقون بشأن الحدود — إن كانت المشكلة في العملية نفسها، سنقولها قبل أن نبيعك برنامجاً.",

      /* ---- about ---- */
      "about.crumb": "من نحن",
      "about.eyebrow": "عن تريبلكس دي",
      "about.h1": "الأنظمة التي تمكّن أصحاب الأعمال من الرؤية بوضوح و<span>القرار بثقة.</span>",
      "about.p": "تريبلكس دي شركة تقنية واستشارات قامت على قناعة بسيطة: ينبغي أن تخدم التقنية القرار لا أن تُعقّده. نعمل عند تقاطع هندسة البرمجيات والبيانات وفهم الأعمال.",
      "name.eyebrow": "الاسم",
      "name.stmt": "وعدٌ واحد يمرّ عبر كل ما نبنيه — <em>تحويل البيانات إلى قرارات.</em>",
      "name.body": "سواء ننفّذ نظام تخطيط موارد، أو نرحّل قاعدة بيانات، أو نبني نموذجاً تنبّئياً، فالنتيجة دائماً واحدة: صاحب عمل يستطيع أن يتّخذ قراراً ويقف خلفه. والنقطة في شعارنا مقصودة — تُقرأ كقرارٍ اتُّخذ، وجملةٍ اكتملت.",
      "name.pron": "TriplexD &nbsp;·&nbsp; تريبلكس دي",
      "vision.eyebrow": "رؤيتنا",
      "vision.stmt": "عالمٌ تكون فيه القرارات المعقّدة والقيادة أكثر <em>يُسراً</em> على أصحاب الأعمال، من خلال بيانات ومؤشرات جديرة بالثقة.",
      "vision.alt": "A world where complex decisions and leadership are made easier for owners through trustworthy data and KPIs.",
      "mission.eyebrow": "مهمتنا",
      "mission.stmt": "نبني تطبيقات ذكية مصمّمة خصيصاً لكل عميل نخدمه، تحوّل بياناته إلى لوحات مؤشرات أداء ذكية ومخصّصة.",
      "mission.body": "وبفضل إدارة منتج عملية واستشارات أعمال، نبني أنظمة تجعل القرارات المعقّدة أوضح — والقيادة أيسر.",
      "mission.alt": "We shape smart applications around each business we serve, turning its data into intelligent, custom KPI dashboards — guided by hands-on product ownership and business consultation.",
      "who.eyebrow": "من نخدم",
      "who.h2": "مبنيّة لمن يحملون المسؤولية.",
      "who.p": "عميلنا ليس مستخدماً — بل شخصٌ مسؤول عن أشخاص آخرين. نبني للقادة الذين يحتاجون أن يروا بوضوح ويقرّروا جيداً.",
      "who.o1t": "أصحاب الأعمال والمؤسِّسون",
      "who.o1d": "يحتاجون رؤية شاملة لعملٍ متنامٍ — دون توظيف فريق تحليلات لتحقيقها.",
      "who.o2t": "القيادات التنفيذية والمديرون العامّون",
      "who.o2d": "يحتاجون مؤشرات موثوقة لتقارير مجلس الإدارة وقرارات استراتيجية يدافعون عنها.",
      "who.o3t": "قادة العمليات والمالية",
      "who.o3d": "يحتاجون أتمتة العمليات وتقارير تشغيلية دقيقة وفي وقتها.",
      "who.o4t": "الجهات الحكومية والقطاع العام",
      "who.o4d": "يحتاجون أنظمة عربية أولاً، متوافقة، كثيفة التكامل، مبنية وفق الأعراف الإقليمية.",
      "sectors.title": "قطاعات صُمّمنا لها",
      "sec.s1": "الحكومة والقطاع العام", "sec.s2": "التعليم والتدريب", "sec.s3": "الخدمات المهنية",
      "sec.s4": "التصنيع والتوزيع", "sec.s5": "التجزئة والتجارة", "sec.s6": "إدارة الرعاية الصحية",
      "triggers.title": "دوافع نموذجية تقود العملاء إلينا",
      "trg.t1": "جداول لم تعد تكفي", "trg.t2": "تقارير تصل متأخرة", "trg.t3": "أنظمة لا تتحدث",
      "trg.t4": "تطبيق قديم يصعب صيانته", "trg.t5": "نظام موارد لم يُعتمد",
      "why.h2b": "ما الذي يميّزنا.",
      "why.pb": "كثير من الشركات تنفّذ أنظمة تخطيط الموارد. قليلون يبنون فوقها طبقة اللوحات التي تحوّلها إلى أداة إدارة. هذا الربط هو جوهر تميّزنا — وليس الأمر الوحيد الذي يميّزنا.",

      /* ---- contact ---- */
      "contact.crumb": "تواصل معنا",
      "contact.eyebrow": "تواصل معنا",
      "contact.h2": "لنحوّل بياناتك إلى قرارٍ <span>تقف خلفه بثقة.</span>",
      "contact.lede": "أخبرنا بما يبطئ قراراتك. سنعاود التواصل خلال يوم عمل واحد لترتيب محادثة قصيرة بلا التزام — بالعربية أو الإنجليزية.",
      "ci.emailL": "البريد الإلكتروني",
      "ci.phoneL": "الهاتف / واتساب",
      "ci.basedL": "مقرّنا",
      "ci.basedV": "القاهرة، مصر — نخدم مصر والسعودية والخليج",
      "ci.langL": "اللغات",
      "ci.langV": "العربية (أصيلة) والإنجليزية",
      "ci.respL": "زمن الاستجابة",
      "ci.respV": "خلال يوم عمل واحد",
      "form.title": "احجز استشارة",
      "form.note": "لا نصّ مبيعات. مجرّد محادثة حول ما تحاول أن تقرّره.",
      "form.name": "الاسم <span class='req'>*</span>",
      "form.company": "الشركة",
      "form.email": "البريد المهني <span class='req'>*</span>",
      "form.phone": "الهاتف",
      "form.help": "بمَ نساعدك؟",
      "opt.notsure": "لست متأكداً بعد — لنتحدث",
      "opt.erp": "تنفيذ ERP (Odoo)",
      "opt.kpi": "لوحات المؤشرات والتحليلات",
      "opt.custom": "تطبيق مخصّص / جوال",
      "opt.integ": "تكامل الأنظمة",
      "opt.mig": "ترحيل البيانات",
      "opt.ds": "علم البيانات / الذكاء الاصطناعي",
      "opt.consult": "استشارة أعمال",
      "form.msgLabel": "ما الذي يبطئ قراراتك؟ <span class='req'>*</span>",
      "form.msgPh": "جملة أو اثنتان تكفيان — التقارير المتأخرة، الأنظمة التي لا تتحدث، نظام الموارد الذي لم يُعتمد…",
      "form.submit": "أرسل واحجز مكالمة",
      "form.legal": "بالضغط على الزر يفتح تطبيق البريد لديك والتفاصيل جاهزة للتعبئة. نردّ خلال يوم عمل واحد.",
      "form.status": "شكراً — سيفتح تطبيق البريد لديك والرسالة جاهزة للإرسال. تفضّل مراسلتنا مباشرة؟ info@triplexd.com",
      "mail.title": "احجز استشارة",
      "mail.note": "مستعدّ للحديث؟ أرسل لنا بريداً إلكترونياً يتضمّن التفاصيل أدناه، وسنردّ خلال يوم عمل واحد — بالعربية أو الإنجليزية.",
      "mail.include": "يُرجى تضمين ما يلي في بريدك:",
      "inc.name": "الاسم",
      "inc.company": "الشركة",
      "inc.email": "البريد المهني",
      "inc.phone": "الهاتف (أو واتساب)",
      "inc.help": "ما الذي تحتاج المساعدة فيه",
      "inc.msg": "ما الذي يبطئ قراراتك",
      "mail.btn": "راسلنا — info@triplexd.com",
      "mail.subject": "طلب استشارة — تريبلكس دي",
      "mail.body": "مرحباً فريق تريبلكس دي،\n\nأودّ حجز استشارة. تفاصيلي:\n\nالاسم: \nالشركة: \nالبريد المهني: \nالهاتف: \nما أحتاج المساعدة فيه: \nما الذي يبطئ قراراتي: \n\nشكراً لكم."
    }
  };

  function apply(lang) {
    var dict = I18N[lang] || I18N.en;
    var root = document.documentElement;
    root.lang = lang;
    root.dir = (lang === 'ar') ? 'rtl' : 'ltr';

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var k = el.getAttribute('data-i18n');
      if (dict[k] != null) { el.innerHTML = dict[k]; }
    });
    document.querySelectorAll('[data-i18n-ph]').forEach(function (el) {
      var k = el.getAttribute('data-i18n-ph');
      if (dict[k] != null) { el.setAttribute('placeholder', dict[k]); }
    });
    document.querySelectorAll('[data-i18n-aria]').forEach(function (el) {
      var k = el.getAttribute('data-i18n-aria');
      if (dict[k] != null) { el.setAttribute('aria-label', dict[k]); }
    });

    var tg = document.getElementById('langToggle');
    if (tg) { tg.textContent = (lang === 'ar') ? 'English' : 'العربية'; }

    var y = document.getElementById('year');
    if (y) { y.textContent = new Date().getFullYear(); }

    // Pre-fill the "Email us" button with a localized subject + body template
    var eb = document.getElementById('emailBtn');
    if (eb) {
      eb.setAttribute('href',
        'mailto:info@triplexd.com?subject=' + encodeURIComponent(dict['mail.subject'] || '') +
        '&body=' + encodeURIComponent(dict['mail.body'] || ''));
    }

    window.__lang = lang;
    try { localStorage.setItem('triplexd-lang', lang); } catch (e) {}
  }

  // Expose a translate helper for other scripts (e.g. form status)
  window.t = function (key) {
    var d = I18N[window.__lang || 'en'] || I18N.en;
    return (d[key] != null) ? d[key] : (I18N.en[key] || '');
  };

  var saved = 'en';
  try { saved = localStorage.getItem('triplexd-lang') || 'en'; } catch (e) {}
  apply(saved);

  var toggle = document.getElementById('langToggle');
  if (toggle) {
    toggle.addEventListener('click', function () {
      apply((window.__lang === 'ar') ? 'en' : 'ar');
    });
  }
})();
