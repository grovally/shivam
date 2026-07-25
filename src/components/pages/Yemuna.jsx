import React  from "react";
const yemuna=[
    {
        title:"",
        image:""
    },
    {
        title :'',
        image :" "

    }
    ,
    {
        title :'',
        image :" "

    }
    ,
    {
        title :'',
        image :" "

    }
    ,
    {
        title :'',
        image :" "

    }
    ,
    {
        title :'',
        image :" "

    }

]
export default function Yemuna (){
    return(
        <section className=" bg-white py-16 px-16  ">
            <div className="max-w-5xl max-auto p-6">
                <h3 className="text-black font-bold text-2xl ">
                    Yemuna <span className="text-red-600"> Sector</span> 


                </h3>

            </div>
            <div className="grid gap-5 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-4">
                {yemuna.map((item,index)=>(
                    <Motion.div 
                    key={index}
                     whileHover={{ y: -10 }} 
                     transition={{ duration: 0.35 }}
                    className="group overflow-hidden rounded-3xl bg-white shadow-xl transition-all duration-500 hover:shadow-2xl"
                    
                    
                    >
                    <div className="relative overflow-hidden">
                        <img src={item.image}
                        alt={item.title}
                          loading="lazy"
                               decoding="ascsy"
                               className="h-72 w-full object-cover transition duration-700 group-hover:scale-110"
                        ></img>
                    </div>

                    </Motion.div>
                ))}

            </div>

        </section>
    )
}