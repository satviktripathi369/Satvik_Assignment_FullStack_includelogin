'use client'

import { useState, useEffect } from "react"
import { signIn, useSession } from 'next-auth/react'
import { toast } from "react-hot-toast"
import { useRouter } from "next/navigation"



export default function Login() {
    const session = useSession()
    const router = useRouter()
    const [data, setData] = useState({
            email: '',
            password: ''
            })


            useEffect(() => {
                if (session?.status === 'authenticated') {
                   router.push('/dashboard') 
                }
            })

            const loginUser = async (e) => {
                e.preventDefault()
                signIn('credentials',
                 {...data, redirect: false })
                .then((callback) => {
                    if (callback?.error) {
                        toast.error(callback.error)
                    }

                    if(callback?.ok && !callback?.error) {
                        toast.success('Logged in successfully!')
                    }
                } )
            }

    return (
      <div className="container mx-auto p-4">
      <h1 className="text-2xl mb-4">Academy Student Sign Up</h1>
 
      <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4">
        <input
          type="text"
          name="name"
          value={studentData.name}
          onChange={handleInputChange}
          placeholder="Name"
          required
        />
        <input
          type="email"
          name="email"
          value={studentData.email}
          onChange={handleInputChange}
          placeholder="Email"
          required
        />
        <input
          type="password"
          name="password"
          value={studentData.password}
          onChange={handleInputChange}
          placeholder="Password"
          required
        />
        <input
          type="date"
          name="dateOfGrad"
          value={studentData.dateOfGrad}
          onChange={handleInputChange}
          placeholder="Date of Graduation"
          required
        />
        <input
          type="text"
          name="githubURL"
          value={studentData.githubURL}
          onChange={handleInputChange}
          placeholder="Github Username"
          required
        />
        <input
          type="url"
          name="website_URL"
          value={studentData.website_URL}
          onChange={handleInputChange}
          placeholder="Personal Website URL"
        />
        <select
          name="location"
          value={studentData.location}
          onChange={handleInputChange}
          required
        >
          <option value="Brisbane">Brisbane</option>
          {/* Add other location options here */}
        </select>
        <textarea
          name="bio"
          value={studentData.bio}
          onChange={handleInputChange}
          placeholder="Bio"
          required
        />
        {/* Assuming 'fieldOfInterest' is a single select dropdown */}
        <select
          name="fieldOfInterest"
          value={studentData.fieldOfInterest}
          onChange={handleInputChange}
          required
        >
          <option value="">Select Field of Interest</option>
          <option value="Security">Security</option>
          {/* Add other field of interest options here */}
        </select>
        {/* Assuming 'seeking' and 'techStack' are multiple select, handled by checkboxes */}
        <fieldset>
          <legend>Seeking (Check all that apply)</legend>
          <label>
            <input
              type="checkbox"
              name="seeking"
              value="Internship"
              onChange={handleCheckboxChange}
              checked={studentData.seeking.includes('Internship')}
            />
            Internship
          </label>
          {/* Add other checkboxes for 'seeking' */}
        </fieldset>
        <fieldset>
          <legend>Tech Stack (Check all that apply)</legend>
          <label>
            <input
              type="checkbox"
              name="techStack"
              value="Ruby"
              onChange={handleCheckboxChange}
              checked={studentData.techStack.includes('Ruby')}
            />
            Ruby
          </label>
          {/* Add other checkboxes for 'techStack' */}
        </fieldset>
        {/* Add any other fields as necessary */}
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          Save Changes
        </button>
      </form>
    </div>
  );
  }