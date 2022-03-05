import createPage from './pages/createMeme.js';
import decorateContext from './middlewares/decorateContext.js';
import freshPage from './pages/freshMemes.js';
import homePage from './pages/homePage.js';

page(decorateContext);
page('/', homePage);
page('/fresh-memes', freshPage);
page('/create-meme', createPage);

page.start();
