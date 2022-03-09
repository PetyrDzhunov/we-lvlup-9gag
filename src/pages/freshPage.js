import freshMemeTemplate from "../templates/freshTemplate.js";

export default async function freshPage(ctx) {
  ctx.render(freshMemeTemplate());
}
