const routes = {
  home: '/',
  fresh: '/fresh-memes',
  create: '/create-meme',
  login: '/login',
  register: '/register',
  details: (id) => `/details/${id}`,
};

export default routes;
