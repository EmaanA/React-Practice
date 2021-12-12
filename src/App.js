

import React from 'react';
import Products from './Component/Products';
import './App.css';


function App() {
  const [theme,settheme] =React.useState("brown");
  return (
    
    <div className='App'>
        <div>
         <input value={theme} onChange={(e)=>{settheme(e.target.value)}}/>
      </div> 
      <Products theme={theme}/>
      <Products theme={theme}/>
      <Products theme={theme}/>
      <Products theme={theme}/>
    {/* <Products name="Eman"  age="20" degree="Software"/>

       <Products name="Wania"  age="24" degree="Doctor"/>
      <Products name="Arma"  age="19" degree="Designer"/>  */}
    </div>
  );
}

export default App;
