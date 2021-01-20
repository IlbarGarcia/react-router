import React from 'react';
import './Course.css' //importamos el estilo que le vamos a dar a la tarjeta//
// import PropTypes from'prop-types' //importamos la libreria que instalamos 
// import Course from './Course' 

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

   
   const CourseId =({ match })=> /*desestructuramos el objeto porops  los props que enviamos en el componente, tienen que tener el mismo nomre en el argumento de la funcion*/
   {
     const  cursoActual = courses.filter(c => c.id === parseInt(match.params.id))[0] 
    
    return(
    // <Course  lastName={cursoActual.lastName} name={cursoActual.name} id={cursoActual.id} />
       

    <div className="card-container">
      <div className="header">
        <a href="ed.team">
          <img src= "foto.jpg"/>
        </a>
        <h1>{
          cursoActual?
          `${cursoActual.name} ${cursoActual.lastName}`:<p1>no exixte el elemento</p1>
        }
        </h1>
        <h2>Ilbar</h2> 
        <h4>Desarrollador Web</h4>
      </div>
      <div className="desciption">
        <p className="p-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident nisi aut cum, perferendis id vel repudiandae nihil, deleniti omnis assumenda voluptate doloremque illum harum sed inventore sunt ipsa quasi. Consequuntur.</p>
      </div>
    </div>
    )  
   }
  
// CourseId.propTypes ={ //decimos que tipo de dato va a recibir cada propiedad en este caso es string
//   lastName:PropTypes.string,
//   name:PropTypes.string
// }
// CourseId.defaultProps={ //agregamos los valores por defecto que tendria el e;emento curso
//   lastName: 'no se encontro un apellido valido', //este es el valor por defecto para apellido
//   name: 'no se encontro un nombre valido' //este es el valor por defecto para nombre
// }

export default CourseId;