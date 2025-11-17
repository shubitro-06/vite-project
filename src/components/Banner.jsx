import React from 'react'

const Banner = () => {
  return (
    <>

      <div className='bg-[url(./assets/banner.jpg)] lg:px-[300px] py-[200px] bg-cover bg-no-repeat bg-center'>
        <div className="container">

          <div >
            <h1 className='text-white text-[30px] lg:text-[50px] font-bold'>Hello! <br />
              I’m Zarror Nibors</h1>
            <p className='lg:text-[15px] text-[12px] lg:w-[500px] text-white py-5'>I’am freelance UI/UX Desogner based in Indonesia who loves to craft attractive design experiences for the web.</p>
            <button className='text-amber-100 bg-amber-500 px-[29px] py-[11px] rounded-md cursor-pointer ' >Contact Me
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Banner
