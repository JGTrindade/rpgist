import styles from "./OptionsHeader.module.css";
import TabButton from "./TabButton.tsx";
import CharSheetButton from "./CharSheetButton.tsx";

type OptionsHeaderProps = {selectedMenuItem: string; onSelectedMenuItem: (selectedItem: string) => void; TabsContainer?: string}

export default function OptionsHeader({selectedMenuItem, onSelectedMenuItem, TabsContainer = "menu"}: OptionsHeaderProps) {
    const {header} = styles;

    const handleSelect = selectedButton => {
        onSelectedMenuItem(selectedButton)
    }

    return (
        <header className={header}>
            <TabsContainer>
                <TabButton onSelect={() => handleSelect("options")} isSelected={selectedMenuItem === "options"}>Building options</TabButton>
                <TabButton onSelect={() => handleSelect("race")} isSelected={selectedMenuItem === "race"}>Race</TabButton>
                <TabButton onSelect={() => handleSelect("class")} isSelected={selectedMenuItem === "class"}>Class</TabButton>
                <TabButton onSelect={() => handleSelect("alignment")} isSelected={selectedMenuItem === "alignment"}>Alignment</TabButton>
            </TabsContainer>
            <CharSheetButton>Character Sheet</CharSheetButton>
        </header>
    );
};