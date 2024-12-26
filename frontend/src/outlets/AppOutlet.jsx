import { Outlet } from "react-router-dom";
import { Sidebar } from "../components";
import { Diamonds, Message } from "iconsax-react";
import { BellIcon } from "lucide-react";

const AppOutlet = () => {
  return (
    <div className="w-[100vw] block md:flex">
      <Sidebar />
      <div className="mx-auto 2xl:w-[70vw] w-[80vw]">
        <div className="w-full grid">
          <div className="px-4 md:px-6 w-full top-0 h-[10vh] py-5 grid items-center">
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
          <div className="px-4 md:px-8 h-[90vh] overflow-scroll ">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppOutlet;
