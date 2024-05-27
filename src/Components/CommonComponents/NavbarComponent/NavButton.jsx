import React from "react";
import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";

const NavBtnItem = styled.nav`
    display: flex;
    align-items: center;
    margin-right: 24px;
    @media (max-width: 768px) {
        display: none;
    }
`;

const NavBtnLink = styled(Link)`
    border-radius: 4px;
    background: #808080;
    padding: 10px 22px;
    color: #000000;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    margin-left: 24px;
    &:hover {
        transition: all 0.2s ease-in-out;
        background: #FFFFFF;
        color: #808080;
    }
`;

function NavButton({ routeTo, labelText }) {
    return(
        <NavBtnItem>
            <NavBtnLink to={routeTo}>{labelText}</NavBtnLink>
        </NavBtnItem>
    );
};

export default NavButton;