import modalTemplate from '../templates/components/modal.js';
import registerUser from '../utils/authentication/register.js';
import focusButton from '../utils/dom/focusAuthenticateButton.js';

export default async function registerPage(ctx) {
  focusButton();
  ctx.render(modalTemplate('Sign up', registerUser, 'register', true));
}
