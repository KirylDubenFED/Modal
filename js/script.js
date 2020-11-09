import modalControl from './modal.js';

const modal = modalControl();

let $table = document.querySelector('.table');
let $open = document.querySelector('.add-user');
let $close = document.querySelectorAll('.close');
let $ok = document.querySelector('.ok');
const firstName = document.querySelector('#first_name');
const lastName = document.querySelector('#last_name');
const age = document.querySelector('#age');



$ok.addEventListener('click', function () {

	data.push(
		{
			firstName: firstName.value,
			lastName: lastName.value,
			age: age.value,
		}
	)
	let str = '';
	for (let el of data) {
		str += `<tr><td> ${el.firstName}</td><td>${el.lastName}</td><td>${el.age}</td></tr>`;
	}
	$table.innerHTML = str;
	modal.toggle('close');
});




$open.addEventListener('click', function () {
	modal.toggle('open');
});

for (let $btn of $close) {
	$btn.addEventListener('click', function () {
		modal.toggle('close');
	});
}

let data = [
	{
		firstName: 'Ashton',
		lastName: 'Kutcher',
		age: 40,
		gender: 'men',
		hairСolor: 'black'
	}, {
		firstName: 'Bradley',
		lastName: 'Pitt',
		age: 54,
		gender: 'men',
		hairСolor: 'pink'
	}, {
		firstName: 'Hannah',
		lastName: 'Dakota',
		age: 24,
		gender: 'women',
		hairСolor: 'green'
	}
];

let str = '';
for (let el of data) {
	str += `<tr><td> ${el.firstName}</td><td>${el.lastName}</td><td>${el.age}</td></tr>`;
	//  console.log (el)
}
$table.innerHTML = str;



