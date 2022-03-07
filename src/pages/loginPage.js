import loginTemplate from '../templates/loginTemplate.js';

export default async function loginPage(ctx) {
  ctx.render(loginTemplate());
}
