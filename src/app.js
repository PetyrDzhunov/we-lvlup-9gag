import decorateContext, {
  updateUserNav
} from './middlewares/decorateContext.js';
import homePage from './pages/homePage.js';
import freshPage from './pages/freshPage.js';
import createPage from './pages/createPage.js';
import registerPage from './pages/registerPage.js';
import loginPage from './pages/loginPage.js';
import detailsPage from './pages/detailsPage.js';
import routes from './routes.js';
import usersUploadPage from './pages/userUploadsPage.js';
import favoritesPage from './pages/favoritesPage.js';

page(decorateContext);
page(routes.home, homePage);
page(routes.fresh, freshPage);
page(routes.create, createPage);
page(routes.register, registerPage);
page(routes.login, loginPage);
page(routes.uploads, usersUploadPage);
page(routes.favorites, favoritesPage);
page('/details/:id', detailsPage);

updateUserNav();
page.start();
