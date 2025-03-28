import React, { useEffect, useState } from 'react'
import {
    Table,
    TableBody,
    TableCell,
    TableHeader,
    TableRow,
} from "./../ui/table"
import { deleteLaw, downloadLaw, getLaws, searchLaws } from '../../api/apis'
import Loading from '../ui/loading'
import { FaEdit, FaRegTrashAlt } from "react-icons/fa";
import { useLocation } from 'react-router-dom';

const LawsTable = ({ trigger, query }) => {
    const [laws, setLaws] = useState()
    const [trigger2, setTrigger2] = useState(false);
    const location = useLocation()

    const handleFetch = async () => {
        if (!query && location.pathname !== '/laws') {
            const res = await getLaws();
            if (res) {
                setLaws(res);
            }
        }
        else {
            const res = await searchLaws(query);
            if (res) {
                setLaws(res);
            }
        }
    }

    const handleDelete = (id) => {
        const res = deleteLaw(id)
        if (res) {
            setTrigger2(!trigger2)
        }
    }

    const handleDownload = async (id, source) => {
        try {
            const response = await fetch(`/laws/download/${id}`, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`, // Assuming you store token in localStorage
                },
            });

            if (!response.ok) {
                throw new Error('Failed to download law');
            }

            const blob = await response.blob();
            const url = window.URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.download = source ? `law_${source}.txt` : `law_${id}.txt`;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            window.URL.revokeObjectURL(url);
        } catch (error) {
            console.error('Error downloading law:', error);
            alert('Failed to download the law file. Please try again.');
        }
    }

    useEffect(() => {
        handleFetch()
    }, [trigger, trigger2, query])

    return (
        <>
            {laws ?
                laws.length > 0 ? (
                    <Table className='my-4 table'>
                        <TableHeader>
                            <TableCell>Text</TableCell>
                            <TableCell>Source</TableCell>
                            <TableCell colspan='2'>Action</TableCell>
                        </TableHeader>
                        <TableBody>
                            {laws.map((law, i) => (
                                <TableRow key={i}>
                                    <TableCell>{law.text}</TableCell>
                                    <TableCell>{law.source}</TableCell>
                                    <TableCell>
                                        <svg onClick={() => handleDownload(law.id, law.source)} class="shrink-0 size-4 text-white hover:text-primary cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                                            <polyline points="7 10 12 15 17 10" />
                                            <line x1="12" y1="15" x2="12" y2="3" />
                                        </svg>
                                    </TableCell>
                                    {location.pathname !== '/laws' && <TableCell>
                                        <FaRegTrashAlt onClick={() => handleDelete(law._id)} className='cursor-pointer hover:text-primary' />
                                    </TableCell>}
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
                <div className={`${location.pathname === '/laws' ? 'hidden' : 'flex'} items-center justify-center h-screen `}>
                    <Loading />
                </div>
            }

        </>
    )
}

export default LawsTable