import { MainStyles } from '@segments/styles';
import { ReactNode } from 'react';

interface MainProps {
    children: ReactNode;
}

export default function Main({ children }: MainProps) {
    return <main className={MainStyles.Main}>{children}</main>;
}
