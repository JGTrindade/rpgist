import styles from './FormInput.module.css';

import { useId } from 'react';
interface FormInputProps {
    label: string
}

export default function FormInput(props: FormInputProps) {
    const {input, label} = styles;

    const labelId = useId();

    return (
        <div>
            {/*// TODO make maxLength configurable for different input types.*/}
            <input className={input} id={labelId} maxLength={17}/>
            <label className={label} htmlFor={labelId}>{props.label}</label>
        </div>
    );
}