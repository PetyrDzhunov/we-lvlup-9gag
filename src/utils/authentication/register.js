/* eslint-disable no-alert */
import routes from '../../routes.js';
import userData from '../data/userData.js';
import { updateUserNav } from '../../middlewares/decorateContext.js';

async function registerUser(e) {
  e.preventDefault();
  const formData = new FormData(e.target);
  const fullName = formData.get('full-name').trim();
  const emailInput = formData.get('email').trim();
  const passwordInput = formData.get('password').trim();

  if (emailInput === '' || passwordInput === '') {
    alert('Please fill all the fields!');
  }

  try {
    const userCredential = await auth.createUserWithEmailAndPassword(
      emailInput,
      passwordInput,
    );
    const { email, uid } = userCredential.user;
    const firstName = fullName.split(' ')[0];
    userData.setUserData({ email, uid });
    $('#login-btn').text(`Hello, ${firstName}`);
    $('.modal-backdrop').hide();
    updateUserNav();
    page.redirect(routes.fresh);
  } catch (err) {
    page.redirect(routes.register);
    alert(err.message);
  }
}

export default registerUser;
