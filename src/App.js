import { Route, Routes } from "react-router-dom";
import Filter from "./Components/Filter ";
import MovieList from "./Components/MovieList";  
import { useState } from "react";
import OneMovie from "./Components/OneMovie";

function App() {


  const [valueRang, setValueRang] = useState(0);
  const [valueTitle, setValueTitle] = useState("");
  const [getDataFrom, setGetDataFrom] = useState([])
  
  
  
  return (
    <>
      <Filter setValueRang={setValueRang} setValueTitle={setValueTitle} />
      <Routes>
        <Route
          path="/"
          element={
              <MovieList 
              valueRang={valueRang} 
              valueTitle={valueTitle} 
              setGetDataFrom={setGetDataFrom} 
              />
          }
        />
        <Route 
        path="/:id" element={
          <OneMovie 
          getDataFrom={getDataFrom} 
          />}
        />
      </Routes>
    </>
  );
}

export default App;
