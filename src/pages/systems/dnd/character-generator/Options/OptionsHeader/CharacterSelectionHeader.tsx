import styles from "./CharacterSelectionHeader.module.css";
import Logo from "../../Logo.tsx";
import Avatar from "../../../../../../components/Avatar/Avatar.tsx";
import LangSwitch from "../../../../../../components/LangSwitch/LangSwitch.tsx";

export default function CharacterSelectionHeader() {
    const {header, icons} = styles;

    return (
        <header className={header}>
            <Logo/>
            <div className={icons}>
                <LangSwitch/>
                <Avatar/>
            </div>
        </header>
    );
}