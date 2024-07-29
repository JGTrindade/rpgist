import styles from "./TraitsIdealsBondsFlaws.module.css";
import TextBox from "../TextBox";
import FeaturesAndTraits from "./FeaturesAndTraits.tsx";

export default function TraitsIdealsBondsFlaws() {
    const {traitsIdealsBondsFlaws, container} = styles;
    return (
        <section className={traitsIdealsBondsFlaws}>
            <div className={container}>
                <TextBox title="personality traits">
                    <p>My flattery makes those those I talk to feel wonderful and important.</p>
                </TextBox>
                <TextBox title="ideals">
                    <p>Responsibility. It’s the duty of a noble to protect the common people, not bully them.</p>
                </TextBox>
                <TextBox title="bonds">
                    <p>My greataxe is a family heirloom, and it’s by far my most precious possession.</p>
                </TextBox>
                <TextBox title="flaws">
                    <p>I have a hard time resisting the allure of wealth, especially gold. Wealth can help me restore my
                        legacy.</p>
                </TextBox>
            </div>
            <FeaturesAndTraits/>
        </section>
    );
}