import { useState } from 'react';
import { useForm } from 'react-hook-form';

function LogIn() {
    const emailValidationRegexPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        mode: 'onChange'
    });

    const [isSubmitted, setIsSubmitted] = useState(false);
    const onSubmit = (value) => {
        setIsSubmitted(true);
        // TODO: send form value to the server here;
    };

    const renderForm = (
        <div className="form">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="input-container">
                    <label>Email </label>
                    <input
                        type="text"
                        className={ errors.email ? 'has-error' : ''}
                        placeholder="Email"
                        {...register('email', { required: true, pattern: emailValidationRegexPattern })}
                    />
                    {errors.email &&
                        <span className="error">
                            {errors.email.type === 'required' ? <span>Invalid required</span> : <span>Email is email</span>}
                        </span>
                    }
                </div>
                <div className="input-container">
                    <label>Password </label>
                    <input
                        type="password"
                        name="pass"
                        className={ errors.password ? 'has-error' : ''}
                        placeholder="password"
                        {...register('password', { required: true })}
                    />
                    <span className="error">{errors.password && <span>Password is required</span>}</span>
                </div>
                <div className="button-container">
                    <input type="submit" />
                </div>
            </form>
        </div>
    );

    return (
        <div className="app">
            <div className="login-form">
                <div className="title">Log In</div>
                {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
            </div>
        </div>
    );
}

export default LogIn;