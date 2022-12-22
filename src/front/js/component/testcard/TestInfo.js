import React from 'react'
//COMPONENTE HIJO
const TestInfo = ({fecha, hora, ubicacion}) => {
  return (
    <div>
        <span>{fecha}</span>
        <span>{hora}</span>
        <span>{ubicacion}</span>
    </div>
  )
}

export default TestInfo