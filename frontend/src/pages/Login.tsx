import "../css/Login.css";
import { useState } from "react";
import

function Login() {
  // State for input fields
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  // Handle form submission

  const handleSignIn = async () => {
    try {
      const lowerCaseEmail = email.toLowerCase();
      console.log("Email:", lowerCaseEmail);
      const url = `http://127.0.0.1:5000/auth`;

      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: lowerCaseEmail,
          password: password,
        }),
      });
      // const response = await fetch('http://172.20.10.7:8080/clinic/sort', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify({
      //     chas,
      //     isp,
      //     cdmp,
      //     distance,
      //     postalcode: postalCode,
      //     byWaitingTime
      //   }),
      // });

      console.log("Response status:", response.status); // Log response status
      const result = await response.json(); // Assuming the backend returns JSON

      if (response.ok) {
        console.log("Sign-in successful:", result); // Log successful sign-in response
        await AsyncStorage.setItem("emailId", email.toLowerCase());
        setEmail("");
        setPassword("");
        navigation.navigate("Home");
      } else {
        Alert.alert(
          "Wrong email or password !",
          result.message || "Please try again"
        );
      }
    } catch (error) {
      Alert.alert("Error", "Failed to sign in");
    }
  };

  return (
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
