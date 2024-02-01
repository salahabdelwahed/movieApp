import Filter from "./Components/Filter ";
import MovieList from "./Components/MovieList"; 
import{useState} from "react"

function App() {
  const [valueRang, setValueRang] = useState(0);
  const [valueTitle, setValueTitle] = useState("");
  return (
    <>
      <Filter setValueRang={setValueRang} setValueTitle={setValueTitle} />
      <MovieList valueRang={valueRang }  valueTitle={valueTitle} />
    </>
  );
}

export default App;
