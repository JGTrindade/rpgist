import styles from "./BuildingOptions.module.css"
import BooksAvailable from "./BooksAvailable.tsx";
import AbilityGenerationMethod from "./AbilityGenerationMethod.tsx";

export default function BuildingOptions() {
    const {buildingOptions, fieldset} = styles;
    return (
        <section className={buildingOptions}>
            <BooksAvailable className={fieldset}/>
            <AbilityGenerationMethod className={fieldset}/>
        </section>
    );
};