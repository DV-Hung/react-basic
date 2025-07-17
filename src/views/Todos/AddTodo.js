import React from 'react';
import { toast } from 'react-toastify';

class AddTodo extends React.Component {
    state = {
        title: ''
    }
    handleInputChange = (event) => {
        this.setState({
            title: event.target.value
        })
    }
    handleAddTodo = () => {
        if (!this.state.title) {
            toast.error('Missing title Todo!');
            return;
        }
        this.props.handleAddTodo({
            id: Math.floor(Math.random() * 1001),
            title: this.state.title
        })

        this.setState({
            title: ''
        });
    }

    render() {
        return (
            <div className="add-todo">
                <label htmlFor="todo-title" style={{ fontSize: '18px' }}>Todo Title: </label>
                <input type="text" value={this.state.title} onChange={(event) => this.handleInputChange(event)} />
                <button type="button" className="add" onClick={() => this.handleAddTodo()}>Add</button>
            </div>
        )
    }
}
export default AddTodo;