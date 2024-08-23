import styles from "./Automatic.module.css";

import SettingsHeader from "./Headers/SettingsHeader.tsx";
// import Footer from "../../../../components/Partials/Footer.tsx";
import Content from "./Content.tsx";

export default function Automatic() {
    const {contentWrapper} = styles;

    // const handleMenuItem = (button) => {
    //     setMenuItem(button);
    // }

    return (
        <>
            <header>
                <h1>Nyxhemerium</h1>
                <p>A character generator for</p>
                <p>Dungeons & Dragons</p>
            </header>
            <div className={contentWrapper}>
                <SettingsHeader /> {/*selectedMenuItem={menuItem} onSelectedMenuItem={handleMenuItem}/>*/}
                <Content/>
            </div>
            {/*<Footer/>*/}
        </>
    )
}