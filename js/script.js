const listContainer = document.querySelector('.list-container');

const li = document.querySelectorAll('li');

let textbox;

const formButton = document.getElementById('formButton');
let globalCounter = 0;

let inputs = {
	counter: 0,
	words: [],
};
let listInput = [];
let finalInput = [];
const trashbin = document.querySelector('.trashbin');
const errorHandler = document.querySelectorAll('.errorHandlerModalContainer');
const xmark = document.querySelectorAll('.xmark');

const deleteOption = document.querySelector('.deleteOption');
const pt2 = document.querySelector('.pt2').addEventListener('click', () => {
	deleteOption.close();
	document.getElementById('indexForDeletion').value = '';
});
const deleteOptionButton = document.querySelector('.deleteOptionButton');

function transcribeNote(words) {
	inputs.words[inputs.counter] = words;
	inputs.counter++;
}

class rendering {
	static count = 0;

	constructor(word) {
		this.word = word;
		this.count = rendering.count++;
	}

	makeList() {
		return `	<label class="checkbox " for="myCheckboxId${this.count}">
		<input
			class="checkbox__input"
			type="checkbox"
			name="myChecknoxName"
			id="myCheckboxId${this.count}"
		/>
		<div class="checkbox__box"></div> </label
	>   <p> &nbsp${this.word} &nbsp;</p> 
	`;
	}
}

textbox = document
	.getElementById('userNoteId')
	.addEventListener('keypress', (e) => {
		if (e.keyCode == 13) {
			let userInput = document.getElementById('userNoteId').value;

			if (userInput == '') {
				errorHandler[0].showModal();
			} else {
				transcribeNote(userInput);
				console.log(userInput);
				factory();
			}
		}
	});

formButton.addEventListener('click', () => {
	let userInput = document.getElementById('userNoteId').value;

	if (userInput == '') {
		errorHandler[0].showModal();
	} else {
		transcribeNote(userInput);
		console.log(userInput);
		factory();
	}
});

function factory() {
	listInput[globalCounter] = new rendering(inputs.words[globalCounter]);
	finalInput[globalCounter] = document.createElement('li');
	finalInput[globalCounter].innerHTML = listInput[globalCounter].makeList();
	finalInput[globalCounter].classList.add('animate__animated');
	finalInput[globalCounter].classList.add('animate__backInLeft');

	listContainer.appendChild(finalInput[globalCounter]);
	globalCounter++;
	document.getElementById('userNoteId').value = '';

	//add css animaiton to li
}

trashbin.addEventListener('click', () => {
	deleteOption.showModal();
});

function deleteItem(index) {
	inputs.words.splice(index, 1);
	listInput.splice(index, 1);
	finalInput.splice(index, 1);
	listContainer.removeChild(listContainer.children[index]);
	inputs.counter--;
	globalCounter--;
}

function deleteAllItems() {
	let deleteCounter = globalCounter;

	for (let index = 0; index < deleteCounter; index++) {
		inputs.words.splice(0, 1);
		listInput.splice(0, 1);
		finalInput.splice(0, 1);
		listContainer.removeChild(listContainer.children[0]);
		inputs.counter--;
		globalCounter--;
	}
}

deleteOptionButton.addEventListener('click', () => {
	let indexForDeletion = document.getElementById('indexForDeletion').value;

	if (String(indexForDeletion).toLowerCase() == 'all') {
		deleteAllItems();
	} else if (indexForDeletion == '') {
		errorHandler[0].showModal();
	} else if (indexForDeletion > globalCounter) {
		errorHandler[1].showModal();
	} else if (indexForDeletion == 0) {
		errorHandler[1].showModal();
	} else if (
		isNaN(indexForDeletion) &&
		String(indexForDeletion).toLowerCase() != 'all'
	) {
		errorHandler[2].showModal();
	} else {
		deleteItem(indexForDeletion - 1);
	}
	document.getElementById('indexForDeletion').value = '';
});

for (let index = 0; index < xmark.length; index++) {
	xmark[index].addEventListener('click', () => {
		errorHandler[index].close();
	});
}

listContainer.addEventListener('change', (e) => {
	if (e.target.checked) {
		e.target.parentElement.parentElement.classList.add('highLights');
	} else {
		e.target.parentElement.parentElement.classList.remove('highLights');
	}
});
