import React from 'react';
import styled from 'styled-components';

const ButtonItem = styled.button`
    padding: 8px;
    border-radius: 9999px;
    display: flex;
    align-items: center;
    color: ${(props) => props.textColor};
    border: 1px solid ${(props) => props.borderColor};
    background-color: ${(props) => props.bgColor};
    box-shadow: 0 4px 6px -1px ${(props) => props.borderColor} 0A, 0 2px 4px -2px ${(props) => props.borderColor} 0A;
    &:hover {
        box-shadow: 0 25px 50px -12px ${(props) => props.borderColor} 19;
    };
`;

const ButtonLabel = styled.span`
    padding-left: 12px;
    padding-right: 28px;
`;

function IconLeftRoundedButton({ 
    textColor, 
    borderColor, 
    bgColor, 
    onClickEvent,
    IconImg,
    buttonLabel,
 }) {
    return(
        <ButtonItem 
            textColor={textColor}
            borderColor={borderColor}
            bgColor={bgColor}
            onClick={onClickEvent}>
                <IconImg />
                <ButtonLabel> {buttonLabel}</ButtonLabel>
        </ButtonItem>
    );
};

export default IconLeftRoundedButton;

