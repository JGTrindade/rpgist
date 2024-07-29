import styles from "./CharInfoSelectionCard.module.css";

type CharInfoSelectionCardProps = { componentId: string, raceName: string };
export default function CharInfoSelectionCard({componentId, raceName}: CharInfoSelectionCardProps) {
    const {img, basicInfo} = styles;

    let imgAltText;
    if (componentId === "charRace") {
        imgAltText = "Character race representation";
    } else if (componentId === "charClass") {
        imgAltText = "Character class representation";
    } else {
        imgAltText = "Character race alignment";
    }

    return (
        <>
            {/*<img/> Avatar image*/}
            <section className={basicInfo}>{raceName}</section>
        </>
    );
}