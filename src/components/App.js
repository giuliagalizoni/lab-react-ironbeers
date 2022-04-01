import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "../pages/Home";
import Beers from "../pages/Beers";
import NewBeer from "../pages/NewBeer";
import BeerDetail from "../pages/BeerDetail";

function App() {
  return (
    <div className="container-sm">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/beers" element={<Beers />} />
        <Route path="/new-beer" element={<NewBeer />} />
        <Route path="/beer/:_id" element={<BeerDetail />} />
      </Routes>
    </div>
  );
}

export default App;
