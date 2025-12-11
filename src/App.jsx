import React from "react";
import SignupForm from "./Components/auth/SignupForm";
import Search from "./Components/search/Search";

function App() {
  return (
    <>
      <div
        className="text-2xl font-bold mb-4"
      >Axy-GIFs App</div>
      <SignupForm />
      <Search />
    </>
  );
}

export default App;