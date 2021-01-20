import React from 'react';
import Course from '../Organisms/Course' 

const courses=[
   {
    id:1, 
    name:'Ilbar',
    lastName:'Garcia'
   },
   {
    id:2, 
    name:'Erika',
    lastName:'Castro'
   },
   {
    id:3, 
    name:'Argemiro',
    lastName:'Gomez' 
   },
   {
    id:4, 
    name:'Omar',
    lastName:'Perez' 
   },
   {
    id:5, 
    name:'Jhon',
    lastName:'Viafara' 
   }]
 const GridCourse= () => {
    return(
    <div>
    {  
      courses.map(a=> <Course key={a.id} lastName={a.lastName} name={a.name} id={a.id} />)
      //los props que enviamos en el componente, tienen que tener el mismo nomre en el argumento de la funcion//
    }  
    </div>
    )
 };


export default GridCourse; //exportamos el componente App
