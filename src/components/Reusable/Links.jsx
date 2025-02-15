import React from 'react'
import { navlinks } from './Navbar'
import { categories } from '../Home/CategorySwiper'

const Links = ({ className, type }) => {
    return (
        <div className={`hidden lg:flex ${className}`}>
            {type !== 'category' ?
                navlinks.map((link, i) => (
                    <a key={i} href={link.path} className=" text-white hover:text-primary">{link.title}</a>
                ))
                :
                categories.map((link, i) => (
                    <a key={i} href={link.path} className=" text-white hover:text-primary">{link.main}</a>
                ))
            }
        </div>
    )
}

export default Links