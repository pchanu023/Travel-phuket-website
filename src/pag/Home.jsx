import React from 'react';
import PopularDestination from '../component/PopularDestination.jsx';
import Services from '../component/Services.jsx';
import Clients from '../component/Clients.jsx';

const Home = () => {
  return (
    <>
      <div className="relative min-h-screen bg-cover bg-center" style={{backgroundImage: "url('/Images/phuket.jpg')"}}>
  <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center">
    <h1 className="text-4xl md:text-6xl font-bold text-white">Explore the World with Us</h1>
    <p className="text-lg md:text-2xl text-white mb-8">Discover amazing places at exclusive deals</p>
    <button className="border text-white px-6 py-2 rounded-full text-lg md:text-xl hover:bg-blue-500 transform translate duration-300 hover:scale-105">Get Started</button>
  </div>
</div>

      <PopularDestination />
      <Services />
      <Clients />
    </>
  );
};

export default Home;
