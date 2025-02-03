import { ReactNode } from 'react';

interface FormProps {
    children: ReactNode;
    method: (event: any) => void;
}

export default function Form({ children, method }: FormProps) {
    return <form onSubmit={method}>{children}</form>;
}
