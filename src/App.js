import { useState } from "react";
import "./App.css";
import styled from "@emotion/styled";

const StyleForm = styled('form')`
margin: 0 auto;
height: 200px;
background-color: aqua;
display: flex;
justify-content: center;
padding-top: 50px

`

const StyleInput = styled('input')`
height: 50px;
width: 200px;
border-radius: 20px;
border-color: green;
`
const StyleBtn = styled('button')`
height: 50px;
width: 100px;
border-radius: 20px;
border-color: green;
margin-left: 10px
`


function App() {
  const [input, setInput] = useState("")
  const [add, setAdd] = useState([])

  const inputHandler = (event) => {
    setInput(event.target.value)
    console.log(input);
  }

  const submitHandler = (e) => {
    e.preventDefault()
    setAdd((data) => {
      return [...data, input]
    }
    )

    setInput("")


  }




  return (

    <StyleForm onSubmit={submitHandler}>
      <StyleInput value={input} type="text" onChange={inputHandler} />
      <StyleBtn type="submit" >ADDDD</StyleBtn>
      <ul>
        {add.map((el, index) => {
          return <li key={Math.random}>{el}</li>
        })}
      </ul>
    </StyleForm>

  )


}

export default App;



