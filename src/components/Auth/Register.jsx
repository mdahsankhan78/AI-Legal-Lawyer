import React, { useState } from 'react'
import { Input } from './../ui/input'
import { Link } from 'react-router-dom'
import CustomButton from './../Reusable/CustomButton'
import { Separator } from '../ui/separator'
import { registerUser } from './../../api/apis'

const Register = () => {
    const [data, setData] = useState({ name: '', email: '', password: '' });
    const [msg, setMsg] = useState('');
    const [loading, setLoading] = useState(false);

    const handleInput = async (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    };

    const handleRegister = async (e) => {
        e.preventDefault();
        setLoading(true)
        const res = await registerUser(data.name, data.email, data.password);
        if (res) {
            setMsg(res)
            setLoading(false)
        }
    };

    return (
        <div className='flex flex-col gap-y-4 justify-center h-full md:px-8 p-10'>
            <div className="text-primary font-semibold text-lg flex gap-x-2 items-center justify-center whitespace-nowrap">
                <Separator className='lg:w-20 w-10 h-[2px]' />
                <p className="text-black uppercase">Register Your Account</p>
                <Separator className='lg:w-20 w-10 h-[2px]' />
            </div>
            <h1 className='text-3xl uppercase'>Register</h1>
            <form className='flex flex-col gap-y-4'>
                <Input onChange={handleInput} name='name' type='text' placeholder='Your Full Name' />
                <Input onChange={handleInput} name='email' type='email' placeholder='Your Email Id' />
                <Input onChange={handleInput} name='password' type='password' placeholder='Your Password' />
            </form>

            <p>Already have an account? <Link to={'/login'} className='text-primary hover:text-primary'>Login</Link></p>
            {msg&&<p className='text-red-500'>{msg}</p>}

            <CustomButton onClick={handleRegister} text={'Register'}loading={loading} color={'white'} bg={'primary'} px={'px-10'} />
        </div>
    )
}

export default Register