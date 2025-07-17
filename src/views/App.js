import logo from './logo.svg';
import './App.scss';
import MyComponent from './examples/MyComponent';
import TodoList from './Todos/ListTodo';
import { ToastContainer, toast } from 'react-toastify';
import { Bounce } from 'react-toastify';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Simple Todo App with React !!!
        </p>

        {/* <MyComponent /> */}
        <TodoList />
      </header>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
    </div>
  );
}

export default App;
