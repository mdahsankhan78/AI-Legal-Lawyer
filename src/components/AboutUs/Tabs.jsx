import React from 'react'
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"

const AboutTabs = () => {
    return (
        <Tabs defaultValue="vision">
            <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="vision">Account</TabsTrigger>
                <TabsTrigger value="mission">Password</TabsTrigger>
                <TabsTrigger value="values">Values</TabsTrigger>
            </TabsList>
            <TabsContent value="vision">
                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
            </TabsContent>
            <TabsContent value="mission">
                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
            </TabsContent>
            <TabsContent value="values">
                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
            </TabsContent>
        </Tabs>
    )
}

export default AboutTabs