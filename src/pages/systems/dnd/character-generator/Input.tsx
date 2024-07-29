import styles from "./Input.module.css";

type InputProps = { title: string }

import React, {useState} from "react";

export default function Input({title}: InputProps) {
    const {input} = styles;
    const [value, setValue] = useState("")

    const handleValue = (e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value)

    return (
        <label>
            {title}
            <input className={input} type="text" value={value} onChange={handleValue}/>
        </label>
    );
}