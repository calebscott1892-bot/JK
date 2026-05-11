export const site = {
  name: "JK Plumbing Solutions",
  legalName: "JK PLUMBING SOLUTIONS PTY LTD",
  director: "James Khouri",
  abn: "99 681 661 834",
  plumbingLicence: "477160C",
  location: "Campbelltown",
  serviceArea: "Campbelltown, servicing all Sydney",
  url: "https://www.jkplumbingsolutions.com.au",
  phone: {
    display: "0447 798 126",
    tel: "0447798126",
    international: "+61447798126",
    href: "tel:0447798126",
  },
  email: "info@jkplumbingsolutions.com.au",
  social: {
    facebook: "JK plumbing solutions pty Ltd",
    instagram: "jk_plumbingsolutionss",
    instagramUrl: "https://www.instagram.com/jk_plumbingsolutionss/",
  },
  nav: [
    { label: "Services", href: "#services" },
    { label: "About", href: "#about" },
    { label: "Service Area", href: "#service-area" },
    { label: "Gallery", href: "#gallery" },
    { label: "Contact", href: "#contact" },
  ],
  trustItems: [
    "Licensed Plumber",
    "ABN 99 681 661 834",
    "Licence 477160C",
    "Campbelltown Based",
    "Servicing Sydney",
  ],
  services: [
    {
      title: "Blocked drains",
      description:
        "Blocked sinks, toilets, stormwater and sewer lines assessed clearly before the fix is carried out.",
      details: ["Drain clearing", "Camera investigation", "Cause explained"],
    },
    {
      title: "Hot water systems",
      description:
        "Fault finding, replacement advice and installation support when the hot water stops doing its job.",
      details: ["Fault checks", "Replacements", "Maintenance"],
    },
    {
      title: "Gas installations",
      description:
        "Licensed gas plumbing for new connections, appliance installs and practical upgrades.",
      details: ["Gas connections", "Appliance installs", "Upgrade work"],
    },
    {
      title: "General plumbing & maintenance",
      description:
        "The day-to-day plumbing jobs that keep homes and businesses working properly.",
      details: ["Leaks and taps", "Toilets and fixtures", "Pipework repairs"],
    },
    {
      title: "Renovations",
      description:
        "Bathroom, kitchen and laundry plumbing planned around trades, timing and the final finish.",
      details: ["Bathrooms", "Kitchens", "Laundries"],
    },
    {
      title: "New builds",
      description:
        "Rough-ins, fit-offs and coordination for new homes, commercial spaces and project work.",
      details: ["Rough-ins", "Fit-offs", "Project coordination"],
    },
    {
      title: "Emergency repairs",
      description:
        "Urgent plumbing repairs with clear next steps and practical make-safe advice when needed.",
      details: ["Leaks", "Burst pipes", "Blocked fixtures"],
    },
    {
      title: "Commercial plumbing",
      description:
        "Plumbing support for businesses, fit-outs, maintenance issues and commercial premises.",
      details: ["Fit-outs", "Maintenance", "Repairs"],
    },
  ],
  commonProblems: [
    {
      title: "Water is backing up or draining slowly",
      description:
        "Blocked sinks, toilets, showers and external drains need a clear look at what is causing the restriction, not just a quick push-through.",
      service: "Blocked drains",
    },
    {
      title: "A leak is starting to cause damage",
      description:
        "Leaking taps, toilets, pipework and fixtures are easier to manage when the source is found early and repaired cleanly.",
      service: "Emergency repairs",
    },
    {
      title: "The hot water has stopped keeping up",
      description:
        "Faults, ageing systems and poor performance can be checked before deciding whether repair or replacement makes sense.",
      service: "Hot water systems",
    },
    {
      title: "The plumbing needs to work with other trades",
      description:
        "Renovations, new builds and fit-offs need sequencing, coordination and a plumber who understands the finished result.",
      service: "Renovations and new builds",
    },
  ],
  serviceGroups: [
    {
      title: "Urgent repairs",
      description:
        "When something is leaking, blocked or no longer usable, the priority is to make the next step clear and practical.",
      items: ["Blocked drains", "Burst pipe repairs", "Leaking taps and toilets", "Hot water faults"],
    },
    {
      title: "Home plumbing",
      description:
        "Everyday plumbing for households across Campbelltown, the Macarthur region and wider Sydney.",
      items: ["General maintenance", "Fixtures and pipework", "Hot water systems", "Gas installations"],
    },
    {
      title: "Renovations and new builds",
      description:
        "Plumbing support that fits around builders, other trades and the standard of finish the project needs.",
      items: ["Bathroom renovations", "Kitchen and laundry plumbing", "Rough-ins", "Fit-offs"],
    },
    {
      title: "Commercial and maintenance",
      description:
        "Responsive plumbing for business premises, fit-outs and ongoing maintenance requirements.",
      items: ["Commercial repairs", "Preventive maintenance", "Fit-out plumbing", "Project coordination"],
    },
  ],
  projectRange: [
    {
      title: "Small fixes",
      description:
        "Taps, toilets, leaks, fixtures and the smaller jobs that still need to be done neatly.",
      examples: ["Leaking fixtures", "Toilet repairs", "Tap replacements"],
    },
    {
      title: "Problem solving",
      description:
        "Jobs where the cause matters, such as repeated blockages, hot water issues or hard-to-find leaks.",
      examples: ["Drain investigation", "Hot water faults", "Practical repair advice"],
    },
    {
      title: "Major projects",
      description:
        "Plumbing for renovations, new builds, commercial spaces and work that needs careful coordination.",
      examples: ["Rough-ins", "Fit-offs", "Commercial maintenance"],
    },
  ],
  reasons: [
    {
      title: "Clear communication",
      description:
        "You are told what is happening, what needs attention and what the next step looks like before work moves ahead.",
    },
    {
      title: "Honest pricing",
      description:
        "The price conversation happens early, with the scope explained in plain language.",
    },
    {
      title: "No shortcuts",
      description:
        "The aim is to fix the cause of the issue, not just make the visible problem disappear for the moment.",
    },
    {
      title: "Long-term solutions",
      description:
        "Advice is based on what will hold up, especially for drains, hot water, renovations and repeat maintenance issues.",
    },
    {
      title: "Residential, commercial and maintenance plumbing",
      description:
        "JK Plumbing Solutions works across homes, businesses, maintenance calls, renovations and new build plumbing.",
    },
    {
      title: "Licensed workmanship",
      description:
        "Work is carried out under Plumbing Licence 477160C, with business details kept visible and easy to verify.",
    },
  ],
  gallerySlots: [
    "Blocked drain work",
    "Hot water systems",
    "Bathroom plumbing",
    "Kitchen fit-offs",
    "Commercial maintenance",
    "New build plumbing",
  ],
} as const;
