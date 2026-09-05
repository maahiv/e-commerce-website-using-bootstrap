
import { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [token, setToken] = useState(
    localStorage.getItem("token")
  );

  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        const idToken = await currentUser.getIdToken();

        setUser(currentUser);
        setToken(idToken);

        localStorage.setItem("token", idToken);
      } else {
        setUser(null);
        setToken(null);

        localStorage.removeItem("token");
      }
    });

    return unsubscribe;
  }, []);

  const login = async (firebaseUser) => {
    const idToken = await firebaseUser.getIdToken();

    setUser(firebaseUser);
    setToken(idToken);

    localStorage.setItem("token", idToken);
  };

  const logout = async () => {
    await auth.signOut();

    setUser(null);
    setToken(null);

    localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}

export default AuthContext;

