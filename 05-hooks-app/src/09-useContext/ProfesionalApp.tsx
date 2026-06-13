import { RouterProvider } from 'react-router';
import { appRouter } from './router/app.router';
import UseContextProvider from './context/UseContext';

const ProfesionalApp = () => {
    return (
        <>
            <UseContextProvider>
                <div className="bg-gradient">
                    <RouterProvider router={appRouter} />
                </div>
            </UseContextProvider>
        </>
    );
};

export default ProfesionalApp;
