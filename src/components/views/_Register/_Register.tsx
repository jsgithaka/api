'use client';

import { View } from '@segments/components';
import { Form, Input } from '@shared/components';
import { NextResponse } from 'next/server';
import { useState } from 'react';

export default function _Register() {
    const [API, setAPI] = useState('');
    const [form, setForm] = useState({
        email: '',
        password: '',
        confirm_password: '',
    });
    const handleRegister = async (event: Event) => {
        event.preventDefault();
        const response = await fetch('/api/authentication/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(form),
        });
        console.log(response);
    };
    return (
        <View id='register'>
            <Form method={handleRegister}>
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
