import '../utils/authentication/logout.js';
import '../utils/authentication/google-auth.js';
import '../utils/authentication/facebook-auth.js';
import userData from '../utils/data/userData.js';
import { render } from 'https://unpkg.com/lit-element/lit-element.js?module';

const root = document.getElementById('page-content');

export function updateUserNav() {
  const user = userData.getUserData();
  if (user) {
    document.querySelector('.user').style.display = 'inline-block';
    document.querySelector('.guest').style.display = 'none';
    console.log('here');
  } else {
    document.querySelector('.user').style.display = 'none';
    document.querySelector('.guest').style.display = 'inline-block';
  }
}

export default function decorateContext(ctx, next) {
  ctx.render = (content) => render(content, root);
  ctx.updateUserNav = updateUserNav;
  next();
}
