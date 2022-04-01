import axios from "axios";
import { useEffect, useState } from "react";

import Header from "../components/Header";

function RandomBeer() {
  const [state, setState] = useState({
    image: "",
    id: "",
    name: "",
    tagline: "",
    first_brewed: "",
    attenuation_level: 0,
    desciption: "",
    contributed_by: "",
  });

  useEffect(() => {
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers/random")
      .then((response) => setState({ ...response.data }))
      .catch((err) => console.error(err));
  }, [state]);

  return (
    <div>
      <Header />
      <div>
        <img src={state.image} alt={state.name} />
        <h1>{state.name}</h1>
        <p>{state.attenuation_level}</p>
        <small>{state.tagline}</small>
        <small>s{state.first_brewed}</small>
        <p>{state.desciption}</p>
        <small>{state.contributed_by}</small>
      </div>
    </div>
  );
}

export default RandomBeer;
