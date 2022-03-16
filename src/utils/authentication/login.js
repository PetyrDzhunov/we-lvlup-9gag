import routes from '../../routes.js';
import userData from '../data/userData.js';
import { updateUserNav } from '../../middlewares/decorateContext.js';

async function loginUser(e) {
  e.preventDefault();
  const formData = new FormData(e.target);
  const emailInput = formData.get('email').trim();
  const passwordInput = formData.get('password').trim();

  if (emailInput === '' || passwordInput === '') {
    alert('Please fill all the fields!');
  }

  try {
    const userCredential = await auth.signInWithEmailAndPassword(
      emailInput,
      passwordInput,
    );
    const { email, uid } = userCredential.user;
    userData.setUserData({ email, uid });
    $('#welcome-btn').text(`Hello, ${email.split('@')[0]}`);
    $('.modal-backdrop').hide();
    updateUserNav();
    page.redirect(routes.fresh);
  } catch (err) {
    page.redirect(routes.login);
    alert(err.message);
  }
}

export default loginUser;
