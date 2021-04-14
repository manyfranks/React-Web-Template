import React, { useState, useEffect } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { IconContext } from 'react-icons'
import { Button } from '../../globalStyles'
import { Nav, NavbarContainer, NavLogo, NavIcon, MobileIcon, NavMenu, NavItems, NavLinks, NavItemBtn, NavBtnLink } from './NavbarElements'

const Navbar = () => {
    //initialize state
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    //when clicked swap from one state to another
    const handleClick = () => setClick(!click);

    const closeMobileMenu = () => setClick(false);

    //only show on mobile
    const showButton = () => {
        if (window.innerWidth <= 768) {
            setButton(false);
        } else {
            setButton(true);
        }
    }

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);

    return (
        <>
        <IconContext.Provider value={{color: "#fff"}}>
            <Nav>
                <NavbarContainer>
                    <NavLogo to="/" onClick={closeMobileMenu}>
                        <NavIcon />
                        ULTRA
                    </NavLogo>
                    <MobileIcon onClick={handleClick}>
                        {click ? <FaTimes /> : <FaBars />}
                    </MobileIcon>
                    <NavMenu onClick={handleClick} click={click}>
                        <NavItems>
                            <NavLinks to="/">Home</NavLinks>
                        </NavItems>
                        <NavItems>
                            <NavLinks to="/services">Services</NavLinks>
                        </NavItems>
                        <NavItems>
                            <NavLinks to="/products">Products</NavLinks>
                        </NavItems>
                        <NavItemBtn>
                            {button ? (
                                <NavBtnLink to="/sign-up">
                                    <Button primary>SIGN UP</Button>
                                </NavBtnLink>
                            ) : (
                                <NavBtnLink to="/sign-up">
                                    <Button fontBig primary>
                                        SIGN UP
                                    </Button>
                                </NavBtnLink>
                            )}
                        </NavItemBtn>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </IconContext.Provider> 
        </>
    )
}

export default Navbar
