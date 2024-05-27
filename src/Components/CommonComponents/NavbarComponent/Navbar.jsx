import React from 'react';
import styled from 'styled-components';
import { FaBars } from 'react-icons/fa';

import NavLink from './NavLink';
import NavButton from './NavButton';

const Nav = styled.nav`
    background-color: #000000;
    height: 85px;
    display: flex;
    justify-content: space-between;
    padding: 0.2rem calc((100vw - 1000px) / 2);
    z-index: 12;
`;

const Bars = styled(FaBars)`
    display: none;
    color: #808080;
    @media (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 75%);
        font-size: 1.8rem;
        cursor: pointer;
    };
`;

const NavMenu = styled.div`
    display: flex;
    align-items: center;
    margin-right: -24px;
    @media (max-width: 768px) {
        display: none;
    };
`;

function Navbar({ routes }) {
    return (
        <>
            <Nav>
                <Bars />
                <NavMenu>
                    {routes.map((link) => (
                        (link.navType === 'navlink') &&
                            <NavLink 
                                routeTo={link.path}
                                labelText={link.label}
                                isActiveStyle={link.isActiveStyle}
                                key={link.id}
                            />
                    ))}
                </NavMenu>
                {routes.map((link) => (
                    (link.navType === 'navbutton') &&
                        <NavButton 
                            routeTo={link.path}
                            labelText={link.label}
                            key={link.id}
                        />
                ))}
            </Nav>
        </>
    );
};

export default Navbar;