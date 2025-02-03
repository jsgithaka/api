import { Page } from '@/exports/components/layouts';
import { NavigationItem } from '@/exports/components/shared';
import { _Register } from '@views/components';

export default function Register() {
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
            mainChildren={
                <>
                    <_Register />
                </>
            }
        />
    );
}
