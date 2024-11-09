import styles from '../styles/Store.module.css';
import SearchBar from "../components/SearchBar"

export default function Store() {
    return (
        <>
        <div className={styles.fakestore}>
            <h1>Fake Store</h1>
            <p>Welcome to my fake store</p>
            <p>Here you will find a variety of products that dont exist</p>
            <SearchBar />
        </div>
        </>
    );
};