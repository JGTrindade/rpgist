import styles from './FormInput.module.css';
interface FormInputProps {
    label: string
}

export default function FormInput(props: FormInputProps) {
    const {input} = styles;

    return (
        <label>
            <input className={input}/>
            {props.label}
        </label>
    );
}