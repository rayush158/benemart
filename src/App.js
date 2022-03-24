import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Header, Card } from "./Component";

function App() {
  return (
    <Router className="App">
      <div className="">
        <Header />
        <Card />
      </div>
    </Router>
  );
}

export default App;
