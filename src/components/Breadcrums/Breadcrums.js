import React from "react";
import styled from "styled-components/macro";
import { COLORS } from "../../constants";

//Breadcrumbsのchildrenはサブコンポーネント的なBreadcrumbs.Crumbsみっつ。
//Breadcrumbsをオブジェクトとし、ドット記法にすることで、Breadcrumbsをインポートするファイルで
//Breadcrumbs.Crumbsを使えるようになる。
const Breadcrumbs = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};
//Breadcrumbはアンカーの中に表記があるもののつながり。
//間を／でつなぐ。／は::beforeでつけることで読み上げられえなくなる。

Breadcrumbs.Crumb = ({ href, children, delegated }) => {
  return (
    <CrumbWrapper>
      <CrumbLink href={href} {...delegated}>
        {children}
      </CrumbLink>
    </CrumbWrapper>
  );
};

const CrumbWrapper = styled.div`
  &:not(:first-of-type) {
    margin-left: 8px;

    &::before {
      content: "/";
      margin-right: 8px;
      color: ${COLORS.gray300};
    }
  }
`;

const CrumbLink = styled.a`
  color: ${COLORS.gray700};
  text-decoration: none;

  &:hover {
    color: ${COLORS.gray900};
  }
`;
const Wrapper = styled.nav`
  display: flex;
  align-items: center;
  font-size: 0.875rem;
`;

export default Breadcrumbs;
