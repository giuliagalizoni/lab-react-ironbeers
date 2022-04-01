import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

function BeerDetail() {
  const { id } = useParams();
  const [state, setState] = useState([]);

  useEffect(() => {
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/${id}`)
      .then((response) => setState([...response.data]))
      .catch((err) => console.error(err));
  }, [state]);
  console.log(state);

  return (
    <div className="mt-6">
      <img />
    </div>
  );
}

export default BeerDetail;
