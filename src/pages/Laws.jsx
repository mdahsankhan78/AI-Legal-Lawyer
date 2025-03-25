import React, { useState } from 'react'
import Chat from './Chat'
import LawsTable from '../components/Laws/Table'
import { Input } from '../components/ui/input'

const Laws = () => {
  const [query, setQuery] = useState()

  return (
    <Chat>
      <div className="paddingx py-10">
        <h1 class="text-3xl font-bold sm:text-4xl modern">
          Search Laws
        </h1>

        <Input placeholder='Search...' value={query} onChange={(e) => setQuery(e.target.value)} className='text-white mt-2' />
        <LawsTable query={query} />
      </div>
    </Chat>
  )
}

export default Laws