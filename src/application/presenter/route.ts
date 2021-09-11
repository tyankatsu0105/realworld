/* eslint-disable */
export const URI = {
  home: '/',
  login: '/login',
  register: '/register',

  createArticle: '/editor',
  editArticle: '/editor/:articleSlug',

  viewArticle: '/article/:articleSlug',

  profile: '/profile',
  profileFavorites: '/editor/favorites',
} as const;
/* eslint-enable */
