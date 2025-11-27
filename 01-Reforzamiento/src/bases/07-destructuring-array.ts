const characterNames: string[] = ['German Cat', 'Chinise Cat', 'UIIAOU', 'Banana Cat'];


const [catOne, catTwo] = characterNames;

const [, , catThree] = characterNames;

console.log(`${catOne} y ${catTwo}`);

console.log(catThree);


// console.log(characterNames[3]);



const returnArray = (): (string | number)[] => {
    return ['abc', 123] as const;
}


const [letters, numbers] = returnArray();

console.log(letters, numbers);