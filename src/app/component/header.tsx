import Link from 'next/link'
import React from 'react'


const Header = () => {
    
  return (
    <>
     <nav className="bg-slate-800 flex item-center py-6 px-6 mb-4 justify-between">
      <div className='flex items-center'>
        <Link href="/">
           <div className="text-lg font-bold text-white uppercase">
            Clerk App
           </div>
        </Link>
      </div>
      <div className='text-white items-center flex'>
       
            
            <Link href="sign-in" className='text-white hover:text-gray-300 mr-4'>Sign In</Link>
            <Link href="sign-up" className='text-white hover:text-gray-300 mr-4'>Sign Up</Link>
          
     
        
      </div>
    </nav> 
    </>
  )
}

export default Header
