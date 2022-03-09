import registerTemplate from '../templates/registerTemplate.js';

export default async function loginPage(ctx) {
  ctx.render(registerTemplate());
}
