import { useState } from 'react';

export default function handleRegister() {
    const [api, setApi] = useState('');
    const [form, setForm] = useState({
        email: '',
        password: '',
        confirm_password: '',
    });
    const register = async (event: Event) => {
        event.preventDefault();
        const response = await fetch('/api/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(form),
        });
        const apiResponse = await response.json();
        setApi(apiResponse.api);
    };

    return { api, register, form, setForm };
}
