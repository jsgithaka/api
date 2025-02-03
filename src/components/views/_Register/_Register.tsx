'use client';

import { View } from '@segments/components';
import { Form, Input } from '@shared/components';
import { useState } from 'react';

export default function _Register() {
    const [api, setApi] = useState('');
    const [form, setForm] = useState({
        email: '',
        password: '',
        confirm_password: '',
    });
    const handleRegister = async (event: Event) => {
        event.preventDefault();
        const response = await fetch('/api/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(form),
        });
        const apiResponse = await response.json();
        setApi(apiResponse.api);
    };
    return (
        <View id='register'>
            {api && <p>{api}</p>}
            <Form method={handleRegister}>
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
