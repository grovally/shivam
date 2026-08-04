import { 
  Phone,
  MessageCircle,
  Navigation,
  MapPin,
  
} from "lucide-react";

import { motion } from "framer-motion";


const offices = [
  {
    id: 1,
    title: "Greater Noida Office",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop",

    address:
      "Alpha Commercial Belt, Greater Noida",

    phone:
      "+916262626462",

    whatsapp:
      "916262626462",

   

    map:
      "https://maps.google.com",

    description:
      "Get expert guidance for residential, commercial and investment properties in Greater Noida.",
  },


  {
    id: 2,
    title: "Noida Office",

    image:
      "https://images.unsplash.com/photo-1460317442991-0ec209397118?q=80&w=1200&auto=format&fit=crop",

    address:
      "Sector 18, Noida",

    phone:
      "+916200063000",

    whatsapp:
      "916200063000",

  

    map:
      "https://maps.google.com",

    description:
      "Premium apartments, commercial spaces and luxury property solutions across Noida.",
  },


  {
    id: 3,
    title: "Noida Extension Office",

    image:
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=1200&auto=format&fit=crop",

    address:
      "Gaur Chowk, Noida Extension",

    phone:
      "+916262626962",

    whatsapp:
      "916262626962",

    
    map:
      "https://maps.google.com",

    description:
      "Affordable homes, luxury apartments and investment opportunities in Noida Extension.",
  },


  {
    id: 4,
    title:
      "Sikandrabad Office",

    image:
      "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?q=80&w=1200&auto=format&fit=crop",

    address:
      "Yamuna Expressway, Sikandrabad",

    phone:
      "+916200072000",

    whatsapp:
      "916200072000",

  

    map:
      "https://maps.google.com",

    description:
      "Plots, farmhouses and future investment projects near Yamuna Expressway.",
  },


  {
    id: 5,
    title:
      "Gaur Yamuna City Office",

    image:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1200&auto=format&fit=crop",

    address:
      "Gaur Yamuna City",

    phone:
      "+916262626962",

    whatsapp:
      "916262626962",

   

    map:
      "https://maps.google.com",

    description:
      "Luxury villas, plots and township investment assistance.",
  },
];



