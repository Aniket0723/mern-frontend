import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./register.css";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!username || !email || !password || !confirmPassword) {
      setErrorMessage("Please fill in all fields");
      return;
    }
    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match");
      return;
    }

    try {
      const response = await axios.post(
        "/auth/register",
        {
          username,
          email,
          password,
          confirmPassword,
        },
        setErrorMessage("Registered Succesfully")
      );
      console.log(response.data);

      // handle successful registration
    } catch (error) {
      // console.log(error.response.data);
      if (error.response.data.message === "User already exists") {
        setErrorMessage("User already registered. Please login instead.");
      } else {
        setErrorMessage("User already registered. Please login instead.");
      }
    }
  };

  return (
    <div className="register">
      <form onSubmit={handleSubmit} className="reContainer">
        <h2>Register</h2>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="reInput"
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="reInput"
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="reInput"
          />
        </label>
        <label>
          Confirm Password:
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="reInput"
          />
        </label>
        {errorMessage === "Registered Succesfully" && (
          <p className="success">Registered Successfully</p>
        )}
        <button className="reButton" type="submit">
          Register
        </button>
        <p>
          Already have an account? <Link to="/login">Log in</Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
