import { PencilIcon } from "lucide-react";

const UserHome = () => {
  const sampleWhiteBoards = [
    { title: "Complex Polynomial Equation", date: "Yesterday" },
    { title: "Quantum Mechanics Notes", date: "2 Days Ago" },
    { title: "React Component Design", date: "Last Week" },
    { title: "Algorithm Optimization", date: "3 Days Ago" },
    { title: "Database Schema Planning", date: "Today" },
  ];

  return (
    <div className="mx-auto 2xl:w-2/3 md:w-3/4 w-full">
      <div className="mt-10">
        <div className="grid gap-5">
          <div className="rounded-xl bg-slate-800 p-5">
            <div className="grid gap-4">
              <h2 className="text-2xl text-center">Recent Whiteboards</h2>
              <div className="grid gap-2">
                {sampleWhiteBoards.map((board, index) => (
                  <div
                    key={index}
                    className="px-4 py-3 rounded-lg bg-slate-600"
                  >
                    <div className="flex items-center gap-3">
                      <PencilIcon className="text-slate-300 h-6 w-6" />
                      <h2 className="w-full">{board.title}</h2>
                      <p className="text-right w-full">{board.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserHome;
