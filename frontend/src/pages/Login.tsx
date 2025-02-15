import "../css/Login.css";
import { useState } from "react";

function Login() {
  // State for input fields
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  // Handle form submission
  const handleSignIn = async (event: { preventDefault: () => void }) => {
    event.preventDefault(); // Prevent form from reloading the page
    setLoading(true); // Show loading state
    setError(null); // Reset previous error

    try {
      const lowerCaseEmail = email.toLowerCase();
      console.log("Email:", lowerCaseEmail);
      console.log("Password:", password);
      const response = await fetch("http://127.0.0.1:5000/auth", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: lowerCaseEmail,
          password: password,
        }),
      });

      console.log("Response status:", response.status); // Log response status
      const result = await response.json(); // Assuming the backend returns JSON
      console.log(response);
      if (response.ok) {
        console.log("Sign-in successful:", result);

        // Store user data in sessionStorage
        sessionStorage.setItem("emailId", lowerCaseEmail);
        // sessionStorage.setItem("password", password); // ⚠ Storing passwords in sessionStorage is **NOT** secure
        sessionStorage.setItem("userId", result.userId);
        // Redirect to home page
        window.location.href = "/dashboard"; // Use react-router navigate if applicable
      } else {
        setError(result.message || "Wrong email or password! Please try again");
      }
    } catch (error) {
      setError("Error: Failed to sign in");
    } finally {
      setLoading(false); // Hide loading state
    }
  };

  return (
    <div className="loginxxx">
    <div className="login-container">
      <h1 className="hardcoders-header">!HardCoders</h1>

      {error && <p className="error-message">{error}</p>}

      <form onSubmit={handleSignIn}>
        <input
          type="email"
          placeholder="Enter email"
          className="email-input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Enter password"
          className="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button className="submit-button" type="submit" disabled={loading}>
          {loading ? "Logging in..." : "Log In"}
        </button>
      </form>
    </div>
    </div>
  );
}

export default Login;
