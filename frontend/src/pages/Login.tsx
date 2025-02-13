import "../css/Login.css";

function Login() {
  console.log("login is rendering");
  return (
    <div className="login-container">
      <h1 className="hardcoders-header">!HardCoders</h1>
      <input
        type="email"
        placeholder="Enter email"
        className="email-input"
      ></input>
      <input
        type="text"
        placeholder="Enter username"
        className="username-input"
      ></input>
      <input
        type="password"
        placeholder="Enter password"
        className="password"
      ></input>
      <button className="submit-button">Log In</button>
    </div>
  );
}

export default Login;
