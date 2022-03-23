import modalTemplate from '../templates/components/modal.js';
import loginUser from '../utils/authentication/login.js';

export default async function loginPage(ctx) {
  ctx.render(modalTemplate('Log in', loginUser, 'login'));
}
