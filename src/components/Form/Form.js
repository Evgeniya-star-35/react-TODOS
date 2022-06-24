import React, { Component } from 'react';
import './Form.scss';

class Form extends Component {
    state = { todoValue: '' };
    handleChange = ({ target }) => {
        this.setState({
            todoValue: target.value,
        });
    };
    handleSubmit = e => {
        e.preventDefault();
        this.props.onSubmit(this.state.todoValue);
        this.reset();
    };
    reset = () => {
        this.setState({ todoValue: '' });
    };
    render() {
        const { todoValue } = this.state;
        return (
            <form className="TodoEditor" onSubmit={this.handleSubmit}>
                <label>
                    <input
                        className="TodoEditor__input"
                        type="text"
                        value={todoValue}
                        onChange={this.handleChange}
                        placeholder="What needs do be done?"
                    />
                </label>
            </form>
        );
    }
}
export default Form;
