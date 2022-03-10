import userData from '../data/userData.js';

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
		$('#login-btn').text(`Hello ${email}`);
		$('#register-btn').text('Logout');
		$('.modal-backdrop').hide();
		page.redirect('/');
	} catch (err) {
		page.redirect('/login');
		alert(err.message);
	}
}

export default loginUser;
