import "./App.css";
import Customers from "./Components/Customers/Customers";
import { Routes, Route, Link } from "react-router-dom";
import Login from "./Components/Login/Login";
import SignUp from "./Components/Signup/SignUp";

function App() {
  return (
    <>
      <div className="d-flex">
        <Link to="/" className="btn btn-info m-2">
          Customers
        </Link>
        <Link to="/login" className="btn btn-info m-2">
          Login
        </Link>
        <Link to="/signup" className="btn btn-info m-2">
          Signup
        </Link>
      </div>
      <Routes>
        <Route path="/" element={<Customers />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
      </Routes>
    </>
  );
}

export default App;
