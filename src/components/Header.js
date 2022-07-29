import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <StyledHeader>
      <h1>My Todo List</h1>
      <p>React</p>
    </StyledHeader>
  );
};

const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 70px;
  border: 1px solid red;
  padding: 0 20px;
`;

export default Header;
