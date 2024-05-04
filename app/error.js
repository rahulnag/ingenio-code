'use client'
import styles from './page.module.css'

//default error component
const error = () => {
    return (
        <div>
            <h1 className={styles['error-heading']}>Error loading the page</h1>
        </div>
    );
};

export default error;