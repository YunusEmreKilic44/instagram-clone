import Post from "../../components/Post/Post";
import RightBox from "../../components/RightBox/RightBox";
import "./Home.css";

const Home = () => {
  return (
    <div className="container">
      <div className="home-page">
        <div className="home-page-left">
          <div className="posts">
            <Post />
          </div>
        </div>
        <div className="home-page-right">
          <RightBox />
        </div>
      </div>
    </div>
  );
};

export default Home;
