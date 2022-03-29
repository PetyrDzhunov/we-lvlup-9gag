import { updateUserNav } from '../../middlewares/decorateContext.js';
import routes from '../../routes.js';
import userData from '../data/userData.js';

const provider = new firebase.auth.FacebookAuthProvider();

provider.addScope('user_birthday');

export default function signInWithFacebook() {
  auth
    .signInWithPopup(provider)
    .then((result) => {
      const { user } = result;
      const { email, uid } = user;
      userData.setUserData({ email, uid });
      $('#welcome-btn').text(`Hello, ${email.split('@')[0]}`);
      $('.modal-backdrop').hide();
      $('.modal-open').css('overflow', 'scroll');

      updateUserNav();
      page.redirect(routes.fresh);
    })
    .catch((error) => {
      alert(error.message);
    });
}
