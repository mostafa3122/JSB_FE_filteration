import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { z } from 'zod'
import Swal from 'sweetalert2';
import axios from 'axios';
import ValidationError from '../shared/ValidationError';
import { zodResolver } from '@hookform/resolvers/zod';
import { Spinner } from 'flowbite-react';

// Validation Schema using zod
const schema = z.object({
    name: z.string().min(3, "Name must be  at least 3 char"),
    email: z.string().email("Invalid email"),
    phone: z.string()
        .regex(/^(010|011|012|015)[0-9]{8}$/, "Enter a valid Egyptian mobile number")
})
//  Default Form Values
const defaultValues = {
    name: "",
    email: "",
    phone: ""
}
export default function ContactForm() {
    // This array used to generate inputs dynamically
    const inputsFields = [
        { id: "name", type: "text", placeholder: "Name" },
        { id: "email", type: "email", placeholder: "Email" },
        { id: "phone", type: "tel", placeholder: "Phone" },
    ];
    const { register, handleSubmit, reset, formState: { errors, isValid, isSubmitting } } = useForm({
        defaultValues,
        resolver: zodResolver(schema),
        mode: "onChange"
    });
    async function sendData(value) {

        try {
            const data = await axios.post("http://upskilling-egypt.com:3001/contact", value, {
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(value),
            })
            // in succcess
            if (data.status === 200 || data.status === 201) {
                Swal.fire({
                    icon: "success",
                    title: "good work",
                    text: "Data Sented successfully!",
                });
                reset();
            } else {
                Swal.fire("Error", "Failed to send form.");
            }
        }
        // in failed
        catch (error) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went wrong!",
            });
            console.error(error);
        }
    }
    return (

        <form onSubmit={handleSubmit(sendData)} className="flex w-full justify-center items-center max-w-md flex-col gap-3.5">
            {inputsFields.map((field) => (
                <div key={field.id}>
                    <input
                        type={field.type}
                        placeholder={field.placeholder}
                        {...register(field.id)}
                        className="input-style placeholder-black  "
                    />
                    <ValidationError error={errors[field.id]} />
                </div>

            ))}
            <button type="submit" disabled={!isValid || isSubmitting} className='cursor-pointer bg-transparent text-black text-lg leading-[100%] border-[#5180F6] border-[3px] rounded-full  py-4 px-14'>
                <span>
                    {isSubmitting && <Spinner aria-label="Spinner button example" className='mx-2' size="sm" light />}
                    Send
                </span>

            </button>

        </form>

    )
}