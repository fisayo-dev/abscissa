import { useAuth } from "@/contexts/AuthContext";
import { GraduationCap, Pencil } from "lucide-react";
import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Edit } from "iconsax-react";

// Importing shadcn components
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const Profile = () => {
  const [userDetails, setUserDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  // Profile edit Changes
  const [newFirstName, setNewFirstName] = useState("");
  const [newLastName, setNewLastName] = useState("");
  const [newEducationGrade, setNewEducationGrade] = useState("");

  // Refs for inputs to manage focus
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const educationGradeRef = useRef(null);

  // State for dialog visibility
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  useEffect(() => {
    const fetchUserDetails = async () => {
      if (!user) {
        setError("User ID not found.");
        setIsLoading(false);
        return;
      }

      try {
        const url =
      process.env.NODE_ENV == "production"
        ? `https://abscissa-1.onrender.com/api/v1/users/${user}`
            : `/api/v1/users/${user}`;
        
        const token = localStorage.getItem("TOKEN");
        if (!token) throw new Error("Authentication token missing.");

        const response = await fetch(url, {
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
        setNewFirstName(data.first_name);
        setNewLastName(data.last_name);
        setNewEducationGrade(data.education_grade);
      } catch (err) {
        console.error(err);
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUserDetails();
  }, [user, logout, navigate]);

  useEffect(() => {
    // Set focus on the first input when dialog opens
    if (firstNameRef.current) {
      firstNameRef.current.focus();
    }
  }, [userDetails]);

  const handleProfileUpdate = async () => {
    const token = localStorage.getItem("TOKEN");
    if (!token) {
      alert("Authentication token missing.");
      return;
    }
    const url =
      process.env.NODE_ENV == "production"
        ? `https://abscissa-1.onrender.com/api/v1/users/edit/${userDetails._id}`
        : `/api/v1/users/edit/${userDetails._id}`;

    try {
      const response = await fetch(url, {
        method: "PUT", // Make sure to use PUT for updating data
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          first_name: newFirstName,
          last_name: newLastName,
          education_grade: newEducationGrade,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to update profile");
      }

      // Update the user details in state after successful update
      setUserDetails(data.user);
      setNewFirstName(data.user.first_name);
      setNewLastName(data.user.last_name);
      setNewEducationGrade(data.user.education_grade);

      // Close the dialog after successful update
      setIsDialogOpen(false);

      alert("Profile updated successfully");
    } catch (err) {
      console.error(err);
      setError(err.message);
      alert("Error updating profile");
    }
  };

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
            <div className="md:flex grid justify-center md:justify-normal items-center gap-5">
              <div className="h-32 w-32 bg-blue border-4 border-slate-800 rounded-full mx-auto md:m-0 bg-cover bg-center" />
              <div className="md:gap-1 text-center md:text-left">
                <h2 className="text-2xl">
                  {userDetails.first_name} {userDetails.last_name}
                </h2>
                <p>{userDetails.email}</p>
                <div className="flex items-center gap-1 justify-center md:justify-normal">
                  <GraduationCap className="h-5 w-5 color-pink" />
                  <p className="text-sm">{userDetails.education_grade} - Student</p>
                </div>
              </div>
              <div className=" mx-auto md:absolute md:bottom-4 md:right-4">
                <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                  <DialogTrigger asChild>
                    <div className="bg-slate-800 cursor-pointer hover:bg-slate-700 rounded-full">
                      <div className="px-3 py-2 flex items-center justify-center gap-2">
                        <Edit className="h-5 w-5" />
                        <p>Edit Profile</p>
                      </div>
                    </div>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                      <DialogTitle>Edit Profile</DialogTitle>
                      <DialogDescription>
                        Update your personal details below.
                      </DialogDescription>
                    </DialogHeader>
                    <form
                      className="grid gap-4"
                      onSubmit={(e) => {
                        e.preventDefault();
                        handleProfileUpdate();
                      }}
                    >
                      <div className="grid gap-2">
                        <label className="font-bold">First Name</label>
                        <Input
                          ref={firstNameRef}
                          placeholder="Place in your updated first name"
                          value={newFirstName}
                          onChange={(e) => setNewFirstName(e.target.value)}
                        />
                      </div>
                      <div className="grid gap-2">
                        <label className="font-bold">Last Name</label>
                        <Input
                          ref={lastNameRef}
                          placeholder="Place in your updated last name"
                          value={newLastName}
                          onChange={(e) => setNewLastName(e.target.value)}
                        />
                      </div>
                      <div className="grid gap-2">
                        <label className="font-bold">Education Grade</label>
                        <Input
                          ref={educationGradeRef}
                          placeholder="Place in your updated education grade"
                          value={newEducationGrade}
                          onChange={(e) => setNewEducationGrade(e.target.value)}
                        />
                      </div>
                      <div className="flex mx-auto mt-4">
                        <Button type="submit">Save changes</Button>
                      </div>
                    </form>
                  </DialogContent>
                </Dialog>
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

export default Profile;
