import { Outlet } from "react-router-dom";
import { Sidebar } from "../components";
import { Diamonds, Message } from "iconsax-react";
import { BellIcon } from "lucide-react";

const AppOutlet = () => {
  return (
    <div className="w-[100vw] block md:flex">
      <Sidebar />
      <div className="py-5 w-[60vh]">
        <div className="w-full">
          <div className="px-4 md:px-6 fixed w-full top-0 py-6 backdrop-blur-sm">
            <div className="flex justify-between">
              <div className="flex gap-2 items-center">
                <Diamonds className="h-6 w-6" />
                <p>Premimum Plan</p>
              </div>
              <div className="flex items-center gap-2 justify-end">
                <BellIcon className="h-6 w-6" />
                <Message className="h-6 w-6" />
              </div>
            </div>
          </div>
          <div className="px-4 md:px-8 mt-20">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppOutlet;
