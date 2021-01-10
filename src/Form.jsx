import React from 'react';

const Form =({name})=>{
  return(
    <form action="" >{name}
      <label htmlFor="name">Digita nombre</label>
      <input id="name" type="text"/>
      <label htmlFor="last-name">Digita Apellidos</label>
      <input id="last-name" type="text"/>
      <label htmlFor="email">ingresa clave</label>
      <input id="email" type="text"/>
    </form>
  )
}
export default Form;