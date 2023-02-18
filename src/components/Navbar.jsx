function Navbar() {
  return (
    <>
      <nav>
        <div className="navbar">
          <p>COINDOM</p>
          <ul>
            <li>
              <a href="#home">About</a>
            </li>
            <li>
              <a href="#home">Roadmap</a>
            </li>
            <li>
              <a href="#home">Team</a>
            </li>
            <li>
              <a href="#home">Collection</a>
            </li>
          </ul>
          <span>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-discord"></i>
          </span>
        </div>
      </nav>
    </>
  );
}

export default Navbar;