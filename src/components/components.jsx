import React, {useState} from 'react'
{/*importar el estilo css del Sidebar*/}
export default function Micomponente() {
     const [texto, setTexto] = useState()
     const [update, setupdate] = useState()

     const textOnChange = (event) => {
            setTexto(event.target.value)}
    const buttonOnClick = () => {
        setupdate(texto) }

  return (
    <div>
          {/*
         <input type="text" value={texto} onChange={textOnChange} /> 
         <button onClick={buttonOnClick}>Actualizar</button>
            <p>texto input: {texto}</p>
            <p>texto actualizado: {update}</p>
            */}
    </div>
  )
}
