import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import Header from "../components/Header";

function Beers() {
  const [state, setState] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers")
      .then((response) => setState([...response.data]))
      .catch((err) => console.error(err));
  }, [state]);

  return (
    <div className="container">
      <Header />
      <ul className="list-group mt-3">
        {state.map((currentObj) => (
          <li
            key={currentObj._id}
            className="d-flex mt-3 mb-2"
            onClick={() => navigate(`/beers/${currentObj._id}`)}
            style={{ borderBottom: "solid" }}
          >
            <img
              src={currentObj.image_url}
              className="mb-2"
              alt={currentObj.name}
              style={{ maxWidth: "2.3rem", maxHeight: "7rem" }}
            />
            <div className="mb-2 ms-3">
              <h5 className="card-title">{currentObj.name}</h5>
              <p className="card-text">{currentObj.tagline}</p>
              <p className="card-text">
                <small className="text-muted">
                  <strong>Created by: </strong>
                  {currentObj.contributed_by}
                </small>
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Beers;
