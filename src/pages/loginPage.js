import modalTemplate from '../templates/components/modal.js';

export default async function loginPage(ctx) {
  ctx.render(modalTemplate('Log in'));
}
