import { Grid1, Note, NoteAdd } from "iconsax-react";
import {
  List,
  LoaderPinwheelIcon,
  NotebookText,
  Plus,
  Search,
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Whiteboard = () => {
  const [whiteboards, setWhiteBoards] = useState([null]);
  const sampleWhiteBoards = [
    { title: "Database Schema Planning", date: "Today" },
    { title: "Complex Polynomial Equation", date: "Yesterday" },
    { title: "Quantum Mechanics Notes", date: "2 Days Ago" },
    { title: "Algorithm Optimization", date: "3 Days Ago" },
    { title: "React Component Design", date: "Last Week" },
  ];
  return (
    <div className="mx-auto 2xl:w-2/3 w-full">
      <div className="my-10">
        <div className="grid gap-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl">Whiteboard</h2>
            <div className="flex items-center gap-3">
              <button className="px-4 py-3 rounded-full bg-slate-800 hover:bg-slate-700">
                <div className="flex items-center gap-1 justify-center">
                  <Search className="h-6 w-6" />
                  <p className="hidden md:block">Explore</p>
                </div>
              </button>
              <button className="px-4 py-3 rounded-full bg-pink hover-dark-bg-pink">
                <div className="flex items-center gap-1 justify-center">
                  <Plus className="h-6 w-6" />
                  <p className="hidden md:block">New</p>
                </div>
              </button>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="bg-slate-700 px-4 py-3 rounded-full w-full">
              <div className="flex items-center gap-3">
                <Search className="h-6 w-6 text-slate-400" />
                <input
                  type="text"
                  className="w-full"
                  placeholder="Search value"
                />
              </div>
            </div>
            <div className="flex items-center md:gap-2">
              <div className="p-2 md:p-3 rounded-full cursor-pointer hover:bg-slate-700">
                <Grid1 className="md:h-6 md:w-6 h-5 w-5" />
              </div>
              <div className="p-2 md:p-3 rounded-full cursor-pointer hover:bg-slate-700">
                <List className="md:h-6 md:w-6 h-5 w-5" />
              </div>
            </div>
          </div>
          <div className="py-4">
            {/* No whiteboards display */}
            {whiteboards !== null && whiteboards.length == 0 && (
              <div className="w-full rounded-lg bg-slate-900 h-[360px] md:h-[320px]">
                <div className="grid h-full place-items-center items-center">
                  <div className="grid gap-2">
                    <NotebookText className="mx-auto w-40 h-40" />
                    <p className="text-center">You don't have any board yet.</p>
                  </div>
                </div>
              </div>
            )}
            {/* Loading Whiteboard display */}
            {whiteboards === null && (
              <div className="w-full rounded-lg bg-slate-900 h-[360px] md:h-[320px]">
                <div className="grid h-full place-items-center items-center">
                  <div className="grid gap-2">
                    <LoaderPinwheelIcon className="animate-spin mx-auto w-40 h-40" />
                    <p className="text-center">Getting your whiteboards</p>
                  </div>
                </div>
              </div>
            )}

            {/* Whiteboards display */}
            {whiteboards !== null && whiteboards.length !== 0 && (
              <div className="grid h-56 md:h-52 grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
                {sampleWhiteBoards.map((board, index) => (
                  <Link key={index} className="flex flex-col gap-2">
                    <div className="h-48 md:h-32 bg-slate-700  hover:bg-slate-500 rounded-lg" />
                    <div className="flex flex-col gap-1 ">
                      <h2>{board.title.length > 25 ?  `${board.title.substring(0,25)}..` : board.title}</h2>
                      <p className="text-sm">{board.date}</p>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Whiteboard;
