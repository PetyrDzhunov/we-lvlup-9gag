/* eslint-disable import/extensions */
/* eslint-disable prefer-arrow-callback */
/* eslint-disable func-names */
/* eslint-disable no-undef */

// eslint-disable-next-line import/extensions
import { page } from './lib.js';
import { homePage } from './views/home.js';
import { memesPage } from './views/memes.js';
import decorateContext from './middlewares/decorateContext.js';

page(decorateContext);
page('/', homePage);
page('/memes', memesPage);

page.start();
