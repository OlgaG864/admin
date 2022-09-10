import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  function submit() {
    // todo: replace with an API call to server
    console.log("submit data");
  }
  return (
    <>
      <div>
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <button onClick={submit} className="btn btn-primary">
        Login
      </button>
    </>
  );
}

export default Login;
