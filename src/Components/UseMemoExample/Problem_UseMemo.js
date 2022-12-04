import { useState } from "react";


const expensiveCalculation = (num) => {
  console.log("Problem Calculating...");
  let start = Date.now()
  for (let i = 0; i < 1000000000; i++) {
    num += 1;
  }
  console.log('Time', (Date.now() - start)/1000)
  return num;
};

const App = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);
  const calculation = expensiveCalculation(count);

  const increment = () => {
    setCount((c) => c + 1);
  };
  const addTodo = () => {
    setTodos((t) => [...t, "New Todo"]);
  };

  return (
    <div>
      {/* todo Components START*/}
      <div>
        <h2>My Todos</h2>
        {todos.map((todo, index) => {
          return <p key={index}>{todo}</p>;
        })}
        <button onClick={addTodo}>Add Todo</button>
      </div>
      {/* todo Components END */}
      <hr />
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
        <h2>Expensive Calculation</h2>
        {calculation}
      </div>
    </div>
  );
};

export default App