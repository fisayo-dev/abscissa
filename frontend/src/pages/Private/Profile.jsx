import { Pencil, Users } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Profile = () => {
  const [userAlive, setUserAlive] = useState(true);
  const sampleWhiteBoards = [
    { title: "Database Schema Planning", date: "Today" },
    { title: "Complex Polynomial Equation", date: "Yesterday" },
    { title: "Quantum Mechanics Notes", date: "2 Days Ago" },
    { title: "Algorithm Optimization", date: "3 Days Ago" },
    { title: "React Component Design", date: "Last Week" },
  ];

  return (
    <div className="mx-auto 2xl:w-2/3 w-11/12">
      <div className="mt-10">
        <div className="grid gap-10">
          <div className="relative bg-slate-900 rounded-lg p-5">
            {/* Edit or view profile */}
            <div className="absolute bottom-4 right-4">
              <div className="hidden md:flex items-center cursor-pointer bg-slate-800 justify-center hover:bg-slate-700 mx-auto px-4 py-3 rounded-full gap-2">
                {!userAlive && (
                  <>
                    <Users className="h-5 w-6" />
                    <p className="hidden md:block">Add Friend</p>
                  </>
                )}
                {userAlive && (
                  <>
                    <Pencil className="h-5 w-6" />
                    <p className="hidden md:block">Edit profile</p>
                  </>
                )}
              </div>
            </div>
            <div className="md:flex grid justify-center md:justify-normal items-center gap-5 ">
              <div
                className="h-32 w-32 md:h-40 md:w-40 bg-blue border-4 border-slate-800 rounded-full mx-auto md:m-0 bg-cover bg-center"
                style={{ backgroundImage: `url("/brain_svg.png") ` }}
              />
              <div className="md:gap-1 text-center md:text-left">
                <h2 className="text-2xl">Fisayo Obadina</h2>
                <p>olufisayobadina@gmail.com</p>
                <p className="text-sm">College Student</p>
              </div>
              <div className="flex md:hidden items-center cursor-pointer bg-slate-800 justify-center hover:bg-slate-700 mx-auto px-4 py-3 rounded-full gap-2">
                {!userAlive && (
                  <>
                    <Users className="h-5 w-6" />
                    <p>Add Friend</p>
                  </>
                )}
                {userAlive && (
                  <>
                    <Pencil className="h-5 w-6" />
                    <p>Edit profile</p>
                  </>
                )}
              </div>
            </div>
          </div>
          <div className="grid gap-4">
            <h2 className="text-xl">Recent Whiteboards</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
              {sampleWhiteBoards.map((board,index) => (
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
      </div>
    </div>
  );
};

export default Profile;
