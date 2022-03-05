import createMemeTemplate from '../templates/createMemeTemplate.js';

export default async function createPage(ctx) {
  ctx.render(createMemeTemplate());
}
