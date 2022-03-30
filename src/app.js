import routes from './routes.js';
import decorateContext, {
  updateUserNav,
} from './middlewares/decorateContext.js';
import homePage from './pages/homePage.js';
import freshPage from './pages/freshPage.js';
import loginPage from './pages/loginPage.js';
import createPage from './pages/createPage.js';
import detailsPage from './pages/detailsPage.js';
import profilePage from './pages/profilePage.js';
import registerPage from './pages/registerPage.js';
import favoritesPage from './pages/favoritesPage.js';
import usersUploadPage from './pages/userUploadsPage.js';

page(decorateContext);
page(routes.home, homePage);
page(routes.fresh, freshPage);
page(routes.create, createPage);
page(routes.register, registerPage);
page(routes.login, loginPage);
page(routes.uploads, usersUploadPage);
page(routes.favorites, favoritesPage);
page(routes.profile, profilePage);
page(routes.details, detailsPage);

updateUserNav();
page.start();
