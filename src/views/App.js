import logo from './logo.svg';
import './App.scss';
import MyComponent from './examples/MyComponent';
import TodoList from './Todos/ListTodo';
import { ToastContainer, toast } from 'react-toastify';
import { Bounce } from 'react-toastify';
import Nav from './Nav/Nav';
import Home from './examples/Home';

import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Nav />
          <img src={logo} className="App-logo" alt="logo" />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/todos" element={<TodoList />} />

            <Route path="/about" element={<MyComponent />} />

          </Routes>

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
    </BrowserRouter>
  );
}

export default App;
