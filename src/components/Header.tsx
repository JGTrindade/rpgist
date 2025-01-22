import styles from "./Header.module.css";
import Logo from "./Logo";

export default function Header() {
  const { header } = styles;
  
  return (
    <header className={header}>
      <Logo />
    </header>
  );
}
