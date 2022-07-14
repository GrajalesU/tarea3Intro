const Person = require("./classes/Person");

const person1 = new Person("Juan", 30, "12345678");
console.log(person1.greet());
console.log('---')
console.log('SETTING NEW VALUES')
console.log('---')
person1.name = 'Pedro';
person1.age = 40;
person1.phone = '87654321';
console.log(person1.greet());
console.log('---')
console.log('GETTING VALUES')
console.log('---')
console.log(person1.name);
console.log(person1.age);
console.log(person1.phone);

