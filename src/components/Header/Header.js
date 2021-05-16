import React from 'react';
import styled from 'styled-components/macro';
import { COLORS, WEIGHT } from '../../constants'
import Icon from '../Icon';

const Header = () =>{

    return (
        <Wrapper>
        <SuperTopHeader>
            <Promo>Free shipping on domestic orders over $75!</Promo>
            <input type="search" placeholder="Search..."/>
            <button><Icon></Icon></button>
            <Icon/>
        </SuperTopHeader>
        <TopHeader>
            <Col>Sole&Ankle</Col>
            <CategoryContainer>
            <Category className="sale">sale</Category>
            <Category>new release</Category>
            <Category>men</Category>    
            <Category>women</Category>
            <Category>kids</Category>
            <Category>collection</Category>
            </CategoryContainer>
            <Col></Col>
        </TopHeader>
        </Wrapper>
    )
};


const Wrapper = styled.div`
 display: flex;
 flex-direction: column;
`;

const SuperTopHeader = styled.div`
    background: black;
    color: white;
    display: flex;
    height: 40px;
    padding: 0px 32px;
    gap: 24px;
    align-items: center;   
 }
`;

const Promo = styled.div`
    margin-right: auto;
    font-size: 14px;
    line-height: 16px;
    font-weight: ${WEIGHT.normal}
`;

const TopHeader = styled.div`
 height: 72px;
 display: flex;
 flex-direction: row;
 align-items: center;
 padding: 0px 32px;
 gap: 32px;
`;

const Col = styled.div`
flex: 1;
font-size: 24px;
font-weight: ${WEIGHT.bold}
`;

const CategoryContainer = styled.div`
flex: 0;
display: flex;
flex-direction: row;
gap: 48px;

`;

const Category = styled.p`
font-size: 18px;
font-weight: ${WEIGHT.medium};
width: max-content;
text-transform: uppercase;
&.sale{
    color: ${COLORS.primary};
}
`;
export default Header;