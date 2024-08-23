import styles from "./GenericHeader.module.css";
import Logo from "../Logo.tsx";
import Avatar from "../../../../../components/Avatar/Avatar.tsx";
import LangSwitch from "../../../../../components/LangSwitch/LangSwitch.tsx";
import MainNav from "../../../../../components/Partials/MainNav/MainNav.tsx";

export default function GenericHeader() {
    const {header, icons} = styles;

    return (
        <header className={header}>
            <Logo/>
            <MainNav/>
            <div className={icons}>
                <LangSwitch/>
                <Avatar/>
            </div>
        </header>
    );
}