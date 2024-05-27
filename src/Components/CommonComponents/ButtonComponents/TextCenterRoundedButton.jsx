import React from "react";
import styled from "styled-components";

const TextCenterButton = styled.button`
    position: relative;
    display: inline;
    border-radius: 9999px;
    padding-top: 8px;
    padding-bottom: 8px;
    padding-left: 16px;
    padding-right: 16px;
    margin-right: 20px;
    margin-left: 20px;
    color: ${(props) => props.textColor};
    border: 1px solid ${(props) => props.borderColor};
    background-color: transparent;
`;

function TextCenterRoundedButton ({ onClickEvent, textColor, borderColor, text }) {
    return(
        <TextCenterButton
            onClick={onClickEvent}
            textColor={textColor}
            borderColor={borderColor}
        >
            {text}
        </TextCenterButton>
    );
};

export default TextCenterRoundedButton;