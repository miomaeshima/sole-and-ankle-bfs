import React from 'react';
import styled from 'styled-components/macro';
import {COLORS, WEIHGT} from '../../constants';

const Breadcrumbs = () =>{
    return (
        <Crumbs>BreadCrumbs</Crumbs>
    )
    
}

const Crumbs = styled.div`
    font-size: 14px;
    background: lightyellow;
`;


export default Breadcrumbs;
