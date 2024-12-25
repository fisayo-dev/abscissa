import { Outlet } from "react-router-dom";
import { Sidebar } from "../components";
import { Diamonds, Message } from "iconsax-react";
import { BellIcon } from "lucide-react";

const AppOutlet = () => {
  return (
    <div className="w-full flex">
      <Sidebar />
      <div className="h-full w-full grid gap-8 px-5 py-6 ">
        <div className="flex items-center justify-between gap-2">
          <div className="flex gap-2 items-center">
            <Diamonds className="h-6 w-6" />
            <p>Premimum Plan</p>
          </div>
          <div className="flex items-center gap-2 justify-end">
            <BellIcon className="h-6 w-6" />
            <Message className="h-6 w-6" />
          </div>
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default AppOutlet;
