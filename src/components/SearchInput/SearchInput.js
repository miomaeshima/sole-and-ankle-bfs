import React from 'react';
import styled from 'styled-components/macro';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';
const SearchInput = () =>{

    //why do we need VisuallyHidden here?

    return (
        <Label>
            <VisuallyHidden>Search</VisuallyHidden>
            <Input type="search" placeholder="Search..."></Input>
            <SearchIcon id="search" color={COLORS.gray300} strokeWidth={2} size={16}></SearchIcon>
        </Label>
    )
};

const Label = styled.label`
position: relative;
`;

const Input = styled.input`
background: transparent;
border: none;
border-bottom: 1px solid ${COLORS.gray300};
padding-left: 24px;
color: ${COLORS.gray300};
font-style: normal; 
 &::placeholder{
     color: ${COLORS.gray300}
 }
`;

const SearchIcon = styled(Icon)`
position: absolute;
top: 0;
bottom: 0;
margin: auto;
width: 16px;
height: 16px;
`;

 

export default SearchInput;