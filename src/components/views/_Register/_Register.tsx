'use client';

import { handleRegister } from '@handlers';
import { View } from '@segments/components';
import { Form, Input } from '@shared/components';

export default function _Register() {
    const { api, register, form, setForm } = handleRegister();
    return (
        <View id='register'>
            {api && <p>{api}</p>}
            <Form method={register}>
                <Input
                    type='email'
                    placeholder='your@email.com'
                    label='Email'
                    id='email'
                    method={(event) =>
                        setForm({ ...form, email: event.target.value })
                    }
                />
                <Input
                    type='password'
                    placeholder='********'
                    label='Password'
                    id='password'
                    method={(event) =>
                        setForm({ ...form, password: event.target.value })
                    }
                />
                <Input
                    type='password'
                    placeholder='********'
                    label='Confirm Password'
                    id='confirm_password'
                    method={(event) =>
                        setForm({
                            ...form,
                            confirm_password: event.target.value,
                        })
                    }
                />
                <Input
                    type='submit'
                    value='Register'
                />
            </Form>
        </View>
    );
}
