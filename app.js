const dateOfBirth = document.querySelector('#date-of-birth');
const luckyNumber = document.querySelector('#lucky-number');
const checkButton = document.querySelector('#check-button');
const outputPara = document.querySelector('#output-para');

function calculateSum(dob) {
	dob = dob.replaceAll('-', '');
	let sum = 0;
	for (let i = 0; i < dob.length; i++) {
		sum += Number(dob[i]);
	}
	return sum;
}

function checkBirthdateIsLucky() {
	const dob = dateOfBirth.value;
	const sum = calculateSum(dob);
	if (sum && luckyNumber.value) {
		if (sum % luckyNumber.value === 0) {
			outputPara.innerText = 'Yay🥳! your birthday is a lucky🚀.';
		} else {
			outputPara.innerText = 'Your birthday is not lucky😶.';
		}
	} else {
		outputPara.innerText = 'Please enter both the fields🙄';
	}
}

checkButton.addEventListener('click', checkBirthdateIsLucky);
