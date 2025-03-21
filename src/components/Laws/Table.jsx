import React, { useEffect, useState } from 'react'
import {
    Table,
    TableBody,
    TableCell,
    TableHeader,
    TableRow,
} from "./../ui/table"
import { deleteLaw, getLaws } from '../../api/apis'
import Loading from '../ui/loading'
import { FaEdit, FaRegTrashAlt } from "react-icons/fa";

const LawsTable = ({ trigger }) => {
    const [laws, setLaws] = useState()
    const [trigger2, setTrigger2] = useState(false);

    const handleFetch = async () => {
        const res = await getLaws();
        if (res) {
            setLaws(res);
        }
    }

    const handleDelete = (id) => {
        const res = deleteLaw(id)
        if (res) {
            setTrigger2(!trigger2)
        }
    }

    useEffect(() => {
        handleFetch()
    }, [trigger, trigger2])

    return (
        <>
            {laws ?
                laws.length > 0 ? (
                    <Table className='my-4 table'>
                        <TableHeader>
                            <TableCell>Text</TableCell>
                            <TableCell>Source</TableCell>
                            <TableCell>Action</TableCell>
                        </TableHeader>
                        <TableBody>
                            {laws.map((law, i) => (
                                <TableRow key={i}>
                                    <TableCell>{law.text}</TableCell>
                                    <TableCell>{law.source}</TableCell>
                                    <TableCell>
                                        <FaRegTrashAlt onClick={() => handleDelete(law._id)} className='cursor-pointer hover:text-primary' />
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                )
                    :
                    <div className='flex items-center justify-center h-80'>
                        <p>No laws found</p>
                    </div>

                :
                <div className='flex items-center justify-center h-screen'>
                    <Loading />
                </div>
            }

        </>
    )
}

export default LawsTable