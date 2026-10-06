// English content. Nothing here is a result WIPS Tech has delivered to a clinic;
// the services are workflows we assess and build. Keep ar.js in step with this file.
const en = {
  locale: "en",
  dir: "ltr",
  other: { locale: "ar", label: "العربية" },
  label: "The clinic AI partner that measures before it builds",
  description:
    "WIPS Tech helps dental, medical and aesthetic clinics in Lebanon work out what a manual workflow costs, then fix it with the lightest thing that works: a connection, an automation, or an AI agent.",
  siteTitle: "WIPS Tech | AI and workflow partner for clinics in Lebanon",
  cta: "Request a free session",
  skip: "Skip to content",
  menu: { open: "Menu", close: "Close", main: "Main", footer: "Footer" },
  nav: [
    { href: "/services", label: "Services" },
    { href: "/case-studies", label: "Case study" },
    { href: "/insights", label: "Insights" },
    { href: "/faq", label: "FAQ" },
    { href: "/about", label: "About" },
  ],
  footer: {
    founded: "Founded in 2026. Based in Mount Lebanon.",
    site: "Site",
    reach: "Reach us",
    contact: "Contact",
    base: "Results depend on the clinic, its tools and its patients. WIPS Tech does not promise specific financial outcomes. © 2026 WIPS Tech.",
  },
  whatsapp: {
    prefill: "Hello, I would like a free session for my clinic.",
    label: "WhatsApp",
    closing: "Or message us on WhatsApp",
    h: "Prefer WhatsApp?",
    p: "Message us and we reply within one business day.",
    link: "Open a WhatsApp chat",
  },
  closing: {
    title: "Start with one workflow and one number.",
    text: "45 minutes, free, in Arabic or English. You keep the calculation whether or not you go further.",
  },
  meta: {
    services: {
      title: "Services for dental, medical and aesthetic clinics",
      description:
        "What WIPS Tech builds for clinics in Lebanon: enquiry replies, no-show recovery, recalls, invoices and balances, and visibility on Google and AI assistants. Each one is scored before it is built.",
    },
    case: {
      title: "Case study: named first by ChatGPT for contractors in Choueifat",
      description:
        "We tested AI-search visibility on our founder's own contracting company. Ask ChatGPT for a contracting company in Choueifat and it is named first. Screenshot, method and limits.",
    },
    insights: {
      title: "Insights for clinic owners",
      description:
        "Short, sourced answers for clinic owners in Lebanon: whether a task needs AI, what a missed appointment costs, and how clinics get named by AI assistants.",
    },
    faq: {
      title: "Questions clinic owners ask",
      description:
        "Plain answers about WIPS Tech: what it does, whether a clinic needs AI, what the free session covers, what it costs, and what happens to patient information.",
    },
    about: {
      title: "About WIPS Tech",
      description:
        "WIPS Tech was founded in January 2026 by Mazen Farhat, a civil engineer in Mount Lebanon. A founder-led firm that helps clinics use AI only where it pays.",
    },
    contact: {
      title: "Request a free session",
      description:
        "Request a free 45-minute session with WIPS Tech. We pick one workflow and work out what it costs your clinic each month, using your own numbers.",
    },
  },

  home: {
    context: "For dental, medical and aesthetic clinics in Lebanon",
    h1: "Know what a workflow costs your clinic before you spend on AI.",
    lede: "We work out what one manual task costs you each month, fix it with the lightest thing that works, and stay responsible for it afterwards. Often the fix is not AI at all.",
    secondary: "See what we build",
    questionsTitle: "Four questions most clinic owners cannot answer today",
    questionsSub: "Each one is money the clinic has already earned or nearly earned.",
    questions: [
      "How many WhatsApp enquiries arrived after closing last week, and how many had an answer before morning?",
      "When a patient cancels at nine, who fills the eleven o'clock slot?",
      "How many patients are halfway through a treatment plan or a package and have not booked the next visit?",
      "How much is owed to the clinic today, and who is chasing it?",
    ],
    layersTitle: "Three ways to fix a task. Only one of them is AI.",
    layersText:
      "Every task we look at is fitted to the lightest layer that solves it. Treating a plumbing problem as an intelligence problem is the most common way to waste money on AI.",
    buildTitle: "What we build for clinics",
    buildLink: "Read each service in full",
    startTitle: "How it starts",
    startSub: "One workflow at a time. You can stop after any step.",
    proofTitle: "What we can show you, and what we cannot yet",
    proofA: {
      h: "One result you can check yourself",
      p: "Ask ChatGPT for a contracting company in Choueifat. The first name it gives is NTM for Engineering & Development, the contracting company our founder directs. We restructured its website so AI assistants could read it, as our own first test.",
      link: "See the screenshot and the method",
    },
    proofB: {
      h: "No clinic case study yet",
      p: "WIPS Tech was founded in January 2026. We do not have a published clinic result, so you will not find clinic testimonials or success figures on this site. What you can judge today is the method, and the free session is where you test it on your own numbers.",
    },
  },

  layersUi: { noAi: "No AI", ai: "AI, with limits", example: "Example:" },
  layers: [
    {
      name: "Connect",
      when: "The information already exists in two places that do not talk to each other.",
      fix: "Link them. No AI involved.",
      example: "A booking form that does not fill the schedule.",
    },
    {
      name: "Automate",
      when: "The task follows the same rule every time.",
      fix: "A fixed rule that runs by itself. Still no AI.",
      example: "A reminder sent 24 hours before every appointment.",
    },
    {
      name: "Agent",
      when: "The task needs a decision that changes case by case.",
      fix: "An AI agent with written limits and a person to hand over to.",
      example: "Rebooking around a same-day cancellation.",
    },
  ],

  steps: [
    {
      name: "Free session",
      detail:
        "45 minutes, in Arabic or English. We pick one workflow together and work out, with your numbers, what it costs the clinic each month.",
      price: "Free",
    },
    {
      name: "One-workflow assessment",
      detail:
        "We map that one workflow, score it with TIFDA, and tell you which layer fixes it. You get the cost calculation, the score and a fixed quote for the build. If the honest answer is that it is not worth building, we say so.",
      price: "$500",
    },
    {
      name: "Build",
      detail:
        "We build the fix inside the tools you already use, with acceptance criteria you sign off before we start.",
      price: "Quoted after the assessment",
    },
    {
      name: "Monthly care",
      detail: "We check the workflow every month, fix what drifts, and send you one page showing what it did.",
      price: "Quoted with the build",
    },
  ],

  groups: [
    {
      title: "Enquiries and bookings",
      recovers: "Visits that would otherwise be lost",
      items: [
        {
          name: "Enquiry replies on WhatsApp and Instagram",
          layer: 2,
          text: "Answers price, availability and location questions within minutes, including after closing, and hands anything clinical to a person.",
        },
        {
          name: "Confirmations and filling cancelled slots",
          layer: 1,
          text: "Confirms each appointment, and when someone cancels, offers the slot to patients on the waiting list.",
        },
        {
          name: "Booking details entered once",
          layer: 0,
          text: "Links the place bookings arrive to the schedule, so nobody retypes the same appointment.",
        },
      ],
    },
    {
      title: "Patients coming back",
      recovers: "Treatment plans and packages that get finished",
      items: [
        {
          name: "Recall and unfinished treatment plans",
          layer: 1,
          text: "Finds patients who are due a check-up or stopped partway through a plan, and invites them back.",
        },
        {
          name: "Package and session tracking",
          layer: 1,
          text: "For aesthetic clinics: tracks sessions used in a package, prompts the next booking, and flags packages about to lapse.",
        },
        {
          name: "Review requests",
          layer: 1,
          text: "Asks for a Google review after a visit and routes unhappy feedback to you privately first.",
        },
      ],
    },
    {
      title: "Money owed and money counted",
      recovers: "Cash already earned",
      items: [
        {
          name: "Invoices and outstanding balances",
          layer: 1,
          text: "Drafts invoices from completed visits and reminds patients on instalment plans. A person at the clinic approves before anything is sent.",
        },
        {
          name: "Daily cash count in dollars and lira",
          layer: 0,
          text: "Pulls the day's payments into one sheet in both currencies, so the end-of-day count takes minutes.",
        },
        {
          name: "Stock and expiry alerts",
          layer: 1,
          text: "Warns before injectables and consumables expire or run out.",
        },
      ],
    },
    {
      title: "Being found",
      recovers: "New patients who are already searching",
      items: [
        {
          name: "Google and AI-assistant visibility",
          layer: 0,
          text: "Structures your site and Google Business Profile so that Google, ChatGPT and similar assistants can name your clinic when someone asks for one nearby.",
        },
      ],
    },
    {
      title: "Knowing your numbers",
      recovers: "Decisions made on time",
      items: [
        {
          name: "The owner's weekly page",
          layer: 0,
          text: "One WhatsApp message each week: bookings, no-shows, cash collected, cash owed.",
        },
      ],
    },
  ],

  tifda: [
    { key: "T", name: "Time", what: "How much time or money the task takes each month.", score: "1 to 5" },
    { key: "I", name: "Impact", what: "What happens when it is done wrong or not done.", score: "1 to 5" },
    { key: "F", name: "Frequency", what: "How often it happens.", score: "1 to 5" },
    { key: "D", name: "Documented", what: "Is there a written, repeatable way to do it?", score: "0 or 1" },
    {
      key: "A",
      name: "Available data",
      what: "Does the information it needs already exist somewhere reachable?",
      score: "0 or 1",
    },
  ],

  services: {
    h1: "What we build, and how we decide whether to build it",
    lede: "Every item below is a workflow we assess and build for clinics. None of it is sold as a package. We score the task first, and if the lightest fix is switching on a feature you already pay for, that is what we will tell you.",
    stepsTitle: "The four steps",
    stepsSub: "You can stop after any of them.",
    buildTitle: "Workflows we build for clinics",
    buildSub: "Grouped by what the clinic gets back. The label at the end of each row is the layer the work usually lands in.",
    layersTitle: "The three layers",
    layersSub: "Each task is fitted to the lightest layer that solves it.",
    methodTitle: "TIFDA: which task to fix first",
    methodLede:
      "Five factors, scored for each task. Three add up to how much the task hurts. Two decide whether it can be built on at all.",
    table: { letter: "Letter", factor: "Factor", what: "What it measures", score: "Score" },
    formula1: "Priority = (T + I + F) × D × A",
    formula2: "Highest possible: 15. If D or A is 0, priority is 0.",
    methodNote:
      "A task can be painful and still score zero. If nobody has written down how it is done, or the information it needs cannot be reached, there is nothing repeatable to build on. That is not a reason to give up on it. It is a reason to fix the process or the data first, then score it again.",
    accTitle: "What we stay responsible for",
    acc: [
      "Acceptance criteria are written and signed off before a build starts, so both of us know what \"working\" means.",
      "We agree in writing which information a build may read before it reads anything.",
      "A person at the clinic approves anything involving money or clinical details before it is sent.",
      "The AI does not give medical advice. Clinical questions go to your staff.",
      "Each month we check the workflow, fix what has drifted, and send one page showing what it did.",
    ],
    faqLink: "More questions answered",
  },

  scorer: {
    title: "Score a task from your clinic",
    note: "Pick an example, then move the numbers to match your own clinic.",
    examples: "Example tasks",
    presets: {
      confirm: "Confirming appointments",
      enquiry: "Replying to WhatsApp enquiries",
      retype: "Retyping bookings into the schedule",
      balances: "Chasing unpaid balances",
    },
    own: "My own task",
    sliders: {
      t: { name: "Time", hint: "How much time or money it takes each month" },
      i: { name: "Impact", hint: "How much it hurts when it goes wrong or is skipped" },
      f: { name: "Frequency", hint: "How often it happens" },
    },
    gates: { d: "Is the process written down?", a: "Is the information it needs reachable?" },
    yes: "Yes",
    no: "No",
    needQ: "What does the task mostly involve?",
    needs: {
      link: "Moving information from one tool to another",
      rule: "Doing the same thing every time",
      decision: "Making a decision that changes case by case",
    },
    outOf: "out of 15",
    blockedHead: "Not ready to build yet.",
    blockedIntro: "However much it hurts, there is nothing repeatable to build on. First:",
    missingD: "write the process down once, by hand",
    missingA: "get the information it needs into one reachable place",
    blockedOutro: "Then score it again.",
    first: "Fix this one first.",
    closer: "Worth a closer look.",
    leave: "Leave it for now.",
    leaveText: "The score is low. Other tasks probably cost you more.",
    fixes: {
      link: "This looks like a Connect fix. It does not need AI.",
      rule: "This looks like an Automate fix. It does not need AI.",
      decision: "This one needs judgment, so an AI agent with written limits may fit.",
    },
    how: "See how the score works",
    send: "Send this score with a session request",
  },

  form: {
    name: "Your name",
    clinic: "Clinic name",
    type: "Type of clinic",
    choose: "Choose one",
    types: ["Dental or medical clinic", "Beauty or aesthetic clinic", "Something else"],
    email: "Email",
    phone: "Phone or WhatsApp",
    optional: "(optional)",
    problem: "What is costing the clinic most right now?",
    submit: "Request a free session",
    sending: "Sending",
    doneTitle: "Request sent",
    doneText: "We reply within one business day to arrange your session.",
    doneConfirm: "A confirmation is on its way to your email.",
    error: "The request was not sent. Try again, or email info@wipstech.com.",
    attached: "Attached:",
    scoreLine: "TIFDA score",
  },

  contact: {
    h1: "Request a free session",
    lede: "45 minutes, in Arabic or English. We pick one workflow and work out what it costs your clinic each month. You keep the calculation.",
    nextH: "What happens next",
    nextP: "We reply within one business day to arrange a time. The session is a video or phone call.",
    emailH: "Prefer email?",
    askH: "What we ask for",
    askP: "Only what we need to reply and to know which kind of clinic you run. We do not add you to a mailing list.",
  },

  caseStudy: {
    context: "NTM for Engineering & Development, Choueifat",
    h1: "We tested AI-search visibility on our own company first",
    lede: "Ask ChatGPT for a contracting company in Choueifat. The first name it gives is NTM, the contracting company our founder directs. Here is the screenshot, what we changed, and what it does and does not prove.",
    figAlt:
      "ChatGPT answer to the question \"contracting company choueifat\": a map with N.T.M for Engineering shown first, rated 5.0, followed by a list of contractors in Choueifat with N.T.M for Engineering & Development at the top.",
    figCaption:
      "ChatGPT's answer to \"contracting company choueifat\", captured on 6 October 2026. NTM for Engineering & Development is listed first.",
    tryH: "Check it yourself",
    tryP: "Open ChatGPT and type exactly this:",
    tryQuery: "contracting company choueifat",
    tryNote:
      "AI answers change over time and can differ between accounts, so the order you see may not match ours. That is why the screenshot carries its date.",
    sections: [
      {
        h: "Why our own company",
        p: [
          "NTM is directed by the founder of WIPS Tech. It is not an outside client, and we are not presenting it as one.",
          "Before asking a clinic to trust this work, we wanted a result we could show and anyone could check. Our own company was the place to get one.",
        ],
      },
      {
        h: "The situation",
        p: [
          "A licensed contracting company in Mount Lebanon wins most of its work through referrals. More people now ask an AI assistant to suggest a contractor before they ask a friend. When we began, the company's website gave those assistants little they could read or repeat.",
        ],
      },
      {
        h: "What we changed",
        list: [
          "Rewrote each service as a plain question with a short, direct answer.",
          "Added structured business details that search engines and AI tools read directly.",
          "Published a sitemap and crawler rules that let search and AI crawlers in.",
          "Listed the steps that sit outside the site: Google Search Console, Google Business Profile and Bing Webmaster Tools.",
        ],
      },
      {
        h: "What happened",
        p: [
          "For the question in the screenshot, ChatGPT names NTM first among the contractors it lists in Choueifat.",
          "NTM now receives at least two to three calls a week from people asking about its services, by our founder's own count. We do not ask every caller how they found the company, so we cannot say how many of those calls started with an AI assistant.",
        ],
      },
      {
        h: "What this does not prove",
        list: [
          "It is one question, and the question names the town. Other wordings may give a different list.",
          "It is one company. We have not measured how often it is named, or how many of its weekly calls come from AI answers.",
          "We cannot show how much of the result comes from our changes and how much from the company's existing Google listing and reviews.",
          "Contracting is not healthcare. A clinic may see a different result.",
        ],
      },
      {
        h: "Why a clinic might care",
        p: [
          "Patients ask the same assistants for a dentist or a skin clinic nearby. The work that made a contractor readable to them is the same work for a clinic, and it is small.",
        ],
      },
    ],
    closingTitle: "Want to know what an assistant says about your clinic?",
    closingText: "We will check it with you in the free session and show you what it is reading.",
  },

  faq: {
    h1: "Questions clinic owners ask",
    items: [
      {
        q: "What does WIPS Tech do?",
        a: "We help clinics work out what a manual workflow costs each month, then fix it with the lightest thing that works. Sometimes that is linking two tools, sometimes a fixed automation, and sometimes an AI agent. After it is built we check it every month.",
      },
      {
        q: "Who is it for?",
        a: "Dental and medical clinics, and beauty and aesthetic clinics, in Lebanon. Most have a small front-desk team and run bookings through WhatsApp, a schedule and a spreadsheet.",
      },
      {
        q: "Does my clinic need AI?",
        a: "Often not. Many problems are solved by connecting two tools or by a simple rule that runs by itself. We use an AI agent only when a task needs a decision that changes from case to case, such as rebooking around a cancellation.",
      },
      {
        q: "What is TIFDA?",
        a: "It is how we decide which task to fix first. Time, Impact and Frequency are scored 1 to 5 and added. Documented and Available data are scored 0 or 1 and multiplied. If the process is not written down or the data cannot be reached, the score is zero and we fix that first.",
      },
      {
        q: "What happens in the free session?",
        a: "It takes 45 minutes, in Arabic or English. We choose one workflow and calculate what it costs the clinic each month using your own numbers. You keep the calculation whether or not you go further.",
      },
      {
        q: "What does it cost?",
        a: "The session is free. Assessing one workflow costs $500. Builds and monthly care are quoted after the assessment, because the price depends on the tools you already use.",
      },
      {
        q: "Have you worked with clinics before?",
        a: "We do not have a published clinic case study yet. WIPS Tech was founded in January 2026. The one result we can show is from NTM, the contracting company our founder directs, and you can check it yourself on the case study page.",
      },
      {
        q: "Do I have to replace my clinic software?",
        a: "No. We build around the tools you already use. If your software already does what you need, we will tell you to switch that feature on.",
      },
      {
        q: "What happens to patient information?",
        a: "Before any build we agree in writing which information it may read. Anything involving money or clinical details is approved by a person at the clinic before it is sent. The AI does not give medical advice.",
      },
      {
        q: "Do you run adverts or find new patients?",
        a: "We help your clinic be found on Google and by AI assistants, and we help bring existing patients back. We do not send cold messages to people who are not your patients. Professional bodies set rules on how clinics may advertise, and we work within what yours allows.",
      },
      {
        q: "How do I start?",
        a: "Request a free session on the contact page, or message us on WhatsApp at +961 71 470 559. We reply within one business day to arrange a time.",
      },
    ],
  },

  about: {
    h1: "A new, founder-led firm. Here is exactly who you would be working with.",
    sections: [
      {
        h: "The founder",
        p: [
          "WIPS Tech was founded in January 2026 by Mazen Farhat. He is a civil and environmental engineer, a graduate of Beirut Arab University, and has spent more than a decade managing infrastructure and contracting projects in Lebanon. He still directs a contracting company, NTM for Engineering & Development.",
          "Engineering taught him one habit that carries over: measure the load before you design the structure. WIPS Tech applies it to clinics. Measure what a workflow costs before deciding what to build.",
        ],
      },
      {
        h: "How the work gets done",
        p: [
          "Mazen runs every session, assessment and build himself, with AI tools doing much of the execution. We take on a small number of clinics at a time, and the person you talk to is the person responsible for the result.",
        ],
      },
      {
        h: "What we believe",
        list: [
          "AI is worth paying for only where it helps the business grow and pays back.",
          "Most fixes are simpler than AI, and we would rather build the simple one.",
          "A number you calculated yourself is worth more than one a vendor quoted you.",
          "If we have not done something yet, the site should say so.",
        ],
      },
      {
        h: "What we have not done yet",
        p: [
          "We do not have a published clinic case study. The one result we can show comes from our founder's own contracting company, and you can check it yourself.",
        ],
        link: { href: "/case-studies", label: "See the case study" },
      },
      {
        h: "Where we are",
        p: ["Mount Lebanon. We work with clinics across Lebanon, in Arabic or English."],
      },
    ],
  },

  insights: {
    h1: "Insights",
    lede: "Each article answers one question a clinic owner actually asks. Every figure links to its source, and worked examples say when the numbers are made up.",
    all: "All insights",
    sources: "Sources",
  },

  email: {
    subject: "We received your session request",
    body: (name) =>
      `Hello ${name},\n\nThank you for requesting a free session with WIPS Tech. We will reply within one business day to arrange a time.\n\nThe session takes 45 minutes. We pick one workflow together and work out what it costs your clinic each month. You do not need to prepare anything.\n\nYou can also reach us on WhatsApp: +961 71 470 559.\n\nIf you did not send this request, you can ignore this email.\n\nMazen Farhat\nWIPS Tech\nhttps://wipstech.com`,
  },
};

export default en;
