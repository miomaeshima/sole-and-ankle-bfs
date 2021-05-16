import React from 'react';
import Nav from '../Nav';
import styled from 'styled-components/macro';

const Main = () =>{
    return (
    <Wrapper>
    <Nav/>
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
flex: 1;
`;
export default Main;