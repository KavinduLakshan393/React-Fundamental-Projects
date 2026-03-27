import { use, useEffect, useState } from "react";
import Loading from "./Loading";
import Tours from "./Tours";


const url = '/api/react-tours-project';

function App(){
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id)
    setTours(newTours)
  }

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
    return (<main>
      <Loading />
    </main>)
  }

if(tours.length === 0){
  return (
      <div className="title">
        <h2>No tours left</h2>
        <button type="button" style={{ marginTop: '2rem' }} className="btn" onClick={() => fetchTours()}>
          Refresh
        </button>


      </div>
  )
}

if(tours)

  return <main><Tours tours={tours} removeTour = {removeTour} /></main>
}

export default App;