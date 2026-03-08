import styles from "./Display.module.css"
function Display({dispVal}){
    return (
        <input className={styles.input} type="text" value={dispVal} readOnly/>
    )
}
export default Display