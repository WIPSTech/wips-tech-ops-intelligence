// layer: which of the three build layers the work usually lands in.
// recovers: what the clinic gets back. Nothing here is a result we have delivered;
// these are the workflows we assess and build.
export const steps = [
  {
    name: "Free session",
    detail: "45 minutes, in Arabic or English. We pick one workflow together and work out, with your numbers, what it costs the clinic each month.",
    price: "Free",
  },
  {
    name: "One-workflow assessment",
    detail: "We map that one workflow, score it with TIFDA, and tell you which layer fixes it. You get the cost calculation, the score and a fixed quote for the build. If the honest answer is that it is not worth building, we say so.",
    price: "$500",
  },
  {
    name: "Build",
    detail: "We build the fix inside the tools you already use, with acceptance criteria you sign off before we start.",
    price: "Quoted after the assessment",
  },
  {
    name: "Monthly care",
    detail: "We check the workflow every month, fix what drifts, and send you one page showing what it did.",
    price: "Quoted with the build",
  },
];

export const groups = [
  {
    title: "Enquiries and bookings",
    recovers: "Visits that would otherwise be lost",
    items: [
      {
        name: "Enquiry replies on WhatsApp and Instagram",
        layer: "Agent",
        text: "Answers price, availability and location questions within minutes, including after closing, and hands anything clinical to a person.",
      },
      {
        name: "Confirmations and filling cancelled slots",
        layer: "Automate",
        text: "Confirms each appointment, and when someone cancels, offers the slot to patients on the waiting list.",
      },
      {
        name: "Booking details entered once",
        layer: "Connect",
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
        layer: "Automate",
        text: "Finds patients who are due a check-up or stopped partway through a plan, and invites them back.",
      },
      {
        name: "Package and session tracking",
        layer: "Automate",
        text: "For aesthetic clinics: tracks sessions used in a package, prompts the next booking, and flags packages about to lapse.",
      },
      {
        name: "Review requests",
        layer: "Automate",
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
        layer: "Automate",
        text: "Drafts invoices from completed visits and reminds patients on instalment plans. A person at the clinic approves before anything is sent.",
      },
      {
        name: "Daily cash count in dollars and lira",
        layer: "Connect",
        text: "Pulls the day's payments into one sheet in both currencies, so the end-of-day count takes minutes.",
      },
      {
        name: "Stock and expiry alerts",
        layer: "Automate",
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
        layer: "Connect",
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
        layer: "Connect",
        text: "One WhatsApp message each week: bookings, no-shows, cash collected, cash owed.",
      },
    ],
  },
];

export const layers = [
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
];

export const tifda = [
  { key: "T", name: "Time", what: "How much time or money the task takes each month.", score: "1 to 5" },
  { key: "I", name: "Impact", what: "What happens when it is done wrong or not done.", score: "1 to 5" },
  { key: "F", name: "Frequency", what: "How often it happens.", score: "1 to 5" },
  { key: "D", name: "Documented", what: "Is there a written, repeatable way to do it?", score: "0 or 1" },
  { key: "A", name: "Available data", what: "Does the information it needs already exist somewhere reachable?", score: "0 or 1" },
];
