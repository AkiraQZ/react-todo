import React from "react";

import styles from './App.css';

const DEFAULT_TODO_LIST = [
  {id:1, name: 'task 1', description: "descrition 1", checked: false}, 
  {id:2, name: 'task 2', description: "descrition 2", checked: false}, 
  {id:3, name: 'task 3', description: "descrition 3", checked: false}, 
];

function App () {
  const [todos, setTodos] = React.useState(DEFAULT_TODO_LIST);

  

  return (
    <div className = {styles.app_container}>
      <div className = {styles.container}>todo</div>
    </div>
  )
}

export default App;