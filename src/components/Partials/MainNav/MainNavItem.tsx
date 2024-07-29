import styles from "./MainNavItem.module.css";

import SubmenuWrapper from "./SubmenuWrapper";
import {useState} from "react";

type MenuItemProps = { name: string }

export default function MainNavItem({name}: MenuItemProps) {
    const [submenuIsOpen, setSubmenuIsOpen] = useState<boolean>(false);

    const {overallContainer, submenuSessionTitle, menuItem, arrow, charGen} = styles;

    let arrowSymbol;
    name === 'Genres' || name === 'Solutions' ? arrowSymbol = <span className={arrow}></span> : null

    const handleSubmenuAppearing = () => {
        const debouncedSetState = () => setSubmenuIsOpen(true);
        let timeout = setTimeout(debouncedSetState, 100); // Adjust delay as needed
        // return () => {
        //     clearTimeout(timeout);
        //     setSubmenuIsOpen(false); // Reset hover flag on cleanup
        // };
    }
    // const handleSubmenuDisappearing = () => setSubmenuIsOpen(false);

    let submenu;
    if (submenuIsOpen && (name === 'Genres' || name === 'Solutions')) {
        submenu = (<SubmenuWrapper>
            <p className={submenuSessionTitle}>Character Generators</p>
            <ul className={charGen}>
                <li>D&D 5.5</li>
            </ul>
        </SubmenuWrapper>);
    }

    return (
        <>
            <li className={menuItem} onPointerEnter={handleSubmenuAppearing}>
                <span>{name}</span>
                {arrowSymbol}
                <div className={overallContainer}>
                    <div></div>
                </div>
            </li>
            {submenu}
        </>)
}