function saludar(name: string): string {
    return (`Hola ${name}`);
}
console.log(saludar('Ana'));



const greet = (nameUser: string): string => `Bienvenida ${nameUser}`;
console.log(greet('Ana sofia'));







interface User {
    uid: number;
    userName: string
}


const getUser = (): User => ({uid: 1, userName: 'El pepe',});
console.log(getUser());









const numbers: number[] = [1,2,3,4,5,6,7,8,9,10];

numbers.forEach(function(value){
    console.log(value);
})



numbers.forEach((value) => {
    console.log({value});
})


numbers.forEach(console.log);