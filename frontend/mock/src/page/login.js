import { useState } from "react"

export const Login=()=>{
    const [Email,setEmail]=useState("")
    const [Password,setpassword]=useState("")
    const handleclick=(e)=>{
        e.preventDefault()
        let obj={
            Email,Password
        }
        console.log(obj)
    }
    return(
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 shadow-md rounded-md max-w-sm w-full">
          <h2 className="text-2xl font-bold mb-4">Login</h2>
          <form>
            <div className="mb-4">
              <label htmlFor="email" className="block mb-1">Email</label>
              <input type="email" id="email" name="email" className="w-full border rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" onChange={(e)=>setEmail(e.target.value)} />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block mb-1">Password</label>
              <input type="password" id="password" name="password" className="w-full border rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"  onChange={(e)=>setpassword(e.target.value)}/>
            </div>
            <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md focus:outline-none focus:shadow-outline" onClick={handleclick}>
              Log In
            </button>
          </form>
          <div className="mt-4 flex justify-center items-center">
            
            <button className="bg-white border border-gray-400 py-2 px-4 rounded-md flex items-center focus:outline-none focus:border-blue-500">
              
              Continue with Google
            </button>
          </div>
          <div className="mt-4 flex justify-center items-center">
          <a href="/sigup">Go to SignUp section</a>
          </div>
        </div>
      </div>
    )
}