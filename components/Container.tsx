import styles from '../styles/component styles/Container.module.css'

const Container = ({ children }) => {
    return (
        <div className={styles["container"]}>
            {children}
        </div>
    )
}

export default Container