import styles from '../styles/components styles/Container.module.css'

const Container = ({children}) => {
   return ( 
      <div className={styles["container"]}>
         {children}
      </div>
   );
}

export default Container;