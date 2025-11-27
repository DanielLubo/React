const person: Hero = {
    name:'Ana',
    age: 21,
    key: 'Worales',
    rank: 'a',
}


// const { name, age, key} = person;

// console.log(name, age, key);




interface Hero {
    name: string;
    age: number;
    key: string;
    rank?: string | undefined;
}



const useContext = ({name, age, key, rank}: Hero) => {
    // return {
    //     keyName: key,
    //     user: {
    //         name,
    //         age,
    //     },
    //     rank: rank,
    // }
    return {
        key,
        user: {
            name,
            age,
        },
        rank,
    }
}


const {key, rank, user: {name, age}} = useContext(person);
// const user = useContext(person);
// console.log(user);\

// const {name, age} = user;


console.log(key, rank);

console.log(name, age);
