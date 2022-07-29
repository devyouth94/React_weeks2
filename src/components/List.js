import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Todo from "./Todo";

const List = () => {
  const todos = useSelector((state) => state.todos);

  return (
    <div>
      <StyledSection>
        <h2>Working</h2>
        <StyledBox>
          {todos.map((todo) => {
            if (!todo.isDone) {
              return <Todo key={todo.id} todo={todo} />;
            }
          })}
        </StyledBox>
      </StyledSection>
      <StyledSection>
        <h2>Done</h2>
        <StyledBox>
          {todos.map((todo) => {
            if (todo.isDone) {
              return <Todo key={todo.id} todo={todo} />;
            }
          })}
        </StyledBox>
      </StyledSection>
    </div>
  );
};

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  border: 1px solid orange;

  h2 {
    display: flex;
    align-items: center;
    height: 50px;
    padding: 0 20px;
    border: 1px solid magenta;
  }
`;

const StyledBox = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export default List;
