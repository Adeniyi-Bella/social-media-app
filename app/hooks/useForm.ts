import { useState } from 'react';

export interface UseFormReturn<T> {
    formState: T;
    updateField: (field: keyof T, value: string) => void;
}

export const useForm = <T>(initialState: T): UseFormReturn<T> => {
    const [formState, setFormState] = useState<T>(initialState);

    const updateField = (field: keyof T, value: string): void => {
        setFormState(prevState => ({
            ...prevState,
            [field]: value,
        }));
    };

    return { formState, updateField };
};

