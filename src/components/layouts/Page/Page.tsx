import { PageStyles } from '@layout/styles';
import { Footer, Header, Main } from '@segments/components';
import { ReactNode } from 'react';

interface Props {
    headerChildren: ReactNode;
    mainChildren: ReactNode;
}

export default function Page({ headerChildren, mainChildren }: Props) {
    return (
        <body className={PageStyles.Page}>
            <Header>{headerChildren}</Header>
            <Main>{mainChildren}</Main>
            <Footer />
        </body>
    );
}
