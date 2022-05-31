import "./style.css";
import CharCard from "../CharCard";

function Characters({ characterList, setCurrentPage }) {
  return (
    <div className="Container">
      <h2>Meus personagens</h2>

      {/*   {!characterList.info.prev ? (
        <div className="btnPage">
          <button onClick={() => setCurrentPage(characterList.info.next)}>
            Next Page
          </button>
        </div>
      ) : (
        <div className="btnPage">
          <button onClick={() => setCurrentPage(characterList.info.prev)}>
            Previous Page
          </button>
          <button onClick={() => setCurrentPage(characterList.info.next)}>
            Next Page
          </button>
        </div>
      )} */}
      <div className="btnPage">
        {characterList.info.prev && (
          <button onClick={() => setCurrentPage(characterList.info.prev)}>
            Previous Page
          </button>
        )}
        {characterList.info.next && (
          <button onClick={() => setCurrentPage(characterList.info.next)}>
            Next Page
          </button>
        )}
      </div>
      <ul className="charCard">
        {characterList.results.map((character) => (
          <CharCard
            name={character.name}
            image={character.image}
            key={character.id}
            species={character.species}
            status={character.status}
          />
        ))}
      </ul>
    </div>
  );
}

export default Characters;
