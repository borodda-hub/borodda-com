export const SITE = {
  name: 'Bo Rodda',
  fullName: 'Warner B. "Bo" Rodda',
  title: 'Assistant Professor of Experiential Media and Data Communication',
  institution: 'Illinois Institute of Technology',
  description:
    'Bo Rodda — Assistant Professor of Experiential Media and Data Communication, Illinois Institute of Technology.',
} as const;

export const EMAILS = {
  academic: 'wrodda@illinoistech.edu',
  partnership: 'wrodda@illinoistech.edu',
  press: 'wrodda@illinoistech.edu',
} as const;

export const PROFILES = {
  orcid: 'https://orcid.org/0009-0006-6488-4265',
  linkedin: 'https://www.linkedin.com/in/bo-rodda-3249a614/',
  // TODO: replace with canonical author profile URL once Bo locates it
  scholar:
    'https://scholar.google.com/citations?view_op=new_articles&hl=en&imq=Bo+Rodda',
} as const;

export const ROUTES = [
  { href: '/research/', label: 'Research' },
  { href: '/projects/', label: 'Projects' },
  { href: '/teaching/', label: 'Teaching' },
  { href: '/writing/', label: 'Writing' },
  { href: '/partnerships/', label: 'Partnerships' },
  { href: '/cv/', label: 'CV' },
  { href: '/contact/', label: 'Contact' },
] as const;
