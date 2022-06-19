const listContainer = document.querySelector('.list-container');

const inputs = {
	counter: 0,
	words: [],
};
const listInput = [];
const finalInput = [];

function lue(words) {
	inputs.words[inputs.counter] = words;
	inputs.counter++;
}

lue('this is 1');
lue('this is 2');
lue('testing this is 3');

class listClass {
	static count = 0;

	constructor(word) {
		this.word = word;
		this.count = listClass.count++;
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
	logCount() {
		console.log(this.count);
	}
}

inputs.words.forEach((input) => {
	listInput.push(new listClass(input));
});

for (let a = 0; a < listInput.length; a++) {
	finalInput[a] = document.createElement('li');
	finalInput[a].innerHTML = listInput[a].makeList();
}

finalInput.forEach((a) => {
	listContainer.appendChild(a);
});

// lue.logCount();
// test2.innerHTML = kely.makeList();
// kely.logCount();
