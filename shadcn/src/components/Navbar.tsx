import {Moon} from "lucide-react";

const Navbar = () => {
  return (
    <nav className="p-4 flex items-center justify-between">
      {/* LEFT */}
      collapseButton
      {/* Right */}
      <div className="flex items-center gap-4">
        <a href="">Dashboard</a>
        <Moon />
      </div>
    </nav>
  );
};

export default Navbar;
