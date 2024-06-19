import "./CourseDisplay.css";

function CourseDisplay() {
  return (
    <nav className="navbar-expand-md coursedisplay">
      <div className="">
        <ul className="nav flex-column mr-auto coursedisplay-list">
          <li className="nav-item">
            <a className="nav-link"> Period 1 </a>
          </li>
          <li className="nav-item">
            <a className="nav-link"> Period 2 </a>
          </li>
          <li className="nav-item">
            <a className="nav-link"> Period 3 </a>
          </li>
          <li className="nav-item">
            <a className="nav-link"> Period 4 </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default CourseDisplay;
