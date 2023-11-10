import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="navbar bg-base-100">
      <div className="site-container flex justify-between items-center w-full">
      <Link to="/" className="btn btn-ghost normal-case text-xl">
        Where in the world?
      </Link>
      <div className="btn btn-success">Clik</div>
      </div>
    </header>
  );
}

export default Navbar;
