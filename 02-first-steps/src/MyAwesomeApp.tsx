import type { CSSProperties } from "react";

interface User {
    firstName: string;
    lastName: string;
}

const favoriteGames = ['Devil May Cry', 'Metal Gear Rising Revenge', 'Minecraft'];
const isActive = true;
const address = {
    zipCode: 'xdxd',
    country: 'Colmbia',
}
const myStyles: CSSProperties = {
    backgroundColor: '#9CABBF',
    fontFamily: 'monospace',
    fontSize: 24,
    fontWeight: 700,
    margin: 20
}

export const MyAwesomeApp = ({ firstName, lastName }: User) => {
    return (
        <div data-testid="div-app">
            <h1 data-testid="first-name-title"> Hola {firstName} </h1>
            <h3> {lastName} </h3>
            <p className="mi-clase-favorita"> {favoriteGames.join(', ')} </p>
            <h1> {isActive ? 'Active' : 'Disable'} </h1>
            <p style={myStyles}> {JSON.stringify(address)} </p>
        </div>
    )
}