import { ReactNode } from 'react';

interface ViewProps {
    id: string;
    children: ReactNode;
}

export default function View({ id, children }: ViewProps) {
    return <section id={id}>{children}</section>;
}
