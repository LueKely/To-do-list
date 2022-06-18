const test = document.querySelector('.test');
const test2 = document.querySelector('.test2');


function jeo ()= 



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

const lue = new listClass('nigga');
const kely = new listClass('joe');
test.innerHTML = lue.makeList();
lue.logCount();
test2.innerHTML = kely.makeList();
kely.logCount();
