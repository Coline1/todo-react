import React from "react";
import ListItem from "./ListItem";
import { useState } from "react";
import "./utilities.css";

const TodoList = () => {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);

  const handleChange = (event) => {
    const value = event.target.value;
    setInputText(value);
  };

  const handleClick = () => {
    const now = new Date().getTime();

    setTodos([...todos, inputText]);
    setInputText("");
    console.log(todos);
  };

  const delTodo = (index) => {
    console.log(index);
    //这种方法避免了当文本内容相同时一次性删除两个或者点两次删除才能同时删除两个内容的问题。
    const newTodos = todos.slice();
    newTodos.splice(index, 1);
    setTodos(newTodos);
    //setTodos(todos.filter((todoObj) => todos.indexOf(todoObj) !== index));
  };

  return (
    <>
      <ul>
        {todos.map((todoObj, index) => (
          <ListItem
            key={`listItem-${index}`}
            content={todoObj}
            delTodo={() => delTodo(index)} //这个地方很简洁但是有点不太好理解，在没有触发该函数时`index`存储在哪里呢？
          />
        ))}
      </ul>
      <input type="text" value={inputText} onChange={handleChange}></input>
      <button onClick={handleClick}>Add to-do</button>
    </>
  );
};

export default TodoList;
