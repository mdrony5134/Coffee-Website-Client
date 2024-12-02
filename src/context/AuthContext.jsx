import { createContext, useEffect, useState } from "react";
import {
  browserLocalPersistence,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  setPersistence,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import auth from "../auth/firebaseAuth";
import { CirclesWithBar } from "react-loader-spinner";
import { toast } from "react-toastify";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();

  //   listen state change

  useEffect(() => {
    setPersistence(auth, browserLocalPersistence)
      .then(() => {
        const unsuscribe = onAuthStateChanged(auth, (currentUser) => {
          if (currentUser) {
            setUser(currentUser);
          } else {
            setUser(null);
          }
          setLoading(false);
        });

        return () => unsuscribe();
      })
      .catch((error) => {
        console.log("persistence error", error.message);
        setLoading(false);
      });
  }, []);

  //   googlelogin/singup
  const googleAuth = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      setUser(result.user);
    } catch (error) {
      console.log("error", error.message);
    }
  };

  //   email and password login
  const login = async (email, password) => {
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      setUser(result.user);
      return result;
    } catch (error) {
      console.log("error", error.message);
      // return alert(error.message)
      toast.error(`${error.message}`, {
        position: "top-center",
      });
      // return null;
    }
  };

  //   eamil password singup
  const singUp = async (name, email, photoURL, password) => {
    try {
      const result = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const createdAt = result?.user?.metadata?.creationTime;
      console.log(createdAt)

      await updateProfile(result.user, {
        displayName: name,
        photoURL: photoURL,
      });
      setUser({
        ...result.user,
        displayName: name,
        photoURL: photoURL,
        createdAt,
      });
      console.log(result.user);
    } catch (error) {
      console.log("singup errror", error.message);
    }
  };

  //   logout funtionality
  const logout = async () => {
    try {
      await signOut(auth);
      setUser(null);
    } catch (error) {
      console.log("logout error", error.message);
    }
  };

  // loading
  if (loading) {
    return (
      <div className="flex items-center justify-center h-[100vh]">
        <CirclesWithBar
          height="100"
          width="100"
          color="#4fa94d"
          outerCircleColor="#4fa94d"
          innerCircleColor="#4fa94d"
          barColor="#4fa94d"
          ariaLabel="circles-with-bar-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      </div>
    );
  }

  const authValue = {
    user,
    googleAuth,
    login,
    singUp,
    logout,
  };

  return (
    <AuthContext.Provider value={authValue}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
