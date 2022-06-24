import React, { Component } from 'react';
import Title from './components/Title';
import TodoList from './components/TodoList';
import initialTodos from './todos.json';
import Form from './components/Form';
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
    toggleCompleted = todoId => {
        console.log(todoId);
        this.setState(({ todos }) => ({
            todos: todos.map(todo =>
                todo.id === todoId
                    ? { ...todo, completed: !todo.completed }
                    : todo,
            ),
        }));
    };
    formSubmit = data => {
        console.log(data);
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
                <Form onSubmit={this.formSubmit} />
                <TodoList
                    todos={todos}
                    onDeleteTodo={this.deleteTodo}
                    onToggleCompleted={this.toggleCompleted}
                />
                <div>
                    <p>Общее количество: {totalTodoCount}</p>
                    <p>Количество выполненных: {completedTodoCount}</p>
                </div>
            </section>
        );
    }
}

export default App;
