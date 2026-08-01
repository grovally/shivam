import React from "react";
import  { useEffect, useState } from "react";
const wow=[
    {
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTo7tqp7lJPn0sGFWqpWoxUO0fNr-DrlyHj8DdN9dGXOdFzgreevIvIv8&s=1024"
    },
    {
        image:"https://etimg.etb2bimg.com/thumb/msid-84397838,width-1200,resizemode-4/.jpg"
    }
    ,
    {
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrxn9zCWVJ_GxLQa9SLE2CgL3vHJYx_CW0GrTc-8d22JLLjOvx5_7Owgu5&s=1024"
    },
]
const shivam=[
    {
        image:"https://media.licdn.com/dms/image/v2/C4E0BAQEvBdQ27KwROA/company-logo_200_200/company-logo_200_200/0/1631300638292?e=2147483647&v=beta&t=w67Fwk0oNJLFaZnCZJZ32fVEUKsa81zPRkxctgy_KoA"
    }
    ,{
        image:"https://upload.wikimedia.org/wikipedia/en/d/d5/ATS_Infrastructure.svg"
    }
    ,{
        image:"https://www.asite.com/hubfs/resources/images/newsroom/Resized/M3M.jpg"
    }
    ,{
        image:"https://yt3.googleusercontent.com/Fa1WcgP6NSyZRExROzL6JXG2z766ZMpIgCAw3wtqO9dOgoE8ZWTyah8svV7ra4XAdhPudtDs=s900-c-k-c0x00ffffff-no-rj"
    }
    ,{
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpBi-yDvPkg0Zan6EQ_Is-9-MU58wihulJ7ivktrJOmppal8S0LeVqLCJc&s=1024"
    }
    ,{
        image:"https://upload.wikimedia.org/wikipedia/en/b/bd/Gaursons_India.svg"
    }
    ,{
        image:"https://mma.prnewswire.com/media/1308693/GPL_Logo.jpg?p=facebook"
    }
    
]

export default function WOW() {
    const [startIndex, setStartIndex] = useState(0);

    

useEffect(() => {
  const interval = setInterval(() => {
    setStartIndex((prev) => (prev + 1) % shivam.length);
  }, 3000);

  return () => clearInterval(interval);
}, []);
const visiblePartners = [
  ...shivam.slice(startIndex),
  ...shivam.slice(0, startIndex),
].slice(0, 5);
  return (
    <section className="bg-white py-16 px-6">
          <div className ="max-w-7xl mx-auto mb-10 text-center">
            <h2 className="text-3xl font-bold text-gray-800">Working With The Top <span className="text-red-500">Development Authorities</span> .</h2>

        </div>
     
      
      
  
<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
  {wow.map((item, index) => (
    <div
      key={index}
      className="h-40 bg-white rounded-2xl border border-gray-200 shadow-sm flex items-center justify-center p-4"
    >
      <img
        src={item.image}
        alt=""
        className="max-w-full max-h-full object-contain"
      />
    </div>
  ))}
  
</div>
<section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
  <div className="max-w-7xl mx-auto mb-10 text-center">
    <h2 className="text-3xl md:text-4xl font-bold text-red-600">
      Our Partners
    </h2>
    <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
      We collaborate with leading real estate developers to bring you the best properties.
    </p>
  </div>

  <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
    {visiblePartners.map((item, index) => (
      <div
        key={index}
        className="h-24 sm:h-28 md:h-32 bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center justify-center p-4"
      >
        <img
          src={item.image}
          alt={`Partner ${index + 1}`}
          className="max-w-full max-h-full object-contain"
        />
      </div>
    ))}
  </div>
</section>
    </section>
  );
}