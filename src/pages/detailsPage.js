import detailsTemplate from '../templates/detailsTemplate.js';

export default async function freshPage(ctx) {
  const { id } = ctx;
  console.log(id);
  ctx.render(detailsTemplate());
}
