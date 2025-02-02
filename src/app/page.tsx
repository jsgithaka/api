import { Page } from '@/exports/components/layouts';
import { NavigationItem } from '@/exports/components/shared';

export default function Home() {
    return (
        <Page
            headerChildren={
                <>
                    <NavigationItem
                        href='/'
                        name='Home'
                    />
                    <NavigationItem
                        href='/login'
                        name='Login'
                    />
                    <NavigationItem
                        href='/register'
                        name='Register'
                    />
                </>
            }
            mainChildren={<></>}
        />
    );
}
