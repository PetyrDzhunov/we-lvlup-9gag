import { updateUserNav } from '../../middlewares/decorateContext.js';
import routes from '../../routes.js';
import userData from '../data/userData.js';

const provider = new firebase.auth.GoogleAuthProvider();

provider.addScope('https://www.googleapis.com/auth/contacts.readonly');

export default function signInWithGoogle() {
  auth
    .signInWithPopup(provider)
    .then((result) => {
      const { credential } = result;
      const token = credential.accessToken;
      const { user } = result;
      const { email, uid } = user;
      userData.setUserData({ email, uid, token });
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
