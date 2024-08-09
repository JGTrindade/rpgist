import styles from "./OptionsHeader.module.css";
import Logo from "../../Logo.tsx";
import Avatar from "../../../../../../components/Avatar/Avatar.tsx";
import LangSwitch from "../../../../../../components/LangSwitch/LangSwitch.tsx";
// import TabButton from "./TabButton.tsx";

type OptionsHeaderProps = {
    selectedMenuItem: string;
    onSelectedMenuItem: (selectedItem: string) => void;
    TabsContainer?: string
}

export default function OptionsHeader({
                                          selectedMenuItem,
                                          onSelectedMenuItem,
                                          TabsContainer = "menu"
                                      }: OptionsHeaderProps) {
    const {header, icons} = styles;

    const handleSelect = selectedButton => {
        onSelectedMenuItem(selectedButton)
    }

    return (
        <header className={header}>
            <Logo/>
            <div className={icons}>
                <LangSwitch/>
                <Avatar/>
            </div>
            {/*<TabsContainer>*/}
            {/*    <TabButton onSelect={() => handleSelect("options")} isSelected={selectedMenuItem === "options"}>Building*/}
            {/*        options</TabButton>*/}
            {/*    <TabButton onSelect={() => handleSelect("race")}*/}
            {/*               isSelected={selectedMenuItem === "race"}>Race</TabButton>*/}
            {/*    <TabButton onSelect={() => handleSelect("class")}*/}
            {/*               isSelected={selectedMenuItem === "class"}>Class</TabButton>*/}
            {/*    <TabButton onSelect={() => handleSelect("alignment")}*/}
            {/*               isSelected={selectedMenuItem === "alignment"}>Alignment</TabButton>*/}
            {/*</TabsContainer>*/}
        </header>
    );
}