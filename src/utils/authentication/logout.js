import userData from '../data/userData.js';

export default function attachLogout() {
  $(document).ready(function () {
    $('.logout-btn').click(function () {
      userData.clearUserData();
      $('.logout-btn').text('Sign up');
      $('#login-btn').text('Log in');
    });
  });
}
