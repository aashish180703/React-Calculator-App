import { useState } from 'react'
import Container from './components/Container'
import Display from './components/display'
import ButtonContainer from './components/ButtonContainer'
import './App.css'

function App() {
  const [calVal, setCalVal] = useState("")
  const btnHandler = (item)=>{
    if(item === 'C'){
      const newVal = ""
      setCalVal(newVal)
    }
    else if(item === '='){
      const result = eval(calVal)
      setCalVal(result)
    }
    else{
      const newVal = calVal + item;
      setCalVal(newVal)
    }
    }
  return (
    <>
      <h1 className="text-center ">
  Calculator
</h1>
      <Container>
        <Display dispVal={calVal}></Display>
        <ButtonContainer onBtnclick={btnHandler}></ButtonContainer>
      </Container>
    </>
  )
}

export default App
