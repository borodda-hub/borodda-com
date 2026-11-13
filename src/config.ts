export const SITE = {
  name: 'Bo Rodda',
  fullName: 'Warner B. "Bo" Rodda',
  title: 'Assistant Professor of Experiential Media and Data Communication',
  department: 'School of Design + Society',
  college: 'College of Design Futures',
  institution: 'Illinois Institute of Technology',
  location: 'Chicago, Illinois',
  studio: 'ChiLab Design Studio',
  studioRole: 'Co-founder, ChiLab Design Studio',
  description:
    'Bo Rodda is Assistant Professor of Experiential Media and Data Communication in the School of Design + Society at Illinois Institute of Technology, and co-founder of ChiLab Design Studio.',
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

// Navigation order follows the approved mockup. /projects/ is shown as "Work".
export const ROUTES = [
  { href: '/projects/', label: 'Work' },
  { href: '/research/', label: 'Research' },
  { href: '/practice/', label: 'Practice' },
  { href: '/writing/', label: 'Writing' },
  { href: '/teaching/', label: 'Teaching' },
  { href: '/cv/', label: 'CV' },
  { href: '/contact/', label: 'Contact' },
] as const;

// Work-index categories, one per project (CLAUDE.md section 6).
export const CATEGORIES = [
  'Research',
  'Platforms',
  'Public Art and Fabrication',
  'Teaching',
  'Writing',
] as const;
