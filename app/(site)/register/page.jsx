'use client'

import { useState } from "react"
import axios from "axios"
import { toast } from "react-hot-toast"

export default function Register() {
    
    const [data, setData] = useState({
         name: '',
          email: '',
           password: '',
           dateOfGrad: '',
          
          website: '',
          location: '',
          bio: '',
          fieldOfInterest: "",
          seeking: "",
          techStack: ""
         })

         const registerUser = async (e) => {
            e.preventDefault()
            axios.post('/api/register', data)
            .then(() => toast.success('User has been registered!'))
            .catch(() => toast.error('Something went wrong! Error Occured'))
         }

    return (
      <>
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img
              className="mx-auto h-10 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt="Your Company"
            />
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Register for the Student
            </h2>
          </div>
  
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" onSubmit={registerUser}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                  Name
                </label>
                <div className="mt-2">
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={data.name}
                    onChange={e => setData({ ...data, name: e.target.value })}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={data.email}
                    onChange={e => setData({ ...data, email: e.target.value })}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
  
              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                    Password
                  </label>
                  <div className="text-sm">
                    <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                      Forgot password?
                    </a>
                  </div>
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    value={data.password}
                    onChange={e => setData({ ...data, password: e.target.value })}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
      <label htmlFor="dateOfGrad" className="block text-sm font-medium leading-6 text-gray-900">
        Date of Graduation
      </label>
      <input
        id="dateOfGrad"
        name="dateOfGrad"
        type="date"
        required
        value={data.dateOfGrad}
        onChange={e => setData({ ...data, dateOfGrad: e.target.value })}
        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
      />
    </div>

    <div>
      <label htmlFor="github" className="block text-sm font-medium leading-6 text-gray-900">
        GitHub Username
      </label>
      <input
        id="github"
        name="github"
        type="text"
        autoComplete="username"
        required
        value={data.github}
        onChange={e => setData({ ...data, github: e.target.value })}
        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
      />
    </div>

    <div>
      <label htmlFor="website" className="block text-sm font-medium leading-6 text-gray-900">
        Website URL
      </label>
      <input
        id="website"
        name="website"
        type="url"
        value={data.website}
        onChange={e => setData({ ...data, website: e.target.value })}
        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
      />
    </div>

    <div>
      <label htmlFor="location" className="block text-sm font-medium leading-6 text-gray-900">
        Location
      </label>
      <select
        id="location"
        name="location"
        required
        value={data.location}
        onChange={e => setData({ ...data, location: e.target.value })}
        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
      >
        {/* Add options for location */}
        <option value="Brisbane">Brisbane</option>
        {/* ... other location options */}
      </select>
    </div>

    <div>
      <label htmlFor="bio" className="block text-sm font-medium leading-6 text-gray-900">
        Bio
      </label>
      <textarea
        id="bio"
        name="bio"
        required
        value={data.bio}
        onChange={e => setData({ ...data, bio: e.target.value })}
        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
      />
    </div>

    {/* Assuming fieldOfInterest is a single select dropdown */}
    <div>
      <label htmlFor="fieldOfInterest" className="block text-sm font-medium leading-6 text-gray-900">
        Field of Interest
      </label>
      <select
        id="fieldOfInterest"
        name="fieldOfInterest"
        required
        value={data.fieldOfInterest}
        onChange={e => setData({ ...data, fieldOfInterest: e.target.value })}
        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
      >
        {/* Add options for fieldOfInterest */}
        <option value="Security">Security</option>
        {/* ... other field of interest options */}
      </select>
    </div>

    {/* For checkboxes like 'seeking' and 'techStack', repeat the input for each option */}
    {/* ... */}
  
              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Register
                </button>
              </div>
            </form>
            <h1>Sign into Github below</h1>
            <button onClick={() => signIn('github')} className="bg-black text-white w-full">Sign In</button>
            <h1>Sign into Google below</h1>
            <button onClick={() => signIn('google')} className="bg-red-500 text-white w-full">Sign In</button>
  
            <p className="mt-10 text-center text-sm text-gray-500">
              
              <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                
              </a>
            </p>
          </div>
        </div>
      </>
    )
  }