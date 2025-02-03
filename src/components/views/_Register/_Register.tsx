import { View } from '@segments/components';
import { Form, Input } from '@shared/components';

export default function _Register() {
    return (
        <View id='register'>
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
                    type='password'
                    placeholder='********'
                    label='Confirm Password'
                    id='confirm_password'
                />
                <Input
                    type='submit'
                    value='Register'
                />
            </Form>
        </View>
    );
}
