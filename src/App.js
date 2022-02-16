import "./App.css";
import { useState, useEffect } from "react";
import Header from "./Components/Header";
import axios from "axios";

function App() {
  const [data, setdata] = useState();
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://marvel-eld-back.herokuapp.com/comics"
        );
        console.log("response ==>", response.data);
        setdata(response.data);
        setisLoading(false);
      } catch (error) {
        console.log("error ==>", error.message);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="app">
      <Header />
      {isLoading ? <span>En cours de chargement...</span> : <div>{data}</div>}
    </div>
  );
}

export default App;
