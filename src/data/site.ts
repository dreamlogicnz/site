// All of the site's words live here. Most content edits only touch this file.
// Layout and styling live in src/pages/index.astro and src/components/.

export const site = {
  name: 'DreamLogic',
  url: 'https://dreamlogic.co.nz',
  email: 'hello@dreamlogic.co.nz',
  title: 'DreamLogic: Automation and integration. New Zealand owned and operated.',
  description:
    'DreamLogic automates the repetitive work between your systems. Fixed price, live in weeks, and looked after by us once it is running. And you’ll know exactly what data goes where before anything goes live.',
  // Staging: keep search engines out until launch. Flip to true when the domain goes live.
  indexable: false,
};

// A one-line message across the top of every page. Set to null to remove it.
export const banner: string | null = null;

export const nav = [
  { href: '#work', label: 'What we automate' },
  { href: '#engage', label: 'Pricing' },
  { href: '#data', label: 'Data and security' },
  { href: '#contact', label: 'Contact' },
];

export const hero = {
  heading: 'Stop paying people to copy and paste.',
  lead: 'We automate the repetitive work between your systems. Fixed price, live in weeks, and looked after by us once it’s running.',
  primaryCta: { label: 'Book a free first call', subject: 'First call' },
  secondaryCta: { label: 'See how it works', href: '#engage' },
};

// The animated diagram beside the hero heading.
export const flow = {
  manualSteps: [
    'Email arrives',
    'Retyped into a spreadsheet',
    'Checked against the price list',
    'Keyed into the accounts',
    'Chase the ones that don’t match',
  ],
  doneLabel: 'Done',
  doneLines: ['Runs on its own.', 'Only the exceptions reach a person.'],
};

// Why AI needs DreamLogic: the data problem. Sits between the hero and the sectors.
export const why = {
  heading: 'AI is only as good as the data you give it',
  paragraphs: [
    'AI is remarkably good at spotting patterns, reasoning through messy information and making judgement calls. But in most businesses, the data it needs is scattered across inboxes, spreadsheets, job systems and accounts, and nothing brings it together.',
    'That’s the gap we fill. We connect your systems, bring the data together cleanly and put AI to work on it, so it can analyse, judge and act on your real business, not just answer questions in a chat window.',
  ],
  // Diagram under the paragraphs. Four sources and three outcomes is the designed fit.
  diagram: {
    sourcesLabel: 'Wherever your data lives',
    sources: ['Databases', 'Software', 'Websites', 'External sources'],
    hub: { label: 'DreamLogic', body: 'Connected, cleaned and combined' },
    ai: 'AI',
    outputs: [
      { title: 'Analyse', body: 'Spots patterns' },
      { title: 'Judge', body: 'Makes the call' },
      { title: 'Act', body: 'Gets it done' },
    ],
  },
};

export const work = {
  heading: 'The work nobody should be doing twice',
  intro:
    'Built for organisations with five or more people, where the same repetitive job is eating hours every week. These are the ones we hear about most.',
  columns: { sector: 'Sector', byHand: 'Done by hand today', automated: 'Once it’s automated' },
  rows: [
    {
      sector: 'Trades and field services',
      byHand: 'Technicians’ hours, job notes and travel retyped from job sheets into the job system, timesheets and invoices.',
      automated: 'Jobs, hours and travel reconciled automatically. Timesheets and invoices drafted and ready to send.',
    },
    {
      sector: 'Primary industries',
      byHand: 'Harvest, pack-out and compliance records retyped from reports into grower statements, farm software and audit files.',
      automated: 'Reports pulled in as they land. Statements built and sent, and records filed where the auditor expects them.',
    },
    {
      sector: 'Manufacturing and distribution',
      byHand: 'Purchase orders, stock levels and quality records keyed between supplier emails, the production floor and the accounts.',
      automated: 'Orders, stock and quality records flowing between systems as they change. Shortfalls flagged before they hold up a job.',
    },
    {
      sector: 'Finance and insurance',
      byHand: 'Premiums, repayments and broker remittances allocated line by line, with unmatched cash chased at month end.',
      automated: 'Every payment allocated as it lands. Only the mismatches reach a person.',
    },
    {
      sector: 'Professional services',
      byHand: 'Billable time pieced together from calendars and email, and client documents chased, sorted and filed by hand.',
      automated: 'Time drafted from the work as it happens. Client documents collected, checked and filed, ready for review.',
    },
    {
      sector: 'Logistics',
      byHand: 'Proof-of-delivery photos and carrier invoices matched by hand at month end.',
      automated: 'Every delivery matched as it happens. Only the mismatches go to a person.',
    },
    {
      sector: 'Councils',
      byHand: 'Rates queries, consent questions and service requests arriving by email, phone and web form, triaged into queues by a person.',
      automated: 'Requests classified, checked against the property record and routed with a summary, before anyone opens them.',
    },
    {
      sector: 'Utilities',
      byHand: 'Alarms, logs and site reports reviewed after the fact, and resilience reviews pieced together from scattered data.',
      automated: 'AI watches operational data read-only, flags anomalies and drafts review findings. It never touches control systems.',
    },
  ],
};

