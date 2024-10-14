import Button from "../../../../../components/Buttons/Button.tsx";
import styles from "./SettingsHeader.module.css";
import TabButton from "./TabButton.tsx";

type SettingsHeaderProps = {
  selectedMenuItem: string;
  onSelectedMenuItem: (selectedItem: string) => void;
  TabsContainer?: string;
};
export default function SettingsHeader({
  selectedMenuItem,
  onSelectedMenuItem,
  TabsContainer = "menu",
}: SettingsHeaderProps) {
  const { settingsHeader, charGen } = styles;

  return (
    <>
      <TabsContainer className={settingsHeader}>
        <TabButton
          onClick={() => onSelectedMenuItem("options")}
          isSelected={selectedMenuItem === "options"}
        >
          Basic information
        </TabButton>
        <TabButton
          onClick={() => onSelectedMenuItem("race")}
          isSelected={selectedMenuItem === "race"}
        >
          Specie
        </TabButton>
        <TabButton
          onClick={() => onSelectedMenuItem("class")}
          isSelected={selectedMenuItem === "class"}
        >
          Class
        </TabButton>
        <div className={charGen}>
          <Button
            styles={{ backgroundColor: "red", border: "none" }}
            url="/dnd/characters/character-name"
          >
            To the character
          </Button>
        </div>
      </TabsContainer>
    </>
  );
}
2;
