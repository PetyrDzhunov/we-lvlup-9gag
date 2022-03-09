/* eslint-disable no-alert */
import userData from '../data/userData.js';

async function registerUser(e) {
  e.preventDefault();
  const formData = new FormData(e.target);
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
    const { email } = userCredential.user;
    userData.setUserData(email);
    $('#login-btn').text(`Hello ${email}`);
    $('#register-btn').text('Logout');
    $('.modal-backdrop').hide();
    page.redirect('/');
  } catch (err) {
    page.redirect('/register');
    alert(err.message);
  }
}

export default registerUser;
