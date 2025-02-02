interface InputProps {
    label?: string;
    id?: string;
    type: string;
    placeholder?: string;
    value?: string;
}

export default function Input({
    label,
    id,
    type,
    placeholder,
    value,
}: InputProps) {
    return (
        <div>
            {label && <label htmlFor={id}>{label}</label>}
            <input
                type={type}
                id={id}
                placeholder={placeholder}
                value={value}
            />
        </div>
    );
}
