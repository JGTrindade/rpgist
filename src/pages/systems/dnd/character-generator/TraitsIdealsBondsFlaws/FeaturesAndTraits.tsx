import styles from "./FeaturesAndTraits.module.css";

export default function FeaturesAndTraits() {
    const {container, title} = styles;

    return (
        <div className={container}>
            <p>Second Wind.</p>
            <p>Fighting Style.</p>
            <p>Position of Privilege.</p>
            <p className={title}></p>
        </div>
    );
};