import routes from '../../routes.js';
import userData from '../data/userData.js';

const provider = new firebase.auth.GoogleAuthProvider();

provider.addScope('https://www.googleapis.com/auth/contacts.readonly');

const addEventHandlerToGoogleBtn = () => {
	$(document).ready(function () {
		$('#google-btn').click(function () {
			auth
				.signInWithPopup(provider)
				.then((result) => {
					const { credential } = result;
					const token = credential.accessToken;
					const { user } = result;
					const { email, uid } = user;
					userData.setUserData({ email, uid, token });
					$('#login-btn').text(`Hello, ${email.split('@')[0]}`);
					$('#register-btn').text('Logout');
					$('.modal-backdrop').hide();
					page.redirect(routes.fresh);
				})
				.catch((error) => {
					alert(error.message);
				});
		});
	});
};

(function attachGoogleLoginToBtn() {
	addEventHandlerToGoogleBtn();
	auth.onAuthStateChanged((user) => {
		if (!user) {
			addEventHandlerToGoogleBtn();
		}
	});
}());
