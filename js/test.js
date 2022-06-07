let person = {
	name: 'Brad',
	age: 35,
	address: {
		street: 'joe',
		city: 'mama',
	},
	children: ['niggus', 'biggus'],
	code: 'Aliquip non adipisicing cillum labore irure ad proident ex est magna ad. Irure amet dolore ullamco in quis aute. Voluptate Lorem velit exercitation deserunt consequat anim proident duis aute. Irure veniam eiusmod officia labore aliquip do voluptate ea sit. Est laboris dolore laboris est nostrud excepteur anim ad dolore officia consectetur minim ad nulla.',
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
console.log(person.code);
