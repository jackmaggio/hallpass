import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar-wrapper navbar navbar-expand-md  p-2 landing-nav">
      <span className="navbar-brand landing-nav-brand">Hallpass</span>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav navbar-dark mr-auto nav-list">
          <li className="nav-item">
            <a className="nav-link"> Home </a>
          </li>
          <li className="nav-item">
            <a className="nav-link"> Student </a>
          </li>
          <li className="nav-item">
            <a className="nav-link"> Attendance </a>
          </li>
          <li className="nav-item">
            <a className="nav-link"> Late passes </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
