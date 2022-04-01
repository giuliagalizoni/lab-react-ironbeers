import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Header from "../components/Header";

function BeerDetail() {
  const { id } = useParams();
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

  console.log(id);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          `https://ih-beers-api2.herokuapp.com/beers/${id}`
        );

        const {
          image_url,
          _id,
          name,
          tagline,
          first_brewed,
          desciption,
          attenuation_level,
          contributed_by,
        } = response.data;

        setState({
          image: image_url,
          id: _id,
          name: name,
          tagline: tagline,
          first_brewed: first_brewed,
          attenuation_level: attenuation_level,
          desciption: desciption,
          contributed_by: contributed_by,
        });
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, [state, id]);

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

export default BeerDetail;
