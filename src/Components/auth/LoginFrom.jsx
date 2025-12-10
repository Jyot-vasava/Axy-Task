"use clinet"
import { useState } from "react";
import { auth, googleProvider } from "../firebase";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";

function Login() { // LOGIN FORM
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

 // EMAIL & PASSWORD LOGIN
  const handleEmailLogin = async (e) => {
    e.preventDefault();
    try {
      const userCred = await signInWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );
      console.log("Logged in:", userCred.user);
      alert("Login Successful!");
    } catch (error) {
      console.error("Login Error:", error);
      alert(error.message);
    }
  };

 // GOOGLE LOGIN
  const handleGoogleLogin = async (e) => {
    e.preventDefault();
    try {
      const result = await signInWithPopup(auth, googleProvider);
      console.log("Google Login User:", result.user);
      alert("Google Login Successful!");
    } catch (error) {
      console.error("Google Login Error:", error);
      alert(error.message);
    }
  };

  return (
    <>
      <div>Login</div>

      <form onSubmit={handleEmailLogin}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Enter Email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter Password"
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
          />

          <button type="submit">Login</button>

          <button type="button" onClick={handleGoogleLogin}>
            Continue with Google
          </button>
        </div>
      </form>
    </>
  );
}

export default Login;
