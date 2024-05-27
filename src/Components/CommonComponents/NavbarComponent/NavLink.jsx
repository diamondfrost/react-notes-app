import React from "react";
import { styled } from "@mui/material/styles";
import { NavLink as Link } from 'react-router-dom';

const NavLinkItem = styled(Link)`
    color: #FFFFFF;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    font-family: Montserrat;
    font-weight: 400;
    &.active {
        color: #9370d8;
        font-weight: 700;
    };
`;

function NavLink({ routeTo, labelText, isActiveStyle }) {
    return(
        <NavLinkItem to={routeTo} activestyle={isActiveStyle}>
            {labelText}
        </NavLinkItem>
    );
};

export default NavLink;