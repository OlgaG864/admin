import { useState } from "react";

function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <h2>Sign Up</h2>

      <div>
        <input type="text" placeholder="Name" />
      </div>
      <div>
        <input type="text" placeholder="Email" />
      </div>
      <div>
        <input type="password" placeholder="Password" />
      </div>

      <button className="btn btn-primary">Sign Up</button>
    </>
  );
}

export default SignUp;
