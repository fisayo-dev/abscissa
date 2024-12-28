import { Add } from "iconsax-react";
import { Search } from "lucide-react";

const Whiteboard = () => {
  return (
    <div className="mx-auto 2xl:w-2/3 w-full">
      <div className="my-10">
        <div className="grid gap-5">
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
        </div>
      </div>
    </div>
  );
};

export default Whiteboard;
