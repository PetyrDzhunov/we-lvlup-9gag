// eslint-disable-next-line import/no-cycle
import { updateUserNav } from '../../middlewares/decorateContext.js';
import userData from '../data/userData.js';

(function attachLogout() {
  $(document).ready(function () {
    $('.logout-btn').click(async function () {
      userData.clearUserData();
      await auth.signOut();
      $('#login-btn').text('Log in');
      updateUserNav();
    });
  });
})();
