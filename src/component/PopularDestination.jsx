import React from 'react'

const Description =[
    {
    imge: '/Images/Coral Island.webp',
    title: 'Coral Island' ,
    Description: 'Coral Island, or Koh Hey, is a popular destination among tourists, offering the perfect getaway for those with limited time. Its close proximity makes it ideal for quick trips, whether it s a full-day tour, a half-day visit, or even an overnight stay. For those wishing to spend the night, Coral Island Resort, the only resort on the island, provides a comfortable accommodation option. If you are looking for a beautiful island thats both stunning and conveniently located, Coral Island is an excellent choice.',
    },
    {
        imge: '/Images/Racha Island.webp',
        title: 'Racha Island' ,
        Description: 'One of the Dream Destinations for many tourists is Racha Island because it is famous for its beauty and tranquility. You can take a boat to Racha Island not far from Phuket and it does not take too long. If you have only half a day, you can visit Racha Island. The highlight of Racha Island that makes most tourists travel there is nothing else but the water that is as clear as a mirror and many schools of fish swimming around, it is beautiful like going to an island far from the city.',
    },
    {
        imge: '/Images/Mai Thon Island.webp',
        title: 'Mai Thon Island' ,
        Description: 'Only 15 minutes if you take a boat from Phuket to Koh Maiton, it wont take long. The highlight of Koh Maiton that makes it popular is its proximity and the beauty that is like going to a private island. Recommended for those who like snorkeling or anyone who wants to dive and see coral without having to go far. Let me tell you that Koh Maiton is the recommended destination.',
    },
    {
        imge: '/Images/Koh Yao Yai.webp',
        title: 'Koh Yao Yai' ,
        Description: 'Although Koh Yao Yai is not very popular and some people may only know about Koh Yao Noi, I must say that Koh Yao Yai is another island that is very suitable for a vacation. This is because there are many accommodations to choose from on Koh Yao Yai, allowing you to escape from the chaos. Or if you dont like the hustle and bustle of Phuket town, I recommend taking a boat ride there, which only takes a short while.',
    },
];

const PopularDestination = () => {
    return (
        <div className='py-12 bg-gray-100'>
            <div className='container mx-auto px-4'>
                <h2 className='text-3xl font-bold text-center mb-8'>PoPularDestinatins</h2>
                <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 '>
                    {Description.map((city, index) => (
                        <div key={index} className='bg-white rounded-lg shadow-md overflow-hidden cursor-pointer object-cover transform transition duration-300 hover:scale-110 '>
                            <img src={city.imge} alt={city.imge} className='w-full h-48 ' />
                            <div className='p-4'>
                                <h3 className='text-xl font-bold mb-2'>{city.title}</h3>
                                <p className='text-gray-600'>{city.Description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}



export default PopularDestination
