import { createBrowserRouter } from 'react-router-dom';
import { SingIn } from '../pages/SignIn';
import { SignUp } from '../pages/SignUp';
import { Home } from '../pages/Home';
import { RequireAuth } from '../services/requireAuth';
import { PageError } from '../pages/PageError'
import { App } from '../App';

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <RequireAuth><App /></RequireAuth>,
        errorElement: <PageError />,
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