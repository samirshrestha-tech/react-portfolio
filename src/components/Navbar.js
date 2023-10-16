import { useState } from "react";
const Navbar = () => {
  const [showMenu, setMenu] = useState(false);
  return (
    <header>
      <nav className="container flex navigation">
        <div className="flex nav-left">
          <h1>Samir</h1>
          <div className="line">Soft. Engineer</div>
        </div>

        <div className="menu">
          <div className="bar">
            {showMenu ? (
              <i class="fa-solid fa-xmark" onClick={() => setMenu(false)}></i>
            ) : (
              <i class="fa-solid fa-bars" onClick={() => setMenu(true)}></i>
            )}
          </div>

          <ul className={showMenu ? "flex slide " : "flex"}>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};
export default Navbar;
