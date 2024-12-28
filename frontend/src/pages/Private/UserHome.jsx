import { BarChartBig, Flame, PencilIcon } from "lucide-react";
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
    <div className="mx-auto 2xl:w-2/3 w-full">
      <div className="my-10">
        <div className="grid md:flex items-start gap-5">
          <div className="w-full md:w-3/4 rounded-xl bg-slate-900 p-5">
            <div className="grid gap-4">
              <div className="flex py-1 items-center justify-between">
                <h2 className="text-xl ">Recent Whiteboards</h2>
                <Link className="hidden md:block text-slate-300 hover:underline text-sm">
                  View all
                </Link>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {sampleWhiteBoards.map((board, index) => (
                  <Link key={index} className="grid gap-2">
                    <div className="h-48 md:h-32 bg-slate-700  hover:bg-slate-500 rounded-lg" />
                    <div className="grid gap-1 ">
                      <h2>{board.title}</h2>
                      <p className="text-sm">{board.date}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="w-full md:w-3/6 overflow-hidden rounded-xl bg-slate-900 p-5">
            <div className="grid p4">
              <div className="flex py-1 items-center justify-between">
                <h2 className="text-xl ">Daily Streak</h2>
                <h2 className="">12</h2>
              </div>
              <div className="flex flex-col place-items-center py-10">
                <Flame className="h-52 w-52" />
              </div>
              <Link className="text-right text-slate-300 hover:underline text-sm">
                View analysis
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserHome;
