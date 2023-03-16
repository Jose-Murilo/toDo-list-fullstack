import { Navigate } from 'react-router-dom'

export function RequireAuth({ children }) {
    async function fecthToken() {
        const response = await axios.get('http://localhost:3000/', {
            headers: {'authorization': ``}
        })
        const data = response.data
        return data
    }

    const isAuth = fecthToken()

    if (!isAuth) {
        return <Navigate to="/login"/>
    }
    
    return children
}