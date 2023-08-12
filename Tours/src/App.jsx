import { useState, useEffect } from "react";

import Loading from "./Loading";
import Tours from "./Tours";

const url = "https://course-api.com/react-tours-project";

const App = () => {
  const [isloading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  const removeTour = (id) => {
    const newTours = data.filter((tour) => id !== tour.id);
    setData(newTours);
  };

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const resp = await fetch(url);
      const data = await resp.json();
      setIsLoading(false);
      setData(data);
      //console.log(data);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (isloading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  if (data.length === 0) {
    return (
      <main>
        <div className="title">
          <h2>no tours left</h2>
          <button className="btn" onClick={() => fetchData()}>
            refresh
          </button>
        </div>
      </main>
    );
  }

  return (
    <main>
      <Tours tours={data} removeTour={removeTour} />
    </main>
  );
};
export default App;
