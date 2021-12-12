import React from 'react';
const Products = (props) => {
    const[counter,setcounter]=React.useState(7);
    // let name = props.name
    // let degree = props.degree
    // let age = props.age
    return ( 
        //  <div>
        //    {name}
        //  <br></br>
        //  {degree}
        //  <br></br>
        //  {age}
        // <hr></hr>  
        
        //  </div>
        <div>
            <h1>{counter}</h1>
<button onClick={()=>{setcounter(21)}}>Eman</button>
        </div>
     );
}
 
export default Products;