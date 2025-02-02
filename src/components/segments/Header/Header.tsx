import { HeaderStyles } from '@segments/styles';
import { ReactNode } from 'react';

interface HeaderProps {
    children: ReactNode;
}

export default function Header({ children }: HeaderProps) {
    return <header className={HeaderStyles.Header}>{children}</header>;
}
