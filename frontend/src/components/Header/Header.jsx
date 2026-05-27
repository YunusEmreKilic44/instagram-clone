import SearchIcon from "@mui/icons-material/Search";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
import Avatar from "@mui/material/Avatar";
import Logo from "./../Logo/Logo";

import "./Header.css";

const Header = ({ handleOpen }) => {
  return (
    <div className="header-wrapper">
      <div className="container">
        <div className="header">
          <Logo />
          <div className="search">
            <SearchIcon className="search-icon" />
            <input type="text" placeholder="Search" />
          </div>
          <div className="header-links">
            <a href="#">
              <HomeOutlinedIcon className="icon" />
            </a>
            <a href="#">
              <ChatOutlinedIcon className="icon" />
            </a>

            <AddBoxOutlinedIcon
              onClick={handleOpen}
              className="icon"
              style={{ cursor: "pointer" }}
            />

            <a href="#">
              <Avatar
                alt="Remy Sharp"
                src="/images/person/0.png"
                sx={{ width: 28, height: 28 }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
