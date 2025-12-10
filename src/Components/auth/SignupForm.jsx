import { useState } from "react";
import { auth, googleProvider } from "../../firebase.js";
import { signInWithPopup } from "firebase/auth";


function SignupForm() { // SIGNUP FORM
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleGoogleSignup = async (e) => { // GOOGLE SIGNUP
    e.preventDefault();
    try {
      const result = await signInWithPopup(auth, googleProvider);
      console.log("Google User:", result.user);
      alert("Signup Successful!");
    } catch (error) {
      console.error("Google Signup Error:", error);
      alert(error.message);
    }
  };

  return (
    <>
      <div>Signup Form</div>

      <form>
        <div>
          <label htmlFor="email">Email</label>
          <input
            className=" border mx-3 "
            type="email"
            id="email"
            name="email"
            placeholder="Enter Email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />

          <label htmlFor="password">Password</label>
          <input
            className=" border "
            type="password"
            id="password"
            name="password"
            placeholder="Enter Password"
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
          />

          <button onClick={handleGoogleSignup} 
          className=" bg-blue-500 text-white  rounded-md mx-3"
          type="button"
          >
            Continue with Google
          </button>

          <button 
          type="submit"
          className=" bg-green-500 text-white  rounded-md "
          >Signup</button>
        </div>
      </form>
    </>
  );
}

export default SignupForm;
