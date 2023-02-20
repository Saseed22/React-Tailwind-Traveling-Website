import React from 'react'

const Gallery = () => {
  return (
      <div id='gallery' className='max-w-[1140px] m-auto px-4 py-16 w-full'>
          <h2 className='text-center text-2xl text-gray-800 p-4'>Gallery</h2>
          <div className='grid sm:grid-cols-5 gap-4'>
              <div className='col-span-2 sm:col-span-3 row-span-2'>
                  <img className='w-full h-full object-cover' src="https://images.unsplash.com/photo-1636155986820-f3e538e9bf23?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDMzfEZ6bzN6dU9ITjZ3fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="/" />
              </div>
              <div>
                  <img className='w-full h-full object-cover' src="https://images.unsplash.com/photo-1674683438097-23d58143dec0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDMxfEZ6bzN6dU9ITjZ3fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="/" />
              </div>
              <div>
                  <img className='w-full h-full object-cover' src="https://images.unsplash.com/photo-1653376036307-6de595cdd4e3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDM0fEZ6bzN6dU9ITjZ3fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="/" />
              </div>
              <div>
                  <img className='w-full h-full object-cover' src="https://images.unsplash.com/photo-1658156369501-bd795c3f0938?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE1MnxGem8zenVPSE42d3x8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" alt="/" />
              </div>
              <div>
                  <img className='w-full h-full object-cover' src="https://images.unsplash.com/photo-1648625926829-187f6b917941?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE1NnxGem8zenVPSE42d3x8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" alt="/" />
              </div>
          </div>
    </div>
  )
}

export default Gallery