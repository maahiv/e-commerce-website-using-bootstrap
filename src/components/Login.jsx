
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";

import { auth } from "../firebase";
import { useAuth } from "../Context/AuthContext";

function Login() {
  const history = useHistory();
  const { login } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (event) => {
    event.preventDefault();

    setError("");

    if (!email.trim() || !password) {
      setError("Please enter email and password.");
      return;
    }

    setLoading(true);

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email.trim(),
        password
      );

      await login(userCredential.user);

      setEmail("");
      setPassword("");

      // Login successful -> Products page
      history.push("/store");
    } catch (error) {
      console.error("Login Error:", error);

      switch (error.code) {
        case "auth/invalid-email":
          setError("Please enter a valid email address.");
          break;

        case "auth/user-not-found":
          setError("No account found with this email.");
          break;

        case "auth/wrong-password":
        case "auth/invalid-credential":
          setError("Invalid email or password.");
          break;

        case "auth/too-many-requests":
          setError(
            "Too many failed attempts. Please try again later."
          );
          break;

        case "auth/network-request-failed":
          setError(
            "Network error. Please check your internet connection."
          );
          break;

        default:
          setError("Login failed. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-5">

          <div className="card shadow p-4">

            <h2 className="text-center mb-4">
              Login
            </h2>

            <form onSubmit={handleLogin}>

              <div className="mb-3">
                <label className="form-label">
                  Email
                </label>

                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(event) =>
                    setEmail(event.target.value)
                  }
                />
              </div>

              <div className="mb-3">
                <label className="form-label">
                  Password
                </label>

                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(event) =>
                    setPassword(event.target.value)
                  }
                />
              </div>

              {error && (
                <div className="alert alert-danger">
                  {error}
                </div>
              )}

              <button
                type="submit"
                className="btn btn-dark w-100"
                disabled={loading}
              >
                {loading ? "Logging in..." : "Login"}
              </button>

            </form>

          </div>

        </div>
      </div>
    </div>
  );
}

export default Login;
