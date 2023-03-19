import { Navigate } from 'react-router-dom'
import axios from 'axios';

export function RequireAuth({ children }) {
    const token = localStorage.getItem('token')
    async function fecthToken() {
        const response = await axios.get('http://localhost:3000/system', {
            headers: {'authorization': `${token}`}
        })
        const isAuth = response.data.system
        return isAuth
    }

    const isAuth = fecthToken()

    if (isAuth) {
        return <Navigate to="/login"/>
    }
    
    return children
}