import { UserRound, MapPin, FileCheck, KeyRound } from "lucide-react";
import { motion } from "framer-motion";


export default function Chhabra() {


const steps = [
  {
    number:"01",
    title:"Share Requirements",
    desc:"Tell us your budget, area and property type.",
    icon:UserRound
  },

  {
    number:"02",
    title:"Free Site Visit",
    desc:"We arrange visits to shortlisted properties.",
    icon:MapPin
  },

  {
    number:"03",
    title:"Documentation",
    desc:"We verify documents and handle paperwork.",
    icon:FileCheck
  },

  {
    number:"04",
    title:"Possession",
    desc:"Registry, mutation and final handover support.",
    icon:KeyRound
  }
];


return (

<section className="py-24 bg-gray-50">


<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">


<div className="text-center mb-16">

<p className="text-red-600 font-bold">
HOW WE WORK
</p>


<h1 className="
text-4xl md:text-6xl
font-black
mt-3
">

Your Property Journey

<span className="text-red-600">
{" "}— 4 Simple Steps
</span>

</h1>


</div>



<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">


{
steps.map((item,index)=>{

const Icon=item.icon;


return(

<motion.div

key={index}

initial={{
opacity:0,
y:40
}}

whileInView={{
opacity:1,
y:0
}}

transition={{
delay:index*0.2
}}

className="
bg-white
rounded-3xl
p-8
shadow-xl
hover:-translate-y-3
transition
"

>


<div className="
w-16 h-16
rounded-full
bg-red-600
text-white
flex
items-center
justify-center
text-xl
font-bold
mb-6
">

{item.number}

</div>



<div className="
w-12
h-12
rounded-xl
bg-cyan-50
text-red-600
flex
items-center
justify-center
mb-5
">

<Icon/>

</div>



<h3 className="
text-xl
font-bold
mb-3
">

{item.title}

</h3>



<p className="text-gray-500">
{item.desc}
</p>



</motion.div>


)

})

}


</div>


</div>


</section>

)

}