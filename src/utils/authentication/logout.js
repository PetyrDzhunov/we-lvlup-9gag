import userData from '../data/userData.js';

(function attachLogout() {
  $(document).ready(function () {
    $('.logout-btn').click(async function () {
      userData.clearUserData();
      await auth.signOut();
      $('.logout-btn').text('Sign up');
      $('#login-btn').text('Log in');
    });
  });
})();
