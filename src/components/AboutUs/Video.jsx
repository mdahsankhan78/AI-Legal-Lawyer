import React from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

const Video = () => {
    return (
        <>
            <video
                autoPlay
                muted
                loop
                className="w-full h-full object-cover"
            >
                <source src="/video.webm" type="video/webm" />
                Your browser does not support the video tag.
            </video>
        </>

    )
}

export default Video