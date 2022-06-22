import React, { Component } from 'react';
import Title from './components/Title';
import TodoList from './components/TodoList';
import initialTodos from './todos.json';
import './App.css';

class App extends Component {
    state = {
        todos: initialTodos,
    };

    deleteTodo = todoId => {
        this.setState(prevState => ({
            todos: prevState.todos.filter(todo => todo.id !== todoId),
        }));
    };

    render() {
        const { todos } = this.state;

        const totalTodoCount = todos.length;
        const completedTodoCount = todos.reduce(
            (total, todo) => (todo.completed ? total + 1 : total),
            0,
        );

        return (
            <section className="section">
                <Title value="Todos" />

                <div>
                    <p>Общее кол-во: {totalTodoCount}</p>
                    <p>Кол-во выполненных: {completedTodoCount}</p>
                </div>

                <TodoList todos={todos} onDeleteTodo={this.deleteTodo} />
            </section>
        );
    }
}

export default App;
