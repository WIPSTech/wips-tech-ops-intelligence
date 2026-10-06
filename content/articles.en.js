// Every figure in these articles links to its source. Worked examples use
// made-up numbers and say so.
export const articles = [
  {
    slug: "does-this-task-need-ai",
    title: "Does this task need AI? A three-question test for clinics",
    description:
      "Most clinic tasks that feel like an AI problem are solved by linking two tools or by a simple rule. Three questions tell you which one you have.",
    date: "2026-10-06",
    readTime: "4 min read",
    answer:
      "Ask three questions in order. Does the information already exist in two places that are not linked? Connect them. Does the task follow the same rule every time? Automate it. Does it need a decision that changes case by case? Only then consider an AI agent.",
    body: [
      {
        h: "Why start with the question and not the tool",
        p: [
          "Almost every organisation now uses AI somewhere, and few can point to money it made them. In McKinsey's 2026 global survey, 89% of respondents reported regular AI use in at least one business function, while 37% said it had contributed to profit. Only 6% reported a profit effect of 5% or more, and nearly three-quarters of that group had redesigned the workflow around the tool.",
          "The pattern for small firms is similar. The OECD's 2026 survey of small and medium businesses in 12 countries found that 61% use at least one AI application and that 76% of those users are still at an early stage.",
          "Neither survey covers Lebanon. They are still the best evidence available for a simple point: buying the tool is the easy part, and the return comes from fixing the workflow first.",
        ],
      },
      {
        h: "Question 1: is the information already in two places?",
        p: [
          "A patient books on WhatsApp and someone retypes the booking into the schedule. The information exists; it is just not linked. The fix is a connection between the two, and it involves no AI at all.",
        ],
      },
      {
        h: "Question 2: is it the same rule every time?",
        p: [
          "A reminder goes out 24 hours before every appointment. That is a rule, and a rule can run by itself. Many clinic systems already include this feature. If yours does, switch it on before paying anyone to build it.",
        ],
      },
      {
        h: "Question 3: does it need a decision?",
        p: [
          "A patient cancels at nine in the morning. Who gets the eleven o'clock slot, and what do you say to the patient who cancelled? The answer changes each time. This is where an AI agent can help, as long as it has written limits and a person to hand over to.",
          "Gartner predicted in June 2025 that over 40% of agentic AI projects will be cancelled by the end of 2027, citing rising costs, unclear business value and weak risk controls. Using an agent only where a decision is needed is how you stay out of that group.",
        ],
      },
      {
        h: "What to do with the answer",
        p: [
          "Write down one task that bothers you and answer the three questions. If you stop at question 1 or 2, you probably do not need AI for it. If you reach question 3, check two more things before spending money: that the process is written down, and that the information it needs can be reached.",
        ],
      },
    ],
    sources: [
      { label: "McKinsey, The state of AI in 2026", url: "https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai" },
      { label: "Inc. Arabia on the OECD D4SME Survey 2026", url: "https://en.incarabia.com/oecd-report-61-percent-of-smes-use-ai-but-76-percent-remain-earlystage-adopters-844807.html" },
      { label: "Gartner, 25 June 2025", url: "https://www.gartner.com/en/newsroom/press-releases/2025-06-25-gartner-predicts-over-40-percent-of-agentic-ai-projects-will-be-canceled-by-end-of-2027" },
    ],
  },
  {
    slug: "what-a-missed-appointment-costs",
    title: "How to work out what a missed appointment costs your clinic",
    description:
      "A short formula any clinic owner can fill in with their own numbers, and why lost visits usually matter more than lost admin time.",
    date: "2026-10-06",
    readTime: "3 min read",
    answer:
      "Multiply the number of missed appointments in a month by the share you could not refill and by the average value of a visit. That is the monthly cost. Staff time spent chasing is a second, smaller number.",
    body: [
      {
        h: "The formula",
        p: [
          "Monthly cost = missed appointments × share not refilled × average value of a visit.",
          "You need three numbers from your own clinic: how many booked patients did not come last month, how many of those slots stayed empty, and what an average visit brings in.",
        ],
      },
      {
        h: "An example with made-up numbers",
        p: [
          "Say a clinic had 30 missed appointments last month, 20 of those slots stayed empty, and an average visit is worth $50. The cost is 20 × $50 = $1,000 for the month. These numbers are invented to show the arithmetic. Yours will differ, which is the reason to calculate it.",
        ],
      },
      {
        h: "Why this matters more than admin hours",
        p: [
          "It is tempting to count the hours the front desk spends confirming appointments. In Lebanon that is usually the smaller number. The private-sector minimum wage was set at 28 million lira a month, about $312, from July 2025. At local salaries, a few saved hours are worth little. An empty chair is worth a full visit.",
          "So measure the visits first. Staff time is worth adding only after you know the first number.",
        ],
      },
      {
        h: "What to do with the number",
        p: [
          "If it is small, leave the workflow alone. If it is large, check whether your clinic software already sends confirmations and offers cancelled slots to a waiting list. If it does, switch that on. If it does not, this is a workflow worth assessing.",
        ],
      },
    ],
    sources: [
      { label: "L'Orient Today, minimum wage decree, July 2025", url: "https://today.lorientlejour.com/article/1470311/aoun-signs-decree-on-minimum-wage-increase-for-private-sector.html" },
    ],
  },
  {
    slug: "how-clinics-get-named-by-ai-assistants",
    title: "How a clinic gets named when someone asks an AI assistant",
    description:
      "People now ask ChatGPT and Google's AI answers for a clinic nearby. What decides which clinics are named, and what you can do about it.",
    date: "2026-10-06",
    readTime: "4 min read",
    answer:
      "AI assistants name businesses they can read clearly and find confirmed elsewhere. State plainly what you do and where, answer common questions on your own site, keep your Google Business Profile complete, and let AI crawlers in.",
    body: [
      {
        h: "What the research says",
        p: [
          "The first academic study of this, presented at the KDD conference in 2024, found that changing how content is written can raise its visibility in AI-generated answers by up to 40%. The same paper notes that what works varies from one field to another.",
          "That is an upper figure from a research benchmark. It shows that content can be shaped for AI answers; it does not promise a clinic any particular result.",
        ],
      },
      {
        h: "What we changed on one site",
        p: [
          "Our founder also directs a contracting company, NTM for Engineering & Development in Choueifat, and we used its site as our first test. We rewrote each service as a plain question and answer, added structured business details that machines can read, and made sure the site's sitemap and crawler rules admit AI crawlers.",
          "On 6 October 2026, ChatGPT listed NTM first when asked for a contracting company in Choueifat. That is one question on one company, in a different field from healthcare, and we cannot separate the effect of our changes from the company's existing Google listing. AI answers also change with the wording of the question and over time.",
        ],
      },
      {
        h: "Four things a clinic can do this month",
        p: [
          "Say what you do and where in the first two sentences of your home page. Name the treatments and the town.",
          "Add a page of real patient questions with short, direct answers: prices where you can share them, opening hours, parking, languages spoken.",
          "Complete your Google Business Profile and keep hours, phone number and address identical everywhere they appear.",
          "Check that your site does not block AI crawlers. Many site builders block them by default.",
        ],
      },
      {
        h: "What this will not do",
        p: [
          "It will not replace word of mouth, and it is slow. Expect months. It is worth doing because the work is small and the patients asking these questions are already looking for a clinic.",
        ],
      },
    ],
    sources: [
      { label: "Aggarwal et al., GEO: Generative Engine Optimization, KDD 2024", url: "https://arxiv.org/abs/2311.09735" },
    ],
  },
];

