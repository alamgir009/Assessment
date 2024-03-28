import React, { useState } from 'react'
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

export const AddNewEmployee = ({ setShowEmp, setData, data }) => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        address: "",
        phone: ""
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData((data) => ({
            ...data, [name]: value
        }
        ))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setData([...data, formData])
        setFormData({
            name: "",
            email: "",
            address: "",
            phone: ""
        })
        setShowEmp(false)
    }

    return (
        // <div className='flex justify-center mt-5 text-sky-900 font-Nunito'>
        <div className={`fixed inset-0 flex justify-center items-center text-sky-950 font-Nunito
        ${setShowEmp?"visible bg-black/20":"invisible"}
        `}>
            <div className={`rounded-md w-96 bg-white shadow-md transition-all ${setShowEmp?"scale-100 opacity-100" : "scale-125 opacity-0"}`}>
                <div className='flex justify-between items-center  p-5 border-b border-gray-300 font-semibold'>
                    <h1 className='text-2xl'>Add Employee</h1>
                    <button onClick={() => setShowEmp(false)}><CloseRoundedIcon sx={{ fontSize: 30 }} /></button>
                </div>

                <form className='' onSubmit={handleSubmit}>

                    <div className='p-5 font-semibold'>

                        <label htmlFor="name" className='pb-2'>Name
                            <input type="text" id='name' name='name' onChange={handleChange} value={formData.name} required />
                        </label>

                        <label htmlFor="email" className='pb-2'>Email
                            <input type="email" id='email' name='email' onChange={handleChange} value={formData.email} required />
                        </label>

                        <label htmlFor="address" className='pb-2'>Address
                            <textarea type="text" id='address' name='address' onChange={handleChange} value={formData.address} required />
                        </label>

                        <label htmlFor="phone" className='pb-2'>Phone
                            <input type="tel" id='phone' name='phone' onChange={handleChange} value={formData.phone} required />
                        </label>
                    </div>

                    <div className='flex justify-end items-center p-5 border-t border-gray-300 bg-gray-200 font-semibold'>
                        <button onClick={()=>setShowEmp(false)} type='button'>Cancel</button>
                        <button className='bg-green-600 text-white px-5 py-1 rounded-sm ms-5'>Add</button>
                    </div>

                </form>
            </div>
        </div>

    )
}
