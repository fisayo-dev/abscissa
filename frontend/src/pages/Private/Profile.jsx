import { useAuth } from "@/contexts/AuthContext";
import { GraduationCap, Pencil } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Profile = () => {
  const [userDetails, setUserDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [editProfile, setEditProfile] = useState(true);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserDetails = async () => {
      if (!user) {
        setError("User ID not found.");
        setIsLoading(false);
        return;
      }

      try {
        const token = localStorage.getItem("TOKEN");
        if (!token) throw new Error("Authentication token missing.");

        const response = await fetch(`/api/v1/users/${user}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          const data = await response.json();

          // Check if the error message indicates token expiration
          if (
            data.message &&
            data.message.toLowerCase().includes("token expired")
          ) {
            alert("Your session has expired. Please log in again.");
            logout();
            navigate("/login");
            return;
          }

          throw new Error(data.message || "Failed to fetch user details");
        }

        const data = await response.json();
        setUserDetails(data);
      } catch (err) {
        console.error(err);
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUserDetails();
  }, [user, logout, navigate]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p className="text-red-500">Error: {error}</p>;
  }

  if (!userDetails) {
    return <p>No user details found.</p>;
  }

  return (
    <div className="mx-auto 2xl:w-2/3 w-11/12">
      <div className="my-8">
        <div className="grid gap-10">
          <div className="relative bg-slate-900 rounded-lg p-5">
            <div className="absolute bottom-4 right-4">
              <ActionButton userDetails={userDetails} />
            </div>

            <div className="md:flex grid justify-center md:justify-normal items-center gap-5">
              <div className="h-32 w-32 bg-blue border-4 border-slate-800 rounded-full mx-auto md:m-0 bg-cover bg-center" />
              <div className="md:gap-1 text-center md:text-left">
                <h2 className="text-2xl">
                  {userDetails.first_name} {userDetails.last_name}
                </h2>
                <p>{userDetails.email}</p>
                <div className="flex items-center gap-1 justify-center md:justify-normal">
                  <GraduationCap className="h-5 w-5 color-pink" />
                  <p className="text-sm">{userDetails.education_grade}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-4">
            <h2 className="text-xl">Recent Whiteboards</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
              {/* Your whiteboard data here */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ActionButton = ({ userDetails }) => (
  <Dialog>
    <DialogTrigger asChild>
      <div className="flex items-center cursor-pointer bg-slate-800 justify-center hover:bg-slate-700 px-3 py-2 text-sm rounded-full gap-2">
        <Pencil className="h-5 w-6" />
        <p className="hidden md:block">Edit Profile</p>
      </div>
    </DialogTrigger>
    <DialogContent>
      <DialogHeader className="text">
        <DialogTitle>Edit Profile</DialogTitle>
        <DialogDescription>
          <p className="capitalize">Decide how you appear to others</p>
        </DialogDescription>
      </DialogHeader>
      <form action="" className="grid gap-4">
        <div className="grid gap-2">
          <label className="font-bold">First Name</label>
          <Input
            placeholder="Place in your updated first name"
            value={userDetails.first_name}
          />
        </div>
        <div className="grid gap-2">
          <label className="font-bold">Last Name</label>
          <Input
            placeholder="Place in your updated first name"
            value={userDetails.last_name}
          />
        </div>
        <div className="grid gap-2">
          <label className="font-bold">Education Grade</label>
          <Input
            placeholder="Place in your updated first name"
            value={userDetails.education_grade}
          />
        </div>
        <div className="flex mx-auto">
          <Button>Save changes</Button>
        </div>
      </form>
    </DialogContent>
  </Dialog>
);

export default Profile;
