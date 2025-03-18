import React, { useEffect, useState } from 'react'
import Sidebar from '../components/Chat/Sidebar'
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Label } from '../components/ui/label';
import { Calendar } from "../components/ui/calendar"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "../components/ui/popover"
import { CalendarIcon } from "lucide-react"
import { format } from "date-fns"
import CustomButton from '../components/Reusable/CustomButton';
import { Button } from '../components/ui/button';
import Loading from '../components/ui/loading';
import { generateFIR } from '../api/apis';
import Chat from './Chat';

const GenerateFIR = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [fir, setFIR] = useState()
    const [date, setDate] = useState()
    const [data, setData] = useState({ station: '', section: '', date: date, complainant: '', details: '' });
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setData((prevData) => ({
            ...prevData,
            date: date ? format(date, "PPP") : '',
        }));
    }, [date]);

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }

    // Function to check if the screen size is lg (1024px) or above
    const isLgScreen = () => window.matchMedia('(min-width: 1024px)').matches;
    const toggleSidebar = () => {
        if (!isLgScreen()) {
            if (isSidebarOpen) {
                setIsSidebarOpen(false);
            }
        }
    };

    const handleGenerate = async (e) => {
        e.preventDefault();
        setLoading(true)
        const res = await generateFIR(data);
        if (res) {
            setFIR(res)
            setLoading(false)
        }
    };

    return (
        <Chat>
            <form onSubmit={handleGenerate} className='py-20 flex flex-col gap-4 px-4 sm:px-8 lg:px-20'>
                <h1 class="text-3xl font-bold sm:text-4xl modern">
                    Legal Document Drafting
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <Label className='font-normal'>Police Station</Label>
                        <Input name='station' onChange={handleChange} value={data.station} placeholder='Station' required className='text-white' />
                    </div>
                    <div>
                        <Label className='font-normal'>IPC Section</Label>
                        <Input name='section' onChange={handleChange} value={data.section} placeholder='Section' required className='text-white' />
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <Label className='font-normal'>Incident Date</Label>
                        <Popover>
                            <PopoverTrigger asChild>
                                <div className='relative'>
                                    <Input name='date' onChange={handleChange} value={date ? format(date, "PPP") : 'Pick a date'} placeholder='Date' required className='text-white cursor-pointer' />
                                    <CalendarIcon className='absolute top-2 right-2' />

                                </div>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0" align="start">
                                <Calendar
                                    mode="single"
                                    name='date'
                                    selected={date}
                                    onSelect={setDate}
                                    initialFocus
                                />
                            </PopoverContent>
                        </Popover>
                    </div>
                    <div>
                        <Label className='font-normal'>Complainant Name</Label>
                        <Input name='complainant' onChange={handleChange} value={data.complainant} placeholder='Complainant' required className='text-white' />
                    </div>
                </div>
                <div>
                    <Label className='font-normal'>Incident Details</Label>
                    <Textarea name='details' onChange={handleChange} value={data.details} placeholder='Details' required rows='5' className='placeholder:text-gray-500'></Textarea>
                </div>
                <Button className='w-40 hover:bg-primary'>{loading ? <Loading /> : 'Generate'}</Button>
            </form>
        </Chat>
    )
}

export default GenerateFIR