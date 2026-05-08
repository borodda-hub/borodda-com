import { mkdirSync, writeFileSync, existsSync } from 'node:fs';

const uiPage = `---
import KeystaticPage from '../../components/KeystaticPage';

export const prerender = false;
---

<KeystaticPage client:only="react" />
`;

const apiRoute = `import { makeHandler } from '@keystatic/astro/api';
import config from '../../../../keystatic.config';

export const prerender = false;
export const ALL = makeHandler({ config });
`;

mkdirSync('src/pages/keystatic', { recursive: true });
mkdirSync('src/pages/api/keystatic', { recursive: true });

writeFileSync('src/pages/keystatic/[...params].astro', uiPage);
writeFileSync('src/pages/api/keystatic/[...params].ts', apiRoute);

console.log('Keystatic admin routes created. Run `npm run dev` and open http://localhost:4321/keystatic');
