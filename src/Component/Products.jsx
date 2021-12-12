import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";

import { Button } from '@mui/material';
import React from 'react';
const Products = (props) => {
    const[counter,setcounter]=React.useState(7);
    const countup=()=>{
        setcounter(counter+1);
    }
    const countdown=()=>{
        setcounter(counter-1);
    }
    let themestyle={
        color: counter>5? 'black':'green',
        backgroundColor: props.theme,
    }
    
    // let name = props.name
    // let degree = props.degree
    // let age = props.age
    return ( 
        //  <div>
        //    {name}
        //  <br><
        //  {degree}
        //  <br></br>
        //  {age}
        // <hr></hr>  
        
        //  </div>
        <div style={themestyle}>
              <h1><AccessTimeFilledIcon/>Counter Component{""}</h1>
              
              <Button  variant="contained" onClick={countup}>+</Button>
              {" "+counter +" "} 
              <Button  variant="contained" onClick={countdown}>-</Button><br/>
              Counter Value: {counter}<hr/>


        </div>
     );
}
 
export default Products;