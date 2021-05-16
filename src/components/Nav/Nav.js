import React from "react";
import styled from "styled-components/macro";
import { COLORS, WEIGHT } from "../../constants";
import Breadcrumbs from "../Breadcrums";

const Nav = () => {
  return (
    <Wrapper>
      <Breadcrumbs />
      <ol>
        <Li>Lifestyle</Li>
        <Li>jordan</Li>
        <Li>running</Li>
        <Li>basketball</Li>
        <Li>training & gym</Li>
        <Li>football</Li>
        <Li>american football</Li>
        <Li>baseball</Li>
        <Li>golf</Li>
        <Li>tennis</Li>
        <Li>athletics</Li>
        <Li>walking</Li>
      </ol>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  flex: 0 1 250px;
  background: lightgreen;
  padding: 0 32px;
`;

const Li = styled.li`
 text-transform: capitalize;
 font-size: 16px;
 line-height: 32px;
`;
export default Nav;
