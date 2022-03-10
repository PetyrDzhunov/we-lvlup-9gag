import userData from '../data/userData.js';

let provider = new firebase.auth.GoogleAuthProvider();

provider.addScope('https://www.googleapis.com/auth/contacts.readonly');

export default function attachGoogleLoginToBtn() {
	$(document).ready(function () {
		$('#google-btn').click(function () {
			auth
				.signInWithPopup(provider)
				.then((result) => {
					let credential = result.credential;
					let token = credential.accessToken;
					let user = result.user;
					const { email, uid } = user;
					userData.setUserData({ email, uid, token });
					$('#login-btn').text(`Hello, ${email.split('@')[0]}`);
					$('#register-btn').text('Logout');
					$('.modal-backdrop').hide();
					page.redirect('/');
				}).catch((error) => {
					alert(error.message);
				});
		})
	})
}