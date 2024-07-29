import Dropdown from "./Dropdown.tsx";

export default function CharLevel() {

    const levels = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

    return <Dropdown name="charLevel" title="Level" values={levels}/>
}
