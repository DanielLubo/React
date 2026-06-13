import { UserContext } from '@/09-useContext/context/UseContext';
import { Button } from '@/components/ui/button';
import { use } from 'react';



const ProfilePage = () => {

    const {user, logout} = use(UserContext);


    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <h1 className='text-4xl'>Profile</h1>
            <hr />

            <pre className='my-4 w-[50%] overflow-auto'>{JSON.stringify(user, null, 2)}</pre>

            <Button 
                variant='destructive'
                onClick={logout} 
                   
            >Salir</Button>
        </div>
    );
};

export default ProfilePage;
