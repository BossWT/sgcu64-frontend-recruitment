const form = document.getElementById('register-form');
form.addEventListener('submit', (event) => {
	event.preventDefault();
	const formData = new FormData(form);
	const data = {};
	for (const [key, value] of formData.entries()) {
		/* USER CODE Begin: Validate data */
		data[key] = value;
		/* USER CODE Begin: Validate data */
	}
	validateEmail(data['email']);
	verifyPassword(data['password'], data['confirmpassword']);
	console.log(data);
	/* USER CODE Begin: What happened next after recieve form data (Optional) */

	/* USER CODE END: What happened next after recieve form data (Optional) */
});

const validateEmail = (email) => {
	const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	if (email.match(mailFormat)) return true;
	else alert('Invalid Email Address!');
	return false;
};

const verifyPassword = (pwd, rePwd) => {
	if (pwd === rePwd && pwd && rePwd) return true;
	else alert("Password doesn't match");
	return false;
};
