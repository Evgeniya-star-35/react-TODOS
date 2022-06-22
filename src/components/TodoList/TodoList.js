import s from './TodoList.module.css';
const TodoList = ({ todos, onDeleteTodo }) => (
    <ul className="TodoList">
        {todos.map(({ id, text }) => (
            <li key={id} className={s.TodoList__item}>
                <p className={s.TodoList__text}>{text}</p>
                <button onClick={() => onDeleteTodo(id)}>Удалить</button>
            </li>
        ))}
    </ul>
);
export default TodoList;
