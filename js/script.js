const listContainer = document.querySelector('.list-container');
const listItem = document.querySelectorAll('.list-item');

const li = document.querySelectorAll('li');

let textbox;

const formButton = document.getElementById('formButton');
let globalCounter = 0;

const inputs = {
	counter: 0,
	words: [],
};
const listInput = [];
const finalInput = [];
const trashbin = document.querySelector('.trashbin');
const errorHandler = document.querySelector('.errorHandlerModalContainer');
const xmark = document.querySelector('.xmark');
xmark.addEventListener('click', () => {
	errorHandler.close();
});
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
	>${this.word} 
	`;
	}
}

textbox = document
	.getElementById('userNoteId')
	.addEventListener('keypress', (e) => {
		if (e.keyCode == 13) {
			let userInput = document.getElementById('userNoteId').value;

			if (userInput == '') {
				errorHandler.showModal();
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
		errorHandler.showModal();
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
	let index = prompt('insert what index to delete');
	deleteItem(index);
});

function deleteItem(index) {
	inputs.words.splice(index, 1);
	listInput.splice(index, 1);
	finalInput.splice(index, 1);
	listContainer.removeChild(listContainer.children[index]);
}
