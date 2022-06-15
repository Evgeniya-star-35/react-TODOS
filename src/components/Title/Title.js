import s from './Title.module.css';
const Title = ({ value }) => {
    return <h1 className={s.title}>{value}</h1>;
};

export default Title;
