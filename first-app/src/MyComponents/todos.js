import React from 'react'
import{TodoItem} from "../MyComponents/todoItem"

export const Todos = () => {
  return (
    <div className="container">
      <h3>To DO List</h3>
      <TodoItem todo = {Todos}/>
    </div>
  )
}
