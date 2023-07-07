import React, { useCallback, useEffect, useState } from "react";
import './index.css'

export default function Index() {
  let [trips, setTrips] = useState([]);

  let [url,setUrl]= useState('"http://localhost:3001/trips"')

  let fetchTrips = useCallback(()=>{
    fetch(url)
    .then((res) => res.json())
    .then((data) => {
      setTrips(data);
    });
  },[url])
  //useEffect
  useEffect(() => {
    fetchTrips()
  }, [fetchTrips]);
  console.log(trips);

  return (
    <div>
      <h1>Ready to go ?</h1>
      <button onClick={()=>setUrl('http://localhost:3001/trips')} className="A">All</button>
      <button  onClick={()=>setUrl('http://localhost:3001/trips?location=Myanmar')} className="B">Trip in Myanmar</button>
      <ul>
        {trips.map((trip) => (
          <li key={trip.id}>
            <h3>{trip.name}</h3>
            <p>price - {trip.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
