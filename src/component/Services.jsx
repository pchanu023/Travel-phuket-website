import React from 'react'
import { FaConciergeBell, FaHotel, FaPlane, FaUmbrellaBeach } from 'react-icons/fa';

const services =[
    {
        icon:<FaPlane className='text-4xl text-blue-500'/>,
        title: 'Flight Booking' ,
        Description: 'We provide easy and quick flight book services to make your travel ',
    },
    {
        icon:<FaHotel className='text-4xl text-blue-500'/>,
        title: 'Hotel Booking' ,
        Description: 'Book hotel at the best prices with our exclusive deals and discounts.',
    },
    {
        icon:<FaUmbrellaBeach className='text-4xl text-blue-500'/>,
        title: 'Beach Tours' ,
        Description: 'Enjoy relaxing beach tours with all-inclusive packages and guided tours.',
    },
    {
        icon:<FaConciergeBell className='text-4xl text-blue-500'/>,
        title: 'Concierge Services' ,
        Description: 'Get personalized conciere services for a seamless travel experience.',
    },
];

const Services = () => {
    return (
        <div className='py-12 bg-gray-100'>
            <div className='container mx-auto px-4'>
                <h2 className='text-3xl font-bold text-center mb-8'>Our Services</h2>
                <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 '>
                    {services.map((services, index) => (
                        <div key={index} className='bg-white rounded-lg shadow-md cursor-pointer flex flex-col p-6 items-center object-cover transform transition duration-300 hover:scale-110 '>
                            <div className='mb-4 '>{services.icon} </div>
                                <h3 className='text-xl font-bold mb-2'>{services.title}</h3>
                                <p className='text-gray-600'>{services.Description}</p>
                            </div>
                    ))}
                </div>
            </div>
        </div>
    );
}



export default Services
