import styles from "./SettingsHeader.module.css";
import TabButton from "./TabButton.tsx";
import {useState} from "react";

type SettingsHeaderProps = {
    // selectedMenuItem: string;
    // onSelectedMenuItem: (selectedItem: string) => void;
    TabsContainer?: string
}
export default function SettingsHeader({
                                           // selectedMenuItem,
                                           // onSelectedMenuItem,
                                           TabsContainer = "menu"
                                       }: SettingsHeaderProps) {
    const {settingsHeader} = styles;

    const [menuItem, setMenuItem] = useState("options")

    const handleSelect = (selectedButton) => setMenuItem(selectedButton);

    return (

        <>
            <TabsContainer className={settingsHeader}>
                <TabButton
                    onSelect={() => handleSelect("options")}
                    isSelected={menuItem === "options"}
                    link="basic-information">Basic information
                </TabButton>
                <TabButton
                    onSelect={() => handleSelect("race")}
                    isSelected={menuItem === "race"}
                    link="race">Race
                </TabButton>
                <TabButton
                    onSelect={() => handleSelect("class")}
                    isSelected={menuItem === "class"}
                    link="class">Class
                </TabButton>
            </TabsContainer>
        </>
    )
}