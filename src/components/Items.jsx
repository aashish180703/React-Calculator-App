import styles from "./Items.module.css"
function Items({ele,btnClick}){
    return(
        <button className={styles.btn} onClick={btnClick}>{ele}</button>
    )
}

export default Items