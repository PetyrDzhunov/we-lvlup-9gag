import createMemeTemplate from "../templates/createTemplate.js";

export default async function createPage(ctx) {
  ctx.render(createMemeTemplate());
}
