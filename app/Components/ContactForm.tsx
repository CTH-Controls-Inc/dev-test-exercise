"use client"
import React, { useState } from 'react'
import { validateEmail } from '../utils/validations'

const ContactForm = () => {

    const [formState, setFormState] = useState({
        email: "",
        password: "",
    });

    const [isError, setIsError] = useState<boolean>(false);

    const errorContent = {
        email: 'Please enter a valid email.',
    };

    const handleChange = (e: React.FormEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setFormState({ ...formState, [e.currentTarget.name]: e.currentTarget.value });
    };

    const handleBlur = (e: React.FormEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {

        const inputValidation =
            (
                validation: (email: string) => boolean,
                isError: boolean,
                errorText: string
            ) => {

                const validCheck = validation(e.currentTarget.value)
                const errorExists = isError;

                if (validCheck && errorExists) setIsError(false);
                if (!validCheck && !errorExists) setIsError(true);

            };

        if (e.currentTarget.name === 'email') {
            inputValidation(validateEmail, isError, errorContent.email);
        };

    };

    return (
        <div className='w-full h-full mx-auto bg-retroradwarm-50 rounded-xl'>
            <div className='w-full pb-2 mx-auto'>

                <div className='w-full px-4 pb-2 mx-auto'>

                    <form className='relative'>

                        <div className='relative w-full'>
                            <label className='pl-1 text-lg font-heading text-retroblack-50'
                                htmlFor='form-email'
                            >
                                Email {isError &&
                                    <span className='absolute left-0 pt-1 pl-1 text-base -bottom-4 text-retroradwarm-200 animate-heartbeat font-descriptionBold'>
                                        {errorContent.email}
                                    </span>}
                            </label>
                            <input
                                className={`w-full px-2 py-1 mb-1 leading-none ${isError ? 'border-retroradwarm-200' : 'border-x-retroblack-50'} border-2 rounded outline-none appearance-none text-retroblack placeholder-retroblack placeholder-opacity-70 font-description focus:bg-white`}
                                id='form-email'
                                name='email'
                                type='email'
                                placeholder='example@email.com'
                                defaultValue={formState.email}
                                onBlur={handleBlur}
                                onChange={handleChange}
                            />
                        </div>

                    </form>

                </div>

            </div>
        </div>
    )
}

export default ContactForm