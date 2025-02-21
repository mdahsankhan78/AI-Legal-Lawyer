import React from 'react'
import { Input } from './../ui/input'
import { Link } from 'react-router-dom'
import CustomButton from './../Reusable/CustomButton'
import { Separator } from '../ui/separator'

const Register = () => {
    return (
        <div className='flex flex-col gap-y-4 justify-center h-full md:px-8 p-10'>
            <div className="text-primary font-semibold text-lg flex gap-x-2 items-center justify-center whitespace-nowrap">
                <Separator className='lg:w-20 w-10 h-[2px]' />
                <p className="text-black uppercase">Register Your Account</p>
                <Separator className='lg:w-20 w-10 h-[2px]' />
            </div>
            <h1 className='text-3xl'>LOGIN</h1>
            <form className='flex flex-col gap-y-4'>
                <Input type='text' placeholder='Your Full Name' />
                <Input type='email' placeholder='Your Email Id' />
                <Input type='password' placeholder='Your Password' />
            </form>

            <p>Already have an account? <Link to={'/login'} className='text-primary hover:text-primary'>Login</Link></p>

            <CustomButton to={'/chat'} text={'Register'} color={'white'} bg={'primary'} px={'px-10'} />
        </div>
    )
}

export default Register