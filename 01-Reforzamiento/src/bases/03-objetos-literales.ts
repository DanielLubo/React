interface Person {
    firstName: string;
    lastName: string;
    age: number;
    address?: Address;
}

interface Address {
    postalCode: string;
    city: string;
}

const person: Person = {
    firstName: 'Ana',
    lastName: 'sofia',
    age: 21,
}

console.log(person.firstName);

person.firstName = 'Angela';
console.log(person.firstName);



// const user = {...person};

const user = structuredClone(person);

user.firstName = 'El pepe';
user.lastName = 'Eteseht';
user.age =  22;


console.log(person, user);