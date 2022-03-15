/* eslint-disable no-tabs */
/* eslint-disable arrow-body-style */
import decorateContext from './middlewares/decorateContext.js';
import homePage from './pages/homePage.js';
import freshPage from './pages/freshPage.js';
import createPage from './pages/createPage.js';
import registerPage from './pages/registerPage.js';
import loginPage from './pages/loginPage.js';
import detailsPage from './pages/detailsPage.js';
import routes from './routes.js';
import getNextGiphies from './utils/fetch/getNextGiphies.js';

window.addEventListener('scroll', () => {
  const { scrollHeight, scrollTop, clientHeight } = document.documentElement;
  if (scrollTop + clientHeight > scrollHeight - 5) {
    getNextGiphies().then((data) => {
      data.map((giphy) => {
        return $('#page').append(`
					<div class="card m-2" style="width: 40rem;">
    <div class="card-body">
      <h5 class="card-title">${giphy.title}</h5>
    </div>
    <img
      class="card-img-top"
      src=${giphy.images.downsized_large.url}
      alt="Card image cap"
    />
  </div>`);
      });
    });
  }
});

page(decorateContext);
page(routes.home, homePage);
page(routes.fresh, freshPage);
page(routes.create, createPage);
page(routes.register, registerPage);
page(routes.login, loginPage);
page('/details/:id', detailsPage);

page.start();
