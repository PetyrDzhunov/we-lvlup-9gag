import { render } from 'https://unpkg.com/lit-element/lit-element.js?module';
import logout from '../utils/authentication/logout.js';
import googleAuth from '../utils/authentication/google-auth.js';
import userData from '../utils/data/userData.js';

const root = document.getElementById('page-content');



export default function decorateContext(ctx, next) {
  ctx.render = (content) => render(content, root);
  next();
}
