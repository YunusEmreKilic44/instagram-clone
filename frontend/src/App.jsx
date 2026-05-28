import { useState } from "react";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Share from "./components/Share/Share";
import Profile from "./pages/Profile/Profile";

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
    </div>
  );
};

export default App;
