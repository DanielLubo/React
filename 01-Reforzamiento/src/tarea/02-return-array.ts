import { type Hero, heroes, Owner } from "../data/heroes";

export const getHeroesByOwner = (owner: Owner): Hero[] => {
    
    const arr = heroes.filter((hero) => {
        return hero.owner === owner
    });

    return arr;
}   