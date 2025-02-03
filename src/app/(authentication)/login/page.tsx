import { Page } from '@/exports/components/layouts';
import { NavigationItem } from '@/exports/components/shared';
import { _Login } from '@views/components';

export default function Login() {
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
                    <_Login />
                </>
            }
        />
    );
}
