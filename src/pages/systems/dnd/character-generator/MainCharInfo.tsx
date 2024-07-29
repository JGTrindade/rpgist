import styles from "./MainCharInfo.module.css";

export default function MainCharInfo() {
    const {
        mainCharInfo,
        mainHeading,
        grid,
        charName,
        nameArea,
        trueName,
        charMainInfo,
        charMainInfoBlock1,
        classLevel,
        charBackground,
        charPlayerName,
        classBackgroundPlayer,
        raceAlignmentXP,
        divider
    } = styles;
    return (
        <div className={mainCharInfo}>
            <h1 className={mainHeading}>Dungeons & Dragons</h1>
            <div className={grid}>
                <div className={charName}>
                    <div className={nameArea}></div>
                    <p className={trueName}>Character Name</p>
                </div>
                <div className={charMainInfo}>
                    <div className={charMainInfoBlock1}>
                        <div className={classBackgroundPlayer}>
                            <p>Fighter 1</p>
                            <p>Noble</p>
                            <p>João Gabriel</p>
                        </div>
                        <hr className={divider}/>
                        <div className={classBackgroundPlayer}>
                            <p className={classLevel}>Class & Level</p>
                            <p className={charBackground}>Background</p>
                            <p className={charPlayerName}>Player Name</p>
                        </div>
                    </div>
                    <div>
                        <div className={raceAlignmentXP}>
                            <p>Dwarf</p>
                            <p>Chaotic good</p>
                            <p>120.000</p>
                        </div>
                        <hr className={divider}/>
                        <div className={raceAlignmentXP}>
                            <p>Race</p>
                            <p>Alignment</p>
                            <p>Experience points</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}