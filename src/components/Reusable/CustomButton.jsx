import React from 'react'
import { Button } from './../ui/button'
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import Loading from './../ui/Loading';

const CustomButton = ({ bg, loading, text, color, border, px, to, ...props }) => {
    const navigate = useNavigate()

    const handleNavigate = () => {
        navigate(to)
    }

    return (
        <Button onClick={to && handleNavigate} className={`bg-${bg} ${px} ${border} text-${color} rounded-full hover:bg-${bg} py-5 group `}
            {...props}>
            {loading
                ?
                <Loading />
                :
                <>
                {text}
                <FaArrowRight className='-rotate-45 group-hover:rotate-0 transition-all duration-300' />
                </>
            }

        </Button>
    )
}

export default CustomButton