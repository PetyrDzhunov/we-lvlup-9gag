const routes = {
  home: '/',
  fresh: '/fresh-memes',
  create: '/create-meme',
  login: '/login',
  register: '/register',
  uploads: '/uploads',
  details: (id) => `/details/${id}`,
};

export default routes;
