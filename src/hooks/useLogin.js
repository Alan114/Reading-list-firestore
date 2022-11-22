import { useState } from "react";
import { auth } from "../firebase/config";
import { signInWithEmailAndPassword } from "firebase/auth";

function useLogin() {
  const [error, setError] = useState(null);

  const login = (email, password) => {
    setError(null);
    signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        console.log("user logged in:", res.user);
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  return { error, login };
}

export default useLogin;
