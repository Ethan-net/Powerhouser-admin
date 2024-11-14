import React, { useState } from 'react'
import Logo from './logo'
import '../index.css'




export default function Login({login, SetLogin, handleSubmit}) {

    const handleChange = (e) => {
        const { name, value } = e.target;
        SetLogin((prev) => ({
          ...prev,
          [name]: value,
        }));
    };
    



    
  return (
    <div>
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
   <div className="sm:mx-auto sm:w-full sm:max-w-sm">
    <Logo/>
    <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">Sign in to Admin Account</h2>
  </div>

  <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
    <form onSubmit={handleSubmit} className="space-y-6" action="#" method="POST">
      <div>
        <label for="email" className="block text-sm/6 font-medium text-gray-900">Email address</label>
        <div className="mt-2">
          <input 
          onChange={handleChange}
          id="email" 
          name="username" 
          type="text" 
          autocomplete="email" 
          required className="block w-full rounded-md border-0n py-1.5  text-gray-900 shadow-sm ring-1  ring-gray-300 outline-none px-5  placeholder:text-gray-400 sm:text-sm/6"/>
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between">
          <label for="password" className="block text-sm/6 font-medium text-gray-900">Password</label>
        </div>
        <div className="mt-2">
          <input
          onChange={handleChange} 
          id="password" 
          name="password" 
          type="password" 
          autocomplete="current-password" 
          required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 outline-none px-5 sm:text-sm/6"/>
        </div>
      </div>

      <div>
        <button type="submit" className="flex w-full justify-center rounded-md bg-red-500 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ">Sign in</button>
      </div>
    </form>
  </div>
</div>
    </div>
  )
}
