import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "../pages/Home";
import Beers from "../pages/Beers";
import NewBeer from "../pages/NewBeer";
import BeerDetail from "../pages/BeerDetail";
import RandomBeer from "../pages/RandomBeer";

function App() {
  return (
    <div className="container-sm">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/beers" element={<Beers />} />
        <Route path="/new-beer" element={<NewBeer />} />
        <Route path="/beer/:id" element={<BeerDetail />} />
        <Route path="/beer/random-beer" element={<RandomBeer />} />
      </Routes>
    </div>
  );
}

export default App;
