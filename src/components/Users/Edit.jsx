import React, { useEffect, useState } from 'react'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "./../ui/select"
import { Input } from "./../ui/input"
import CustomButton from "./../Reusable/CustomButton"
import Loading from './../ui/Loading'
import { getUserById, updateUser } from '../../api/apis'
import * as DialogPrimitive from "@radix-ui/react-dialog"

const Edit = ({ id, trigger }) => {
  const [user, setUser] = useState()
  const [role, setRole] = useState(user ? user.role : 'User')

  const handleFetch = async () => {
    const res = await getUserById(id)
    if (res) {
      setUser(res)
    }
  }

  const handleUpdate = async () => {
    const res = await updateUser(id, role)
    if (res) {
      trigger()
    }
  }

  useEffect(() => {
    handleFetch()
  }, [])

  return (
    <div>
      {user ?
        <>
          <h1 class="text-2xl font-bold sm:text-3xl modern text-white">
            Edit {user.name}
          </h1>
          <div className='flex flex-col gap-y-4 pt-2'>
            <Input required disabled value={user.name} className='text-white' />
            <Input required disabled value={user.email} className='text-white' />
            <Select defaultValue={user.role} onValueChange={(e) => setRole(e)}>
              <SelectTrigger>
                <SelectValue placeholder="Select Role" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Select Role</SelectLabel>
                  <SelectItem value="Admin">Admin</SelectItem>
                  <SelectItem value="User">User</SelectItem>
                  <SelectItem value="Lawyer">Lawyer</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <DialogPrimitive.Close>
              <CustomButton onClick={handleUpdate} text={'Save Changes'} bg={'primary'} />
            </DialogPrimitive.Close>
          </div>
        </>
        :
        <div className='flex items-center justify-center h-80'>
          <Loading />
        </div>
      }
    </div >
  )
}

export default Edit