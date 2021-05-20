import React from "react";
import styled from "styled-components/macro";
import Sort from "../Sort";
import TopSpace from "../TopSpace";
import { WEIGHTS } from "../../constants";
import SHOES from "../../data";
import ShoeCard from "../ShoeCard";

const ProductSection = () => {
 

  return (
    <Wrapper>
      <TopSpace />
      <Header>
        <Type>Running</Type>
        <Sort />
      </Header>
      <ProductContainer>
        {SHOES.map((shoe) => (
          <ShoeCard key={shoe.slug} {...shoe} />
        ))}
      </ProductContainer>
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
  background: pink;
  margin-bottom: 43px;
`;

const Type = styled.div`
  font-size: 24px;
  font-weight: ${WEIGHTS.medium};
`;

const ProductContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 36px;
`;

export default ProductSection;
