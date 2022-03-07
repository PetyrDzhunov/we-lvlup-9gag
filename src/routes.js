const routes = {
  home: '/',
  fresh: '/fresh-memes',
  create: '/create-meme',
  login: '/register',
  register: '/login',
  details: (id) => `/details/${id}`,
};

export default routes;
