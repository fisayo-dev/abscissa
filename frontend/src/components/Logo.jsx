import brain_svg from "../assets/brain_svg.png";
import { Link } from "react-router-dom";
const Logo = () => {
  return (
    <Link className="flex items-center gap-2">
      <img src={brain_svg} alt="" className="h-6 w-6" />
      <h2 to="/" className="text-2xl font-extrabold">
        Abscissa
      </h2>
    </Link>
  );
};

export default Logo;
