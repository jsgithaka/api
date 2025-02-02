import { PageStyles } from '@layout/styles';
import { Header, Main } from '@segments/components';
import { ReactNode } from 'react';

interface Props {
    headerChildren: ReactNode;
    mainChildren: ReactNode;
}

export default function Page({ headerChildren, mainChildren }: Props) {
    return (
        <body className={PageStyles.Page}>
            <Header />
            <Main />
        </body>
    );
}
