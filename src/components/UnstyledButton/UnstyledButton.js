import styled from 'styled-components/macro';

export default styled.button`
  display: ${(props) => props.display || 'block'};
  margin: 0;
  padding: 0;
  border: none;
  background: transparent;
  cursor: pointer;
  text-align: left;
  font: inherit;
  color: inherit;

  &:focus {
    outline-offset: 2px;
  }
  /* what does this mean? (   ) */
  &:focus:not(:focus-visible) {
    outline: none;
  }
`;
