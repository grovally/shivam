import { 
  Phone,
  MessageCircle,
  Navigation,
  MapPin,
  
} from "lucide-react";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";


const offices = [
  {
    id: 1,
    title: "Greater Noida Office",
  images: [
      "https://res.cloudinary.com/bzbcmzrn/image/upload/f_auto,q_auto,w_1200/v1785823324/gn_alf_1_qzbrno.jpg",
      "https://res.cloudinary.com/bzbcmzrn/image/upload/f_auto,q_auto,w_1200/v1785823324/gn_alf_2_svo00m.jpg",
      "https://res.cloudinary.com/bzbcmzrn/image/upload/f_auto,q_auto,w_1200/v1785823324/gn_alf_3_o7yi4r.jpg",
      "https://res.cloudinary.com/bzbcmzrn/image/upload/f_auto,q_auto,w_1200/v1785823325/gn_alf_4_vpmpil.jpg"
    ],

    address:
      "2nd floor, Chhabra Properties Pvt.Ltd, SL Tower, 204, Alpha-I Commercial Belt, Greater Noida, Uttar Pradesh 201310",

    phone:
      "+91 6262626462",

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

    images: [
      "https://res.cloudinary.com/bzbcmzrn/image/upload/f_auto,q_auto,w_1200/v1785823576/noi_1_m3xroz.jpg",
      "https://res.cloudinary.com/bzbcmzrn/image/upload/f_auto,q_auto,w_1200/v1785823576/noi_2_cbdsc7.jpg",
      "https://res.cloudinary.com/bzbcmzrn/image/upload/f_auto,q_auto,w_1200/v1785823577/noi_3_paaupo.jpg",
      'https://res.cloudinary.com/bzbcmzrn/image/upload/f_auto,q_auto,w_1200/v1785823577/noi_4_q6vig9.jpg'
    ],
    address:
      "Office No. 1434 & 1435, TOWER-B, Bhutani Alphathum, Sector 90, Noida, Uttar Pradesh 201304",

    phone:
      "+91 6200063000",

    whatsapp:
      "916200063000",

  

    map:
      "https://maps.google.com",

    description:
      "Premium apartments, commercial spaces and luxury property solutions across Noida.",
  },


  {
    id: 3,
    title: " Gaur Yamuna City Office",
    images: [
      "https://res.cloudinary.com/bzbcmzrn/image/upload/f_auto,q_auto,w_1200/v1785823987/gaur_yamuna_1_wifqza.jpg",
      "https://res.cloudinary.com/bzbcmzrn/image/upload/f_auto,q_auto,w_1200/v1785823988/gaur_yamuna_2_l9vepv.jpg",
      "https://res.cloudinary.com/bzbcmzrn/image/upload/f_auto,q_auto,w_1200/v1785823988/gaur_yamuna_3_xo7p2f.jpg",
    ],



    address:
      "Office Number:-32 Second floor Lord krishna Mart, Gaur Yamuna City, Greater Noida, Uttar Pradesh 203201",

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

    images: [
      "https://res.cloudinary.com/bzbcmzrn/image/upload/f_auto,q_auto,w_1200/v1785824655/Sikndrabad_1_unvugu.jpg",
      "https://res.cloudinary.com/bzbcmzrn/image/upload/f_auto,q_auto,w_1200/v1785824655/Sikndrabad_2_thoxuv.jpg",
    
    ],

    address:
      "A-19 Gopalpur, Sikandrabad, Uttar Pradesh 203206 ",

    phone:
      "+91 6200072000",

    whatsapp:
      "916200072000",

  

    map:
      "https://maps.google.com",

    description:
      "Plots, farmhouses and future investment projects near Yamuna Expressway.",
  },


  
];
export default function Location() {
  const [currentIndexes, setCurrentIndexes] = useState(() =>
    offices.reduce((acc, o) => ({ ...acc, [o.id]: 0 }), {})
  );

  useEffect(() => {
    const t = setInterval(() => {
      setCurrentIndexes((prev) => {
        const next = { ...prev };
        offices.forEach((o) => {
          const len = o.images?.length || 1;
          next[o.id] = ((prev[o.id] || 0) + 1) % len;
        });
        return next;
      });
    }, 3000);

    return () => clearInterval(t);
  }, []);




  


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
                    src={office.images?.[currentIndexes[office.id] ?? 0]}
                    alt={office.title}
                    className="h-[350px] w-full object-cover transition duration-700 group-hover:scale-110 md:h-[450px]"
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
                    className="btn btn-primary btn-mobile-full"
                  >
                    <Phone size={18} />
                    Call Now
                  </a>





                  <a
                    href={`https://wa.me/${office.whatsapp}`}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-ghost btn-mobile-full"
                    style={{ background: "linear-gradient(90deg,#10b981,#06b6d4)", color: "#fff" }}
                  >
                    <MessageCircle size={18} />
                    WhatsApp
                  </a>





                  <a
                    href={office.map}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-ghost btn-mobile-full"
                    style={{ color: "#111" }}
                  >
                    <Navigation size={18} />
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

    
        
