import userData from '../data/userData.js';

const provider = new firebase.auth.FacebookAuthProvider();

provider.addScope('user_birthday');

const addEventHandlerToFacebookBtn = () => {
	$(document).ready(function () {
		$('#fb-btn').click(function () {
			auth
				.signInWithPopup(provider)
				.then((result) => {
					const { user } = result;
					const { email, uid } = user;
					userData.setUserData({ email, uid });
					$('#login-btn').text(`Hello, ${email.split('@')[0]}`);
					$('#register-btn').text('Logout');
					$('.modal-backdrop').hide();
					page.redirect('/');
				})
				.catch((error) => {
					console.log(error.message)
				});
		});
	});
};

export default (function attachFacebookLogin() {
	addEventHandlerToFacebookBtn();
	auth.onAuthStateChanged((user) => {
		if (!user) {
			addEventHandlerToFacebookBtn();
		}
	});
})();


