import React from "react";
import styled from "styled-components";

const Layout = (props) => {
  return <StyledLayout>{props.children}</StyledLayout>;
};

const StyledLayout = styled.div`
  background-color: aliceblue;
  max-width: 1200px;
  min-width: 800px;
  height: 100vh;

  margin: 0 auto;
`;

export default Layout;
