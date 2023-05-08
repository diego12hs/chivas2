import React,{useState} from 'react'
let i=0
const Hook=()=> {

    const [titulo, setTitulo]=useState("Titulo original")
    const [setPrevState]=useState('')

    const changeTitle=()=>{
        i++
        setPrevState(titulo)
        setTitulo('CAMBIO '+i)
        
    }
    const reverTitle=()=>{
        i=0
        /*setTitulo(prevState)*/
        setTitulo('CAMBIO '+i)
    }
    
  return (
    <>
        <hr />
        <h2>{titulo}</h2>
        <hr />
        <button onClick={()=> changeTitle()}>cambiar</button>
        <br />
        <button onClick={()=> reverTitle()}>revertir</button>
        <br />
    </>
  )
}

export default Hook