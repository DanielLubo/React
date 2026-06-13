import { UserContext } from '@/09-useContext/context/UseContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { toast } from 'sonner';

const LoginPage = () => {

    const {login, logout} = useContext(UserContext);
    const [userId, setUserId] = useState('');

    const navigation = useNavigate();

    const handleSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {
        event.preventDefault();
        const resolve = login(+userId);
        console.log({resolve});

        if(!resolve){
            toast.error('Usuario no encontrado');
            return;
        }

        navigation('/profile');
    };

    return (
        <div className="flex flex-col items-center min-h-screen">
            <h1 className="text-4xl font-bold">Login</h1>
            <hr />

            <form
                className="flex flex-col gap-2 my-10"
                onSubmit={(event) => handleSubmit(event)}
            >
                <Input
                    value={userId}
                    onChange={(event) => setUserId(event.target.value)}
                    type="number"
                    placeholder="ID del usuario"
                    className=""
                />
                <Button type="submit">Login</Button>
            </form>

            <Link to="/about">
                <Button variant="ghost">Volver a la pagina principal</Button>
            </Link>
        </div>
    );
};

export default LoginPage;
