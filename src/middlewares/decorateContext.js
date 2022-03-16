import '../utils/authentication/logout.js';
import '../utils/authentication/google-auth.js';
import '../utils/authentication/facebook-auth.js';
import userData from '../utils/data/userData.js';
import { render } from 'https://unpkg.com/lit-element/lit-element.js?module';

const root = document.getElementById('page-content');

export function updateUserNav() {
  const user = userData.getUserData();
  if (user) {
    $('.user').show();
    $('.guest').hide();
  } else {
    $('.user').hide();
    $('.guest').show();
  }
}

export default function decorateContext(ctx, next) {
  ctx.render = (content) => render(content, root);
  ctx.updateUserNav = updateUserNav;
  next();
}
