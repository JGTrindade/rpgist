import styles from "./Options.module.css";

export default function Options() {
    const {additionalOptions, secondaryHeading} = styles;
    return (
        <section className={additionalOptions}>
            <h2 className={secondaryHeading}>Additional options</h2>
            <p>
                Would you like to use classes and races out of the core rulebooks?
                <label>
                    <input type="radio" name="additionalOptions" value="yes"/>
                    Yes
                </label>
                <label>
                    <input type="radio" name="additionalOptions" value="no"/>
                    No
                </label>
            </p>
            <p>Choose your favorite method for generating attribute values</p>
            <label>
                <input type="radio" name="attributeGenerationMethod" value="default"/>
                Roll 4d6 and sum the three highest values (default)
            </label>
            <label>
                <input type="radio" name="attributeGenerationMethod" value="deterministic"/>
                Take numbers 14, 13, 12, 10, 8 and place each one at your attribute of choice.
            </label>
            <label>
                <input type="radio" name="attributeGenerationMethod" value="distribution"/>
                Distribute 27 points based on the Ability Score Point Cost table.
            </label>
        </section>
    )
}