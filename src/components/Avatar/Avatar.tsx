import styles from "./Avatar.module.css";
import IconBackground from "../IconBackground.tsx";

export default function Avatar() {
    const {avatar} = styles;

    return (
        <IconBackground>
            <img src="/dumb-avatar.jpg" alt="User avatar" width="30" height="30" className={avatar}/>
        </IconBackground>
    );
}