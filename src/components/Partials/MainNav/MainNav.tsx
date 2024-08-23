import styles from "./MainNav.module.css";

import MainNavItem from "./MainNavItem.tsx";

export default function MainNav() {
    const {nav, ul} = styles;

    return (
        <nav className={nav}>
            <ul className={ul}>
                <MainNavItem name="Systems" />
                <MainNavItem name="Collections" />
                <MainNavItem name="Tools" />
                <MainNavItem name="Forums" />
            </ul>
        </nav>
    );
}
