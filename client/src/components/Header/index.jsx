import { useState } from 'react';
import { IoMdMenu } from 'react-icons/io'
import { IoMdClose } from 'react-icons/io'
import { NavLink } from 'react-router-dom'
import { Container } from './style';

export function Header() {
    const [menuActive, setMenuActive] = useState(false)
    function toggleMenuIcon() {
        console.log('a');
    }

    return (
        <Container>
            <div className='navContainer'>
                <div className='containerToggle'>
                    <button className='toggleButton' onClick={toggleMenuIcon}>
                        {
                            menuActive ?
                            <IoMdMenu className="menuIcon"/>: 
                            <IoMdClose className="menuIcon" />
                        }
                    </button>

                    <span>logo</span>
                </div>

                <nav>
                    <ul>
                        <li>
                            <NavLink>Login</NavLink>
                            <NavLink>Register</NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </Container>
    )
}