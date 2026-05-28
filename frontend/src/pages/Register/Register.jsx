import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./Register.css";

const Register = () => {
  return (
    <div className="auth-page">
      <h1>Welcome to Social Media App</h1>
      <form className="form">
        <h2>Register</h2>
        <div className="form-input">
          <TextField
            required
            type="text"
            variant="outlined"
            label="Full Name"
          />
        </div>
        <div className="form-input">
          <TextField required type="text" variant="outlined" label="Username" />
        </div>
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
        <div className="form-input">
          <TextField
            required
            type="password"
            variant="outlined"
            label="Password Confirm"
          />
        </div>
        <div className="form-input">
          <TextField required type="file" variant="outlined" />
        </div>
        <div className="form-input">
          <TextField
            required
            type="text"
            variant="outlined"
            label="Biography"
          />
        </div>
        <a href="/" className="auth-link">
          Back to Login
        </a>
        <Button variant="contained" color="success" type="submit">
          Register
        </Button>
      </form>
    </div>
  );
};

export default Register;
