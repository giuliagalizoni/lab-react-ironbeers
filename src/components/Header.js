import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      onClick={() => navigate("/")}
      style={{ backgroundColor: "lightblue", width: "100%", height: "4rem" }}
    >
      <img src="../assets/botao-home.png" alt="Home icon" />
    </div>
  );
}

export default Header;
