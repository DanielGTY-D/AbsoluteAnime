import { Outlet } from "react-router-dom";
import Menu from "../components/UI/Menu/Menu";
import "./_layoutInicio.scss";
const LayoutInicio = () => {
	return (
		<div className="home-layout">
			<Menu />
			<Outlet />
		</div>
	);
};

export default LayoutInicio;
