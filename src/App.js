import {useState} from 'react'
// import { useEffect } from 'react';
import './App.css';
import TripList from './components/TripList/index.js'


function App() {
  // useEffect(()=>{
  //   console.log('render first time');
  // },[])

  let [show,setShow]= useState(true);


  return (
  <>
    <button onClick={()=>setShow(false)}>hide trips</button>
    {show && <TripList/>}
  </>
  );
}

export default App;
