"use client"

import { useState }  from 'react';
import axiosInstance from '../axios/axiosInstance';

interface FormData {
    username: string,
    email: string,
    password: string,
}

export default function Register(){
    const [message, setMessage] = useState<string>('')


    const [formData, setFormData] = useState<FormData>({
        username: '',
        email: '',
        password:'',
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
        const {name, value} = e.target;
        setFormData(prev =>({ ...prev,[name]: value}) )
    }



    const handleSubmit = async() =>{
        try{
            const response = await axiosInstance.post("/register", formData)

            setMessage(response.data.message)

        }catch(err: unknown){
            console.error("Error registering to blog site", err);

        }finally{

        }
    }
    return(
        <div>
            <div>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Username</label>
                        <input
                           type='text'
                           name="username"
                           value={formData.username}
                           onChange={handleChange}
                           required
                        />
                    </div>
                    <div>
                        <label>email</label>
                        <input
                           type='text'
                           name="email"
                           value={formData.email}
                           onChange={handleChange}
                           required
                        />
                    </div>
                    <div>
                        <label>Password</label>
                        <input
                           type='password'
                           name="password"
                           value={formData.password}
                           onChange={handleChange}
                           required
                        />
                    </div>
                    <button
                       type="submit"
                    >
                        Register
                    </button>
                </form>
            </div>
        </div>
    )
}