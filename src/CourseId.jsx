import './Course.css' //importamos el estilo que le vamos a dar a la tarjeta//
import PropTypes from'prop-types' //importamos la libreria que instalamos 
 


const CourseId =({lastName,name,id,image})=> /*desestructuramos el objeto porops  los props que enviamos en el componente, tienen que tener el mismo nomre en el argumento de la funcion*/
 (   
    <div className="card-container">
      <div className="header">
        <a href="ed.team">
          <img src= {image}/>
        </a>
        <h2>{`${name} ${lastName}`}</h2> 
        <h4>Desarrollador Web</h4>
      </div>
      <div className="desciption">
        <p className="p-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident nisi aut cum, perferendis id vel repudiandae nihil, deleniti omnis assumenda voluptate doloremque illum harum sed inventore sunt ipsa quasi. Consequuntur.</p>
        <button className="button">clic</button>
      </div>
    </div>  
 )
  
CourseId.propTypes ={ //decimos que tipo de dato va a recibir cada propiedad en este caso es string
  lastName:PropTypes.string,
  name:PropTypes.string
}
CourseId.defaultProps={ //agregamos los valores por defecto que tendria el e;emento curso
  lastName: 'no se encontro un apellido valido', //este es el valor por defecto para apellido
  name: 'no se encontro un nombre valido' //este es el valor por defecto para nombre
}

export default CourseId;