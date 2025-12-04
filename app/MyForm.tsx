import React from "react";
import {SubmitHandler, useForm} from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import {z} from "zod";

const schema = z.object({
    name: z.string().min(3),
    email: z.email(),
    password: z.string().min(3),
    confirmPassword: z.string().min(3),
})

type User = z.infer<typeof schema>;

const MyForm = () => {
    const {register, handleSubmit, formState: { errors }} = useForm<User>({
        resolver: zodResolver(schema)
    });

    const onSubmit: SubmitHandler<User> =  (data) => {
        console.log("Submitted", data);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>

            <div>
                <label htmlFor="name">Full Name</label>
                <input type="text" id="name" {...register('name', { required: "Name needed", validate: (value) => value.trim().length >= 3 })}  />
                {errors.name && (
                    <em>{errors.name.message}</em>
                )}
            </div>

            <div>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" {...register('email')} />
                {errors.email && (
                    <em>{errors.email.message}</em>
                )}
            </div>

            <div>
                <label htmlFor="password">Password</label>
                <input type="password" id="password" {...register('password')} />
                {errors.password && (
                    <em>{errors.password.message}</em>
                )}
            </div>

            <div>
                <label htmlFor="confirmPassword">Confirm password</label>
                <input type="password" id="confirmPassword" {...register('confirmPassword')} />
                {errors.confirmPassword && (
                    <em>{errors.confirmPassword.message}</em>
                )}
            </div>

            <button type="submit">Register</button>
        </form>
    );
}

export default MyForm;