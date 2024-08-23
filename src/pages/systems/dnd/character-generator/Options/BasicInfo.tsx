import styles from "./BasicInfo.module.css"

import FormInput from "../../../../../components/Registration/FormInput.tsx";
import FormSelect from "../../../../../components/Registration/FormSelect.tsx";
import {Alignment} from "../../../types/Alignment.ts";

export default function BasicInfo() {
    const {basicInfo, name, alignmentLevel} = styles;

    const alignmentOptions: Alignment[] = [
        'N/A',
        'lawful good',
        'neutral good',
        'chaotic good',
        'lawful neutral',
        'neutral',
        'chaotic neutral',
        'lawful evil',
        'chaotic evil'
    ];

    const levelOptions: Array<Alignment | number | 'Random'> = ['Random'];
    for (let i = 1; i <= 20; i++) {
        levelOptions.push(i)
    }

    return (
        <>
            <div className="text">
                <h2 className="heading">Basic Information</h2>
                <p className="explanation">The information in this section is the base for your character.<br/>None
                    of it is compulsory, but whatever you add will be used by your character.</p>
            </div>
            <div className={basicInfo}>
                <div className={name}>
                    <FormInput label="Name"/>
                    <FormInput label="Surname"/>
                </div>
                <div className={alignmentLevel}>
                    <FormSelect label="Alignment" options={alignmentOptions}/>
                    <FormSelect label="Level" options={levelOptions}/>
                </div>
                <FormInput label="Background"/>
            </div>
        </>
    );
}