'use client'
import '../global.css'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { handleSignup } from '../_hooks/handleSignup'

const RegisterCard = () => {
  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')
  const router = useRouter()

  const onSignupClick = async () => { 
    try {
      await handleSignup(email, password); 
      console.log("Sign up successful");
      router.push('/');
    } catch (error) {
      console.error('Sign up failed: ', error.message);
    }
};


  return (
    <div className='card glass'>
        <p className='w-full mb-5 self-start text-xl text-stone-700 
        border-b border-stone-700/50'>Register, please</p>
        <input 
        className='input' 
        placeholder='Email'
        value={email}
        onChange={(e)=> {setEmail(e.target.value)}}
        />
        <input 
        className='input' 
        placeholder='Password'
        type='password'
        value={password}
        onChange={(e)=>{setPassword(e.target.value)}}
        />
        <button className='self-end btn
        capitalize
         border-slate-800/65
         bg-slate-800/65 text-white'
        onClick={onSignupClick}>register</button>
    </div>
  )
}

export default RegisterCard