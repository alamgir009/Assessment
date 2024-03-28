import { useEffect, useState } from 'react';
import './App.css';
import { AddNewEmployee } from './components/AddNewEmployee';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Delete } from './components/Delete';
import { EditForm } from './components/EditForm';


function App() {
  const [showEmp, setShowEmp] = useState(false);
  const [data, setData] = useState([]);
  const [isCheckedAll, setIsCheckedAll] = useState(false);
  const [showDel, setShowDel] = useState(false);
  const [showEditform, setShowEditform] = useState(false)
  // const [dataEdited, setDataEdited] = useState([])
  const [editedformData, setEditedformData] = useState({
    name:"",
    email:"",
    address:"",
    phone:""   
 })

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const handleAdd = () => {
    setShowEmp(true);
  };

  const handleDelete = () => {
    // Filter out the selected rows
    const updatedData = data.filter((row, index) => !selectedRows.includes(index));
    setData(updatedData);
    // Clear the selected rows array
    setSelectedRows([]);
    setShowDel(false)
  };

  const editHandle = (index)=>{
    // console.log(index)
    setShowEditform(true);
    setEditedformData( data[index])
  }

  let handleupdate = (e)=>{
    e.preventDefault(); 
    setData(data.map((item,index)=>selectedRows.includes(index) ? editedformData : item))
    setShowEditform(false)
    // console.log(updates)
  }
  

  const [selectedRows, setSelectedRows] = useState([]);

  const handleCheckboxChange = (index) => {
    // Toggle the selection state of the row
    setSelectedRows(selectedRows.includes(index) ? selectedRows.filter(item => item !== index) : [...selectedRows, index]);
  };

  const handleSelectAll = () => {
    setIsCheckedAll(!isCheckedAll);
    setSelectedRows(isCheckedAll ? [] : data.map((_,index) => index))
  };

  // Calculate pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <div className='flex justify-center mt-2 font-Nunito font-semibold'>
        <div className='flex bg-sky-900 p-4 rounded-t-md justify-between items-center w-3/4 shadow-md'>
          <h1 className='text-white text-2xl'>Manage Employee</h1>
          <div className='text-white'>
            <button className='mx-4  px-3 py-1 bg-red-500 rounded-sm' onClick={() => setShowDel(true)}>
              <RemoveCircleIcon /> Delete
            </button>
            <button className='px-3 py-1 bg-green-500 rounded-sm' onClick={handleAdd}>
              <AddCircleIcon /> New Employee
            </button>
          </div>
        </div>
      </div>

      <div className='flex justify-center font-Nunito'>
        <table className=' w-3/4 bg-white'>
          <thead className='text-left'>
            <tr>
              <th className='px-4 py-2'>
                <input
                  type="checkbox"
                  onChange={handleSelectAll}
                  checked={isCheckedAll}
                />
              </th>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Address</th>
              <th className="px-4 py-2">Phone</th>
              <th className="px-4 py-2">Action</th>
            </tr>
          </thead>

          <tbody className='text-left'>
            {currentItems.map((row, i) => (
              <tr key={i} className={i % 2 === 0 ? "bg-red-50 border-t border-gray-300 " : "border-t border-gray-300"}>
                <td>
                  <input
                    type="checkbox"
                    onChange={() => handleCheckboxChange(i + indexOfFirstItem)}
                    checked={selectedRows.includes(i + indexOfFirstItem)}
                  />
                </td>
                <td className="px-4 py-2">{row.name}</td>
                <td className="px-4 py-2">{row.email}</td>
                <td className="px-4 py-2 ">{row.address}</td>
                <td className="px-4 py-2">{row.phone}</td>
                <td className="px-4 py-2">
                  <button onClick={() => editHandle(i)}><EditIcon sx={{ color: 'orange' }} /></button>
                  <button onClick={() => setShowDel(true)}><DeleteIcon sx={{ color: 'red' }} /> </button>
                </td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>
      {/* Pagination */}
      <div className='flex justify-center items-center font-Nunito'>
        <div className="flex justify-between p-2 border w-3/4 bg-white rounded-b-md text-gray-600">
          <div>
            {/* Calculate the range of entries being displayed */}
            Showing <span className='font-semibold'>{Math.min((currentPage - 1) * itemsPerPage + 1, data.length)}</span>
            &nbsp;to&nbsp;
            <span className='font-semibold'>{Math.min(currentPage * itemsPerPage, data.length)}</span> out of <span className='font-semibold'>{data.length}</span> entries
          </div>

          <ul className="pagination flex justify-center mr-2">
            {/* Previous button */}
            {currentPage === 1 ? <button className='mr-2'>Previous</button> : <button onClick={() => paginate(currentPage - 1)} className="page-link">
              Previous
            </button>}
            {/* Page buttons */}
            {Array.from({ length: Math.ceil(data.length / itemsPerPage) }, (_, i) => (
              <li key={i} className={`page-item ${currentPage === i + 1 ? 'bg-blue-500 rounded-sm text-white' : ''}`}>
                <button onClick={() => paginate(i + 1)} className="page-link">
                  {i + 1}
                </button>
              </li>
            ))}
            {/* Next button */}
            {currentPage === Math.ceil(data.length / itemsPerPage) ? <button>Next</button> : <button onClick={() => paginate(currentPage + 1)} className="page-link">
              Next
            </button>}
          </ul>
        </div>
      </div>

      {showEmp && (
        <AddNewEmployee
          setShowEmp={setShowEmp}
          setData={setData}
          data={data}
        />
      )}

      {showDel && (
        <Delete setShowDel={setShowDel} handleDelete={handleDelete} />
      )}

      {
        showEditform && (
          <EditForm 
          setShowEditform={setShowEditform}
          editedformData={editedformData}
          setEditedformData={setEditedformData}
          handleupdate={handleupdate}
        
          />
        )
      }

    </>
  )
}

export default App;
