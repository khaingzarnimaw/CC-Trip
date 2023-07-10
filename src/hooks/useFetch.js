import { useEffect,useState } from "react";

function useFetch(url){

   let [data,setData]= useState(null);
   let [loading,setLoading]= useState(false)
   let [error,setError] = useState(null);
//useEffect (fetch -> first render ->useEffect)
  //fetch -> dyanmic -> url
  //output -> api's data 
  useEffect(() => {
    setLoading(true);
    fetch(url)
    .then((res) => {
        // console.log(res);
        if(!res.ok){
         throw Error ('something went wrong')
        }
        return res.json();
    })
    .then((data) => {
      setData(data);
      setError(null);
      setLoading(false);
    })
    .catch(e => {
     setError(e.message);
    })
  }, [url]);
//   console.log(trips);
return { data , loading , error };//{data:data} key
}
export default useFetch;