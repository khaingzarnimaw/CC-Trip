
import { useEffect, useState } from 'react';
import './App.css';
import TripList from './components/TripList/index.js'


function App() {
  let[data,setData]= useState('my data');

  let myfunction = ()=>{
    setData('update data')
  }

  useEffect (()=>{ //စrun တာပါ
   myfunction()
   console.log('running');
  },[myfunction])// <- do not use 
  
return<>
<h1>{data}</h1>
<TripList/>
</>  
}
  

export default App;
//data= 'my data'
//data= 'update data' -> rerender 
// တူညီတဲ့ state 
