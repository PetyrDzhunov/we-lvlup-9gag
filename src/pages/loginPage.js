import modalTemplate from '../templates/components/modal.js';
import loginUser from '../utils/authentication/login.js';
import focusButton from '../utils/dom/focusAuthenticateButton.js';

export default async function loginPage(ctx) {
  focusButton();
  ctx.render(modalTemplate('Log in', loginUser, 'login'));
}
