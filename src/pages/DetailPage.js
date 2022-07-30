import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getTodoById } from "../redux/modules/todos";

const DetailPage = () => {
  // const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  // useEffect(() => {
  //   dispatch(getTodoById(id));
  // }, []);

  const todos = useSelector((state) => state.todos);

  return (
    <>
      {todos.map((todo) => {
        if (todo.id === parseInt(id)) {
          return (
            <div key={todo.id}>
              <div>
                <p>ID: {todo.id}</p>
                <button onClick={() => navigate("/")}>이전으로</button>
              </div>
              <div>
                <h1>{todo.title}</h1>
                <p>{todo.body}</p>
              </div>
            </div>
          );
        }
      })}
    </>
  );
};

export default DetailPage;
