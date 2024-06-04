import { useState } from "react";
import "./App.css";
import FormComponent from "./components/FormComponent/FormComponent";
import TodoItem from "./components/TodoItem/TodoItem";

function App() {
  const [list, setList] = useState([]);

  const addTodoHandler = (data) => {
    setList((prevState) => {
      return [...prevState, data];
    });
  };

  const deleteTodo = (title) => {
    setList((prevState) => {
      // const newState = JSON.parse(JSON.stringify(prevState));
      return prevState.filter((item) => item.title !== title);
    });
  };
  return (
    <div className="container-lg">
      <FormComponent addTodoHandler={addTodoHandler} />

      {list.map((item, index) => {
        return (
          <TodoItem
            title={item.title}
            description={item.description}
            key={index}
            deleteTodo={deleteTodo}
          />
        );
      })}
    </div>
  );
}

export default App;
