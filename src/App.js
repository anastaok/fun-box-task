import db from "./db.json";
import Home from "./components/Home";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <div className="appWrapper">
        <h1 className="appTitle">Ты сегодня покормил кота?</h1>
        <Home catFood={db.catFood} />
      </div>
    </div>
  );
};

export default App;
