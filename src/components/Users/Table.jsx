import React, { useEffect, useState } from 'react'
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "./../ui/table"
import {
    Dialog,
    DialogTrigger,
    DialogContent,
} from "./../ui/dialog"
import { getUsers } from '../../api/apis'
import Loading from './../ui/Loading'
import { FaEdit } from "react-icons/fa";
import { FaRegTrashAlt } from "react-icons/fa";
import Edit from './Edit'

const UsersTable = () => {
    const [users, setUsers] = useState()
    const [trigger, setTrigger] = useState(false)

    const handleFetch = async () => {
        const res = await getUsers()
        if (res) {
            setUsers(res)
        }
    }

    useEffect(() => {
        handleFetch()
    }, [trigger])

    return (
        <>
            {users ?
                <Table className='my-4'>
                    <TableHeader>
                        <TableCell>Id</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>Role</TableCell>
                        <TableCell>Action</TableCell>
                    </TableHeader>
                    <TableBody>
                        {users.map((user, i) => (
                            <TableRow key={user.id}>
                                <TableCell>{user.id}</TableCell>
                                <TableCell>{user.name}</TableCell>
                                <TableCell>{user.email}</TableCell>
                                <TableCell>{user.role}</TableCell>
                                <TableCell>
                                    <Dialog>
                                        <DialogTrigger asChild>
                                            <FaEdit className='cursor-pointer hover:text-primary' />
                                        </DialogTrigger>
                                        <DialogContent>
                                            <Edit id={user.id} trigger={()=>setTrigger(!trigger)}/>
                                        </DialogContent>
                                    </Dialog>
                                </TableCell>
                                {/* <TableCell><FaRegTrashAlt className='cursor-pointer hover:text-primary' /></TableCell> */}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                :
                <div className='flex items-center justify-center h-screen'>
                    <Loading />
                </div>
            }
        </>
    )
}

export default UsersTable