import detailsTemplate from '../templates/detailsTemplate.js';

export default async function freshPage(ctx) {
  ctx.render(detailsTemplate());
}
