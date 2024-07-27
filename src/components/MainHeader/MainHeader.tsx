import styles from "./MainHeader.module.css";

import MainNav from "../MainHeader/MainNav/MainNav.tsx";
import LoginButton from "../Buttons/LoginButton";
import SignUpButton from "../Buttons/SignUpButton";

export default function MainHeader() {
    const {header, logInSignUp} = styles;

    return (
        <header className={header}>
            <MainNav/>
            <div className={logInSignUp}>
                <LoginButton/>
                <SignUpButton/>
            </div>
        </header>
    );
}
