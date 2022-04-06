import userData from '../utils/data/userData.js';
import getCategories from '../utils/fetch/getDrawerCategories.js';
import {
  attachInfiniteScrollHandler,
  detachInfiniteScrollHandler,
} from '../utils/fetch/infiniteScroll.js';
import { render } from 'https://unpkg.com/lit-element/lit-element.js?module';

const root = document.getElementById('page-content');

async function populateDrawerWithCategories() {
  const categories = await getCategories();
  $.each(categories, (index, category) => {
    let { name } = category;
    name = name.charAt(0).toUpperCase() + name.slice(1);
    $('#drawer-list').append(`
<li class="nav-item">
<img class="category-image" src=${category.gif.images.fixed_width_small_still.url}>
<a class="navbar-link" href="javascript:void(0)">${name}</a>
</li>
`);
  });
}

populateDrawerWithCategories();

export function updateUserNav() {
  const user = userData.getUserData();
  if (user) {
    $('.user').show();
    $('.guest').hide();
    $('.drawer').css('marginTop', '20px');
  } else {
    $('.user').hide();
    $('.guest').show();
    $('drawer').css('marginTop', '230px');
  }
}

async function onLogout() {
  userData.clearUserData();
  await auth.signOut();
  updateUserNav();
  page.redirect('/');
}

document.querySelector('.logout-btn').addEventListener('click', onLogout);
document
  .querySelector('.logout-btn-mobile')
  .addEventListener('click', onLogout);

const pathsThatRequireInfiniteScroll = ['/', '/fresh-memes'];

const switchThemes = () => {
  const body = document.querySelector('body');
  if (localStorage.getItem('theme') === 'light') {
    body.classList.add('dark-theme');
    body.classList.remove('light-theme');
    localStorage.setItem('theme', 'dark');
  } else {
    body.classList.remove('dark-theme');
    body.classList.add('light-theme');
    localStorage.setItem('theme', 'light');
  }
};

let initialRender = true;

export default function decorateContext(ctx, next) {
  const themeButton = document.getElementById('theme-btn');

  if (initialRender) {
    initialRender = false;
    if (localStorage.getItem('theme') === 'dark') {
      const body = document.querySelector('body');
      body.classList.add('dark-theme');
      body.classList.remove('light-theme');
      localStorage.setItem('theme', 'dark');
    } else {
      localStorage.setItem('theme', 'light');
    }
    themeButton.addEventListener('click', switchThemes);
  }

  if (pathsThatRequireInfiniteScroll.includes(ctx.path)) {
    attachInfiniteScrollHandler();
  } else {
    detachInfiniteScrollHandler();
  }
  ctx.render = (content) => render(content, root);
  ctx.updateUserNav = updateUserNav;
  next();
}
