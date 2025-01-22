import styles from "./MainNav.module.css";
import { Link } from "react-router-dom";

export default function MainNav() {
  const { mainNav } = styles;

  return (
    <nav className={mainNav}>
      <ul>
        <li>
          <Link to="/systems">Systems</Link>
        </li>
        <li>
          <Link to="/tools">Tools</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
      </ul>
    </nav>
  );
}
