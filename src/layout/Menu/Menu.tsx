import { Outlet } from "react-router-dom";
import Nav from "../../Componets/UI/Nav/Nav";
import Profile from "../../Componets/UI/Profile/Profile";
import "./Menu.scss";
const Menu = () => {
  return (
    <div className="home-layout">
      <div className="menu-layout">
        <div className="logo">
          <a href="" className="logo__link">
            {/* <img src="" alt="" className="logo__image" /> */}
          </a>
        </div>

        <Nav />

        <Profile />
      </div>
      <Outlet />
    </div>
  );
};

export default Menu;
