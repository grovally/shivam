import { useNavigate, useParams } from "react-router-dom";
import { yemuna } from "../data/yemunaNoidaData";
import { Download } from "lucide-react";





export default function GreaterNoidaDetail() {
  const downloadImage = async()=>{
    const response = await fetch(map.image);
    const blob = await response.blob();
     
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href =url;
    a.download =`${map.title}.jpg`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);

  }

  const { id } = useParams();
  const navigate = useNavigate();

  const map = yemuna[Number(id)];

  if (!map) {
    return (
      <div className="min-h-screen bg-white text-black flex items-center justify-center">
        Map Not Found
      </div>
    );
  }


  return (
<div className="min-h-screen mt-20 bg-white text-black flex flex-col">


      {/* IMAGE */}

      <div className="
      flex
      items-center
      justify-center
      p-6
      ">
<img
  src={map.image}
  alt={map.title}
  className="
  w-full
  max-w-5xl
  h-[70vh]
  rounded-3xl
  
  object-contain
  "
/>

      </div>



      {/* CONTENT */}

      <div className="
      bg-white
      p-10
      flex
      flex-col
      justify-center
      ">


        <button

        onClick={()=>navigate(-1)}

        className="
        mb-8
        
        px-5
        py-3
        bg-red-600
        rounded-xl

        text-black
        w-fit
        "
       
        

        >

        ← Back

        </button>
       

<button
  onClick={downloadImage}
  className="absolute bottom-6 right-6 flex items-center gap-2 rounded-xl bg-red-600 px-5 py-3 text-white hover:bg-red-700 transition"
>
  <Download size={18} />
  Download Map
</button>



        <h1 className="
        text-5xl
        font-bold
        ">

        {map.title}

        </h1>



        <span className="
        mt-5
        bg-red-600
        px-5
        py-2
        rounded-full
        w-fit
        ">

        📍 Greater Noida

        </span>



        

        <p
  className="
  mt-8
  text-gray-700
  leading-8
  "
>
  {map.description}

  <br />
  <br />

  {`Explore detailed map information of ${map.title}. This location map provides complete sector planning, connectivity details and area overview.`}
</p>



        <div className="mt-8">


        <h2 className="
        text-2xl
        text-black
        font-bold
        ">

        Map Details

        </h2>


        <ul className="
        mt-4
        space-y-3
        text-black
        ">

        <li>
        ✅ Location : Greater Noida
        </li>

        <li>
        ✅ Authority : Greater Noida Authority
        </li>

        <li>
        ✅ Category : Residential / Commercial Map
        </li>

        <li>
        ✅ Updated Planning Map
        </li>


        </ul>


        </div>




      



      </div>



    </div>

  )

}