import GridCourse from "./Components/Organisms/GridCourse";
import MainPage from "./Components/Page/MainPage"
import React from 'react';
import Form from "./Components/Page/Form";
import CourseId from "./Components/Molecules/CourseId";
import {BrowserRouter as Router, Route, Switch  } from "react-router-dom";
import MainMenu from "./Components/Molecules/MainMenu"

const App= () => (
    <Router>
      <MainMenu /> {/*con este componente estamos creando un menu principal lo llamamos fuea del switch para que siempre aparzca */}
      <Switch>
        <Route path ='/' exact component ={MainPage} /> {/* mostramos el componente en la ruta principal */}
        <Route path ='/cursos/:id' component ={CourseId} />{/*aqui le estamos pasando un parametro id a la ruta , entonces cuando el usuraio ingrese el numero del id vamos a capturar este parametro para filtar el curso que debe mostrar */}
        <Route path ='/cursos' component ={GridCourse} />{/* mostramos el componente en la ruta /cursos, es decir estamos imprimiendo un componente en cada pagina */}
        
        <Route path ='/formulario'  component =
         {()=>
          <Form name ="Nuevo formulario"/>  
         } 
        />
        <Route component = 
        {()=>( 
         <div>
           <h1>ERROR 404</h1>
           <span>Pagina no encontrada</span>
         </ div>
        )
       }/>{/* en este caso no le pasamos un path , por que le estamos diciendo que por defecto , para cualquier ruta diferente de las anteriores muestre este componente, el problema es que queda quemado este dato en todas las paginas, para solucionar esto usamos el componente switch */}
      
      </Switch> {/*ponemos todo dentro de switch y asi vamos a lograr que el componente de la pagina no encontrada solo se muestre si no se cumple con las otras rutas */}  
    </Router>
  );


export default App; //exportamos el componente App
