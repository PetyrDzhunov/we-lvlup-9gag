import attachLogout from '../utils/authentication/logout.js';
import { render } from 'https://unpkg.com/lit-element/lit-element.js?module';

const root = document.getElementById('page-content');

export default function decorateContext(ctx, next) {
  ctx.render = (content) => render(content, root);

  attachLogout();

  next();
}
