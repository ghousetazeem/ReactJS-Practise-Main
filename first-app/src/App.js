import './App.css';
import Header from './MyComponents/header';
import {Footer} from './MyComponents/footer';
import {Todos} from './MyComponents/todos'
// import {TodoItem} from './MyComponents/todoItem'

function App() {
  
  let todos = [
    {
      sno: 1,
      title: "Go to the Market",
      desc: "U need to go to the market to buy foods"
    },
    {
      sno: 2,
      title: "Go to the Mall",
      desc: "U need to go to the market to buy foods"
    },
    {
      sno: 3,
      title: "Go to the Gym",
      desc: "U need to go to the market to buy foods"
    }
  ]

  return (
    <>
      <Header title = "My ToDo's List"  />
      <Todos todos = {todos}/>
      <Footer/>
    </>
  );
}

export default App;
