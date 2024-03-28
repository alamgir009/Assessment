import React from 'react';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';


export const Delete = ({setShowDel, handleDelete}) => {
  return (
    <div className={`fixed inset-0 flex justify-center items-center text-sky-950 font-Nunito
        ${setShowDel?"visible bg-black/20":"invisible"}
        `}>
            <div className={`rounded-sm w-96 bg-white shadow-md transition-all ${setShowDel?"scale-100 opacity-100" : "scale-125 opacity-0"}`}>
                <div className='flex justify-between items-center  p-5 border-b border-gray-300 font-semibold'>
                    <h1 className='text-2xl'>Delete Employee</h1>
                    <button onClick={() => setShowDel(false)}><CloseRoundedIcon sx={{ fontSize: 30 }} /></button>
                </div>

                <div className=''>

                    <div className='p-5 font-semibold'>
                        <h1 className=' font-semibold'>Are you sure want to delete these Records?</h1>
                        <p className='text-orange-500 mt-5 text-sm'>This action cannot be undone.</p>
                       
                    </div>

                    <div className='flex justify-end items-center p-5 border-t border-gray-300 bg-gray-200 font-semibold'>
                        <button onClick={()=>setShowDel(false)} type='button'>Cancel</button>
                        <button className='bg-red-500 text-white px-5 py-1 rounded-sm ms-5'
                        onClick={handleDelete}
                        >Delete</button>
                    </div>

                </div>
            </div>
        </div>
  )
}
