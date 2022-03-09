import homeTemplate from '../templates/homeTemplate.js';

export default async function homePage(ctx) {
  ctx.render(homeTemplate());
}
