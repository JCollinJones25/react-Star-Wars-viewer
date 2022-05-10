import "./App.css";
import { Outlet } from "react-router";

function Main() {
  return (
    <div className="Main">
      <Outlet />
      <div className="home-title">
        <h1>Star Wars Movie Wiki</h1>
      </div>
      <div className="home-logo">
        <img
          src={
            "https://99designs-blog.imgix.net/blog/wp-content/uploads/2017/12/maxresdefault-13.jpg?auto=format&q=60&fit=max&w=930"
          }
        />
      </div>
    </div>
  );
}

export default Main;
