import { UserContext } from '@/09-useContext/context/UseContext';
import { Button } from '@/components/ui/button';
import { use } from 'react';
import { Link } from 'react-router';

const AboutPage = () => {
    const { isAuthenticated, logout } = use(UserContext);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <h1 className="text-4xl font-bold">Pagina sobre mi</h1>
            <hr />

            <div className="flex flex-col gap-2">
                {/** Perfil de usuario si tiene sesion */}
                {isAuthenticated && (
                    <Link
                        to="/profile"
                        className="hover:text-blue-500 underline text-2xl"
                    >
                        Perfil
                    </Link>
                )}

                {/** Login logout */}
                {isAuthenticated ? (
                    <Button
                        variant="destructive"
                        className="mt-4"
                        onClick={logout}
                    >
                        Salir
                    </Button>
                ) : (
                    <Link
                        to="/login"
                        className="hover:text-blue-500 underline text-2xl"
                    >
                        Login
                    </Link>
                )}
            </div>
        </div>
    );
};

export default AboutPage;
