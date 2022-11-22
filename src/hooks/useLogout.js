import { auth } from "../firebase/config";
import { signOut } from "firebase/auth";

function useLogout() {
  const logout = () => {
    signOut(auth)
      .then(() => {
        console.log("user signed out");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  return { logout };
}

export default useLogout;
