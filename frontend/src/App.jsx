import { useState } from "react";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Share from "./components/Share/Share";
import Profile from "./pages/Profile/Profile";
import Messenger from "./pages/Messenger/Messenger";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";

const App = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Header handleOpen={handleOpen} />
      <Share handleClose={handleClose} open={open} />
      {/* <Home /> */}
      <Profile />
      {/* <Messenger /> */}
      {/* <Register /> */}
      {/* <Login /> */}
    </div>
  );
};

export default App;
