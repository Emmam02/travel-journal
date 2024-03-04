import world_icon from "./assets/Fill-213.png";

const Navbar = () => {
  return (
    <div className="nav-container">
      <img src={world_icon} alt="world-icon" className="nav-icon" />
      <h1 className="nav-title">my travel journal</h1>
    </div>
  );
};

export default Navbar;
