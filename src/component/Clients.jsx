import React from 'react'
import { FaConciergeBell, FaHotel, FaPlane, FaUmbrellaBeach } from 'react-icons/fa';

const testimonials =[
    {
        name:'John Doe',
        Image:'/Images/John Doe.jpg',
        text: 'This traval agency provided excellent service and helped us plan the perfect vacation. Highly recommend!',
        location:'New York, USA',
    },
    {
        name:'Jane Smith',
        Image:'/Images/Jane Smith.jpg',
        text: 'Amazing experience! The tour guides were khowledgeable and the destination were beathtaking',
        location:'London, UK',    
    },
    {
        name:'Alice Johnson',
        Image:'/Images/Alice Johnson.jpeg',
        text: 'Great customer service and fantastic travel packages. will definitely book with them again.',
        location:'Sydney, Australia',    
    },
];

const Clients = () => {
    return (
        <div className='py-12 bg-gray-100'>
            <div className='container mx-auto px-4'>
                <h2 className='text-3xl font-bold text-center mb-8'>What Our Clients Say</h2>
                <div className='grid gap-6 sm:grid-cols-1 md-grid-cols-2 lg:grid-cols-3  '>
                    {testimonials.map((testimonials, index) => (
                        <div key={index} className='bg-white rounded-lg shadow-md p-6 text-center flex flex-col  items-center '>
                            <img src={testimonials.Image} alt={testimonials.Image} className='w-24 h-24 rounded-full mx-auto mb-4' />

                                <h3 className='text-xl font-bold mb-2'>{testimonials.name}</h3>
                                <p className='text-gray-600'>{testimonials.location}</p>
                                <p className='text-gray-600 italic'>{testimonials.text}</p>
                            </div>
                    ))}
                </div>
            </div>
        </div>
    );
}



export default Clients
