import './App.css';
import AddTodo from './components/AddTodo';
import Todos from './components/Todos';

function App() {
  return (
    <div className=" text-center" >
      <h1 className="text-center p-10 text-3xl font-bold">Todo Using RTK</h1>
      <AddTodo />
      <Todos />
    </div >
  );
}

export default App;
