import Items from "./Items"
import styles from "./ButtonContainer.module.css"
function ButtonContainer({onBtnclick}){
    let btnArr = ['C','1','2','3','+','4','5','6','-','7','8','9','*','/','.','0','=']

    return(
        <div className={styles.btnContainer}>
            {btnArr.map((item)=>(
                <Items key={item} ele={item} btnClick={()=>onBtnclick(item)}></Items>
            ))}
        </div>
    )
}

export default ButtonContainer