import React from "react";
import styled from "styled-components";

const HeaderDiv = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    margin: 10px 0px;
`;

const Title = styled.h1`
    color: #FFFFFF;
    font-size: 38px;
    font-family: Montserrat;
    font-weight: 400;
`;

function Header({ title }) {
    return (
        <HeaderDiv>
            <Title>{title}</Title>
        </HeaderDiv>
    );
}

export default Header;