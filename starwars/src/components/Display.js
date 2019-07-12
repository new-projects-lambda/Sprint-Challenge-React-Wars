import React from 'react'
import styled from 'styled-components';

const StyledDiv = styled.div`
    background: #cccccc99;
    width: 50%;
    color: #335577;
    margin-bottom: 30px;
    padding-left: 15px;
    
`;

export default function Display(props) {
    return (
        <StyledDiv>
            <h2>{props.data.name}</h2>
        </StyledDiv>
    )
}
