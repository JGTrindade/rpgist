import styles from "./Modal.module.css";
import BuildingOptions from "./Options/BuildingOptions.tsx";
import CharClass from "./CharClass.tsx";
import CharLevel from "./CharLevel.tsx";
import CharRace from "./CharRace.tsx";
import CharAlignment from "./CharAlignment.tsx";
import CharXPPoints from "./CharXPPoints.tsx";
import PlayerName from "./PlayerName.tsx";
import FirstName from "./FirstName.tsx";
import LastName from "./LastName.tsx";

export default function Modal() {
    const {container, modal, heading, mainInfo, grid} = styles;

    return (
        <>
            {/*<div className={backdrop}/>*/}
            <div className={container}>
                <div className={modal}>
                    <h2 className={heading}>building options</h2>
                    <BuildingOptions/>
                    <h2 className={heading}>character settings</h2>
                    <section className={mainInfo}>
                        <div className={grid}>
                            <FirstName/>
                            <LastName/>
                        </div>
                        <div className={grid}>
                            <CharClass/>
                            <CharLevel/>
                        </div>
                        <div className={grid}>
                            <CharRace/>
                            <CharAlignment/>
                        </div>
                        <div className={grid}>
                            <CharXPPoints/>
                            <PlayerName/>
                        </div>
                    </section>
                </div>
            </div>
        </>
    );
}