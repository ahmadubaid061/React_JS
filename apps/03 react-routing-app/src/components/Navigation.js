import { Link, useLocation } from "react-router-dom";
import "../styles/style.css";

export default function Navigation({ onSignOut }) {
  const currentPath = useLocation();

  return (
    <header className="main-header">
      <div className="logo"> MyDashboard</div>

      <ul className="nav-menu">
        <li>
          <Link
            to="/dashboard"
            className={
              currentPath.pathname === "/dashboard" ? "active-link" : ""
            }
          >
            Dashboard
          </Link>
        </li>
        <li>
          <Link
            to="/company"
            className={currentPath.pathname === "/company" ? "active-link" : ""}
          >
            Company
          </Link>
        </li>
        <li>
          <Link
            to="/feedback"
            className={
              currentPath.pathname === "/feedback" ? "active-link" : ""
            }
          >
            Feedback
          </Link>
        </li>
      </ul>

      <button className="sign-out-btn" onClick={onSignOut}>
        Sign Out
      </button>
    </header>
  );
}
