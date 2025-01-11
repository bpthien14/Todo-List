import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import { useState, useEffect } from "react";

function App() {
  const [todos, setTodos] = useState([]);
  const [todoValue, setTodoValue] = useState("");

  function persistData(newList) {
    localStorage.setItem("todos", JSON.stringify({ todos: newList }));
  }

  function handleAddTodo(newTodo) {
    if (newTodo.trim() && newTodo.length <= 60) {
      const newTodos = [...todos, newTodo];
      setTodos(newTodos);
      persistData(newTodos);
    }
  }

  function handleDeleteTodo(index) {
    const newTodoList = todos.filter((todo, todoIndex) => {
      return todoIndex !== index;
    });
    persistData(newTodoList);
    setTodos(newTodoList);
  }

  function handleEditTodo(todoIndex, newTodo) {
    const newTodos = todos.map((todo, index) => {
      if (index === todoIndex) {
        return newTodo;
      }
      return todo;
    });
    setTodos(newTodos);
    persistData(newTodos);
  }

  useEffect(() => {
    if (!localStorage) {
      return;
    }

    let localTodos = localStorage.getItem("todos");
    if (!localTodos) {
      return;
    }

    console.log(localTodos);
    localTodos = JSON.parse(localTodos).todos;
    setTodos(localTodos);
  }, []);

  return (
    <main>
      <TodoInput handleAddTodo={handleAddTodo} />
      <TodoList
        handleDeleteTodo={handleDeleteTodo}
        handleEditTodo={handleEditTodo}
        todos={todos}
      />
    </main>
  );
}

export default App;
