const PORTFOLIO_WEBSITE = 'https://www.hemanthbabu648.com';

const PORTFOLIO: {
  url: string;
  name: string;
} = {
  url: PORTFOLIO_WEBSITE,
  name: 'Hemanth Babu S',
};

const URLS = {
  BRAND: {
    url: `${PORTFOLIO_WEBSITE}/logo.svg`,
    name: 'Finomic',
  },
  HOME: [
    {
      name: 'Home',
      path: '/',
    },
    {
      name: 'Features',
      path: '/features',
    },
    {
      name: 'About',
      path: `${PORTFOLIO_WEBSITE}/about-me`,
    },
    {
      name: 'Contact',
      path: PORTFOLIO_WEBSITE,
    },
  ],
  PORTFOLIO: {
    url: PORTFOLIO.url,
    name: PORTFOLIO.name,
  },
  AUTH: {
    SIGN_IN: '/auth/sign-in',
    SIGN_UP: '/auth/sign-up',
  },
};

export default URLS;
