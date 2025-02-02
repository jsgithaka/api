import { PageStyles } from '@layout/styles';
import { ReactNode } from 'react';

interface Props {
    children: ReactNode;
}

export default function Page({ children }: Props) {
    return <body className={PageStyles.Page}>{children}</body>;
}
