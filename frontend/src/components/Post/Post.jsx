import Avatar from "@mui/material/Avatar";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import FavoriteIcon from "@mui/icons-material/Favorite";
import "./Post.css";

const Post = ({ top, bottom }) => {
  return (
    <div className="post-wrapper">
      {top && (
        <div className="post-header">
          <div className="post-header-left">
            <a href="/">
              <Avatar
                alt="Remy Sharp"
                src="/images/person/0.png"
                sx={{ width: 32, height: 32 }}
              />
            </a>
            <a href="/" className="profile-username">
              eminbasbayan
            </a>
          </div>
          <div className="post-header-right">
            <button>
              <MoreHorizIcon />
            </button>
          </div>
        </div>
      )}
      <div className="post-image">
        <img src="/images/post/2.png" alt="Post image" />
      </div>
      {bottom && (
        <div className="post-bottom">
          <div className="post-like">
            <button>
              <FavoriteIcon className="post-like-icon active" />
            </button>
          </div>
          <span className="post-like-count">0 like</span>
          <div className="post-content">
            <a href="/" className="profile-username">
              eminbasbayan
            </a>{" "}
            <span className="post-text">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem
              natus pariatur repudiandae molestias repellat reiciendis accusamus
              debitis exercitationem, ea sequi.
            </span>
          </div>
          <div className="post-time">1 dakika önce</div>
        </div>
      )}
    </div>
  );
};

export default Post;
