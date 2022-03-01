/* eslint-disable import/extensions */
/* eslint-disable prefer-arrow-callback */
/* eslint-disable func-names */
/* eslint-disable no-undef */

// eslint-disable-next-line import/extensions
import { page } from './lib.js';
import { homePage } from './views/homePage.js';
import { createPage } from './views/createMeme.js';
import { freshPage } from './views/freshMemes.js';
import decorateContext from './middlewares/decorateContext.js';

page(decorateContext);
page('/', homePage);
page('/fresh-memes', freshPage);
page('/create-meme', createPage);

page.start();
