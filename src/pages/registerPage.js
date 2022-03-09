import modalTemplate from '../templates/components/modal.js';
import registerUser from '../utils/authentication/register.js';

export default async function registerPage(ctx) {
  ctx.render(modalTemplate('Sign up', registerUser, 'register', true));
}
