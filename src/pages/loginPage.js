import modalTemplate from "../templates/components/modal.js";
// import loginTemplate from '../templates/loginTemplate.js';

export default async function loginPage(ctx) {
  ctx.render(modalTemplate("Sign up"));
  // ctx.render(loginTemplate());
}
