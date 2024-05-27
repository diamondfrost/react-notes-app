import React from 'react';
import styled from 'styled-components';
import ChevronLeftRoundedIcon from '@mui/icons-material/ChevronLeftRounded';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';

const ArrowButton = styled.button`
    height: fit-content;
    width: fit-content;
    border-radius: 9999px;
    padding-top: 4px;
    padding-bottom: 4px;
    padding-left: 0px;
    padding-right: 0px;
    background-color: transparent;
    border: solid 1px ${(props) => props.arrowColor};
`;

const LeftArrowIcon = styled(ChevronLeftRoundedIcon)`
    color: ${(props) => props.arrowColor};
    cursor: pointer;
`;

const RightArrowIcon = styled(ChevronRightRoundedIcon)`
    color: ${(props) => props.arrowColor};
    cursor: pointer;
`;

function ChevronRoundButton({ direction, arrowColor, onClickEvent }) {
    return (
        <ArrowButton
            arrowColor={arrowColor}
            onClick={onClickEvent}>
                {direction === 'left' 
                    ? <LeftArrowIcon arrowColor={arrowColor} />
                    : <RightArrowIcon arrowColor={arrowColor} /> }
        </ArrowButton>
    );
};

export default ChevronRoundButton;