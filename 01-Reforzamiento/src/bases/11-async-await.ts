import type { GiphyResponseTs } from "../data/gify.response";

const API_KEY = "zhZhlLKf7nDShRGgiC0b0VM4xajyBTzm";


const createImageDOM = (url: string) => {
    const imageElement = document.createElement('img');
    imageElement.src = url;
    document.body.append(imageElement);
}

const getRandomGitUrl = async(): Promise<string> => {
    const response = await fetch (
        `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`
    );

    const {data}: GiphyResponseTs = await response.json();

    return data.images.original.url;
    
}

getRandomGitUrl().then(createImageDOM);