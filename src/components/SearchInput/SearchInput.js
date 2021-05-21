import React from 'react';
import styled from 'styled-components/macro';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const SearchInput = () =>{

    return (
        <label>
            <VisuallyHidden>Search</VisuallyHidden>
            <Input type="search" placeholder="Search..."></Input>
            <Icon id="search"></Icon>
        </label>
    )
};


const Input = styled.input`
background: transparent;
border: none;
border-bottom: 1px solid ${COLORS.gray300};
font-size: 14px;
color: ${COLORS.gray500}; 



`;

export default SearchInput;