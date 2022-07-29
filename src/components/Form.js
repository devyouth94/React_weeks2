import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { addTodo } from "../redux/modules/todos";

let number = 1;

const Form = () => {
  const initialState = {
    title: "",
    body: "",
  };
  const [todo, setTodo] = useState(initialState);
  const dispatch = useDispatch();

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setTodo({ ...todo, [name]: value });
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (todo.title === "" || todo.body === "") {
      return alert("내용을 입력하세요!");
    }

    dispatch(
      addTodo({
        id: number,
        title: todo.title,
        body: todo.body,
        isDone: false,
      })
    );
    number++;
    setTodo(initialState);
  };

  return (
    <StyledForm onSubmit={onSubmitHandler}>
      <StyledInputGroup>
        <label>제목</label>
        <input
          type="text"
          name="title"
          value={todo.title}
          onChange={onChangeHandler}
        />
        <label>내용</label>
        <input
          type="text"
          name="body"
          value={todo.body}
          onChange={onChangeHandler}
        />
      </StyledInputGroup>
      <button>추가하기</button>
    </StyledForm>
  );
};

const StyledForm = styled.form`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  border: 1px solid blue;
`;

const StyledInputGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export default Form;
