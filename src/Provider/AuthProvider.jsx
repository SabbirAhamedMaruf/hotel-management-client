import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
} from "firebase/auth";
import auth from "../Firebase/Firebase.config";
import useAxiosSeure from "../Hooks/useAxiosSecure";

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const axiosSecure = useAxiosSeure();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  // Register page
  const createAccountWithEmail = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Login Page
  const loginWithEmail = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const googleProvider = new GoogleAuthProvider();
  const loginWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const handleUserSignOut = () => {
    setLoading(true);
    signOut(auth);
  };









  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      const email = currentUser?.email || user?.email;
      const payload = {"email":email};
      setUser(currentUser);
      setLoading(false);
      if(currentUser){
        axiosSecure.post("/jwt",payload)
        .then(res => console.log(res.data))
      }else{
        axiosSecure.post("/clearuserjwttoken", payload)
        .then(result => console.log(result.data))
      }
    });













    


    return () => unsubscribe();
  }, [axiosSecure,user]);

  const AuthContextValue = {
    user,
    loading,
    createAccountWithEmail,
    handleUserSignOut,
    loginWithEmail,
    loginWithGoogle,
  };
  return (
    <AuthContext.Provider value={AuthContextValue}>
      {children}
    </AuthContext.Provider>
  );
};
AuthProvider.propTypes = {
  children: PropTypes.node,
};
export default AuthProvider;
