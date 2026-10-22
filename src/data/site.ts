// All of the site's words live here. Most content edits only touch this file.
// Layout and styling live in src/pages/index.astro and src/components/.

export const site = {
  name: 'DreamLogic',
  url: 'https://dreamlogic.co.nz',
  email: 'hello@dreamlogic.co.nz',
  title: 'DreamLogic: Automation and integration for businesses, wherever they are.',
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
  primaryCta: { label: 'Book an Automation Check', subject: 'Automation Check' },
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

export const work = {
  heading: 'The work nobody should be doing twice',
  intro:
    'Every business has a job someone does by hand because two systems don’t talk. These are the ones we hear about most.',
  columns: { sector: 'Sector', byHand: 'Done by hand today', automated: 'Once it’s automated' },
  rows: [
    {
      sector: 'Horticulture',
      byHand: 'Harvest and pack-out numbers retyped from packhouse reports into grower statements.',
      automated: 'Reports pulled in as they land. Statements built, checked and sent on schedule.',
    },
    {
      sector: 'Agriculture',
      byHand: 'Supplier invoices and compliance records keyed into farm software one at a time.',
      automated: 'Invoices read, coded and posted. Records filed where the auditor expects them.',
    },
    {
      sector: 'Insurance',
      byHand: 'Broker submissions rekeyed from emails and PDFs into the underwriting system.',
      automated: 'Submissions read and checked. The risk lands in your system ready to quote.',
    },
    {
      sector: 'Logistics',
      byHand: 'Proof-of-delivery photos and carrier invoices matched by hand at month end.',
      automated: 'Every delivery matched as it happens. Only the mismatches go to a person.',
    },
    {
      sector: 'Councils and utilities',
      byHand: 'Requests arriving by email, phone and web form, triaged into queues by a person.',
      automated: 'Requests classified and routed with a summary attached, before anyone opens them.',
    },
  ],
};

export const engage = {
  heading: 'Three steps, each with a fixed price',
  intro: 'Start small, prove the saving, then let us run it. Prices are in NZD and exclude GST.',
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
      note: 'Twelve-month term, then month to month.',
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
      body: 'We build on trusted global platforms where they’re the right tool. Before anything goes live, we map out what data goes where, and keep sensitive data in New Zealand or on your own hardware where it matters.',
    },
    {
      title: 'Works with the systems you have',
      body: 'We use proper integrations where they exist. Where they don’t, we drive the screen the way your team does.',
    },
    {
      title: 'No lock-in',
      body: 'Built on open tools and models we can swap out. If you want to take it in-house, you get everything.',
    },
  ],
};

// For procurement and IT teams: what runs where, and what they get in writing.
export const data = {
  heading: 'Data and security',
  intro:
    'Security and AI aren’t a trade-off. We design every automation with both in mind from the first conversation, using proven practices, so you get the benefit of AI and stay in control of your data.',
  stackHeading: 'How we keep it safe',
  stack: [
    {
      name: 'Reviewed changes',
      role: 'Code and change history',
      body: 'Every change to your automation is reviewed and recorded. If you take it in-house, the full history comes with it.',
    },
    {
      name: 'Secure hosting',
      role: 'Where it runs',
      body: 'Workflows and web pages run on established cloud infrastructure, behind its security and access controls.',
    },
    {
      name: 'A secrets vault',
      role: 'Passwords and keys',
      body: 'Logins and API keys live in a dedicated vault. Never in code, spreadsheets or email.',
    },
    {
      name: 'AI models',
      role: 'Chosen per job',
      body: 'We tell you which provider sees which data. Where it matters, sensitive data stays in New Zealand or on your own hardware.',
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
      body: 'What data the automation touches, which systems it passes through, and which country each one is in. Agreed before anything goes live.',
    },
  ],
};

export const about = {
  heading: 'Who we are',
  paragraphs: [
    'DreamLogic is two senior solution architects. Between us we’ve designed and run the systems behind councils, utilities and health providers across New Zealand and Australia, and for businesses with branches around the world: the kind of infrastructure that isn’t allowed to fall over.',
    'We started DreamLogic to help businesses adopt AI properly: in the right places, at a sensible cost, and built with that same discipline.',
    'We want to be the team businesses turn to when they’re ready to put AI to work, especially those that don’t have an IT department to spare.',
    'Where you’re based shouldn’t decide the quality of help you get. Wherever you are, you should have access to the best in the business.',
  ],
};

export const contact = {
  heading: 'What’s the job you’d automate first?',
  body: 'Tell us about it in a couple of lines. We’ll come back within one business day with whether it’s a fit and what it would cost to find out properly.',
  cta: { label: 'Book an Automation Check', subject: 'Automation Check' },
};

export const footer = {
  tagline: 'Automation and integration, wherever your business is.',
};

export const mailto = (subject?: string) =>
  `mailto:${site.email}${subject ? `?subject=${encodeURIComponent(subject)}` : ''}`;
