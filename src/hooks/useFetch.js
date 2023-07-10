import { useEffect, useState } from "react";

function useFetch(url) {
  let [data, setData] = useState(null);
  let [loading, setLoading] = useState(false); //loading state
  let [error, setError] = useState(null);
  //useEffect (fetch -> first render ->useEffect)
  //fetch -> dyanmic -> url
  //output -> api's data
  useEffect(() => {

   let abortController = new AbortController();//clean up 
   let signal = abortController.signal;

    setLoading(true);
    fetch(url,{signal})
      .then((res) => {
        // console.log(res);//error ကိုစစ်ပါ
        if (!res.ok) {
          throw Error("something went wrong"); //လှမ်းပစ်လိုက်တဲ့ error ကို catch နဲ့ ပြန်ဖမ်းလို့ရ
        }
        return res.json();
      })
      .then((data) => {
        setData(data);
        setError(null); //data မှန်သွားခဲ့ရင် error မတတ်တော့ပါဘူး so write
        setLoading(false);
      })
      .catch((e) => {
        setError(e.message);
      });

      //အပေါ်ကstate တခုခုကို update လုပ်နေတဲ့ side effect တခုရှိနေပါတယ်/
      //cleanup function//function တခုကို return ပြန်ပေးလိုက်ပါ
      //signal ကို abort လုပ်ပေး
      return ()=> {
         abortController.abort();//clean up
        // console.log('clean up');
      }
  }, [url]);
  //   console.log(trips);
  return { data, loading, error }; //{data:data} key
}
export default useFetch;
