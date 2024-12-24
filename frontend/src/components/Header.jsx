import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="app-container py-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Abscissa</h2>
        <div className="flex items-center gap-3">
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
