import React, { useState } from "react";
import useFetch from "../../hooks/useFetch";
import './index.css'

export default function Index() {

  let [url,setUrl]= useState('"http://localhost:3001/trips"');

  let { data: trips ,loading , error } = useFetch(url,{ type :'Get'})//(url,'khaingzar')

  console.log(trips)

  return (
    <div className="container">
       {/* error ကိုပြချင်ရင်  */}
      {/* {error && <p> {error} </p>} */} 
     {/* { !error && <div className ="flex-container"> */}
     <div className ="flex-container">
     <h1>Ready to go ?</h1>
    { loading &&  <p>Loading trips</p> }
      <div>
      <button onClick={()=>setUrl('http://localhost:3001/trips')} >All</button>
      <button  onClick={()=>setUrl('http://localhost:3001/trips?location=Myanmar')} >Trip in Myanmar</button>
      </div>
      <ul className='trips-list'>

        {/* condition စစ်ထားတယ် null ပေါ်နေလို့ */}
        {trips && trips.map((trip) => (
          <li key={trip.id} className='trip'>
            <h3>{trip.name}</h3>
            <p>price - {trip.price}</p>
          </li>
        ))}
      </ul>
     </div>
    </div>
  );
}
