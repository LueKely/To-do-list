const listContainer = document.querySelector('.list-container');
const listItem = document.querySelectorAll('.list-item');

const formButton = document.getElementById('formButton');
let globalCounter = 0;

const inputs = {
	counter: 0,
	words: [],
};
const listInput = [];
const finalInput = [];

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
	${this.word}
	<label class="checkbox" for="myCheckboxId${this.count}">
		<input
			class="checkbox__input"
			type="checkbox"
			name="myChecknoxName"
			id="myCheckboxId${this.count}"
		/>
		<div class="checkbox__box"></div>
	</label>`;
	}
}

function factory() {
	listInput[globalCounter] = new rendering(inputs.words[globalCounter]);
	finalInput[globalCounter] = document.createElement('li');
	finalInput[globalCounter].innerHTML = listInput[globalCounter].makeList();
	listContainer.appendChild(finalInput[globalCounter]);
	globalCounter++;
}

formButton.addEventListener('click', () => {
	let userInput = document.getElementById('userNoteId').value;
	transcribeNote(userInput + ' ' + globalCounter);
	console.log(userInput);
	factory();
});

// lue.logCount();
// test2.innerHTML = kely.makeList();
// kely.logCount();
// function factory() {
// 	inputs.words.forEach((input) => {
// 		listInput.push(new rendering(input));
// 	});

// 	for (let a = 0; a < listInput.length; a++) {
// 		finalInput[a] = document.createElement('li');
// 		finalInput[a].innerHTML = listInput[a].makeList();
// 	}

// 	finalInput.forEach((a) => {
// 		listContainer.appendChild(a);
// 	});
// }
