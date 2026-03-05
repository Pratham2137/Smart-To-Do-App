import React from 'react'

const Footer = () => {
  return (
    <footer className='flex justify-center items-center border-t p-4 text-center bg-slate-200 dark:bg-gray-900 dark:border-gray-700'>
      <p className='text-sm text-gray-500'>© {new Date().getFullYear()} To-Do App. All rights reserved.</p>
    </footer>
  )
}

export default Footer