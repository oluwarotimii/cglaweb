import React from 'react'
import Link from 'next/link'
import { Button } from './ui/button'

export const Header: React.FC = () => {
  return (
    <header className="bg-black shadow">
      <nav className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-white">CGLA</Link>
          <div className="hidden md:flex space-x-4">
            <Link href="../pages/courses" className=" text-white hover:text-blue-600">Courses</Link>
            <Link href="../pages/blog" className="text-white hover:text-blue-600">Blog</Link>
            <Link href="../pages/support" className="text-white  hover:text-blue-600">Support</Link>
          </div>
          <div className="flex items-center space-x-4">
            <Button asChild variant='outline'>
              <Link href="../pages/login" className='text-white hover: font-extrabold'>Login</Link>
            </Button>
            <Button asChild variant='outline'>
              <Link href="../pages/login" className='text-white hover: font-extrabold'>Sign Up</Link>
            </Button>
          </div>
        </div>
      </nav>
    </header>
  )
}