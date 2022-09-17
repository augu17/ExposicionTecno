import React from 'react'
import "./Vista2.css";
import proyectos from "../../../assets/marga/proyectos.gif";

export const Vista2 = () => {
  return (
    <div className='vista2-container'>
        <div className='vista2-desc'>
            <h3>Descripción</h3>
            <p>LorenLorenLoereLoremLoerenaldmkrfnv</p>
        </div>
        <div className='vista2-imagen'>
            <img src={proyectos}/>
        </div>
    </div>
  )
}
export default Vista2;