export const engage = {
  heading: 'Three steps, each with a fixed price',
  intro:
    'Start small, prove the saving, then let us run it. Save four hours a week for each of five people, and that’s around 1,000 hours a year. Prices are in NZD and exclude GST.',
  steps: [
    {
      name: 'Automation Check',
      duration: 'Two weeks',
      price: '$4–6k',
      body: 'We map one painful process, measure what it costs you, and give you a fixed quote to automate it.',
      note: 'Credited in full against the Sprint that follows.',
    },
    {
      name: 'Automation Sprint',
      duration: 'Four to six weeks',
      price: '$15–35k fixed',
      body: 'We build that one workflow, test it alongside your team, and put it live.',
      note: 'Half on signing, half at go-live.',
    },
    {
      name: 'Run Contract',
      duration: 'Monthly',
      price: 'From $800 a month',
      body: 'We monitor it, fix it, make changes as your business moves, and report the hours it saved.',
      note: 'Twelve-month term, renewing annually. Plus running costs such as AI usage and hosting, passed on at cost and capped by spending limits you agree. Any licences are set out in your statement of work.',
    },
  ],
  aside:
    'Already know exactly what you want automated? Skip the Check. One call, and a fixed Sprint quote the same day.',
};

export const principles = {
  heading: 'How we build',
  items: [
    {
      title: 'Fixed price, agreed up front',
      body: 'You know the cost before we start. If the build takes longer than we estimated, that’s on us.',
    },
    {
      title: 'You know where your data goes',
      body: 'Before anything goes live, we map what data goes where. Sensitive data stays where you choose, whether that’s your own country or your own hardware.',
    },
    {
      title: 'Works with the systems you have',
      body: 'We use proper integrations where they exist. Where they don’t, our automation works through the screens like your team does, so older systems join in too.',
    },
    {
      title: 'AI on your own hardware',
      body: 'Where data can’t leave the building, we run AI models on your own equipment and look after them like everything else we build.',
    },
  ],
};

// For procurement and IT teams: what runs where, and what they get in writing.
export const data = {
  heading: 'Data and security',
  intro:
    'Security and AI aren’t a trade-off. We design for both from the first conversation, so you get the benefit of AI and stay in control of your data.',
  stackHeading: 'How we keep it safe',
  stack: [
    {
      name: 'Reviewed changes',
      role: 'Code and change history',
      body: 'Every change is reviewed and recorded, so there’s always a full history of what we’ve built for you. Your data is always yours.',
    },
    {
      name: 'Secure hosting',
      role: 'Where it runs',
      body: 'Runs on established cloud infrastructure, behind its security and access controls.',
    },
    {
      name: 'Encryption',
      role: 'In transit and at rest',
      body: 'Encrypted in transit and at rest, wherever the systems involved support it.',
    },
    {
      name: 'Secrets vaults',
      role: 'Passwords and keys',
      body: 'Logins and API keys live in dedicated vaults. Never in code, spreadsheets or email.',
    },
    {
      name: 'Least-privilege access',
      role: 'Who can see what',
      body: 'Every system and AI model sees only what its job needs.',
    },
    {
      name: 'AI models',
      role: 'Chosen per job',
      body: 'You know which provider sees which data and which country it’s in, and you choose the trade-off between cost, capability and where it runs.',
    },
  ],
  writingHeading: 'What you get in writing',
  writing: [
    {
      title: 'A statement of work',
      body: 'Scope, price, timeline and what “done” means, signed before we start.',
    },
    {
      title: 'A data map',
      body: 'What data is touched, where it flows and which country it’s in. Agreed before go-live.',
    },
  ],
};

export const about = {
  heading: 'Who we are',
  paragraphs: [
    'DreamLogic is New Zealand owned and operated, built from the ground up by two senior solution architects. We started it because we think businesses deserve better help with AI than they’re getting: used in the right places, at a sensible cost, and built properly.',
    'Between us we’ve spent our careers designing and running systems behind essential services, the kind that aren’t allowed to fall over. We bring that same care to every automation, whatever the size of the business.',
    'We run DreamLogic on the same AI and automation we build for our customers, from timesheets to finance reporting. It saves each of us hours every week. If it isn’t good enough for us, it isn’t good enough for you.',
    'We want to be the team businesses turn to when they’re ready to put AI to work. If you have an IT team, we work alongside them and add to what they already know. If you don’t, we fill that gap. Either way, you’re talking to the people who build it.',
    'We’re proud to be a Kiwi business, but we don’t think where you’re based should decide the quality of help you get. Whether you’re down the road or on the other side of the world, you should have access to the best in the business.',
  ],
};

export const contact = {
  heading: 'What’s the job you’d automate first?',
  body: 'Tell us about it in a couple of lines. There’s no cost and no commitment until you agree to a fixed price.',
  steps: [
    { title: 'You tell us the job', body: 'A few lines by email about your business and the job: what it is, who does it and which systems it touches.' },
    { title: 'A free first call', body: 'We come back within one business day to set up a short call, and tell you honestly whether it’s a fit.' },
    { title: 'A fixed price, if it is', body: 'You get a fixed quote for an Automation Check, or for the Sprint straight away if the job is already clear.' },
  ],
  cta: { label: 'Book a free first call', subject: 'First call' },
  emailBody: 'Business name:\n\nIndustry:\n\nThe job I’d automate first:\n\nRoughly how many people do it:\n\nThe systems involved:\n\nAnything else you’d like help with:\n',
};

export const footer = {
  tagline: 'New Zealand owned and operated. Working with businesses wherever they are.',
};

export const mailto = (subject?: string, body?: string) => {
  const params = [
    subject ? `subject=${encodeURIComponent(subject)}` : '',
    body ? `body=${encodeURIComponent(body)}` : '',
  ].filter(Boolean);
  return `mailto:${site.email}${params.length ? `?${params.join('&')}` : ''}`;
};
