import React from 'react'

const ErrorMessage = ({children}:{children: React.ReactNode}) => {
  return (
    <div className='text-center bg-red-600 font-bold p-3 uppercase text-sm text-white rounded-md'>
        {children}
    </div>
  )
}

export default ErrorMessage