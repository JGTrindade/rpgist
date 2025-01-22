import styles from "./Automatic.module.css";

import React, { useState } from "react";

import SettingsHeader from "./Headers/SettingsHeader.tsx";
import Content from "./Content.tsx";
import Header from "../../../../components/Header.tsx";
import MainHeading from "../../../../components/MainHeading.tsx";

export default function Automatic() {
    const {contentWrapper} = styles;

    const [menuItem, setMenuItem] = useState("options")

    const handleMenuItem = e => setMenuItem(e);

    return (
        <>
            <Header/>
            <MainHeading/>
            <div className={contentWrapper}>
                <SettingsHeader onSelectedMenuItem={handleMenuItem} selectedMenuItem={menuItem}/>
                <Content menuItem={menuItem}/>
            </div>
        </>
    )
}