import React from "react";
import styled from "styled-components/macro";
import Sort from '../Sort';
import TopSpace from '../TopSpace';
import {WEIGHT} from '../../constants'

const ProductSection = () => {
  return (
  <Wrapper>
  <TopSpace/>
  <Header><Type>Running</Type><Sort/></Header>
  <ProductContainer></ProductContainer>
  </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-left: 32px;
  padding-right: 36px;
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 24px;
  background:pink;

`;

const Type = styled.div`
  font-size: 24px;
  font-weight: ${WEIGHT.medium};
`;

const ProductContainer = styled.div`
`;


export default ProductSection;
