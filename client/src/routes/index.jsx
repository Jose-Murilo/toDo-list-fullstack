import { createBrowserRouter } from 'react-router-dom';
import { SingIn } from '../pages/SignIn';
import { SignUp } from '../pages/SignUp';
import { Home } from '../pages/Home';
import { PageError } from '../pages/PageError'
import { App } from '../App';

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <PageError />,
        children: [
            {path: '/', element: <Home />},
        ]
    },

    {
        path: '/register',
        element: <SignUp />,
    },

    {
        path: '/login',
         element: <SingIn />
    },
]) 