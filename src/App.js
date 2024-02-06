//import that i needed
import { Route, Routes } from "react-router-dom";
import Filter from "./Components/Filter ";
import MovieList from "./Components/MovieList";
import { useState } from "react";
import OneMovie from "./Components/OneMovie";

function App() {
  // Declaring and initializing state variables using useState hook
  // State variable for genre filter
  const [valueGnr, setValueGnr] = useState("");
  //end
  //State variable for rating filter
  const [valueRang, setValueRang] = useState(0);
  //end
  // State variable for title filter
  const [valueTitle, setValueTitle] = useState("");
  //end
  // State variable for movie data
  const [getDataFrom, setGetDataFrom] = useState([]);
  //end

  return (
    <>
      {/* Rendering Filter component and passing necessary props */}
      <Filter
        setValueRang={setValueRang}
        setValueTitle={setValueTitle}
        setValueGnr={setValueGnr}
      />
      {/* Rendering Routes component to define different routes */}
      <Routes>
        {/* Defining route for the home page */}
        <Route
          path="/"
          element={
            <MovieList
              valueRang={valueRang}
              valueTitle={valueTitle}
              setGetDataFrom={setGetDataFrom}
              valueGnr={valueGnr}
            />
          }
        />
        {/* Defining route for individual movie page */}
        <Route
          path="/:id"
          element={
            // Rendering OneMovie component and passing necessary props
            <OneMovie getDataFrom={getDataFrom} />
          }
        />
      </Routes>
    </>
  );
}

export default App;
