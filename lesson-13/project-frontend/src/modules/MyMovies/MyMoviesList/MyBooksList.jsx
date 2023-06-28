import styles from "./my-books-list.module.scss";

const {REACT_APP_BACKEND_URL} = process.env;

const MyBooksList = ({ items, onDeleteMovie }) => {
    const elements = items.map(({ _id, title, director, poster }) => (
        <li className={styles.listItem} key={_id}>
            <img width="100" src={`${REACT_APP_BACKEND_URL}/${poster}`} />
            Title: {title}. Director: {director}. <button onClick={() => onDeleteMovie(_id)}>delete</button>
        </li>
    ))

    return (
        <ol className={styles.list}>
            {elements}
        </ol>
    )
}

export default MyBooksList;