import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./Login.css";

const Login = () => {
  return (
    <div className="auth-page">
      <h1>Welcome to Social Media App</h1>
      <form className="form">
        <h2>Login</h2>

        <div className="form-input">
          <TextField required type="email" variant="outlined" label="Email" />
        </div>
        <div className="form-input">
          <TextField
            required
            type="password"
            variant="outlined"
            label="Password"
          />
        </div>

        <a href="/" className="auth-link">
          Back to Register
        </a>
        <Button variant="contained" color="success" type="submit">
          Login
        </Button>
      </form>
    </div>
  );
};

export default Login;
