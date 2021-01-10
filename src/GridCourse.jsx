import Course from './Course' 
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
 const GridCourse= () => (
    <div>
    {  
      courses.map(a=> <Course lastName={a.lastName} name={a.name} id={a.id} />)
      //los props que enviamos en el componente, tienen que tener el mismo nomre en el argumento de la funcion//
    }  
    </div>
  );


export default GridCourse; //exportamos el componente App
