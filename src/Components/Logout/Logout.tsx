import { useNavigate } from "react-router-dom";

function Logout() {
  const navigate = useNavigate();

  function logout() {
    localStorage.removeItem("token");
    navigate("/login");
  }

  return (
    <button className="btn btn-info m-2" onClick={logout}>
      Logout
    </button>
  );
}

export default Logout;
