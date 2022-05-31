import "./App.css";
import { useState, useEffect } from "react";
import Characters from "./components/Characters";

function App() {
  const [characterList, setCharacterList] = useState({ info: {}, results: [] }); // o .then não rodava a tempo do return chamar o characte.results, então ele quebrava o código imprimindo undefined
  const [currentPage, setCurrentPage] = useState(
    "https://rickandmortyapi.com/api/character/"
  );

  useEffect(() => {
    fetch(currentPage)
      .then((response) => response.json())
      .then((response) => setCharacterList(response))
      .catch((err) => console.log(err));
  }, [currentPage]);

  return (
    <div className="App">
      <div className="App-header">
        <Characters
          characterList={characterList}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </div>
  );
}

export default App;

/* const [page, setPage] = useState(1);

useEffect(() => {
  fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      return setCharacterList(response);
    })
    .catch((err) => console.log(err));
}, [page]); */
