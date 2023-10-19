import { useState } from "react";
import "./App.css";
import Counter from "./Counter";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
function App() {
  const [form,setForm] = useState(false);
  return (
    <>
      {form ? (
        <SignUp onClick={() => setForm(false)} />
      ) : (
        <SignIn onClick={() => setForm(true)} />
      )}

      <Counter />
    </>
  );
}

export default App;
