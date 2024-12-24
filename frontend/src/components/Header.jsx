import { Link } from "react-router-dom";
import brain_svg from "../assets/brain_svg.png";
import { Menu } from "iconsax-react";
import { MenuIcon } from "lucide-react";


const Header = () => {
  return (
    <div className="app-container py-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src={brain_svg} alt="" className="h-6 w-6"/>
        <Link to='/' className="text-2xl font-extrabold">Abscissa</Link>
        </div>
        <div className="hidden md:flex items-center gap-6">
          <Link className="hover:text-white">Home</Link>
          <Link className="hover:text-white">Features</Link>
          <Link className="hover:text-white">Pricing</Link>
          <Link className="hover:text-white">FAQ</Link>
        </div>
        <div className="flex md:hidden">
          <MenuIcon className="h-6 w-6"/>
        </div>
      </div>
    </div>
  );
};

export default Header;
