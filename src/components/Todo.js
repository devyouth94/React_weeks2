import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { deleteTodo, toggleStatus } from "../redux/modules/todos";

const Todo = ({ todo }) => {
  const dispatch = useDispatch();

  const onDeleteHandler = () => {
    dispatch(deleteTodo(todo.id));
  };

  const toggleStatusHandler = () => {
    dispatch(toggleStatus(todo.id));
  };

  return (
    <StyledTodo>
      <a>상세보기</a>
      <h3>{todo.title}</h3>
      <p>{todo.body}</p>
      <div>
        <button onClick={onDeleteHandler}>삭제하기</button>
        <button onClick={toggleStatusHandler}>
          {todo.isDone ? "취소" : "완료"}
        </button>
      </div>
    </StyledTodo>
  );
};

const StyledTodo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 25%;
  height: 150px;
  padding: 20px;
  box-sizing: border-box;
  border: 1px solid green;
`;

export default Todo;
