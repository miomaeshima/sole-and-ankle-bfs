import React from 'react';
import Header from '../Header';
import Main from '../Main';

import styled from 'styled-components/macro';

function App() {
  return (
    <Wrapper>
    <Header/>
    <Main/>
    </Wrapper>
  );
}

const Wrapper = styled.div`
display:flex;
flex-direction: column;
`;

export default App;
