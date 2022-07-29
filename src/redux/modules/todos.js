// Action Value
const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";

// Action Creator
export const addTodo = (payload) => {
  return { type: ADD_TODO, payload };
};

export const deleteTodo = (payload) => {
  return { type: DELETE_TODO, payload };
};

// Initial State
const initialState = [
  {
    id: 0,
    title: "react 기초",
    body: "기초를 배워봅시다.",
    isDone: false,
  },
];

// Reducer
const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];
    case DELETE_TODO:
      return [...state.filter((todo) => todo.id !== action.payload)];
    default:
      return state;
  }
};

// export default reducer
export default todos;
