import styles from "./Dropdown.module.css";
import {Alignment} from "../../types/Alignment.ts";
import {Race} from "../../types/Race.ts";

import React, {useState} from "react";

type DropdownProps = {
    title: string,
    name: string,
    values: Array<number> | Array<Alignment> | Array<Race>
};
export default function Dropdown({title, name, values}: DropdownProps) {
    const {wrapper, select} = styles;

    const [selectedChoice, setSelectedChoice] = useState('')

    const handleOption = (e: React.ChangeEvent<HTMLSelectElement>) => setSelectedChoice(e.target.value);

    const capitalizeValue = (value: string | number): string | number => typeof value === "string" ? value.charAt(0).toUpperCase() + value.slice(1) : value;

    return (
        <label>
            {title}
            <div className={wrapper}>
                <select className={select} name={name} value={selectedChoice} onChange={handleOption}>
                    {values.map(value => (<option key={value} value={value}>{capitalizeValue(value)}</option>))}
                </select>
            </div>
        </label>
    )
}