
import { useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Pozycja from "./components/Pozycja";
const restauracje = [
  "Pizzeria Bella",
  "Sushi Zen",
  "Kebab King",
  "Bar Mleczny",
  "Trattoria Roma",
];

function App() {
  const imieRef = useRef(null);
  const numerRef = useRef(null);

  function handleSubmit(event) {
    event.preventDefault();

    console.log(imieRef.current.value);

    const numer = Number(numerRef.current.value);
    const restauracja = restauracje[numer - 1];

    if (restauracja) {
      console.log(restauracja);
    } else {
      console.log("Nieprawidłowy numer restauracji");
    }
  }

  return (
    <div>
      <h1>Liczba restauracji: {restauracje.length}</h1>

      <ol>
        {restauracje.map((restauracja, index) => (
          <Pozycja key={index} nazwa={restauracja} />
        ))}
      </ol>

      <form onSubmit={handleSubmit}>
        <label className="form-label">Imię i nazwisko: </label>
        <input type="text"       className="form-control" ref={imieRef} />
        <br />

        <label className="form-label">Numer restauracji: </label>
        <input type="number" className="form-control" ref={numerRef} />
        <br />

        <button type="submit" className="btn btn-primary">
          Zatwierdź wybór
        </button>
      </form>
    </div>
  );
}

export default App;