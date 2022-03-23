import '../utils/authentication/logout.js';
import '../utils/authentication/google-auth.js';
import '../utils/authentication/facebook-auth.js';
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

// check if window has the scroll listener attached - true/false
// going to pages that either require or not

const pathsThatRequireInfiniteScroll = ['/', '/fresh-memes'];

export default function decorateContext(ctx, next) {
  if (pathsThatRequireInfiniteScroll.includes(ctx.path)) {
    attachInfiniteScrollHandler();
    console.log('here attaching');
  } else {
    detachInfiniteScrollHandler();
    console.log('here detaching');
  }
  ctx.render = (content) => render(content, root);
  ctx.updateUserNav = updateUserNav;
  next();
}
