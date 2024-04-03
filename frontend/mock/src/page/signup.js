import { useState } from "react"

export const SignUp=()=>{
    const [Email,setEmail]=useState("")
    const [Name,setName]=useState("")
    const [Image,setIamge]=useState("")
    const [Password,setpassword]=useState("")
    const handleclick=(e)=>{
        e.preventDefault()
        let obj={
            Email,Password,Name,Image
        }
        console.log(obj)
    }
    return(
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 shadow-md rounded-md max-w-sm w-full">
          <h2 className="text-2xl font-bold mb-4">Login</h2>
          <form>
          <div className="mb-4">
              <label htmlFor="name" className="block mb-1">Name</label>
              <input type="text" id="Name" name="Name" className="w-full border rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"  onChange={(e)=>setName(e.target.value)}/>
            </div>
            <div className="mb-4">
              <label htmlFor="Avatar" className="block mb-1">Image</label>
              <input type="text" id="Avatar" name="Avatar" className="w-full border rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" onChange={(e)=>setIamge(e.target.value)} />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block mb-1">Email</label>
              <input type="email" id="email" name="email" className="w-full border rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" onChange={(e)=>setEmail(e.target.value)}/>
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block mb-1">Password</label>
              <input type="password" id="password" name="password" className="w-full border rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"  onChange={(e)=>setpassword(e.target.value)}/>
            </div>
            <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md focus:outline-none focus:shadow-outline" onClick={handleclick}>
              Sign In
            </button>
          </form>
         
        </div>
      </div>
    )
}