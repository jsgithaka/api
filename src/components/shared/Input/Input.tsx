interface InputProps {
    label?: string;
    id?: string;
    type: string;
    placeholder?: string;
    value?: string;
    method?: () => void;
}

export default function Input({
    label,
    id,
    type,
    placeholder,
    value,
    method,
}: InputProps) {
    return (
        <div>
            {label && <label htmlFor={id}>{label}</label>}
            <input
                type={type}
                id={id}
                placeholder={placeholder}
                value={value}
                onChange={method}
            />
        </div>
    );
}
