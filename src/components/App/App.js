import React from "react";
import Header from "../Header";
import Nav from "../Nav";
import ProductSection from "../ProductSection";
import { COLORS, WEIGHT } from "../../constants";

import styled from "styled-components/macro";

function App() {
  return (
    <Wrapper>
      <Header />
      <Main>
        <Nav />
        <ProductSection />
      </Main>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  color: ${COLORS.gray900};
`;

const Main = styled.div`
 display: flex;
`;
export default App;
