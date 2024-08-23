import {Alignment} from "../../pages/systems/types/Alignment.ts";
import {useId} from "react";

interface FormInputProps {
    label: string,
    options: (Alignment | (number | 'Random'))[]
}

export default function FormSelect(props: FormInputProps) {
    const labelId = useId();

    const getOption = (option: string | number): string | number => {
        return typeof option === 'string' ? option[0].toUpperCase() + option.substring(1) : option
    }

    return (
        <div>
            <label htmlFor={labelId}>
                {props.label}
            </label>
            <select name="alignment" id={labelId}>
                {props.options.map(option => (<option key={option} value={option}>{getOption(option)}</option>))}
            </select>
        </div>
    );
}