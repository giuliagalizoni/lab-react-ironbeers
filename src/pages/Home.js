import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  return (
    <div className="d-flex flex-column mt-5">
      <div
        className="card"
        onClick={() => navigate("/beers")}
        style={{ width: "23rem", cursor: "pointer" }}
      >
        <img
          src="../assets/beers.png"
          className="card-img-top"
          alt="All beers"
        />
        <div className="card-body">
          <h5 className="card-title">All Beers</h5>
          <p className="card-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            tincidunt risus vitae lorem ultrices varius.
          </p>
        </div>
      </div>
      <div className="card" style={{ width: "23rem" }}>
        <img
          src="../assets/random-beer.png"
          className="card-img-top"
          alt="Random beer"
        />
        <div className="card-body">
          <h5 className="card-title">Random Beer</h5>
          <p className="card-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            tincidunt risus vitae lorem ultrices varius.
          </p>
        </div>
      </div>

      <div className="card" style={{ width: "23rem" }}>
        <img
          src="../assets/new-beer.png"
          className="card-img-top"
          alt="New beer"
        />
        <div className="card-body">
          <h5 className="card-title">New Beer</h5>
          <p className="card-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            tincidunt risus vitae lorem ultrices varius.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
