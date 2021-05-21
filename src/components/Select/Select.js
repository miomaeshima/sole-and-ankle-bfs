import React from "react";
import Icon from "../Icon";
import { COLORS, WEIGHTS } from "../../constants";
import styled from "styled-components/macro";

const Select = ({ label, value, children, ...delegated }) => {
  const childArray = React.Children.toArray(children);
  const selectedChild = childArray.find((child) => child.props.value === value);

  const displayedValue = selectedChild.props.children;
  console.log(children)

  return (
    <Wrapper>
      <Label>{label}</Label>
      <SelectWrapper>
        <NativeSelect {...delegated}>{children}</NativeSelect>
        <DisplayedBit>
          {displayedValue} 
          <ChevronIcon id="chevron-down" size={24} strokeWidth={1.5} />
        </DisplayedBit>
      </SelectWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.label`
  display: flex;
  gap: 16px;
  align-items: center;
`;

const SelectWrapper = styled.div`
  position: relative;
`;

const Label = styled.span`
  font-size: 16px;
  font-style: ${WEIGHTS.medium};
  color: ${COLORS.gray700};
`;

const NativeSelect = styled.select`
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  cursot: pointer;
`;

const DisplayedBit = styled.span`
  display: block;
  background: ${COLORS.gray100};
  font-size: 1rem;
  font-weight: ${WEIGHTS.medium};
  color: ${COLORS.gray900};
  padding: 12px 42px 12px 16px;
  border-radius: 9px;
  pointer-events: none;

  ${NativeSelect}:focus ~ & {
    outline: 1px dotted #212121;
    outline: 5px auto -webkit-focus-ring-color;
  }
`;

const ChevronIcon = styled(Icon)``;

export default Select;
