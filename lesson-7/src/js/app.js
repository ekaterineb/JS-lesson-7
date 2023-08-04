const form = document.querySelector("#sign-up");
const username = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const passError = document.querySelector("#password-error");
const emailError = document.querySelector("#email-error");
const userNameError = document.querySelector("#username-error");
const modal = document.querySelector("#sign-up-modal");
const closeModal = document.querySelector(".modal-close");
const inputs = document.querySelectorAll("input");
const btn = document.querySelector(".open-sign-in");
const personal_number = document.querySelector("#personal_number");
const personalNumberError = document.querySelector("#personal-number-error");
const mobile_number = document.querySelector("#mobile_number");
const mobileNumberError = document.querySelector("#mobile-number-error");
const job_description = document.querySelector("#job_description");
const jobDescriptionError = document.querySelector("#job-description-error");



// closeModal.addEventListener("click", () => {
// 	modal.classList.remove("open");
// });

function modalAction(selector) {
	const modal = document.querySelector(selector);
	const closeBtn = modal.querySelector(".modal-close");
	modal.classList.add("open");
	closeBtn.addEventListener("click", () => {
		modal.classList.remove("open");
	});
}

function isUserNameValid() {
	if (/^\s*$/.test(username.value)) {
		userNameError.innerText = "username is required";
		username.classList.remove("correct");
		username.classList.add("error");
		return false;
	} else {
		userNameError.innerText = "";
		username.classList.remove("error");
		username.classList.add("correct");
		return true;
	}
}

function isEmailValid() {
	// if (!email.validity.valid) {
	// 	emailError.innerText = "email not valid";
	// 	email.classList.remove("correct");
	// 	email.classList.add("error");
	// } else {
	// 	emailError.innerText = "";
	// 	email.classList.remove("error");
	// 	email.classList.add("correct");
	// }

	if (/^\s*$/.test(email.value)) {
		emailError.innerText = "email is required";
		email.classList.remove("correct");
		email.classList.add("error");
		return false;
	} else if (!/@gmail.com$/.test(email.value)) {
		emailError.innerText = "email must be gmail";
		email.classList.remove("correct");
		email.classList.add("error");
		return false;
	} else {
		emailError.innerText = "";
		email.classList.remove("error");
		email.classList.add("correct");
		return true;
	}
}

function isPasswordValid() {
	if (password.value.length < 8) {
		password.classList.remove("correct");
		password.classList.add("error");
		passError.innerText = "password must be at least 8 char";
		return false;
	} else {
		passError.innerText = "";
		password.classList.remove("error");
		password.classList.add("correct");
		return true;
	}
}

function isPersonalNumberValid() {
	const isNumber = /^[0-9]+$/.test(personal_number.value);
	const isCorrectLength = personal_number.value.length === 11;
	if (!personal_number.value || !isNumber || !isCorrectLength) {
	  personalNumberError.innerText = "Personal number is required and must be 11 digits.";
	  personal_number.classList.remove("correct");
	  personal_number.classList.add("error");
	  return false;
	} else {
	  personalNumberError.innerText = "";
	  personal_number.classList.remove("error");
	  personal_number.classList.add("correct");
	  return true;
	}
}

function isMobileNumberValid() {
	const isNumber = /^[0-9]+$/.test(mobile_number.value);
	const isCorrectLength = mobile_number.value.length === 9;
	if (!mobile_number.value || !isNumber || !isCorrectLength) {
	  mobileNumberError.innerText = "Mobile number is required and must be 9 digits.";
	  mobile_number.classList.remove("correct");
	  mobile_number.classList.add("error");
	  return false;
	} else {
	  mobileNumberError.innerText = "";
	  mobile_number.classList.remove("error");
	  mobile_number.classList.add("correct");
	  return true;
	}
}

function isJobDescriptionValid() {
	if (job_description.value.length > 50) {
	  jobDescriptionError.innerText = "Job description can contain a maximum of 50 characters.";
	  job_description.classList.remove("correct");
	  job_description.classList.add("error");
	  return false;
	} else {
	  jobDescriptionError.innerText = "";
	  job_description.classList.remove("error");
	  job_description.classList.add("correct");
	  return true;
	}
}
  
  

personal_number.addEventListener("input", isPersonalNumberValid);
mobile_number.addEventListener("input", isMobileNumberValid);
job_description.addEventListener("input", isJobDescriptionValid);


username.addEventListener("input", isUserNameValid);
email.addEventListener("input", isEmailValid);
password.addEventListener("input", isPasswordValid);

form.addEventListener("submit", (e) => {
	e.preventDefault();
  
	const isUNValid = isUserNameValid();
	const isEValid = isEmailValid();
	const isPValid = isPasswordValid();
	const isPNValid = isPersonalNumberValid();
	const isMNValid = isMobileNumberValid();
	const isJDValid = isJobDescriptionValid();
  
	if (isUNValid && isEValid && isPValid && isPNValid && isMNValid && isJDValid) {
	  form.reset();
	  inputs.forEach((el) => el.classList.remove("correct"));
	  modalAction("#sign-up-modal");
	}
});
  
  

btn.addEventListener("click", () => {
	modalAction("#sign-up-modal");
});
