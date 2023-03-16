import { Container } from "./style";
import { NavLink } from "react-router-dom";

export function Menu() {
    return (
        <Container>
            <nav>
                <ul>
                    <li>
                        <NavLink className={({isActive}) => isActive ? "select" : ""} to={'/login'}>
                            Login
                        </NavLink>
                    </li>

                    <li>
                        <NavLink className={({isActive}) => isActive ? "select" : ""} to={'/register'}>
                            Cadastro
                        </NavLink>
                    </li>

                </ul>
            </nav>
        </Container>
    )
}