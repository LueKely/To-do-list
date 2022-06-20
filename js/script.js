const listContainer = document.querySelector('.list-container');
const listItem = document.querySelectorAll('.list-item');
let textbox;
const formButton = document.getElementById('formButton');
let globalCounter = 0;

const inputs = {
	counter: 0,
	words: [],
};
const listInput = [];
const finalInput = [];
const trashbin = document.querySelectorAll('.trashbin');

trashbin.forEach((del) => {
	del.addEventListener('click', () => {
		alert('test');
	});
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
		return `	<li class="list-item">

	<label class="checkbox" for="myCheckboxId${this.count}">
		<input
			class="checkbox__input"
			type="checkbox"
			name="myChecknoxName"
			id="myCheckboxId${this.count}"
		/>	
		<div class="checkbox__box"></div>
	</label>${this.word}
	<span class="trashbin"><i class="fa-solid fa-trash-can"></i></span>
	</li>
	`;
	}
}

textbox = document
	.getElementById('userNoteId')
	.addEventListener('keypress', (e) => {
		if (e.keyCode == 13) {
			let userInput = document.getElementById('userNoteId').value;
			if (userInput == '') {
				alert('Bobo mo magtype');
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
		alert('Bobo mo magtype');
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
	listContainer.appendChild(finalInput[globalCounter]);
	globalCounter++;
}
