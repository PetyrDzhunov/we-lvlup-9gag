import { createPage } from './views/createMeme.js';
import decorateContext from './middlewares/decorateContext.js';
import { freshPage } from './views/freshMemes.js';
import homePage from './views/homePage.js';

page(decorateContext);
page('/', homePage);
page('/fresh-memes', freshPage);
page('/create-meme', createPage);

page.start();
