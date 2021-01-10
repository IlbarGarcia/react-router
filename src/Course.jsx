import './Course.css' //importamos el estilo que le vamos a dar a la tarjeta//
import PropTypes from'prop-types' //importamos la libreria que instalamos 
const user ={name:"Ilbar",lastName:"Garcia",age:30} 
const edadUsuario= edad => edad>33 
 


const Course =({lastName,name,id})=> /*desestructuramos el objeto porops  los props que enviamos en el componente, tienen que tener el mismo nomre en el argumento de la funcion*/
 (   
    <div className="card-container">
      <div className="header">
        <a href="ed.team">
          <img src='https://lh3.googleusercontent.com/proxy/i5OGshVCrnpBE37pP08458Tdjynee-qwT1CZXQzw9AaWCpTZzsLa55UBfXGri8nxbMKRn2K7r6zMvlxCVbomUqqR_WSGU6L0hbUf4Qk7oj9OUB7a_H-1VjSxaFd0ogdRqLTQC-fAK' alt=""/>
        </a>
        <h2>{`${name} ${lastName}`}</h2> {/*dentro de las llaves podemos escribir javascript puro, es decir podemos hacer referncia a una variable creada o a un obejto o a una funcion , cualquier cosa que sea javacript puro, dentro de las llaves recibimos el valor de nombre que recibimos como props  */}
        <h3>{edadUsuario(user.age)?<h1>es mayor</h1>:<h3>es menor</h3>}</h3> {/*aqui dentro de las llaves llamamos la funcion, y utilizamos operadores ternarios para validar, ya que no podemos usar if observemos que en el opreador ternario podemos devolver un texto un elemento o un componente  */}
        <h4>Desarrollador Web</h4>
      </div>
      <div className="desciption">
        <p className="p-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident nisi aut cum, perferendis id vel repudiandae nihil, deleniti omnis assumenda voluptate doloremque illum harum sed inventore sunt ipsa quasi. Consequuntur.</p>
        <button className="button">clic</button>
      </div>
    </div>  
 )
  
Course.propTypes ={ //decimos que tipo de dato va a recibir cada propiedad en este caso es string
  lastName:PropTypes.string,
  name:PropTypes.string
}
Course.defaultProps={ //agregamos los valores por defecto que tendria el e;emento curso
  lastName: 'no se encontro un apellido valido', //este es el valor por defecto para apellido
  name: 'no se encontro un nombre valido' //este es el valor por defecto para nombre
}

export default Course; //exportamos el elemento que creamos