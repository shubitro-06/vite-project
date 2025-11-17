import React, { useState } from 'react'
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";
import { TbRubberStamp } from 'react-icons/tb';

const Input = () => {

    const [error,setError] = useState("")
    const [emailErr,setEmailErr] = useState("")
    const [passError,setPassError] = useState("")
    const [email,setEmail] = useState("")
    const [pass,setPass] = useState("")
   


    const [open,setOpen] = useState(false)

    // const  handleEmail = (e) =>{
    //     setEmail(e.target.value)
    // }

    let regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let PassRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,15}$/;

   

    const handleClick = (e) =>{
        e.preventDefault()
        if (email == "") {
            setEmailErr("Fill the required Email")
        } else {
            if (!regex.test(email)){
                setEmailErr("Email is Invalid")
            }else {
                setEmailErr(null)
            }
        }if (pass == ""){
            setPassError("Enter your Pass")
        }else if (!PassRegex.test(pass)){
            setPassError("use upper & lower case,special words & minimum 8 characters")
        }else {
            setPassError(null)
        }
        
    }

    return (
        <>


            <form className="max-w-sm mx-auto mt-40 mb-40">
                <div className="mb-5">
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                    <input
                        type="email" id="email"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@gmail.com" onChange={(e)=> setEmail(e.target.value)}/>
                        <p className='text-red-600 text-center h-2 font-bold'> {emailErr} </p>
                       
                        </div>
                <div className="mb-5 relative">
                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                    <input
                        type={open?"text": "password" }
                        id="password"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                        onChange={(e) => setPass(e.target.value)}
                        />
                        {  
                        open ?
                            <FaEye className='absolute top-10.5 right-2'onClick={()=> setOpen(!open)}/> 
                            :
                        <FaEyeSlash className='absolute top-10.5 right-2' onClick={()=> setOpen(!open)}/>
                        }
                        <p className='text-red-600 text-center h-6 font-bold'> {passError} </p>
                </div>
                <div className="flex items-start mb-5">
                    <div className="flex items-center h-5">
                        <input id="remember"
                            type="checkbox"
                            defaultValue
                            className="w-4 h-4 border border-gray-300 rounded-sm bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" />
                            
                    </div>
                    <label htmlFor="remember" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
                </div>
                <button 
                type="submit" 
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                onClick={handleClick}
                >Submit</button>
            </form>

        </>
    )
}

export default Input
