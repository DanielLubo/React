import type { GiphyResponseTs } from "../data/gify.response";

const API_KEY = "zhZhlLKf7nDShRGgiC0b0VM4xajyBTzm";


const myRequest = fetch (
    `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`
);

const createImageDOM = (url: string) => {
    const imageElement = document.createElement('img');
    imageElement.src = url;
    document.body.append(imageElement);
}

myRequest
    .then((response) => response.json())
    .then(({data}: GiphyResponseTs) => {
        const imgUrl = data.images.original.url;
        createImageDOM(imgUrl);
    })
    .catch((error) => console.log(error))

// myRequest.then((response) => {
    
//     response.json().then((data)=> {
//         console.log(data);
//     })


// }). catch ((error) => {
//     console.log(error);
// });