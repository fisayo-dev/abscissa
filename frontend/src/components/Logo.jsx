import brain_svg from "../assets/brain_svg.png";
import { Link } from "react-router-dom";
const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      <img src={brain_svg} alt="" className="h-6 w-6" />
      <Link to="/" className="text-2xl font-extrabold">
        Abscissa
      </Link>
    </div>
  );
};

export default Logo;
