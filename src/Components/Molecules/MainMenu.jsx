import React from 'react';
import { NavLink } from 'react-router-dom'
const MainMenu =()=>{
  return(
   <div>
     <ul>
       {/*el componete NavLink lo usamos en los menus , ya que mediante el atributo activeClassName podemos saber que item del menu esta activo   */}
       <li><NavLink exact to="/" activeClassName ="activo">Inicio</NavLink></li>
       <li><NavLink to="/cursos"activeClassName ="activo" >Cursos</NavLink></li>
       <li><NavLink to="/formulario" activeClassName ="activo" >Formulario</NavLink></li>
     </ul>
   </div>
  )
}
export default MainMenu;
