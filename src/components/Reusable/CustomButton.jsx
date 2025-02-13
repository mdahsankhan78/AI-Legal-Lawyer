import React from 'react'
import { Button } from './../ui/button'
import { FaArrowRight } from "react-icons/fa";

const CustomButton = ({bg, text, color, border, px}) => {
    return (
        <Button className={`bg-${bg} ${px} ${border} text-${color} rounded-full hover:bg-${bg} py-5 group`}>
            {text}
            <FaArrowRight className='-rotate-45 group-hover:rotate-0 transition-all duration-300'/>
        </Button>
    )
}

export default CustomButton