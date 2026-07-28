import { motion } from "framer-motion";
import { useState } from "react";


import {  AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const noidaImages = [
  {
    title: "Sector 127",
    image:
      "https://res.cloudinary.com/bzbcmzrn/image/upload/f_auto,q_auto,w_1200/v1784805601/SECTOR_-127_NOIDA_CHANGES_uinf0k.jpg",
  },
  {
    title: "Sector 155",
    image:
      "https://res.cloudinary.com/bzbcmzrn/image/upload/f_auto,q_auto,w_1200/v1784805601/SECTOR-_155_y0fowy.jpg",
  },
  {
    title: "Sector 110",
    image:
      "https://res.cloudinary.com/bzbcmzrn/image/upload/f_auto,q_auto,w_1200/v1784805601/SECTOR_-110_k70rlt.jpg",
  },
  {
    title: "Sector 164",
    image:
      "https://res.cloudinary.com/bzbcmzrn/image/upload/f_auto,q_auto,w_1200/v1784805598/SECTOR-164_j4gjhm.jpg",
  },
  {
    title:"sector 162",
    image:"https://res.cloudinary.com/bzbcmzrn/image/upload/f_auto,q_auto,w_1200/v1784805598/Sector-162_mto0mc.jpg",

  }
  ,
  { 
    title:" sector 159",
    image:"https://res.cloudinary.com/bzbcmzrn/image/upload/f_auto,q_auto,w_1200/v1784805596/SECTOR-159_utfbgq.jpg",
    
  }
  ,
  {
    title:"sector 156",
    image:"https://res.cloudinary.com/bzbcmzrn/image/upload/f_auto,q_auto,w_1200/v1784805589/SECTOR-156_yo0rzn.jpg",
    
  }
  ,
  {
    title:" sector 158",
    image:"https://res.cloudinary.com/bzbcmzrn/image/upload/f_auto,q_auto,w_1200/v1784805589/Sector-158_p4otx6.jpg",
    
  }
  ,
  { 
    title:" sector 155",
    image:" https://res.cloudinary.com/bzbcmzrn/image/upload/f_auto,q_auto,w_1200/v1784805589/SECTOR-155_kualpa.jpg",
    
  }
  ,
  {
    title:" sector 155 ",
    image:"https://res.cloudinary.com/bzbcmzrn/image/upload/f_auto,q_auto,w_1200/v1784805583/SECTOR-151_NEW_PLOTS_oihpxw.jpg",
    
  }
  
  
  ,
  {
    title:" Sector  91 ",
    image:"https://res.cloudinary.com/bzbcmzrn/image/upload/f_auto,q_auto,w_1200/v1784805583/SECTOR-91_fk6un3.jpg",
    
  }
  ,
  {
    title:" Sector 153",
    image:"https://res.cloudinary.com/bzbcmzrn/image/upload/f_auto,q_auto,w_1200/v1784805582/SECTOR-_153_hrpbeh.jpg",
    
  }
  ,
  {
    title:" sector 156",
    image:" https://res.cloudinary.com/bzbcmzrn/image/upload/f_auto,q_auto,w_1200/v1784805579/SECTOR-_156_aofhnt.jpg",
    
  }
  ,
  {
    title:" Phase-2",
    image:"https://res.cloudinary.com/bzbcmzrn/image/upload/f_auto,q_auto,w_1200/v1784805575/PHASE-II_wydj5r.jpg",
    
  }
  ,
  {
    title:" sector 89",
    image:"https://res.cloudinary.com/bzbcmzrn/image/upload/f_auto,q_auto,w_1200/v1784805574/SECTOR_-_89_SECTOR_-_90_vfyoyw.jpg",
    
  }
  ,
  {
    title:" sector 75",
    image:" https://res.cloudinary.com/bzbcmzrn/image/upload/f_auto,q_auto,w_1200/v1784805570/SECTOR_-_75_SECTOR_-_76_u0iipe.jpg",
    
  }
  ,
  {
    title:" sector 66",
    image:"https://res.cloudinary.com/bzbcmzrn/image/upload/f_auto,q_auto,w_1200/v1784805567/SECTOR_-_66_bwjbcl.jpg",
    
  }
  ,
  {
    title:" sector 56",
    image:" https://res.cloudinary.com/bzbcmzrn/image/upload/f_auto,q_auto,w_1200/v1784805566/SECTOR_-_59_SECTOR_-_60_roatt0.jpg",
    
  }
  ,
  {
    title:"5_ABADI_AT_VILL._SULTANPUR_qoko6v",
    image:"https://res.cloudinary.com/bzbcmzrn/image/upload/f_auto,q_auto,w_1200/v1784805560/5_ABADI_AT_VILL._SULTANPUR_qoko6v.jpg",
    
  }
  ,
  {
    title:" sector 71",
    image:"https://res.cloudinary.com/bzbcmzrn/image/upload/f_auto,q_auto,w_1200/v1784805560/5_ABADI_AT_SEC-71_OF_VILL._BASAI_KONDALI_ROHILAPUR_ho1d0q.jpg",
    
  }
  ,
  { 
    title:" sector 144",
    image:"https://res.cloudinary.com/bzbcmzrn/image/upload/f_auto,q_auto,w_1200/v1784805554/5_ABADI_AT_SECTOR-144_ijjjok.jpg",
    
  },
  {
    title:" sector 143",
    image :" https://res.cloudinary.com/bzbcmzrn/image/upload/f_auto,q_auto,w_1200/v1784805551/5_ABADI_AT_SECTOR-143_VILL.CHAPRALI_JHATTA_5_ABADI_AT_SECTOR-128_VILL._SULTANPUR_cdeyn4.jpg",
  },
  {
    title:" sector 135",
    image :" https://res.cloudinary.com/bzbcmzrn/image/upload/f_auto,q_auto,w_1200/v1784805547/5_ABADI_AT_SECTOR-135_WAZIDPUR_hj87cs.jpg",
  },
  {
    title:" sector",
    image :"https://res.cloudinary.com/bzbcmzrn/image/upload/f_auto,q_auto,w_1200/v1784805540/5_ABADI_AT_SECTOR-132_VILL.ROHILAPUR_5_ABADI_AT_SECTOR-66_grv4h5.jpg ",
  },
  {
    title:"132",
    image :" https://res.cloudinary.com/bzbcmzrn/image/upload/f_auto,q_auto,w_1200/v1784805537/5_ABADI_AT_SECTOR-80_ggjmtg.jpg",
  }
  ,{
    title:" sector 80",
    image :"https://res.cloudinary.com/bzbcmzrn/image/upload/f_auto,q_auto,w_1200/v1784805537/5_ABADI_AT_SECTOR-80_ggjmtg.jpg ",
  },
  {
    title:" sector 117",
    image :" https://res.cloudinary.com/bzbcmzrn/image/upload/f_auto,q_auto,w_1200/v1784805536/5_ABADI_AT_SECTOR-117_GEZA_ntvfwi.jpg",
  },
  {
    title:"SECTOR-63_VILL_HAZRAT_WAZIDPUR_notf97",
    image :" https://res.cloudinary.com/bzbcmzrn/image/upload/f_auto,q_auto,w_1200/v1784805532/5_ABADI_AT_SECTOR-117_5_ABADI_AT_SECTOR-63_VILL_HAZRAT_WAZIDPUR_notf97.jpg",
  },
  {
    title:" sector 45",
    image :" https://res.cloudinary.com/bzbcmzrn/image/upload/f_auto,q_auto,w_1200/v1784805527/5_ABADI_AT_SECTOR-45_VILL._SADERPUR_izjihw.jpg",
  },
  {
    title:" Sector 164",
    image:"https://res.cloudinary.com/bzbcmzrn/image/upload/f_auto,q_auto,w_1200/v1784890561/SECTOR-164_lzl4ce.png",
  }
  ,
  {
    title:" Sector 153",
    image:"https://res.cloudinary.com/bzbcmzrn/image/upload/f_auto,q_auto,w_1200/v1784890560/SECTOR-153_xzy1bu.png",
  }
  ,
  {
    title:" sector 151",
    image:"https://res.cloudinary.com/bzbcmzrn/image/upload/f_auto,q_auto,w_1200/v1784890559/SECTOR-151_NEW_PLOTS_vjr7u9.png",
  }
  
  ,
  {
    title:" sector 150",
    image:"https://res.cloudinary.com/bzbcmzrn/image/upload/f_auto,q_auto,w_1200/v1784890559/SECTOR-150_d0t1dr.png",
  }
  ,
  {
    title:" Sector 151",
    image:" https://res.cloudinary.com/bzbcmzrn/image/upload/f_auto,q_auto,w_1200/v1784890559/SECTOR-151_LATEST_o5qsi1.png",
  }
  ,
  {
    title:" sector 150",
    image:"https://res.cloudinary.com/bzbcmzrn/image/upload/f_auto,q_auto,w_1200/v1784890557/SECTOR-150.NEW_biascf.png",
  }
  ,
  {
    title:" sector 135",
    image:"https://res.cloudinary.com/bzbcmzrn/image/upload/f_auto,q_auto,w_1200/v1784890556/SECTOR-135_vhefcj.png",
  }
  ,
  {
    title:" sector 132",
    image:" https://res.cloudinary.com/bzbcmzrn/image/upload/f_auto,q_auto,w_1200/v1784890556/SECTOR-132_SECTOR-134_zk6zaf.png",
  }
  ,
  {
    title:" sector 126",
    image:" https://res.cloudinary.com/bzbcmzrn/image/upload/f_auto,q_auto,w_1200/v1784890556/SECTOR-126_SECTOR-127_xebqvo.png",
  }
  ,
  {
    title:" Sector 145",
    image:" https://res.cloudinary.com/bzbcmzrn/image/upload/f_auto,q_auto,w_1200/v1784890555/SECTOR-145_xjifsn.png",
  }
  ,
  {
    title:" sector 80 & 81",
    image:"https://res.cloudinary.com/bzbcmzrn/image/upload/f_auto,q_auto,w_1200/v1784890554/SECTOR-80_81_ty6ztm.png",
  }
  ,
  { 
    title:" Sector 105",
    image:"https://res.cloudinary.com/bzbcmzrn/image/upload/f_auto,q_auto,w_1200/v1784890549/SECTOR_-105_SECTOR_-106_yerr8n.png",
  }
  ,
  {
    title:" sector 136",
    image:"https://res.cloudinary.com/bzbcmzrn/image/upload/f_auto,q_auto,w_1200/v1784890548/SECTOR_-136_137_hppnzs.png",
  }
  ,
  {
    title:" sector 112 ",
    image:" https://res.cloudinary.com/bzbcmzrn/image/upload/f_auto,q_auto,w_1200/v1784890547/SECTOR_-112_113_115_116_117_118_sqghlm.png",
  },
  {
    title:" sector 108",
    image:"https://res.cloudinary.com/bzbcmzrn/image/upload/f_auto,q_auto,w_1200/v1784890546/SECTOR_-108_knfzvj.png"
  }
  ,
  {
    title:" sector 93B",
    image:" https://res.cloudinary.com/bzbcmzrn/image/upload/f_auto,q_auto,w_1200/v1784890546/SECTOR_-93B_enhra9.png"
  },
  {
    title:" Sector 100",
    image:" https://res.cloudinary.com/bzbcmzrn/image/upload/f_auto,q_auto,w_1200/v1784890544/SECTOR_-100_y6aqrq.png"
  },
  {
    title:" Sector 94",
    image:" https://res.cloudinary.com/bzbcmzrn/image/upload/f_auto,q_auto,w_1200/v1784890541/SECTOR_-_94_124_SECTOR_-96_97_98_j5kezt.png"
  },
  {
    title:" Sector 93",
    image:"https://res.cloudinary.com/bzbcmzrn/image/upload/f_auto,q_auto,w_1200/v1784890541/SECTOR_-99_khc2jg.png"
  },
  { 
    title:" Sector 69",
    image:"https://res.cloudinary.com/bzbcmzrn/image/upload/f_auto,q_auto,w_1200/v1784890539/SECTOR-_69._uzgqg3.png"
  },
  {
    title:" Sector 63",
    image:"https://res.cloudinary.com/bzbcmzrn/image/upload/f_auto,q_auto,w_1200/v1784890539/SECTOR-_63_DIVIDION_OF_PLOT_NO.A1_EARMARKED_ELECTRONIC_CITY_mqu6zp.png"
  },
  {
    title:"Sector 93A",
    image:"https://res.cloudinary.com/bzbcmzrn/image/upload/f_auto,q_auto,w_1200/v1784890535/SECTOR_-_87_SECTOR_-_88_umkjsw.png"
  },
  {
    title:" Sector 92",
    image:" https://res.cloudinary.com/bzbcmzrn/image/upload/f_auto,q_auto,w_1200/v1784890535/SECTOR_-_92_SECTOR_-_93_nyv4uf.png"
  },
  {
    title:" Sector 82",
    image:" https://res.cloudinary.com/bzbcmzrn/image/upload/f_auto,q_auto,w_1200/v1784890534/SECTOR_-_82_SECTOR_-_83_t1oqce.png"
  },
  {
    title:" Sector 89",
    image:" https://res.cloudinary.com/bzbcmzrn/image/upload/f_auto,q_auto,w_1200/v1784890534/SECTOR_-_89_SECTOR_-_90_ergsfz.png"
  },
  {
    title:" Sector 80",
    image:" https://res.cloudinary.com/bzbcmzrn/image/upload/f_auto,q_auto,w_1200/v1784890533/SECTOR_-_80_81._j3jcad.png"
  },
  { 
    title:" Sector 84",
    image:" https://res.cloudinary.com/bzbcmzrn/image/upload/f_auto,q_auto,w_1200/v1784890532/SECTOR_-_84_SECTOR_-_85_lheri4.png"
  },
  {
    title:" Sector 77",
    image:" https://res.cloudinary.com/bzbcmzrn/image/upload/f_auto,q_auto,w_1200/v1784890529/SECTOR_-_77_SECTOR_-_78_ekffqv.png"
  },
  { 
    title:" Sector 73",
    image:"https://res.cloudinary.com/bzbcmzrn/image/upload/f_auto,q_auto,w_1200/v1784890528/SECTOR_-_73_SECTOR_-_74_jmyflm.png"
  },
  {
    title:" Sector 75",
    image:" https://res.cloudinary.com/bzbcmzrn/image/upload/f_auto,q_auto,w_1200/v1784890527/SECTOR_-_75_SECTOR_-_76_l2yiqc.png"
  },
  {
    title:" Sector 72",
    image:"https://res.cloudinary.com/bzbcmzrn/image/upload/f_auto,q_auto,w_1200/v1784890527/SECTOR_-_72_hg1zy7.png"
  },
  {
    title:" Sector 71",
    image:"https://res.cloudinary.com/bzbcmzrn/image/upload/f_auto,q_auto,w_1200/v1784890526/SECTOR_-_71_uwm7xd.png"
  },
  {
    title:" Sector 70",
    image:" https://res.cloudinary.com/bzbcmzrn/image/upload/f_auto,q_auto,w_1200/v1784890524/SECTOR_-_70_mnppvf.png"
  },
  {
    title:" Sector 67",
    image:"https://res.cloudinary.com/bzbcmzrn/image/upload/f_auto,q_auto,w_1200/v1784890524/SECTOR_-_67_SECTOR_-_68_mnpabq.png"
  },
  {
    title:" Sector 63,64",
    image:"https://res.cloudinary.com/bzbcmzrn/image/upload/f_auto,q_auto,w_1200/v1784890522/SECTOR_-_63_64_65_mmwvae.png"
  },
  {
    title:" Sector 62",
    image:" https://res.cloudinary.com/bzbcmzrn/image/upload/f_auto,q_auto,w_1200/v1784890521/SECTOR_-_62_qgaigh.png"
  },
  {
    title:" Sector 61",
    image:"https://res.cloudinary.com/bzbcmzrn/image/upload/f_auto,q_auto,w_1200/v1784890519/SECTOR_-_61_lvracc.png"
  },
  {
    title:" Sector 57",
    image:"https://res.cloudinary.com/bzbcmzrn/image/upload/f_auto,q_auto,w_1200/v1784890516/SECTOR_-_57_SECTOR_-_58_viqh9q.png"
  },
  {
    title:" Sector 56",
    image:" https://res.cloudinary.com/bzbcmzrn/image/upload/f_auto,q_auto,w_1200/v1784890514/SECTOR_-_56_lo0x50.png"
  },
  {
    title:"Sector 55 ",
    image:"https://res.cloudinary.com/bzbcmzrn/image/upload/f_auto,q_auto,w_1200/v1784890512/SECTOR_-_55_kuqopm.png"
  },
  {
    title:" Sector 52",
    image:"https://res.cloudinary.com/bzbcmzrn/image/upload/f_auto,q_auto,w_1200/v1784890512/SECTOR_-_52_xk4pzh.png"
  },
  {
    title:" Sector 53",
    image:"https://res.cloudinary.com/bzbcmzrn/image/upload/f_auto,q_auto,w_1200/v1784890511/SECTOR_-_53_mjquql.png"
  },
  { 
    title:"Sector 51",
    image:" https://res.cloudinary.com/bzbcmzrn/image/upload/f_auto,q_auto,w_1200/v1784890511/SECTOR_-_51_PART-II_mj4q1b.png"
  },
  {
    title:" Sector 50",
    image:"https://res.cloudinary.com/bzbcmzrn/image/upload/f_auto,q_auto,w_1200/v1784890510/SECTOR_-_50_hoyg7m.png"
  },
  {
    title:" Sector 49",
    image:"https://res.cloudinary.com/bzbcmzrn/image/upload/f_auto,q_auto,w_1200/v1784890507/SECTOR_-_49_eohwnd.png"
  },
  {
    title:" Sector 48",
    image:"https://res.cloudinary.com/bzbcmzrn/image/upload/f_auto,q_auto,w_1200/v1784890503/SECTOR_-_48._vtzyss.png"
  },
  {
    title:" Sector 47",
    image:" https://res.cloudinary.com/bzbcmzrn/image/upload/f_auto,q_auto,w_1200/v1784890503/SECTOR_-_47_dsu020.png"
  },
  {
    title:" Sector 46",
    image:"https://res.cloudinary.com/bzbcmzrn/image/upload/f_auto,q_auto,w_1200/v1784890503/SECTOR_-_46_vcex8h.png"
  },
  {
    title:" Sector 44",
    image:"https://res.cloudinary.com/bzbcmzrn/image/upload/f_auto,q_auto,w_1200/v1784890502/SECTOR_-_44_PART_REVISED_j8kgg3.png"
  },
  {
    title:"Sector 45",
    image:"https://res.cloudinary.com/bzbcmzrn/image/upload/f_auto,q_auto,w_1200/v1784890502/SECTOR_-_45_a5jz7g.png"
  },
  {
    title:" Sector 122",
    image:"https://res.cloudinary.com/bzbcmzrn/image/upload/f_auto,q_auto,w_1200/v1784890501/5_ABADI_SECTOR-122_hjziby.png"
  },
  {
    title:" Sector 104",
    image:"https://res.cloudinary.com/bzbcmzrn/image/upload/f_auto,q_auto,w_1200/v1784890498/5_ABADI_SECTOR-104_VILL.HAZIPUR_5_ABADI_SHAHDARA_okjmqo.png"
  },
  {
    title:"SECTOR-122_PARTHLA_KHANJARPUR",
    image:"https://res.cloudinary.com/bzbcmzrn/image/upload/f_auto,q_auto,w_1200/v1784890498/5_ABADI_AT_SECTOR-122_PARTHLA_KHANJARPUR_otbdbu.png"
  },
  {
    title:"_SECTOR-145_PART-1",
    image:"https://res.cloudinary.com/bzbcmzrn/image/upload/f_auto,q_auto,w_1200/v1784890497/5_ABADI_AT_SECTOR-145_PART-1._j5bhps.png"
  },
  {
    title:"SECTOR-45_BAROLA_5",
    image:"https://res.cloudinary.com/bzbcmzrn/image/upload/f_auto,q_auto,w_1200/v1784890497/5_ABADI_SECTOR-45_BAROLA_5_ABADI_SECTOR-45_SADARPUR_mzythp.png"
  },
  {
    title:"SEC-71_OF_VILL._BASAI",
    image:"https://res.cloudinary.com/bzbcmzrn/image/upload/f_auto,q_auto,w_1200/v1784890496/5_ABADI_AT_SEC-71_OF_VILL._BASAI_KONDALI_ROHILAPUR._ry1dzt.png"
  }
  ,
  {
    title:"SECTOR-121_VILL_BADOLI",
    image:"https://res.cloudinary.com/bzbcmzrn/image/upload/f_auto,q_auto,w_1200/v1784890494/5_ABADI_AT_SECTOR-121_VILL_BADOLI_5_ABADI_AT_SECTOR-121_PARTHLA_iluqb2.png"
  },
  {
    title:" SECTOR-116",
    image:"https://res.cloudinary.com/bzbcmzrn/image/upload/f_auto,q_auto,w_1200/v1784890494/5_ABADI_AT_SECTOR-116_apgvzz.png"
  }
  ,
  {
    title:"SECTOR-63A",
    image:" https://res.cloudinary.com/bzbcmzrn/image/upload/f_auto,q_auto,w_1200/v1784890494/5_ABADI_AT_SECTOR-63A_ovg4hl.png"
  },
  {
    title:"SECTOR-71_ASUDULAPUR",
    image:"https://res.cloudinary.com/bzbcmzrn/image/upload/f_auto,q_auto,w_1200/v1784890493/5_ABADI_AT_SECTOR-71_ASUDULAPUR_WAZIDPUR_mi6rt9.png"
  },
  {
    title:"SECTOR-122",
    image:"https://res.cloudinary.com/bzbcmzrn/image/upload/f_auto,q_auto,w_1200/v1784890493/5_ABADI_AT_SECTOR-122._hhzyzx.png"
  },
 
];

export default function Noida() {
   const [selectedMap, setSelectedMap] = useState(null);
  
  
  
   

return (
  <section className="bg-white py-16 px-6 text-black">
    <div className="mx-auto mt-10 max-w-7xl">
      <h2 className="mb-12 text-center text-5xl font-bold">
        Noida <span className="text-red-500">Sector</span> Maps
      </h2>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {noidaImages.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -10 }}
            transition={{ duration: 0.35 }}
            className="group overflow-hidden rounded-3xl bg-white shadow-xl transition-all duration-500 hover:shadow-2xl"
          >
            {/* Image */}
            <div className="relative overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                decoding="async"
                className="h-56 w-auto object-cover transition duration-700 "
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-black shadow-lg">
                ⭐ Premium
              </span>

              <div className="absolute bottom-0 left-0 w-full p-5">
                <h3 className="text-2xl font-bold text-white">
                  {item.title}
                </h3>

                <p className="text-sm text-white/80">
                  Premium Location • Noida
                </p>
              </div>
            </div>

            {/* Bottom */}
            <div className="flex items-center  bg-black/95 justify-between p-5">
              <div>
                <p className="text-sm text-white">
                  Explore Details
                </p>

                
              </div>

              <button
                onClick={() => setSelectedMap(item)}
                className="rounded-full bg-gradient-to-r from-red-500 to-red-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:scale-105"
              >
                View →
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Popup */}

      <AnimatePresence>
        {selectedMap && (
          <motion.div
            className="fixed inset-0 z-50  mt-14 flex items-center justify-center bg-black/90 p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedMap(null)}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-7xl overflow-hidden rounded-3xl bg-white"
            >
              <button
                onClick={() => setSelectedMap(null)}
                className="absolute right-5 top-5 z-20 rounded-full bg-red-600 p-3 text-white"
              >
                <X size={22} />
              </button>

              <img
                src={selectedMap.image}
                alt={selectedMap.title}
                className="h-[85vh] w-full object-contain bg-black"
              />

              <div className="p-8">
                <h2 className="text-4xl font-bold">
                  {selectedMap.title}
                </h2>

                <p className="mt-2 text-gray-600">
                  Premium Noida Authority Map
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  </section>
);
  

}