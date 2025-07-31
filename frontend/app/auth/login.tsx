"use client"

import axiosInstance from "../axios/axiosInstance"
import {useState} from 'react';
import { useRouter } from 'next/navigation';

interface FormData {
    email: string,
    password: string,
}

export default function Login (){

    const [loading, setLoading] = useState<boolean>(false);
    const [message, setMessage] = useState<string>('')
    const [formData, setFormData]  = useState<FormData>({
        email: '',
        password: '',
    })
    const router = useRouter();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
        const { name, value} = e.target;
        setFormData(prev => ({ ...prev, [name]: value}));
    }

    const handleSubmit = async (e: {preventDefault: () => void}) => {
        setLoading(true)

        try{
            "use server"
            const res= await axiosInstance.post("/user/login", formData)
            setFormData(res.data);
            setMessage('login successful')

            router.push('/dash')
        }catch(err){
            const error = err instanceof Error ?  err: new Error(String(err))
            console.error("Error loging:", error)
        }finally{
            setLoading(false)
        }
    }
    return(
        <div>
            <div>
                <form onSubmit={handleSubmit}>
                    <div>
                        <input
                          type="text"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                    </div>
                    <div>
                        <input
                          type="password"
                          name="password"
                          value={formData.password}
                          onChange={handleChange}
                          required
                        />
                    </div>
                    <button
                      type="submit"
                      className=""
                    >
                        {loading ? 'loging ...' : 'login'}
                    </button>
                </form>
                {message && <p style={{ color: 'green'}}>{message}</p>}
            </div>
        </div>
    )

    

}