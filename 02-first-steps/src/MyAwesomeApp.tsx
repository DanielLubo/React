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

export const MyAwesomeApp = ({ firstName, lastName }: User) => {



    return (
        <>
            <h1> Hola {firstName} </h1>
            <h3> {lastName} </h3>
            <p> {favoriteGames.join(', ')} </p>
            <h1> {isActive ? 'Active' : 'Disable'} </h1>
            <p> {JSON.stringify(address)} </p>
        </>
    )
}