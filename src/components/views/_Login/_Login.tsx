import { View } from '@segments/components';
import { Form, Input } from '@shared/components';

export default function _Login() {
    return (
        <View id='login'>
            <Form>
                <Input
                    type='email'
                    placeholder='your@email.com'
                    label='Email'
                    id='email'
                />
                <Input
                    type='password'
                    placeholder='********'
                    label='Password'
                    id='password'
                />
                <Input
                    type='submit'
                    value='Login'
                />
            </Form>
        </View>
    );
}
