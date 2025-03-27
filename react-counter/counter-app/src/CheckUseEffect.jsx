import React, { useEffect, useState } from "react";

function CheckUseEffect() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/todos')
      .then(async (res) => {
        const json = await res.json();
        setTodos(json.todos);
      })
  }, []);

  return (
    <div>
      {todos.map(({ id, todo }) => (
        <Todo key={id} title={todo}  />
      ))}
    </div>
  );
}

function Todo({ title }) {
  return (
    <div>
      <h2>{title}</h2>
    </div>
  );
}

export default CheckUseEffect;
