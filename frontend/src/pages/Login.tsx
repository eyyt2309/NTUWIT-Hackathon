import "../css/Login.css";
import { useState } from "react";

function Login() {
  console.log("Login is rendering...");

  // State for input fields
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  // Handle form submission
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevent page reload

    // Basic validation
    if (!email || !password) {
      setError("All fields are required");
      return;
    }

    setLoading(true); // Show loading state
    setError(null); // Reset previous errors

    try {
      const response = await fetch("https://api.example.com/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error(`Login failed: ${response.statusText}`);
      }

      const data = await response.json();
      console.log("Login successful:", data);

      // Redirect or store user session
      alert("Login Successful!");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <h1 className="hardcoders-header">!HardCoders</h1>

      {error && <p className="error-message">{error}</p>}

      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Enter email"
          className="email-input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Enter password"
          className="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="submit-button" type="submit" disabled={loading}>
          {loading ? "Logging in..." : "Log In"}
        </button>
      </form>
    </div>
  );
}

export default Login;
