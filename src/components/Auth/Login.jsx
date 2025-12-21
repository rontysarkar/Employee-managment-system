import React, { useState } from 'react'



const Login = ({loginHandler}) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const submitHandler = (e) => {
        e.preventDefault()
        loginHandler(email,password);
        setEmail('')
        setPassword('')

    }

    return (
        <div className='flex h-screen w-screen justify-center items-center'>
            <div className="border-2 border-emerald-600">
                <form onSubmit={(e) => {
                    submitHandler(e)
                }} className='flex flex-col gap-5 p-20 '>
                    <input
                        onChange={(e) => {
                            setEmail(e.target.value);
                        }} value={email} required className='border-2 border-emerald-600 py-2 px-4  rounded-full placeholder:text-gray-400' type="email" placeholder='Enter your email' />
                    <input
                        onChange={(e) => {
                            setPassword(e.target.value)
                        }}
                        value={password} required className='border-2 border-emerald-600 px-2 py-2  rounded-full placeholder:text-gray-400' type="password" placeholder='Enter password' />
                    <button className=' bg-emerald-600 rounded-full py-2 active:scale-95 '>Login</button>
                </form>
            </div>

        </div>
    )
}

export default Login