import React from 'react'
import AdminMenu from '../../component/AdminMenu'
import { useAuth } from '../../context/auth'

const AdminDashboard = () => {
  const [auth] = useAuth()
  return (
    // <div className='flex '>
    //   <div className='row'>
    //     <div className='col-md-3'>
    //       <AdminMenu/>
    //     </div>
    //     <div className='col-md-9'>
    //       content
    //     </div>
    //   </div>
      
    // </div>
      <header className="bg-white flex ">
        <AdminMenu/>
        <div className='px-4 py-6 sm:px-6 lg:px-8'>
            <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
        </div>
          {/* <div className="max-w-7xl px-4 py-6 sm:px-6 lg:px-8 ">
            <h1 className=" flex items-center gap-2 rounded-md px-3 py-2 cursor-pointer hover:bg-gray-300 hover:text-foreground text-2xl tracking-tight text-gray-900 ">Name : {auth?.user?.name}</h1>
            <h1 className="flex items-center gap-2 rounded-md px-3 py-2 cursor-pointer hover:bg-gray-300 hover:text-foreground text-2xl tracking-tight text-gray-900 ">Email : {auth?.user?.email}</h1>
            <h1 className=" flex items-center gap-2 rounded-md px-3 py-2 cursor-pointer hover:bg-gray-300 hover:text-foreground text-2xl tracking-tight text-gray-900 ">Contact : {auth?.user?.phone}</h1>
            <h1 className="flex items-center gap-2 rounded-md px-3 py-2 cursor-pointer hover:bg-gray-300 hover:text-foreground text-2xl tracking-tight text-gray-900 ">Address : {auth?.user?.address}</h1>
          </div> */}
        </header>
  )
}

export default AdminDashboard
