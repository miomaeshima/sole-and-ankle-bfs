import React from "react";
import styled from "styled-components/macro";

import { COLORS, WEIGHTS } from "../../constants";
import { formatPrice, pluralize, isNewShoe } from "../../utils";

const ShoeCard = ({
  slug,
  name,
  imageSrc,
  price,
  salePrice,
  releaseDate,
  numOfColors,
}) => {
  // There are 3 variants possible, based on the props:
  //   - new-release
  //   - on-sale
  //   - default
  //
  // Any shoe released in the last month will be considered
  // `new-release`. Any shoe with a `salePrice` will be
  // on-sale. In theory, it is possible for a shoe to be
  // both on-sale and new-release, but in this case, `on-sale`
  // will triumph and be the variant used.
  // prettier-ignore

  //imageのsrcはpublicフォルダからのパスになるよう。

  const variant = typeof salePrice === 'number'
    ? 'on-sale'
    : isNewShoe(releaseDate)
      ? 'new-release'
      : 'default';

  return (
    <Link href={`/shoe/${slug}`}>
      <Wrapper>
        <ImageWrapper>
          {typeof salePrice==='number'
          ? <Notice>Sale</Notice>
          : 
          isNewShoe(releaseDate)
            ? <Notice>Just Released!</Notice>
            : "none" }
          <Image alt="" src={imageSrc} />
        </ImageWrapper>
        <Row>
          <Name>{name}</Name>
          <Price>{formatPrice(price)}</Price>
        </Row>
        <Row>
          <ColorInfo>{pluralize("Color", numOfColors)}</ColorInfo>
        </Row>
      </Wrapper>
    </Link>
  );
};

const Link = styled.a`
  text-decoration: none;
  color: inherit;
`;

const Wrapper = styled.article`
width: 340px;
`;

const ImageWrapper = styled.div`
  position: relative;
  
  
`;

const Image = styled.img`
    width: 100%;
    margin-bottom: 14px;
    border-radius: 16px 16px 4px 4px;
  
`;

const Notice = styled.div`
  position: absolute;
  top: 12px;
  right: -4px;
  font-size: 14px;
  color: ${COLORS.white};
  background-color: blue;
  padding: 9px 10px 7px 10px;
  

`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 1rem;  
  margin: 6px 0px 26px 0px;
`;

const Name = styled.h3`
  font-weight: ${WEIGHTS.medium};
  color: ${COLORS.gray900};
`;

const Price = styled.span``;

const ColorInfo = styled.p`
  color: ${COLORS.gray700};
`;

const SalePrice = styled.span`
  font-weight: ${WEIGHTS.medium};
  color: ${COLORS.primary};
`;

export default ShoeCard;
