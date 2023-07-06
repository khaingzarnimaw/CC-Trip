import React, { useEffect, useState } from "react";
import './index.css'

export default function Index() {
  let [trips, setTrips] = useState([]);

  let [url,setUrl]= useState('"http://localhost:3001/trips"')

  //useEffect
  useEffect(() => {
    //၂button ကိုနှိပ်လိုက်မယ်
    //url က update ဖစ်သွားတယ်/useeffect ကတခါrunပါတယ်
    //http:နဲ့ string လေးက၀င်လာတယ်/myanmar data ကိုပြတယ်/setTripsကိုသုံးပီး tripsတွေကိ update လုပ်တယ်/componentက rerender ကျတယ်/return အောက်ကdiv က ပြန်အလုပ်လုပ်တယ်
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setTrips(data);
      });
  }, [url]);//[]ထဲမှာ
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
