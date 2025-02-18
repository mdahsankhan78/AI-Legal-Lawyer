import React from 'react'
import { navlinks } from './Navbar'
import { categories } from '../Home/CategorySwiper'

const Links = ({ className, type, linksStyles }) => {
    return (
        <div className={`flex ${className}`}>
            {type !== 'category' ?
                navlinks.map((link, i) => (
                    <a key={i} href={link.path} className={` text-white hover:text-primary ${linksStyles}`}>{link.title}</a>
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