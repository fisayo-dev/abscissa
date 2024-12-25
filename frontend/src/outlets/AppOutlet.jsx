import { Outlet } from "react-router-dom";
import { Sidebar } from "../components";

const AppOutlet = () => {
  return (
    <div className="w-full flex">
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default AppOutlet;
