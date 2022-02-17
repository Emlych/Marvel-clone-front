import "./App.css";
import Header from "./Components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Comics from "./Pages/Comics";
import ComicsPerPerson from "./Pages/ComicsPerPerson";
import Characters from "./Pages/Characters";
import Favoris from "./Pages/Favoris";

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Routes>
          <Route path="/comics" element={<Comics />} />
          <Route path="/characters" element={<Characters />} />
          <Route path="/characters/:id" element={<ComicsPerPerson />} />
          <Route path="/favoris" element={<Favoris />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
