 import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
const greateNoida=[
    {
        title:"Sector 20",
        image:"https://res.cloudinary.com/bzbcmzrn/image/upload/f_auto,q_auto,w_1200/v1784806936/SECTOR-20_POCKET-A_k6rxaz.jpg"
    },
    {
        title:" Sector 18",
        image:"https://res.cloudinary.com/bzbcmzrn/image/upload/f_auto,q_auto,w_1200/v1784806932/SECTOR-18_POCKET-9B_yydym4.jpg"
    }
    ,
    {
        title:"SECTOR-18_POCKET-8",
        image:"https://res.cloudinary.com/bzbcmzrn/image/upload/f_auto,q_auto,w_1200/v1784806927/SECTOR-18_POCKET-8_mbuubx.jpg"
    }
    ,
    {
        title:"SECTOR-18_POCKET7E",
        image:"https://res.cloudinary.com/bzbcmzrn/image/upload/f_auto,q_auto,w_1200/v1784806927/SECTOR-18_POCKET-7E_s1p6zm.jpg"
    }
    ,
    {
        title:" Sector-18_ Pocket-7b",
        image:"https://res.cloudinary.com/bzbcmzrn/image/upload/f_auto,q_auto,w_1200/v1784806924/SECTOR-18_POCKET-7B_7F_psxopn.jpg"
    }
    ,
    {
        title:"Sector 24",
        image:"https://res.cloudinary.com/bzbcmzrn/image/upload/f_auto,q_auto,w_1200/v1784806920/SECTOR-_24_mb58i7.jpg"
    }
    ,
    {
        title:" Sector 18",
        image:"https://res.cloudinary.com/bzbcmzrn/image/upload/f_auto,q_auto,w_1200/v1784806917/SECTOR-18_POCKET-1B_hhrcci.jpg"
    }
    ,
    {
        title:" Sector 24",
        image:"https://res.cloudinary.com/bzbcmzrn/image/upload/f_auto,q_auto,w_1200/v1784806917/SECTOR-_24A_gmxtfu.jpg"
    }
    ,
    {
        title:" Sector 22E",
        image:"https://res.cloudinary.com/bzbcmzrn/image/upload/f_auto,q_auto,w_1200/v1784806910/SECTOR-_22E_hfnasq.jpg"
    }
    ,
    {
        title:" Sector 21",
        image:"https://res.cloudinary.com/bzbcmzrn/image/upload/f_auto,q_auto,w_1200/v1784806908/SECTOR-_21_becukh.jpg"
    }
    ,
    {
        title:" sector 17A",
        image:"https://res.cloudinary.com/bzbcmzrn/image/upload/f_auto,q_auto,w_1200/v1784806906/SECTOR-_17A_vej65j.jpg"
    }
    ,
    {
        title:"NILONI_SHAHPUR_BLOCK",
        image:"https://res.cloudinary.com/bzbcmzrn/image/upload/f_auto,q_auto,w_1200/v1784806890/7_VILLAGE-_NILONI_SHAHPUR_BLOCK-B_s56mvq.jpg"
    }
    ,
    {
        title:"RAMPUR_BANGAR_SADAR",
        image:"https://res.cloudinary.com/bzbcmzrn/image/upload/f_auto,q_auto,w_1200/v1784806890/7_VILLAGE-_RAMPUR_BANGAR_SADAR_jwrmbr.jpg"
    }
    ,
    {
        title:"MIRJAPUR_SECTOR-18_PCKT-9",
        image:"https://res.cloudinary.com/bzbcmzrn/image/upload/f_auto,q_auto,w_1200/v1784806880/7_VILLAGE-_MIRJAPUR_SECTOR-18_PCKT-9_hgjb00.jpg"
    }
    ,
    {
        title:" Sector-127",
        image:"https://res.cloudinary.com/bzbcmzrn/image/upload/f_auto,q_auto,w_1200/v1784805601/SECTOR_-127_NOIDA_CHANGES_uinf0k.jpg"
    }
    ,
    {
        title:" Sector 155",
        image:"https://res.cloudinary.com/bzbcmzrn/image/upload/f_auto,q_auto,w_1200/v1784805601/SECTOR-_155_y0fowy.jpg"
    },
    {
      title:" Zeta-1",
      image:"https://res.cloudinary.com/bzbcmzrn/image/upload/v1784890802/ZETA_1_qnhy1d.png",
    }
    ,
    {
      title:" surajpur site-C",
      image:"https://res.cloudinary.com/bzbcmzrn/image/upload/v1784890801/Untitled_design_24_sitvau.png",
    }
    ,
    {
      title:"Toy_city",
      image:"https://res.cloudinary.com/bzbcmzrn/image/upload/v1784890798/TOY_CITY_M.U.P_2_yv1prp.png",
    },
    {
      title:"TECH_ZONE_AT_GREATER_NOIDA",
      image:"https://res.cloudinary.com/bzbcmzrn/image/upload/v1784890797/TECH_ZONE_AT_GREATER_NOIDA_q4pibf.png",
    },
    {
      title:"TECH_ZONE_4",
      image:"https://res.cloudinary.com/bzbcmzrn/image/upload/v1784890797/TECH_ZONE_4_v51fso.png",
    },
    {
      title:"SURAJPUR-SITE-IV_",
      image:"https://res.cloudinary.com/bzbcmzrn/image/upload/v1784890796/SURAJPUR-SITE-IV_y9axjx.png",
    },
    {
      title:"SURAJPUR-SITE-C_RESIDENTIAL",
      image:"https://res.cloudinary.com/bzbcmzrn/image/upload/v1784890795/SURAJPUR-SITE-C_RESIDENTIAL_owf47t.png",
    },
    {
      title:"SURAJPUR-SITE-C_INDUSTRIAL",
      image:"https://res.cloudinary.com/bzbcmzrn/image/upload/v1784890794/SURAJPUR-SITE-C_INDUSTRIAL._yb3ljr.png",
    },
    {
      title:"SURAJPUR-SITE-B",
      image:"https://res.cloudinary.com/bzbcmzrn/image/upload/v1784890794/SURAJPUR-SITE-B_p5jwqy.png",
    },
    {
      title:"SIGMA-IV",
      image:"https://res.cloudinary.com/bzbcmzrn/image/upload/v1784890793/SIGMA-IV_h1nyfp.png",
    },
    {
      title:"SIGMA-III",
      image:"https://res.cloudinary.com/bzbcmzrn/image/upload/v1784890793/SIGMA-III_mrbljs.png",
    },
    {
      title:"SURAJPUR_SITE_5",
      image:"https://res.cloudinary.com/bzbcmzrn/image/upload/v1784890793/SURAJPUR_SITE_5_exxs8s.png",
    },
    {
      title:"SITE-V_A-2",
      image:"https://res.cloudinary.com/bzbcmzrn/image/upload/v1784890792/SITE-V_A-2_nj6gzo.png",
    },
    {
      title:"SIGMA-1_SECTOR-42",
      image:"https://res.cloudinary.com/bzbcmzrn/image/upload/v1784890790/SIGMA-1_SECTOR-42_qzbrr0.png",
    },
    {
      title:" SIGMA-II",
      image:"https://res.cloudinary.com/bzbcmzrn/image/upload/v1784890790/SIGMA-II_xpvejc.png",
    },
    {
      title:" Sector 37",
      image:"https://res.cloudinary.com/bzbcmzrn/image/upload/v1784890789/SECTOR-37._nhrjpw.png",
    },
    {
      title:"Sector-16C",
      image:"https://res.cloudinary.com/bzbcmzrn/image/upload/v1784890788/SECTOR-16C_d54djv.png",
    },
    {
      title:" Sector 36",
      image:"https://res.cloudinary.com/bzbcmzrn/image/upload/v1784890788/SECTOR-36_irkzw2.png",
    },
    {
      title:"Sector 31",
      image:"https://res.cloudinary.com/bzbcmzrn/image/upload/v1784890788/SECTOR-31_SWARN_NAGRI_sqotnk.png",
    },
    {
      title:" Sector-16B",
      image:"https://res.cloudinary.com/bzbcmzrn/image/upload/v1784890787/SECTOR-16B_aab1cz.png",
    },
    {
      title:"Sector-3",
      image:"https://res.cloudinary.com/bzbcmzrn/image/upload/v1784890787/SECTOR-3_guaacf.png",
    },
    {
      title:" Sector -2",
      image:"https://res.cloudinary.com/bzbcmzrn/image/upload/v1784890786/SECTOR-2._lmvmax.png",
    },
    {
      title:" Sector 10 &12",
      image:"https://res.cloudinary.com/bzbcmzrn/image/upload/v1784890785/SECTOR-10_12_wqb56a.png",
    },
    {
      title:" Sector 16B",
      image:"https://res.cloudinary.com/bzbcmzrn/image/upload/v1784890785/SECTOR-16B_1_gzwpjx.png",
    },
    {
      title:" Sector 1",
      image:"https://res.cloudinary.com/bzbcmzrn/image/upload/v1784890783/SECTOR-1_ecyqgy.png",
    },
    {
      title:"SECTOR_XU1",
      image:"https://res.cloudinary.com/bzbcmzrn/image/upload/v1784890782/SECTOR_XU1_i6jgvb.png",
    },
    {
      title:"Sector_XU_2",
      image:"https://res.cloudinary.com/bzbcmzrn/image/upload/v1784890781/Sector_XU_2_zuecxz.png",
    },
    {
      title:"Sector P-3",
      image:"https://res.cloudinary.com/bzbcmzrn/image/upload/v1784890781/POCKET-P-3_cakh2c.png",
    },
    {
      title:"SECTOR_XU_3",
      image:"https://res.cloudinary.com/bzbcmzrn/image/upload/v1784890781/SECTOR_XU_3_a1302k.png",
    },
    {
      title:"PI-I_PI-II",
      image:"https://res.cloudinary.com/bzbcmzrn/image/upload/v1784890779/PI-I_PI-II_xkp6b6.png",
    },
    {
      title:"RESIDENTIAL_AREA_SIKANDRABAD_",
      image:"https://res.cloudinary.com/bzbcmzrn/image/upload/v1784890779/RESIDENTIAL_AREA_SIKANDRABAD_ofgqvx.png",
    },
    {
      title:"POCKET-P4",
      image:"https://res.cloudinary.com/bzbcmzrn/image/upload/v1784890779/POCKET-P4_livjdq.png",
    },
    {
      title:"PHASE-II_RESIDENTIAL",
      image:"https://res.cloudinary.com/bzbcmzrn/image/upload/v1784890776/PHASE-II_RESIDENTIAL_btgdqu.png",
    },
    {
      title:"OMICRON-III",
      image:"https://res.cloudinary.com/bzbcmzrn/image/upload/v1784890776/OMICRON-III_casmju.png",
    },
    {
      title:"OMICRON-III_32MTR",
      image:"https://res.cloudinary.com/bzbcmzrn/image/upload/v1784890775/OMICRON-III_32MTR_qfqg26.png",
    },
    {
      title:"MUP-I",
      image:"https://res.cloudinary.com/bzbcmzrn/image/upload/v1784890774/MUP-I._weol02.png",
    },
    {
      title:"OMICRON-II",
      image:"https://res.cloudinary.com/bzbcmzrn/image/upload/v1784890773/OMICRON-II_ph45og.png",
    },
    {
      title:"OMICRON-I",
      image:"https://res.cloudinary.com/bzbcmzrn/image/upload/v1784890773/OMICRON-I_gv3txl.png",
    },
    {
      title:"OMICRON-I_UDYOG_KENDRA",
      image:"https://res.cloudinary.com/bzbcmzrn/image/upload/v1784890772/OMICRON-I_UDYOG_KENDRA_vek06j.png",
    },
    {
      title:"NRI_CITY",
      image:"https://res.cloudinary.com/bzbcmzrn/image/upload/v1784890772/NRI_CITY_v8jbss.png",
    },
    {
      title:"MU-II",
      image:"https://res.cloudinary.com/bzbcmzrn/image/upload/v1784890770/MU-II_t2v4a1.png",
    },
    {
      title:"MU.",
      image:"https://res.cloudinary.com/bzbcmzrn/image/upload/v1784890769/MU._mlbmly.png",
    },
    {
      title:"MU-II_40MTR",
      image:"https://res.cloudinary.com/bzbcmzrn/image/upload/v1784890769/MU-II_40MTR_d2kz9z.png",
    },
    {
      title:"MU-I",
      image:"https://res.cloudinary.com/bzbcmzrn/image/upload/v1784890768/MU-I_pb9efp.png",
    },
    {
      title:"MP_NOIDA_EXTENSION_",
      image:"https://res.cloudinary.com/bzbcmzrn/image/upload/v1784890767/MP_NOIDA_EXTENSION_fkdpyi.png",
    },
    {
      title:"MP_GREATER_NOIDA",
      image:"https://res.cloudinary.com/bzbcmzrn/image/upload/v1784890765/MP_GREATER_NOIDA_na15fy.png",
    },
    {
      title:"MASOORI_GULAWATI.",
      image:"https://res.cloudinary.com/bzbcmzrn/image/upload/v1784890765/MASOORI_GULAWATI._dw28vl.png",
    },
    {
      title:"KP-III",
      image:"https://res.cloudinary.com/bzbcmzrn/image/upload/v1784890764/KP-III._gu95m4.png",
    },
    {
      title:"KP-V",
      image:"https://res.cloudinary.com/bzbcmzrn/image/upload/v1784890764/KP-V._edwx06.png",
    },
    {
      title:"K.P-II",
      image:"https://res.cloudinary.com/bzbcmzrn/image/upload/v1784890763/K.P-II._qjof4r.png",
    },
    {
      title:"INDUSTRIAL_AREA_SIKANDRABAD",
      image:"https://res.cloudinary.com/bzbcmzrn/image/upload/v1784890761/INDUSTRIAL_AREA_SIKANDRABAD_lqvsci.png",
    },
    {
      title:"GROUP_HOUSING_AT_SWARN_NAGR",
      image:"https://res.cloudinary.com/bzbcmzrn/image/upload/v1784890759/GROUP_HOUSING_AT_SWARN_NAGRI_bbibq4.png",
    },
    {
      title:"GOLF_LINK",
      image:"https://res.cloudinary.com/bzbcmzrn/image/upload/v1784890758/GOLF_LINK-II_cqglnw.png",
    }
    ,
    {
      title:"GREATER30_MTR._FLAT_AT_CHI-PH",
      image:"https://res.cloudinary.com/bzbcmzrn/image/upload/v1784890758/GREATER30_MTR._FLAT_AT_CHI-PHI_epr5zs.png",
    },
    {
      title:"GOLF_LINK-I_P-8",
      image:"https://res.cloudinary.com/bzbcmzrn/image/upload/v1784890757/GOLF_LINK-I_P-8_cnqn4b.png",
    },
    {
      title:"GAMMA-II.",
      image:"https://res.cloudinary.com/bzbcmzrn/image/upload/v1784890756/GAMMA-II._ylwojl.png",
    },
    {
      title:"GAMMA_I",
      image:"https://res.cloudinary.com/bzbcmzrn/image/upload/v1784890755/GAMMA-1_zywl0l.png",
    },
    {
      title:"ECOTECH-XII",
      image:"https://res.cloudinary.com/bzbcmzrn/image/upload/v1784890749/ECOTECH-XII_jj6pb0.png",
    },
    {
      title:"ECOTECH-XI",
      image:"https://res.cloudinary.com/bzbcmzrn/image/upload/v1784890749/ECOTECH-XI._fehkjc.png",
    },
    {
      title:"ETA-I",
      image:"https://res.cloudinary.com/bzbcmzrn/image/upload/v1784890749/ETA-I_rm1sxl.png",
    },
    {
      title:"ECOTECH-III",
      image:"https://res.cloudinary.com/bzbcmzrn/image/upload/v1784890748/ECOTECH-III_hyxw9u.png",
    },
    {
      title:"ECOTECH-I_EXTENSION-I",
      image:"https://res.cloudinary.com/bzbcmzrn/image/upload/v1784890742/ECOTECH-I_EXTENSION-I_c5z3em.png",
    },
    {
      title:"ECOTECH-II.",
      image:"https://res.cloudinary.com/bzbcmzrn/image/upload/v1784890741/ECOTECH-II._yy9nur.png",
    },
    {
      title:"ECOTECH-I",
      image:"https://res.cloudinary.com/bzbcmzrn/image/upload/v1784890741/ECOTECH-I._hbgek1.png",
    },
    {
      title:"ECOTECH-I_EXTENSION.",
      image:"https://res.cloudinary.com/bzbcmzrn/image/upload/v1784890740/ECOTECH-I_EXTENSION._xtjktd.png",
    },
    {
      title:"CHI-PHI_EXTENSION",
      image:"https://res.cloudinary.com/bzbcmzrn/image/upload/v1784890739/CHI-PHI_EXTENSION_hzuz2n.png",
    }
    ,
    {
      title:"DELTA-III",
      image:"https://res.cloudinary.com/bzbcmzrn/image/upload/v1784890739/DELTA-III._c8hh1r.png",
    }
    ,
    {
      title:"DELTA-II",
      image:"https://res.cloudinary.com/bzbcmzrn/image/upload/v1784890737/DELTA-II_ajsre2.png",
    }
    ,
    {
      title:" dELTA-I",
      image:"https://res.cloudinary.com/bzbcmzrn/image/upload/v1784890737/DELTA-I_nu1rg6.png",
    }
    ,
    {
      title:"ECOTECH-16.",
      image:"https://res.cloudinary.com/bzbcmzrn/image/upload/v1784890737/ECOTECH-16._rh0r6z.png",
    }
    ,
    {
      title:"BUILDER_SCHEME",
      image:"https://res.cloudinary.com/bzbcmzrn/image/upload/v1784890733/BUILDER_SCHEME_j3sq3t.png",
    },
    {
      title:"BZP_AREA",
      image:"https://res.cloudinary.com/bzbcmzrn/image/upload/v1784890731/BZP_AREA_poukoy.png"
    }
    ,
    {
      title:"BETA-II",
      image:"https://res.cloudinary.com/bzbcmzrn/image/upload/v1784890730/BETA-II._ui9stk.png"
    },
    {
      title:"BETA-I",
      image:"https://res.cloudinary.com/bzbcmzrn/image/upload/v1784890729/BETA-I_vvkp8x.png"
    },
    {
      title:"ALPHA-II",
      image:"https://res.cloudinary.com/bzbcmzrn/image/upload/v1784890726/ALPHA-II_sn21lr.png"
    },
    {
      title:"ALPHA-I",
      image:"https://res.cloudinary.com/bzbcmzrn/image/upload/v1784890725/ALPHA-I_jytlco.png"
    },
    {
      title:"ABADI_VILL._BIRONDI",
      image:"https://res.cloudinary.com/bzbcmzrn/image/upload/v1784890724/ABADI_VILL._BIRONDI_xba7on.png"
    },
    {
      title:"ABADI_VILL._AMINABAD_JALPURA",
      image:"https://res.cloudinary.com/bzbcmzrn/image/upload/v1784890722/ABADI_VILL._AMINABAD_JALPURA._latibq.png"
    }
    ,
    {
      title:"ABADI_AT_VILL._YAKUBPUR",
      image:"https://res.cloudinary.com/bzbcmzrn/image/upload/v1784890721/ABADI_AT_VILL._YAKUBPUR.jpg_oc5wev.png"
    }
    ,
    {
      title:"",
      image:""
    }
     ,
    {
      title:"ABADI_AT_VILL._TUSIYANA",
      image:"https://res.cloudinary.com/bzbcmzrn/image/upload/v1784890720/ABADI_AT_VILL._TUSIYANA._doo6bs.png"
    }
     ,
    {
      title:"ABADI_AT_VILL._TUGALPUR-HOLDON",
      image:"https://res.cloudinary.com/bzbcmzrn/image/upload/v1784890719/ABADI_AT_VILL._TUGALPUR-HOLDONA_h4mh1m.png"
    }
     ,
    {
      title:"ABADI_AT_VILL._SIRSA",
      image:"https://res.cloudinary.com/bzbcmzrn/image/upload/v1784890718/ABADI_AT_VILL._SIRSA_lf9m8x.png"
    }
    ,
    {
      title:"ABADI_AT_VILL._SIRSA",
      image:"https://res.cloudinary.com/bzbcmzrn/image/upload/v1784890717/ABADI_AT_VILL._SIRSA...jpg_tzrfxf.png"
    },
    {
      title:"ABADI_AT_VILL._SAKIPUR-47_1",
      image:"https://res.cloudinary.com/bzbcmzrn/image/upload/v1784890716/ABADI_AT_VILL._SAKIPUR-47_1_oi5fhw.png"
    },
    {
      title:"ABADI_AT_VILL._SAINI",
      image:"https://res.cloudinary.com/bzbcmzrn/image/upload/v1784890714/ABADI_AT_VILL._SAINI_t3xnrk.png"
    },
    {
      title:"ABADI_AT_VILL._RITHORE",
      image:"https://res.cloudinary.com/bzbcmzrn/image/upload/v1784890713/ABADI_AT_VILL._RITHORE.jpg_zh5tar.png"
    },
    {
      title:"ABADI_AT_VILL._RASULPUR_RA",
      image:"https://res.cloudinary.com/bzbcmzrn/image/upload/v1784890712/ABADI_AT_VILL._RASULPUR_RAI_AT_ZETA-I.jpg_aknday.png"
    },
    {
      title:"ABADI_AT_VILL._RAMPUR",
      image:"https://res.cloudinary.com/bzbcmzrn/image/upload/v1784890711/ABADI_AT_VILL._RAMPUR_eniwwd.png"
    },
    {
      title:"ABADI_AT_VILL._PATWARI.",
      image:"https://res.cloudinary.com/bzbcmzrn/image/upload/v1784890710/ABADI_AT_VILL._PATWARI.jpg_tg5woz.png"
    },
    {
      title:"ABADI_AT_VILL._MYCHA",
      image:"https://res.cloudinary.com/bzbcmzrn/image/upload/v1784890709/ABADI_AT_VILL._MYCHA_f8p5bg.png"
    },
    {
      title:"ABADI_AT_VILL._PALI",
      image:"https://res.cloudinary.com/bzbcmzrn/image/upload/v1784890709/ABADI_AT_VILL._PALI.jpg_bv67a2.png"
    },
    {
      title:"ABADI_AT_VILL._LUKSAR",
      image:"https://res.cloudinary.com/bzbcmzrn/image/upload/v1784890709/ABADI_AT_VILL._LUKSAR._jg6vq4.png"
    },
    {
      title:"ABADI_AT_VILL._KHODNA",
      image:"https://res.cloudinary.com/bzbcmzrn/image/upload/v1784890708/ABADI_AT_VILL._KHODNA_KHURD_unsu1c.png"
    },
    {
      title:"ABADI_AT_VILL._KHERPUR",
      image:"https://res.cloudinary.com/bzbcmzrn/image/upload/v1784890707/ABADI_AT_VILL._KHERPUR_phueaw.png"
    },
    
    {
      title:"ABADI_AT_VILL._KASNA",
      image:"https://res.cloudinary.com/bzbcmzrn/image/upload/v1784890706/ABADI_AT_VILL._KASNA_uzzsn1.png"
    },
   {
    title:"ABADI_AT_VILL._JUNPAT",
    image:"https://res.cloudinary.com/bzbcmzrn/image/upload/v1784890700/ABADI_AT_VILL._JUNPAT_imtjrm.png"
   }
   ,
   {
    title:"ABADI_AT_VILL._JAITPUR-",
    image:"https://res.cloudinary.com/bzbcmzrn/image/upload/v1784890699/ABADI_AT_VILL._JAITPUR-VAISHPUR_of24ij.png"
   }
   ,
   {
    title:"ABADI_AT_VILL._HABIBATPUR",
    image:"https://res.cloudinary.com/bzbcmzrn/image/upload/v1784890698/ABADI_AT_VILL._HABIBATPUR_vlqk8w.png"
   },
   {
    title:"ABADI_AT_VILL._GHARBHARA",
    image:"https://res.cloudinary.com/bzbcmzrn/image/upload/v1784890697/ABADI_AT_VILL._GHARBHARA_NIT_edcppu.png"
   },
   {
    title:"ABADI_AT_VILL._GAMMA-I",
    image:"https://res.cloudinary.com/bzbcmzrn/image/upload/v1784890697/ABADI_AT_VILL._GAMMA-I_cdygmx.png"
   },
   {
    title:"ABADI_AT_VILL._DHADA_uco5xy",
    image:"https://res.cloudinary.com/bzbcmzrn/image/upload/v1784890696/ABADI_AT_VILL._DHADA_uco5xy.png"
   },
   {
    title:"ABADI_AT_VILL._DABRA",
    image:"https://res.cloudinary.com/bzbcmzrn/image/upload/v1784890695/ABADI_AT_VILL._DABRA_b6gzix.png"
   },{
    title:"ABADI_AT_VILL._CHUHAR_PUR_",
    image:"https://res.cloudinary.com/bzbcmzrn/image/upload/v1784890694/ABADI_AT_VILL._CHUHAR_PUR_GHARBHARA_cyntxd.png"
   }
   ,{
    title:"6_ABADI_AT_VILL._SAINI",
    image:"https://res.cloudinary.com/bzbcmzrn/image/upload/v1784890693/6_ABADI_AT_VILL._SAINI_ullrdf.png"
   }



 ]
    
  
export default function GreateNoida() {
   const [selectedMap, setSelectedMap] = useState(null);
  
  
  
   

return (
  <section className="bg-white py-16 px-6 text-black">
    <div className="mx-auto mt-10 max-w-7xl">
      <h2 className="mb-12 text-center text-5xl font-bold">
         GreaterNoida <span className="text-red-500">Sector</span> Maps
      </h2>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {greateNoida.map((item, index) => (
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
                className="h-60 w-full object-cover overflow-hidden transition duration-700 "
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
            <div className="flex items-center justify-between p-5">
              <div>
                <p className="text-sm text-gray-500">
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