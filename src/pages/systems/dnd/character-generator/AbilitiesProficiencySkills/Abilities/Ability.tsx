import styles from "./Ability.module.css";

type AbilitiesProps = { name: string; value: number; }
export default function Ability({name, value}: AbilitiesProps) {
    const {attribute, abilityName, abilityValue, abilityModifier} = styles;

    const calculateModifier = (ability: number): string | number => {
        let result = Math.floor((ability - 10) / 2);
        return result > 0 ? `+${result}` : result;
    };

    // const outputValue = (num: number): any => {
    //     try {
    //         if (num < 8) {
    //             throw new Error('An attribute must be equal to or greater than 8.');
    //         }
    //         return num;
    //     } catch (err) {
    //         // Add a notification modal to expose the error.
    //         return <span>{err.message}</span>
    //         // console.log(err);
    //     }
    // }

    return (
        <article className={attribute}>
            <p className={abilityName}>{name}</p>
            <p className={abilityValue}>{value}</p>
            <p className={abilityModifier}>{calculateModifier(value)}</p>
        </article>
    )
}