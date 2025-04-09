import React, { useEffect, useState } from 'react'
import Chat from './Chat'
import Loading from './../components/ui/loading';
import { uploadLaw } from '../api/apis';
import LawsTable from '../components/Laws/Table';
import { Input } from './../components/ui/input'

const UploadLaws = () => {
    const [law, setLaw] = useState();
    const [loading, setLoading] = useState();
    const [trigger, setTrigger] = useState(false);
    const [query, setQuery] = useState()

    const handleFileUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            setLaw(file);
        }
        e.target.value = '';
    };

    const handleAdd = async () => {
        setLoading(true);
        const res = await uploadLaw(law);
        if (res) {
            setLoading(false);
            setLaw();
            setTrigger(!trigger);
        }
        else {
            setLoading(false);
        }
    }

    useEffect(() => {
        if (law) {
            handleAdd()
        }
    }, [law])

    return (
        <Chat>
            <div className='paddingx py-10'>
                <div className="flex items-center justify-between">
                    <h1 class="text-3xl font-bold sm:text-4xl modern">
                        Uploaded Laws
                    </h1>
                    <div className="flex items-center gap-2">
                        <Input placeholder='Search...' value={query} onChange={(e)=>setQuery(e.target.value)} className='text-white'/>
                        <div class="file-upload">
                            <input type="file" id="file-input" onChange={handleFileUpload} />
                            <label for="file-input" class="custom-file-input">
                                {loading ?
                                    <Loading />
                                    :
                                    (
                                        <svg class="shrink-0 size-5 hover:text-primary cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14" /><path d="M12 5v14" /></svg>
                                    )}
                            </label>
                        </div>
                    </div>
                </div>
                <LawsTable trigger={loading} query={query}/>
            </div>
            <style>
                {`
                #file-input {
                display: none;
                }
                `}
            </style>
        </Chat>
    )
}

export default UploadLaws