export default function Location() {


  return (

    <section className="
      bg-gradient-to-b
      from-white
      via-gray-50
      to-white
      py-20
      px-4
      overflow-hidden
    ">


      <div className="
        mx-auto
        max-w-7xl
      ">


        {/* HEADER */}

        <div className="
          text-center
          mb-20
        ">


          <span className="
            inline-block
            rounded-full
            bg-red-100
            px-5
            py-2
            text-sm
            font-semibold
            text-red-600
          ">

            📍 OUR BRANCH OFFICES

          </span>



          <h1 className="
            mt-6
            text-4xl
            md:text-6xl
            font-bold
            text-gray-900
          ">

            Visit <span className="text-red-600">Chhabra </span> Properties

          </h1>



          <p className="
            mt-5
            mx-auto
            max-w-3xl
            text-black/70
            leading-7
            text-lg
          ">

            Connect with our property experts across multiple locations.
            Find your nearest office and get complete assistance.

          </p>


        </div>



        {/* OFFICE SECTIONS START */}

        <div className="space-y-24">

          {offices.map((office,index)=>(


            <motion.div

              key={office.id}

              initial={{
                opacity:0,
                y:60,
              }}

              whileInView={{
                opacity:1,
                y:0,
              }}

              viewport={{
                once:true,
              }}

              transition={{
                duration:0.7,
              }}


              className={`
                grid
                items-center
                gap-10
                lg:grid-cols-2
                ${
                  index % 2 === 1
                  ? "lg:[&>*:first-child]:order-2"
                  : ""
                }
              `}

            >


              {/* PART 2 CONTINUE HERE */}
                            {/* IMAGE SECTION */}

              <div className="
                relative
                group
              ">


                <div className="
                  absolute
                  -inset-3
                  rounded-[45px]
                  bg-red-500/10
                  blur-2xl
                  opacity-0
                  group-hover:opacity-100
                  transition
                  duration-500
                "></div>



                <div className="
                  relative
                  overflow-hidden
                  rounded-[45px]
                  shadow-2xl
                ">


                  <img

                    src={office.image}

                    alt={office.title}

                    className="
                      h-[350px]
                      w-full
                      object-cover
                      transition
                      duration-700
                      group-hover:scale-110
                      md:h-[450px]
                    "

                  />



                  {/* IMAGE OVERLAY */}

                  <div className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-black/70
                    via-transparent
                    to-transparent
                  "></div>



                  


                </div>


              </div>





              {/* TEXT SECTION */}


              <div>


                <span className="
                  text-red-600
                  font-semibold
                  tracking-wide
                ">

                  PROPERTY CONSULTATION

                </span>



                <h2 className="
                  mt-4
                  text-4xl
                  font-bold
                  text-gray-900
                  md:text-5xl
                ">

                  {office.title}

                </h2>



                <p className="
                  mt-6
                  text-lg
                  leading-8
                  text-gray-600
                ">

                  {office.description}

                </p>




                {/* DETAILS CARD */}


                <div className="
                  mt-8
                  space-y-4
                ">



                  <div className="
                    flex
                    items-center
                    gap-4
                    rounded-2xl
                    bg-white
                    p-4
                    shadow-sm
                    border
                  ">


                    <div className="
                      rounded-xl
                      bg-red-100
                      p-3
                    ">

                      <MapPin
                        className="text-red-600"
                        size={22}
                      />

                    </div>



                    <div>

                      <p className="
                        text-sm
                        text-gray-500
                      ">

                        Office Address

                      </p>


                      <h4 className="
                        font-semibold
                        text-gray-900
                      ">

                        {office.address}

                      </h4>


                    </div>


                  </div>






                  <div className="
                    flex
                    items-center
                    gap-4
                    rounded-2xl
                    bg-white
                    p-4
                    shadow-sm
                    border
                  ">


                    <div className="
                      rounded-xl
                      bg-green-100
                      p-3
                    ">

                      <Phone
                        className="text-green-600"
                        size={22}
                      />

                    </div>



                    <div>


                      <p className="
                        text-sm
                        text-gray-500
                      ">

                        Contact Number

                      </p>



                      <h4 className="
                        font-semibold
                        text-gray-900
                      ">

                        {office.phone}

                      </h4>


                    </div>


                  </div>






                  


                    



                    


                  



                </div>





                {/* BUTTONS */}


                <div className="
                  mt-8
                  flex
                  flex-wrap
                  gap-4
                ">


                  <a

                    href={`tel:${office.phone}`}

                    className="
                      flex
                      items-center
                      gap-2
                      rounded-xl
                      bg-red-600
                      px-6
                      py-3
                      font-semibold
                      text-white
                      transition
                      hover:bg-red-700
                    "

                  >

                    <Phone size={18}/>

                    Call Now

                  </a>





                  <a

                    href={`https://wa.me/${office.whatsapp}`}

                    target="_blank"

                    rel="noreferrer"

                    className="
                      flex
                      items-center
                      gap-2
                      rounded-xl
                      bg-green-500
                      px-6
                      py-3
                      font-semibold
                      text-white
                      transition
                      hover:bg-green-600
                    "

                  >

                    <MessageCircle size={18}/>

                    WhatsApp

                  </a>





                  <a

                    href={office.map}

                    target="_blank"

                    rel="noreferrer"

                    className="
                      flex
                      items-center
                      gap-2
                      rounded-xl
                      border
                      border-gray-300
                      px-6
                      py-3
                      font-semibold
                      text-gray-800
                      transition
                      hover:bg-gray-100
                    "

                  >

                    <Navigation size={18}/>

                    Direction

                  </a>



                </div>



              </div>


            </motion.div>


          ))}
                

        </div>

      </div>

    </section>

  );

}

    
        
