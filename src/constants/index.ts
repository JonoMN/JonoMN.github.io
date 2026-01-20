import { Project } from '../types';
import bnavMockup from '../img/BNAV MockUp.png';
import financeTracker from '../img/FinanceTracker.png';
import reactHooks from '../img/ReactHooks.png';

export const FEATURED_PROJECTS: Project[] = [
  {
    name: 'Peak Performance App',
    link: '/projects/peak-performance',
    image: bnavMockup,
    topics: 'Project',
  },
  {
    name: 'Live Finance Tracker',
    link: '/projects/finance-tracker',
    image: financeTracker,
    topics: 'Project',
  },
  {
    name: 'React Hooks',
    link: '/blog/react-hooks',
    image: reactHooks,
    topics: 'Blog',
  },
];

export const NAVIGATION_LINKS = [
  { label: '/ Home', path: '/' },
  { label: '/ Projects', path: '/projects' },
  { label: '/ Blog', path: '/blog' },
] as const;

export const SOCIAL_LINKS = {
  linkedin: 'https://www.linkedin.com/in/jonathan-m-nelson/',
  github: 'https://github.com/JonoMN/',
} as const;

export const THEME_CONFIG = {
  palette: {
    mode: 'dark' as const,
    background: {
      default: '#000626',
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
    allVariants: {
      color: '#ffffff',
    },
    h1: { fontWeight: 500 },
    h2: { fontWeight: 500 },
    h3: { fontWeight: 500 },
    h4: { fontWeight: 500 },
    h5: { fontWeight: 500 },
    h6: { fontWeight: 500 },
  },
} as const;

export const PARTICLES_CONFIG = {
  background: {
    color: {
      value: '#000626',
    },
  },
  fpsLimit: 120,
  interactivity: {
    events: {
      onClick: {
        enable: false,
        mode: 'push',
      },
      onHover: {
        enable: true,
        mode: 'repulse',
      },
      resize: true,
    },
    modes: {
      push: {
        quantity: 4,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
    },
  },
  particles: {
    color: {
      value: '#808080',
    },
    links: {
      color: '#ffffff',
      distance: 150,
      enable: true,
      opacity: 0.2,
      width: 1,
    },
    move: {
      direction: 'none',
      enable: true,
      outModes: {
        default: 'bounce',
      },
      random: false,
      speed: 2,
      straight: false,
    },
    number: {
      density: {
        enable: true,
        area: 800,
      },
      value: 80,
    },
    opacity: {
      value: 0.5,
    },
    shape: {
      type: 'circle',
    },
    size: {
      value: { min: 1, max: 5 },
    },
  },
  detectRetina: true,
} as const;
