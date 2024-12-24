import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="app-container py-6">
      <div className="flex items-center justify-between">
        <Link to='/' className="text-2xl font-extrabold">Abscissa</Link>
        <div className="hidden md:flex items-center gap-3">
          <Link className="hover:text-white">Home</Link>
          <Link className="hover:text-white">Features</Link>
          <Link className="hover:text-white">Pricing</Link>
          <Link className="hover:text-white">FAQ</Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
