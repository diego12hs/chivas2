import Hola from "./components/Hola";
import MiComponente from "./components/MiComponente";
import Hook from "./components/Hook";
import Lista from "./components/LIsta";
import Tarea from"./components/Tarea";


function App() {
  return (
    <div className='App'>
      <h1>
        HOLA MUNDO
      </h1>
      <Tarea />
      <MiComponente />
      <Hola />
      <Hook/>
      <Lista/>
    </div>

  );
}

export default App;
