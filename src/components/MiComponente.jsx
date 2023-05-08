import React from 'react'
 // FUNCION DE FLECHA
const MiComponente = () => {
  let nombre = "DIEGO"
  //METODO DE EVENTO 
const miEvento = (edad, genero) =>{
  alert(`HOLA ${nombre } tu edad es ${edad} y eres ${genero}`)
}
  return (
  <>
        <h2>HOLA {nombre}</h2>
        <button onClick={() => miEvento(22,"homosexual")}>pulsame</button>
  </>

    
  )
  
}

export default MiComponente