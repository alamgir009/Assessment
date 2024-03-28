import React, { useState } from 'react'
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';


export const EditForm = ({ 
    setShowEditform,
    editedformData,
    setEditedformData,
    handleupdate,
}) => {

    

    let handleEdit = (e)=>{
        const {name, value}= e.target;
        setEditedformData((data)=>({
            ...data,[name]:value
        }))
    }

    return (
        <>
            <div className={`fixed inset-0 flex justify-center items-center text-sky-950 font-Nunito
        ${setShowEditform ? "visible bg-black/20" : "invisible"}
        `}>
                <div className={`rounded-md w-96 bg-white shadow-md transition-all ${setShowEditform ? "scale-100 opacity-100" : "scale-125 opacity-0"}`}>
                    <div className='flex justify-between items-center  p-5 border-b border-gray-300 font-semibold'>
                        <h1 className='text-2xl'>Update Employee</h1>
                        <button onClick={() => setShowEditform(false)}><CloseRoundedIcon sx={{ fontSize: 30 }} /></button>
                    </div>

                    <form className='' 
                    onSubmit={handleupdate}
                    >

                        <div className='p-5 font-semibold'>

                            <label htmlFor="name" className='pb-2'>Name
                                <input type="text" id='name' name='name' onChange={handleEdit} value={editedformData.name} required />
                            </label>

                            <label htmlFor="email" className='pb-2'>Email
                                <input type="email" id='email' name='email' onChange={handleEdit} value={editedformData.email} required />
                            </label>

                            <label htmlFor="address" className='pb-2'>Address
                                <textarea type="text" id='address' name='address' onChange={handleEdit} value={editedformData.address} required />
                            </label>

                            <label htmlFor="phone" className='pb-2'>Phone
                                <input type="tel" id='phone' name='phone' onChange={handleEdit} value={editedformData.phone} required />
                            </label>
                        </div>

                        <div className='flex justify-end items-center p-5 border-t border-gray-300 bg-gray-200 font-semibold'>
                            <button onClick={() => setShowEditform(false)} type='button'>Cancel</button>
                            <button className='bg-green-600 text-white px-5 py-1 rounded-sm ms-5'>Save</button>
                        </div>

                    </form>
                </div>
            </div>
        </>
    )
}