import React, { useState } from 'react';
import TextInput from '../TextInput';
import { useGeneralStore } from "@/app/stores/general";
import { useUser } from "@/app/context/user";
import { useRouter } from "next/navigation"; 
import { BiLoaderCircle } from "react-icons/bi";
import { validateRegister } from '../../validations/validations';
import { useForm } from '../../hooks/useForm';
import { ShowErrorObject } from "@/app/types";

export default function Register() {
    const { setIsLoginOpen } = useGeneralStore();
    const contextUser = useUser();
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<ShowErrorObject | null>(null);
    const initialFormState = {
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
    };
    const { formState, updateField } = useForm(initialFormState);

    const register = async () => {
        setError(null);
        const validationError = validateRegister(formState);
        if (validationError) {
            setError(validationError);
            return;
        }

        try {
            setLoading(true);
            await contextUser?.register(formState.name, formState.email, formState.password);
            setLoading(false);
            setIsLoginOpen(false);
            router.refresh();
        } catch (error) {
            console.error(error);
            setLoading(false);
            alert(error);
        }
    };

    return (
        <>
            <div>
                <h1 className="text-center text-[28px] mb-4 font-bold">Register</h1>

                <div className="px-6 pb-2">
                    <TextInput 
                        string={formState.name}
                        placeholder="Name"
                        onUpdate={(value) => updateField('name', value)}
                        inputType="text"
                        error={error?.type === 'name' ? error.message : ''}
                    />
                </div>

                <div className="px-6 pb-2">
                    <TextInput 
                        string={formState.email}
                        placeholder="Email address"
                        onUpdate={(value) => updateField('email', value)}
                        inputType="email"
                        error={error?.type === 'email' ? error.message : ''}
                    />
                </div>

                <div className="px-6 pb-2">
                    <TextInput 
                        string={formState.password}
                        placeholder="Password"
                        onUpdate={(value) => updateField('password', value)}
                        inputType="password"
                        error={error?.type === 'password' ? error.message : ''}
                    />
                </div>

                <div className="px-6 pb-2">
                    <TextInput 
                        string={formState.confirmPassword}
                        placeholder="Confirm Password"
                        onUpdate={(value) => updateField('confirmPassword', value)}
                        inputType="password"
                        error={error?.type === 'confirmPassword' ? error.message : ''}
                    />
                </div>

                <div className="px-6 pb-2 mt-6">
                    <button 
                        disabled={loading}
                        onClick={register} 
                        className={`
                            flex items-center justify-center w-full text-[17px] font-semibold text-white py-3 rounded-sm
                            ${(!formState.name || !formState.email || !formState.password || !formState.confirmPassword) ? 'bg-gray-200' : 'bg-[#F02C56]'}
                        `}
                    >
                        {loading ? <BiLoaderCircle className="animate-spin" color="#ffffff" size={25} /> : 'Register'}
                    </button>
                </div>
            </div>
        </>
    )
}
