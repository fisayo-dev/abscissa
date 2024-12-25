import { PencilIcon } from "lucide-react";
import { Link } from "react-router-dom";

const UserHome = () => {
  const sampleWhiteBoards = [
    { title: "Database Schema Planning", date: "Today" },
    { title: "Complex Polynomial Equation", date: "Yesterday" },
    { title: "Quantum Mechanics Notes", date: "2 Days Ago" },
    { title: "Algorithm Optimization", date: "3 Days Ago" },
    { title: "React Component Design", date: "Last Week" },
  ];

  return (
    <div className="mx-auto 2xl:w-2/3 md:w-3/4 w-full">
      <div className="mt-10">
        <div className="flex gap-5">
          <div className="w-3/4 rounded-xl bg-slate-800 p-5">
            <div className="grid gap-4">
              <div className="flex py-1 items-center justify-between">
                <h2 className="text-xl ">Recent Whiteboards</h2>
                <Link className="text-slate-300 text-sm">View all</Link>
              </div>
              <div className="grid gap-2">
                {sampleWhiteBoards.map((board, index) => (
                  <div
                    key={index}
                    className="text-[0.9rem] px-4 py-3 rounded-lg bg-slate-600"
                  >
                    <div className="flex items-center gap-3">
                      <PencilIcon className="text-slate-300 w-10 " />
                      <h2 className=" w-full">
                        {board.title.length > 23
                          ? `${board.title.substring(0, 23)}...`
                          : board.title}
                      </h2>
                      <p className="text-right w-full">{board.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className=" rounded-xl bg-slate-800 p-5"></div>
        </div>
      </div>
    </div>
  );
};

export default UserHome;
