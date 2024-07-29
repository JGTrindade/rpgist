import {type ReactNode} from "react";

interface SystemCardProps {
    children: ReactNode;
}

export default function SystemCard({children}: SystemCardProps): ReactNode {
    return <div>{children}</div>
}
