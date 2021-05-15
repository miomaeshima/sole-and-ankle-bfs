import React from 'react';
import Nav from '../Nav';
import styled from 'styled-components/macro';

const Main = () =>{
    return (
    <Wrapper>
    <Nav>Nav</Nav>
    <ShoeBox>
        Main
    </ShoeBox>
    </Wrapper>
    )
};

const Wrapper = styled.div`
display:flex;
`;
const ShoeBox = styled.div`
background: pink;
`;
export default Main;