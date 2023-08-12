import { useState, useEffect } from "react";

import JobInfo from "./JobInfo";
import BtnContainer from "./BtnContainer";

const url = "https://course-api.com/react-tabs-project";

const App = () => {
  const [data, setData] = useState([]);
  const [isloading, setIsLoading] = useState(true);
  const [currentItem, setCurrentItem] = useState(0);

  const fetchData = async () => {
    try {
      const resp = await fetch(url);
      const data = await resp.json();
      setData(data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (isloading) {
    return (
      <section className="jobs-center">
        <div className="loading"></div>
      </section>
    );
  }

  return (
    <section className="jobs-center">
      <BtnContainer
        jobs={data}
        currentItem={currentItem}
        setCurrentItem={setCurrentItem}
      />
      <JobInfo jobs={data} currentItem={currentItem} />
    </section>
  );
};
export default App;
