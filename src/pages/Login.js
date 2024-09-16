import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const mockLogin = (email, password) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (email === "test@example.com" && password === "password123") {
          resolve({
            data: {
              message: "Login successful",
              user: { id: 1, name: "John Doe", email: "test@example.com" },
            },
          });
        } else {
          reject({
            response: { data: { message: "Invalid credentials" }, status: 401 },
          });
        }
      }, 1000);
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    mockLogin(email, password)
      .then((response) => {
        setMessage(response.data.message);
      })
      .catch((error) => {
        if (error.response) {
          setMessage(error.response.data.message);
        } else {
          setMessage("An error occurred");
        }
      });
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>

      {message && <p>{message}</p>}
    </div>
  );
};

export default Login;
