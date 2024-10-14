import styles from "./Automatic.module.css";

import React, { useState } from "react";

import SettingsHeader from "./Headers/SettingsHeader.tsx";
import Content from "./Content.tsx";

export default function Automatic() {
    const {contentWrapper} = styles;

    const [menuItem, setMenuItem] = useState("options")

    const handleMenuItem = e => setMenuItem(e);

    return (
        <>
            <header>
                <h1>Nyxhemerium</h1>
                <p>A character generator for</p>
                <p>Dungeons & Dragons</p>
            </header>
            <div className={contentWrapper}>
                <SettingsHeader onSelectedMenuItem={handleMenuItem} selectedMenuItem={menuItem}/>
                <Content menuItem={menuItem}/>
            </div>
        </>
    )
}