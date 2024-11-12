export const routes = {
  home: '/',
  login: '/login',
  signup: '/signup',
  about: '/about',
  profile: '/profile',
};

export const routesConfig = [
  {
    title: 'Home',
    url: routes.home,
    showInMenu: true,
    showInFooter: false,
    isProtected: false,
    openInNewTab: false,
  },
  {
    title: 'Profile',
    url: routes.profile,
    showInMenu: true,
    showInFooter: false,
    isProtected: false,
    openInNewTab: false,
  },
  {
    title: 'About',
    url: routes.about,
    showInMenu: true,
    showInFooter: false,
    isProtected: false,
    openInNewTab: false,
  },
  {
    title: 'LogIn',
    url: routes.login,
    showInMenu: true,
    showInFooter: false,
    isProtected: false,
    openInNewTab: false,
  },
  {
    title: 'SignUp',
    url: routes.signup,
    showInMenu: true,
    showInFooter: false,
    isProtected: false,
    openInNewTab: false,
  },
];
