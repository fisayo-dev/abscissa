import { Add, Grid1, Grid2 } from "iconsax-react";
import { AppWindowMacIcon, List, Search } from "lucide-react";

const Whiteboard = () => {
  return (
    <div className="mx-auto 2xl:w-2/3 w-full">
      <div className="my-10">
        <div className="grid gap-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl">Whiteboard</h2>
            <div className="flex items-center gap-3">
              <button className="px-4 py-3 rounded-full bg-slate-800 hover:bg-slate-700">
                <div className="flex items-center gap-1 justify-center">
                  <Search className="h-6 w-6"/>
                  <p>Explore</p>
                </div>
              </button>
              <button className="px-4 py-3 rounded-full bg-pink hover-dark-bg-pink">
                <div className="flex items-center gap-1 justify-center">
                  <Add className="h-6 w-6"/>
                  <p>Create</p>
                </div>
              </button>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="bg-slate-700 px-4 py-3 rounded-full w-full">
              <div className="flex items-center gap-4">
                <Search className="h-6 w-6 text-slate-400" />
                <input type="text" className="w-full" placeholder="Search value"/>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="p-3 rounded-full cursor-pointer hover:bg-slate-700">
                <Grid1 className="h-6 w-6"/>
              </div>
              <div className="p-3 rounded-full cursor-pointer hover:bg-slate-700">
                <List className="h-6 w-6"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Whiteboard;
