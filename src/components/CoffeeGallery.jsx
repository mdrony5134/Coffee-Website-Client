import React from 'react'

const CoffeeGallery = () => {
  return (
    <div className='max-w-7xl mx-auto'>
        <div className='text-center pt-[60px] md:pt-[120px] pb-12'>
        <p>Follow us now</p>
        <h1 className="text-[#331A15] text-[25px] md:text-[55px] font-bold">
          Follow on Instagram
        </h1>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mx-5 md:mx0'>
            <img src="/images/cups/Rectangle 9.png" alt="coffee image" />
            <img src="/images/cups/Rectangle 10.png" alt="coffee image" />
            <img src="/images/cups/Rectangle 11.png" alt="coffee image" />
            <img src="/images/cups/Rectangle 12.png" alt="coffee image" />
            <img src="/images/cups/Rectangle 13.png" alt="coffee image" />
            <img src="/images/cups/Rectangle 14.png" alt="coffee image" />
            <img src="/images/cups/Rectangle 15.png" alt="coffee image" />
            <img src="/images/cups/Rectangle 16.png" alt="coffee image" />
        </div>
    </div>
  )
}

export default CoffeeGallery