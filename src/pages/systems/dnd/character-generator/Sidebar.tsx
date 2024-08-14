import styles from "./Sidebar.module.css";
import TabButton from "./Options/OptionsHeader/TabButton.tsx";

type SidebarProps = {
    selectedMenuItem: string;
    onSelectedMenuItem: (selectedItem: string) => void;
    TabsContainer?: string
}
export default function Sidebar({selectedMenuItem, onSelectedMenuItem, TabsContainer = "menu"}: SidebarProps) {
    const {sidebar} = styles;

    const handleSelect = selectedButton => {
        onSelectedMenuItem(selectedButton)
    }

    return (
        <div className={sidebar}>
            <TabsContainer>
                <TabButton onSelect={() => handleSelect("options")}
                           isSelected={selectedMenuItem === "options"}>Building options</TabButton>
                <TabButton onSelect={() => handleSelect("race")}
                           isSelected={selectedMenuItem === "race"}>Race</TabButton>
                <TabButton onSelect={() => handleSelect("class")}
                           isSelected={selectedMenuItem === "class"}>Class</TabButton>
                <TabButton onSelect={() => handleSelect("alignment")}
                           isSelected={selectedMenuItem === "alignment"}>Alignment</TabButton>
            </TabsContainer>
        </div>
    )
}