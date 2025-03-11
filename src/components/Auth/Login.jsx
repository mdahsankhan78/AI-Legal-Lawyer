import React, { useState } from 'react'
import { Input } from './../ui/input'
import { Link, useNavigate } from 'react-router-dom'
import CustomButton from './../Reusable/CustomButton'
import { Separator } from '../ui/separator'
import { loginUser } from './../../api/apis'

const Login = () => {
    const [data, setData] = useState({ email: '', password: '' });
    const [msg, setMsg] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate()

    const handleInput = async (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true)
        const res = await loginUser(data.email, data.password);
        if (res==='Logged in successfully') {
            setMsg(res)
            setLoading(false)
            navigate('/chat')
        }
    };
    return (
        <form onSubmit={handleLogin} className='flex flex-col gap-y-4 justify-center h-full md:px-8 p-10'>
            <div className="text-primary font-semibold text-lg flex gap-x-2 items-center justify-center whitespace-nowrap">
                <Separator className='lg:w-20 w-10 h-[2px]' />
                <p className="text-black uppercase">Login to Your Account</p>
                <Separator className='lg:w-20 w-10 h-[2px]' />
            </div>
            <h1 className='text-3xl'>LOGIN</h1>
            <div className='flex flex-col gap-y-4'>
                <Input onChange={handleInput} name='email' type='email' required placeholder='Your Email Id' />
                <Input onChange={handleInput} name='password' type='password' required placeholder='Your Password' />
            </div>

            <p>Don't have an account? <Link to={'/register'} className='text-primary hover:text-primary'>Register</Link></p>
            {msg && <p className='text-red-500'>{msg}</p>}

            <CustomButton disabled={loading} type='submit' text={'Login'} loading={loading} color={'white'} bg={'primary'} px={'px-10'} />
        </form>
    )
}

export default Login