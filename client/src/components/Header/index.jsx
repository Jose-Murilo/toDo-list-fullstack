import { useState } from 'react';
import { IoMdMenu } from 'react-icons/io'
import { IoMdClose } from 'react-icons/io'
import { NavLink } from 'react-router-dom'
import { Menu } from '../Menu';
import { Container } from './style';

export function Header() {
    const [menuActive, setMenuActive] = useState(false);
    const toggleMenuIcon = () => setMenuActive(!menuActive);

    return (
        <>
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
                </div>
            </Container>

            <div onClick={toggleMenuIcon}>
            {menuActive && <Menu />}
            </div>
        </>
    )
}