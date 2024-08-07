import styles from "./CharInfoSelectionCard.module.css";
import Image from "../../../../../components/Images/Image.tsx";

type CharInfoSelectionCardProps = { race: { name: string; image: string; alt: string } };
export default function CharInfoSelectionCard({race}: CharInfoSelectionCardProps) {
    const {img, basicInfo} = styles;

    return (
        <>
            <Image src={`/public/${race.image}`} alt={race.alt} className={img}/>
            <section className={basicInfo}>{race.name}</section>
        </>
    );
}