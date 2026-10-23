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
    'Built for businesses with five or more people, where the same repetitive job is eating hours every week. These are the jobs we see most.',
  columns: { sector: 'The job', byHand: 'Done by hand today', automated: 'Once it’s automated' },
  rows: [
    {
      sector: 'Supplier invoices',
      byHand: 'Invoices opened from email, retyped into the accounts and checked against orders one at a time.',
      automated: 'Invoices read, coded and posted to your accounts. Only the odd ones reach a person.',
    },
    {
      sector: 'Customer enquiries',
      byHand: 'Emails and web forms read, sorted and forwarded to the right person by hand.',
      automated: 'Enquiries sorted, summarised and routed before anyone opens them.',
    },
    {
      sector: 'Quotes and job sheets',
      byHand: 'The same customer and job details typed into the quote, the schedule and the invoice.',
      automated: 'Details captured once, then flowing through to scheduling and invoicing.',
    },
    {
      sector: 'Orders and stock',
      byHand: 'Online orders rekeyed into stock and accounts at the end of the day.',
      automated: 'Every order updates stock and accounts as it comes in. No retyping.',
    },
    {
      sector: 'Month-end matching',
      byHand: 'Payments, deliveries and invoices matched by hand in a rush at month end.',
      automated: 'Everything matched as it happens. Only the mismatches go to a person.',
    },
  ],
};

// Real automations DreamLogic runs on its own work. Keep these true and measured.
export const ours = {
  heading: 'What we run ourselves',
  intro:
    'We don’t ask you to trust anything we don’t use every day. In each of these, AI applies clear rules and makes the call, and a person only steps in when something looks off.',
  items: [
    {
      title: 'Timesheets that write themselves',
      body: 'Every week, AI pulls together calendars, email, chat, calls and vehicle mileage, drafts the timesheet notes and reconciles the lot. It saves four hours per person, every week. In a team of 40, that’s four full-time people’s worth of time back.',
    },
    {
      title: 'Your bank feed, watched daily',
      body: 'Every transaction is checked as it lands. Payments are matched to invoices, late payers are flagged or chased, unusual spending is caught, and a weekly cash-flow summary arrives with any red flags. We run this on our own finances every day.',
    },
    {
      title: 'Deciding when to run equipment',
      body: 'Local weather stations, forecasts and history are checked against proven frost, dew and growth measures, and AI decides whether a run is worth it. Fewer wasted runs, less wear and less power.',
    },
  ],
};

export const engage = {
  heading: 'Three steps, each with a fixed price',
  intro:
    'Start small, prove the saving, then let us run it. Four hours a week each, across five people, is around 1,000 hours a year. Prices are in NZD and exclude GST.',
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
      note: 'Twelve-month term, renewing annually.',
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
      body: 'We use proper integrations where they exist. Where they don’t, our automation can work through the software’s screens just like your team does, so older systems can join in too.',
    },
    {
      title: 'You own what we build',
      body: 'We use open tools and models we can swap out, and every change is recorded. If you’d rather run it yourselves at the end of a term, we’ll hand it over properly: the code, the history, the documentation, and a walkthrough with your team.',
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
      name: 'Encryption',
      role: 'In transit and at rest',
      body: 'Data is encrypted as it moves between systems and where it’s stored, using industry-standard methods, wherever the systems involved support it.',
    },
    {
      name: 'Secrets vaults',
      role: 'Passwords and keys',
      body: 'Logins and API keys live in dedicated vaults. Never in code, spreadsheets or email.',
    },
    {
      name: 'Least-privilege access',
      role: 'Who can see what',
      body: 'Every system, and every AI model, gets access to only what its job needs. Nothing more.',
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
    'DreamLogic is New Zealand owned and operated, built from the ground up by two senior solution architects. We started it because we think businesses deserve better help with AI than they’re getting: used in the right places, at a sensible cost, and built properly.',
    'Between us we’ve spent our careers designing and running systems behind essential services, the kind that aren’t allowed to fall over. We bring that same care to every automation, whatever the size of the business.',
    'We run DreamLogic on the same AI and automation we build for our customers. We believe AI succeeds when it’s implemented properly, and we believe it enough to be an AI-first business ourselves. If it isn’t good enough for us, it isn’t good enough for you.',
    'We want to be the team businesses turn to when they’re ready to put AI to work. If you have an IT team, we work alongside them and add to what they already know. If you don’t, we fill that gap. Either way, you’re talking to the people who build it.',
    'We’re proud to be a Kiwi business, but we don’t think where you’re based should decide the quality of help you get. Whether you’re down the road or on the other side of the world, you should have access to the best in the business.',
  ],
};

export const contact = {
  heading: 'What’s the job you’d automate first?',
  body: 'Tell us about it in a couple of lines. We’ll come back within one business day with whether it’s a fit and what it would cost to find out properly.',
  cta: { label: 'Book an Automation Check', subject: 'Automation Check' },
};

export const footer = {
  tagline: 'New Zealand owned and operated. Working with businesses wherever they are.',
};

export const mailto = (subject?: string) =>
  `mailto:${site.email}${subject ? `?subject=${encodeURIComponent(subject)}` : ''}`;
