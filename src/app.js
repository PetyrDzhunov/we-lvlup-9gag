import decorateContext from './middlewares/decorateContext.js';
import homePage from './pages/homePage.js';
import freshPage from './pages/freshPage.js';
import createPage from './pages/createPage.js';
import registerPage from './pages/registerPage.js';
import loginPage from './pages/loginPage.js';
import detailsPage from './pages/detailsPage.js';
import routes from './routes.js';
import './utils/fetch/infiniteScroll.js';

page(decorateContext);
page(routes.home, homePage);
page(routes.fresh, freshPage);
page(routes.create, createPage);
page(routes.register, registerPage);
page(routes.login, loginPage);
page('/details/:id', detailsPage);

page.start();
