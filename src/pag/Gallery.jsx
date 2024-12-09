import React from 'react'

const Images = [
    '/Images/Gel1.avif',
    '/Images/Gel2.avif',
    '/Images/Gel3.avif',
    '/Images/Gel4.avif',
    '/Images/Gel5.avif',
    '/Images/Gel6.avif',
    '/Images/Gel7.avif',
    '/Images/Gel8.avif',
]

const Gallery=() => {
  return (
    <div>
    <div className="relative h-screen bg-cover bg-center " 
    style={{backgroundImage: "url('/Images/phuket.jpg')"}}>
    <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center">
        <h4 className="text-4xl md:text-6xl font-bold text-white mb-4">Gallery</h4>
    </div>
    </div>
        <div className='container mx-auto px-4 py-12'>
            <div className=' grid grid-6 grid-cols-1 md:grid-cols-3 lg:grid-cols-4 '>
                {Images.map(Images => (
                    <div className='rounded-lg overflow-hidden shadow-md transform transition duration-300 hover:scale-105 px-2 py-2'>
                        <img src={Images} alt="" className='w-full h-full object-cover' />
                    </div>
                ))}
            </div>
            </div>
        </div>
  )
}

export default Gallery