import styles from "./Header.module.css";
import MainNav from "./MainNav";

export default function Header() {
  const { mainHeader } = styles;

  return (
    <header className={mainHeader}>
      <MainNav />
    </header>
  );
}
