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
        <div className='flex'>
            <Sidebar isOpen={isSidebarOpen} />

            {/* <!-- Content --> */}
            <div onClick={toggleSidebar} class={`relative h-screen w-full overflow-y-auto bg-destructive-foreground text-white flex flex-col`}>
                <div className="sticky left-4 top-4 pl-4 flex items-center gap-x-4">

                    {/* toggle sidebar button */}
                    <svg onClick={()=>setIsSidebarOpen(!isSidebarOpen)} class="shrink-0 size-5 hover:text-primary cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" x2="21" y1="6" y2="6" /><line x1="3" x2="21" y1="12" y2="12" /><line x1="3" x2="21" y1="18" y2="18" /></svg>

                    {/* new chat button */}
                    <svg class="shrink-0 size-5 hover:text-primary cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14" /><path d="M12 5v14" /></svg>
                </div>

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
            </div>
            {/* <!-- End Content --> */}
        </div>
    )
}

export default GenerateFIR