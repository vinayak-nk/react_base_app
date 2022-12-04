import { memo } from "react";

const Todos = ({ todos, addTodo, cmp }) => {
  console.log(`ToDO render: ${cmp}`);
  return (
    <>
      <h2>My Todos</h2>
      {todos.map((todo, index) => {
        return <p key={index}>{todo}</p>;
      })}
      <button onClick={addTodo}>Add Todo</button>
    </>
  );
};

export default memo(Todos);