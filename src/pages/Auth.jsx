import React from 'react'
import Login from '../components/Auth/Login'
import { useLocation } from 'react-router-dom'
import Register from '../components/Auth/Register'
import {motion} from 'framer-motion'

const Auth = () => {
    const location = useLocation()
    
    return (
        <div className='bg-[#121519] flex items-center justify-center h-screen'>
            <div className="bg-white grid grid-cols-1 md:grid-cols-2">
                {location.pathname === '/register' &&
                    <motion.div layoutId='img' className="col-span-1 md:block hidden" style={{direction:`${location.pathname==='/register'?'rtl':'ltr'}`}}>
                        <img src="/auth/login.jpg" className='max-h-[80vh] h-full w-full' alt="" />
                    </motion.div>
                }
                <div className="col-span-1">
                    {location.pathname === '/register' ? <Register /> : <Login />}
                </div>
                {location.pathname === '/login' &&
                    <motion.div layoutId='img' className="col-span-1 md:block hidden">
                        <img src="/auth/login.jpg" className='max-h-[80vh] h-full w-full' alt="" />
                    </motion.div>
                }
            </div>
        </div>
    )
}

export default Auth