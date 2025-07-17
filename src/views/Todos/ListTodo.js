import React from 'react';
import './ListTodo.scss';
import AddTodo from './AddTodo';
import { toast } from 'react-toastify';

class TodoList extends React.Component {

    state = {
        listTodos: [
            { id: 'todo1', title: 'Learn React' },
            { id: 'todo2', title: 'Learn English' },
            { id: 'todo3', title: 'Learn Java Backend' }
        ],
        editTodo: {}
    }
    handleAddTodo = (todo) => {
        this.setState({
            listTodos: [...this.state.listTodos, todo]
        })
        toast.success('Wow so easy!')
    }
    handleDeleteTodo = (id) => {
        let currentTodos = this.state.listTodos;
        currentTodos = currentTodos.filter(item => item.id !== id);
        this.setState({
            listTodos: currentTodos
        });
        toast.success('Delete succeed!')
    }
    handleEditTodo = (todo) => {
        let { editTodo } = this.state;
        let isEmptyObj = Object.keys(editTodo).length === 0;
        if (isEmptyObj === false && editTodo.id === todo.id) {
            let listTodoCopy = this.state.listTodos;
            let objIndex = listTodoCopy.findIndex(item => item.id === todo.id);
            listTodoCopy[objIndex].title = editTodo.title;
            this.setState({
                listTodos: listTodoCopy,
                editTodo: {}
            });
            toast.success('Update succeed!');
            return;
        }

        this.setState({
            editTodo: todo
        });
    }
    handleOnChangeEdit = (event) => {
        // let editCopy = { ...this.state.editTodo };
        // editCopy.title = event.target.value;
        this.setState({
            editTodo: {
                id: this.state.editTodo.id,
                title: event.target.value
            }
        })
    }
    render() {
        let { listTodos, editTodo } = this.state;
        let isEmptyObj = Object.keys(editTodo).length === 0;
        // console.log('Check Obj ', isEmptyObj);
        return (
            <div className="todo-list-container">
                <AddTodo handleAddTodo={this.handleAddTodo} />
                <div className="list-todo-content">
                    {listTodos && listTodos.length > 0 &&
                        listTodos.map((item, index) => {
                            return (
                                <div className="todo-child" key={item.id}>
                                    {isEmptyObj === true ?
                                        <span>{index + 1} - {item.title}</span>
                                        :
                                        <>
                                            {
                                                editTodo.id === item.id ?
                                                    <span>{index + 1} - <input
                                                        value={editTodo.title}
                                                        onChange={(event) => { this.handleOnChangeEdit(event) }} />
                                                    </span>
                                                    :
                                                    <span>{index + 1} - {item.title}</span>
                                            }
                                        </>
                                    }
                                    <button className="edit" onClick={() => this.handleEditTodo(item)}>
                                        {isEmptyObj === false && editTodo.id === item.id ? 'Save' : 'Edit'}
                                    </button>
                                    <button className="delete"
                                        onClick={() => this.handleDeleteTodo(item.id)}
                                    >Delete</button>
                                </div>
                            )
                        })
                    }

                </div>
            </div>
        )
    }
}
export default TodoList;