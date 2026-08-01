import { motion } from "framer-motion";
import {Link} from "react-router-dom"

import {
  Building2,
  Target,
  Eye,
  Users,
  Award,
  Home,
   ShieldCheck, 
   
  Zap, 
  Trophy 
} from "lucide-react";




export default function About() {
     

  const stats = [
    { number: "10+", label: "Years Experience" },
    { number: "1000+", label: "Happy Clients" },
    { number: "500+", label: "Properties Sold" },
    { number: "24/7", label: "Customer Support" },
  ];

  return (
    <section className="relative overflow-hidden bg-white text-black">

      {/* Background Glow */}
      <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-red-500/20 blur-[140px]" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-yellow-600/20 blur-[140px]" />

      <div className="relative max-w-7xl mx-auto px-6 py-24">

        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-red-400 uppercase tracking-[4px] font-semibold">
            About Us
          </p>

          <h1 className="text-5xl md:text-6xl  text-red-500 font-bold mt-5">
            Your Trusted <span className="block  bg-gradient-to-r from-red-600 to-yellow-300 bg-clip-text text-transparent ">Real Estate Partner
              </span> 
          </h1>

          <p className="max-w-3xl mx-auto mt-6 text-black/45 text-lg leading-8">
            At <span className="text-black font-semibold">Chhabra Properties</span>,
            we help people buy, sell, and invest in real estate with confidence,
            transparency, and professional guidance.
          </p>
        </motion.div>

        {/* Story */}
        <div className="grid lg:grid-cols-2 gap-12 mt-20 items-center">

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <img
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=900"
              alt="Office"
              className="rounded-3xl shadow-2xl"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            

            <p className="text-black/95  leading-8">
              Chhabra Properties simplifies property buying, 
              
              selling, and investing with transparent
               and trusted services across Delhi-NCR.
               Our mission is to redefine the real estate
                experience in Delhi-NCR by delivering honest
                 guidance, reliable expertise, and a commitment
                  to complete client satisfaction. With a skilled
                   team that understands the local market deeply,
                    we bring clarity and confidence to every property
                     transaction. For us, real estate is not just about
                      deals—it’s about trust, relationships, and helping
                       our clients make the right decisions for their future
                       Whether you’re buying your first home, selling a property, 
                       or exploring investment opportunities, our services are designed
                        to match your unique needs. We take pride in our transparency,
                         integrity, and personalized support at every step. From the first 
                         conversation to the final paperwork, Chhabra Properties ensures a
                          smooth, stress-free, and genuinely helpful real-estate experience.
            </p>
          </motion.div>

        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2  gap-8 mt-24">
          <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-red-200">
  <Target className="mb-5 text-red-500" size={42} />
  <h3 className="text-2xl font-bold text-gray-900">
    Our Mission
  </h3>
  <p className="mt-4 leading-7 text-gray-600">
    To provide trustworthy, transparent, and customer-focused real estate
    services that create long-term value.
  </p>
</div>

        
        
           
          <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-red-200">
   <Eye className="text-red-400 mb-5" size={42} />
  <h3 className="text-2xl font-bold text-gray-900">
    Our Vision
  </h3>
  <p className="mt-4 leading-7 text-gray-600">
    To become one of India's most trusted real estate companies by
              delivering exceptional service and innovative solutions.
  </p>
</div>

        </div>

        {/* Stats */}
        
        {/* Why Choose Us */}
        <div className="mt-24">

          
          <div className="grid md:grid-cols-3  gap-8">

            <div className="rounded-3xl bg-white/5  rounded-3xl shadow-2xl border border-white/10 p-8">
              <Users className="text-red-400 mb-5" size={40} />
              <h3 className="text-2xl font-bold">Expert Team</h3>
              <p className="text-black/90 mt-4">
                Experienced professionals who understand the market and your needs.
              </p>
            </div>

            <div className="rounded-3xl bg-white/5 rounded-3xl shadow-2xl border border-white/10 p-8">
              <Award className="text-red-400 mb-5" size={40} />
              <h3 className="text-2xl font-bold">Trusted Service</h3>
              <p className="text-black/90 mt-4">
                Honest advice, transparent deals, and long-lasting client relationships.
              </p>
            </div>

            <div className="rounded-3xl bg-white/5 rounded-3xl shadow-2xl border border-white/10 p-8">
              <Home className="text-red-400 mb-5" size={40} />
              <h3 className="text-2xl font-bold">Wide Property Choice</h3>
              <p className="text-gray-400 mt-4">
                Residential, commercial, industrial, and investment properties.
              </p>
            </div>

          </div>
        </div>

        {/* CTA */}
       

      </div>
      <section className="py-24 bg-gray-50">

  <div className="max-w-7xl mx-auto px-5 lg:px-8">


    {/* Heading */}

    <div className="text-center mb-16">

      <p className="
      text-red-600 
      font-bold 
      uppercase 
      tracking-widest
      ">
        What We Stand For
      </p>


      <h2 className="
      text-4xl md:text-6xl
      font-black
      text-gray-900
      mt-3
      ">

        Our 
        <span className="text-red-600">
          {" "}Core Values
        </span>

      </h2>

    </div>




    {/* Cards */}

    <div className="
    grid 
    md:grid-cols-2 
    lg:grid-cols-4 
    gap-8
    ">


      {
      [
        {
          icon:ShieldCheck,
          title:"Honesty",
          text:"We give you the real picture — market prices, property status, and legal clarity — with zero sugarcoating."
        },


        {
          icon:Eye,
          title:"Transparency",
          text:"No hidden fees. No surprise charges. Every step of your property journey is completely open and clear."
        },


        {
          icon:Zap,
          title:"Speed",
          text:"We respond within 1 hour and move quickly on opportunities, so you never miss the right property at the right price."
        },


        {
          icon:Trophy,
          title:"Excellence",
          text:"From site visit to registry, every touchpoint is handled with care, professionalism, and attention to detail."
        }

      ].map((item,index)=>{


      const Icon=item.icon;


      return (

      <div
      key={index}
      className="
      bg-white
      rounded-3xl
      p-8
      shadow-xl
      border
      border-black
      hover:-translate-y-3
      transition-all
      duration-300
      ">


        {/* Icon */}

        <div className="
        w-16
        h-16
        rounded-2xl
        bg-red-600
        text-black
        flex
        items-center
        justify-center
        mb-6
        ">

          <Icon size={32}/>

        </div>



        <h3 className="
        text-2xl
        font-black
        text-gray-900
        mb-4
        ">

          {item.title}

        </h3>



        <p className="
        text-gray-600
        leading-7
        ">

          {item.text}

        </p>


      </div>

      )

      })

      }


    </div>


  </div>

</section>
      <section className="py-24 bg-white">

  <div className="max-w-7xl mx-auto px-5 lg:px-8">


    {/* Heading */}

    <div className="text-center mb-16">

      <p className="text-red-600 font-bold uppercase tracking-widest">
        Our Journey
      </p>

      <h2 className="
      text-4xl md:text-6xl 
      font-black 
      text-gray-900 
      mt-3
      ">
        Milestones
        <span className="text-red-600">
          {" "}That Shaped Us
        </span>
      </h2>

    </div>



    {/* Timeline */}

    <div className="relative">


      {/* Line */}

      <div className="
      hidden md:block
      absolute
      left-1/2
      top-0
      bottom-0
      w-1
      bg-cyan-100
      -translate-x-1/2
      "></div>



      {[
        {
          year:"01",
          title:"Year 1 — Foundation",
          text:"Chhabra  Properties established in Greater Noida",
          desc:"It started with a vision to bring honest and transparent property dealing to the Greater Noida market. Began with residential plot consultancy and local property broking."
        },

        {
          year:"02",
          title:"Early Years — Growth",
          text:"Expanded to Yamuna Expressway & YEIDA plots",
          desc:"Recognised the growing demand for YEIDA authority plots and became one of the first dedicated Yamuna Expressway property dealers serving Greater Noida clients."
        },


        {
          year:"03",
          title:"Mid Journey — Recognition",
          text:"Moved to Tradex Tower II, Alpha-I — Our Current Office",
          desc:"Established a full-service office on the 9th Floor, Tradex Tower II — one of Greater Noida's premier commercial addresses — to better serve our growing client base."
        },


        {
          year:"04",
          title:"Recent — Digital Presence",
          text:"Google Rating: 4.9/5",
          desc:"Built one of the strongest digital presences among Greater Noida Property Dealers — with verified Google reviews, an active website, and a consistent social media presence."
        },


        {
          year:"05",
          title:"Now — The Mission Continues",
          text:"Working towards being the #1 Property Dealer in Greater Noida",
          desc:"Every day we serve new clients, build new relationships, and work toward becoming the undisputed first choice for property buyers and sellers across Greater Noida NCR."
        }

      ].map((item,index)=>(


      <div 
      key={index}
      className={`
      relative 
      flex 
      flex-col 
      md:flex-row
      items-center
      mb-12
      ${index%2===0 ? "md:flex-row" : "md:flex-row-reverse"}
      `}>


        {/* Content */}

        <div className="
        md:w-1/2
        bg-gray-50
        rounded-3xl
        p-8
        shadow-lg
        hover:-translate-y-2
        transition
        ">


          <h3 className="
          text-2xl
          font-black
          text-gray-900
          mb-3
          ">
            {item.title}
          </h3>


          <h4 className="
          text-red-600
          font-bold
          mb-4
          ">
            {item.text}
          </h4>


          <p className="
          text-gray-600
          leading-7
          ">
            {item.desc}
          </p>


        </div>




        {/* Number Circle */}

        <div className="
        z-10
        my-6
        md:mx-10
        w-16
        h-16
        rounded-full
        bg-red-600
        text-white
        flex
        items-center
        justify-center
        text-xl
        font-black
        shadow-xl
        ">

          {item.year}

        </div>



        <div className="md:w-1/2"></div>


      </div>


      ))}


    </div>


  </div>
  <div className="mx-auto mt-24 max-w-4xl overflow-hidden rounded-[28px] bg-gradient-to-r from-red-700 via-red-600 to-orange-500 px-6 py-12 text-center shadow-xl">

  <h2 className="text-3xl font-bold leading-tight text-white md:text-5xl">
    Let's Find Your Perfect Property
  </h2>

  <p className="mx-auto mt-6 max-w-2xl text-base text-red-100 md:text-lg">
    Whether you're buying, selling, or investing, our property experts are
    here to guide you through every step with trust and transparency.
  </p>

  <div className="mt-10 flex justify-center gap-4">
    <Link
      to="/contact"
      className="inline-flex items-center rounded-full bg-white px-8 py-4 font-semibold text-red-600 transition-all duration-300 hover:scale-105 hover:shadow-2xl md:px-10"
    >
      Contact Us →
    </Link>

    <Link
      to="/properties"
      className="inline-flex items-center rounded-full border-2 border-white px-8 py-4 font-semibold text-white transition-all duration-300 hover:bg-white hover:text-red-600"
    >
      View Properties
    </Link>
  </div>

</div>

</section>



    </section>
    
  );
}