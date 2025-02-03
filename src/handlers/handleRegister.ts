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

    return { api, handleRegister, form, setForm };
}
