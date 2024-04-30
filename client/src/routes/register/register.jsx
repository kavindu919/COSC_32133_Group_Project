import "./register.scss";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import apiRequest from "../../lib/apiRequest";

function Register() {
  //this use to set error and display
  const [error, setError] = useState("");

  //use navigate hook to send user another page
  const navigate = useNavigate();

  //make a handle submit function
  const handleSubmit = async (e) => {
    //prevent refershig
    e.preventDefault();

    //Form data is JavaScript object specifically designed to handle form data.
    const formdata = new FormData(e.target);
    //using this all the data we can get data from input fileds
    const username = formdata.get("username");
    const email = formdata.get("email");
    const password = formdata.get("password");
    try {
      //we use axios to make request to send data to back end
      const res = await apiRequest.post("/auth/register", {
        username,
        email,
        password,
      });
      console.log(res.data);
      navigate("/login");
    } catch (error) {
      console.log(error);
      setError(error.response.data.message);
    }
  };

  return (
    <div className="register">
      <div className="formContainer">
        <form onSubmit={handleSubmit}>
          <h1>Create an Account</h1>
          <input name="username" type="text" placeholder="Username" required />
          <input name="email" type="text" placeholder="Email" required />
          <input
            name="password"
            type="password"
            placeholder="Password"
            required
          />
          <button>Register</button>
          {/* show error to user */}
          {error && <span>{error}</span>}

          <Link to="/login">Do you have an account?</Link>
        </form>
      </div>
      <div className="imgContainer">
        <img src="/bg.png" alt="" />
      </div>
    </div>
  );
}

export default Register;
