import {Alignment} from "../../pages/systems/types/Alignment.ts";

interface FormInputProps {
    label: string,
    options: (Alignment | (number | 'Random'))[]
}

export default function FormSelect(props: FormInputProps) {

    const getOption = (option: string | number): string | number => {
        return typeof option === 'string' ? option[0].toUpperCase() + option.substring(1) : option
    }

    return (
        <label>
            {props.label}
            <select name="alignment">
                {props.options.map(option => (<option key={option} value={option}>{getOption(option)}</option>))}
            </select>
        </label>
    );
}