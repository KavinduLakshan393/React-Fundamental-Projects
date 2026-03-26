import { use, useEffect, useState } from "react";
import Loading from "./Loading";
import Tours from "./Tours";


const url = '/api/react-tours-project';

function App(){
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const fetchTours  = async () => {
    setLoading(true);
    try{
      const response = await fetch(url);
      const tours = await response.json();
      setTours(tours);
    } catch (error) {
      console.log(error);
    }
    setLoading(false)
  }
  
  useEffect(() => {fetchTours();}, []);

  if(loading){
    return <main>
      <Loading />
    </main>
  }

  return <main><Tours tours={tours} /></main>
}

export default App;