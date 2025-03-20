import React, { useEffect } from 'react'
import Chat from './Chat'
import UsersTable from '../components/Users/Table'
import useEncryptedLocalStorage from '../api/EncryptedStorage'
import { useNavigate } from 'react-router-dom'

const Users = () => {
    const { getEncryptedItem } = useEncryptedLocalStorage()
    const user = getEncryptedItem('user')
    const navigate = useNavigate()

    useEffect(() => {
        if (!user || user.role !== 'Admin') {
            navigate('/')
        }
    }, [])

    return (
        <Chat>
            <div className='paddingx py-10'>
                <h1 class="text-3xl font-bold sm:text-4xl modern">
                    Manage Users
                </h1>

                <UsersTable />
            </div>
        </Chat>
    )
}

export default Users