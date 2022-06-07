let person = {
	name: 'Brad',
	age: 35,
	address: {
		street: 'joe',
		city: 'mama',
	},
	children: ['niggus', 'biggus'],
};

// person = JSON.stringify(person);
// person = JSON.parse(person);

let people = [
	{ name: 'one', age: 5 },
	{
		name: 'big',
		age: 2,
	},
	{
		name: 'testing',
		age: 3,
	},
];

console.log(person.children[1]);
console.log(person.address.street);
console.log(people[2].name);

person.name = 'b';

console.log(person.name);
