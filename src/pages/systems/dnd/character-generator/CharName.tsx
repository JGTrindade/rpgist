import styles from "./CharName.module.css";

export default function CharName() {
    const {charName, charNamePart} = styles;
    return (
        <>
            <div className={charName}>
                <label className={charNamePart}>
                    First name: <input type="text" name="charFirstName" defaultValue="Sid"/>
                </label>
                <label className={charNamePart}>
                    Last name: <input type="text" name="charLastName" defaultValue="von Pierce"/>
                </label>
            </div>
        </>
    )
}