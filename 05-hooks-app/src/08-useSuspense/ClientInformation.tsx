import { use, type Usable } from 'react';
import { type User } from './api/get-user-action';

interface Props {
    getUser: Usable<User>
}

//const userPromise = getUserAction(1);

const ClientInformation = ({getUser}: Props) => {
    const user = use(getUser);

    return (
        <div className="bg-gradient flex flex-col gap-4">
            <h1 className="text-4xl font-thin text-white">{user.name} - #{user.id}</h1>

            <p className="text-white text-2xl">{user.location}</p>

            <p className="text-white text-xl">{user.role}</p>
        </div>
    );
};

export default ClientInformation;
