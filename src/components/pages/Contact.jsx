
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
} from "lucide-react";
import { useState } from "react";


export default function Contact() {

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });


  /* =========================================
     HANDLE INPUT CHANGE
  ========================================= */

  const handleChange = (e) => {

    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));

  };


  /* =========================================
     HANDLE FORM SUBMIT
  ========================================= */

  const handleSubmit = async (e) => {

    e.preventDefault();

    console.log("Submit Clicked");
    console.log(formData);

    try {

      const res = await fetch(
        "https://chhhabra-2.onrender.com/api/contact",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify(formData),
        }
      );


      console.log("Status:", res.status);


      const data = await res.json();

      console.log(data);


      if (res.ok) {

        alert("Message Sent Successfully");


        setFormData({
          name: "",
          phone: "",
          email: "",
          subject: "",
          message: "",
        });

      } else {

        alert(
          data.detail ||
          "Something went wrong"
        );

      }

    } catch (err) {

      console.error(err);

      alert("Server Error");

    }

  };


  return (

   <section
  className="
    relative
    top-20
    min-h-screen
    flex
    items-center
    justify-center
    py-20
    px-4
    overflow-hidden
  "
>
  {/* =========================================
      BACKGROUND GLOW
  ========================================= */}
  <div
    className="
      absolute
      top-10
      left-1/2
      -translate-x-1/2
      w-[600px]
      h-[400px]
      bg-red-500/20
      rounded-full
      blur-[120px]
      pointer-events-none
    "
  />
  <div
    className="
      absolute
      bottom-0
      right-0
      w-[400px]
      h-[300px]
      bg-orange-400/10
      rounded-full
      blur-[100px]
      pointer-events-none
    "
  />

  {/* =========================================
      CONTACT CONTAINER
  ========================================= */}
  <motion.div
    initial={{ opacity: 0, y: 80 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
    className="
      relative
      z-10
      w-full
      max-w-6xl
      grid
      lg:grid-cols-2
      overflow-hidden
      rounded-3xl
      border
      border-white/60
      bg-white/70
      backdrop-blur-2xl
      shadow-[0_20px_60px_-15px_rgba(239,68,68,0.25)]
    "
  >
    {/* =========================================
        LEFT SIDE
    ========================================= */}
    <div className="p-6 sm:p-10 lg:p-12 flex flex-col justify-center">
      {/* EYEBROW */}
      <span
        className="
          inline-flex
          items-center
          gap-2
          w-fit
          text-xs
          font-semibold
          tracking-widest
          uppercase
          text-red-500
          bg-red-500/10
          border
          border-red-500/20
          rounded-full
          px-4
          py-1.5
          mb-5
        "
      >
        Get In Touch
      </span>

      {/* TITLE */}
      <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
        Let's <span className="text-red-500">Talk</span>
      </h2>

      {/* DESCRIPTION */}
      <p className="mt-5 text-black/60 text-lg leading-8">
        Have a question or looking for properties? Fill out the form and
        our team will contact you shortly.
      </p>

      {/* =========================================
          CONTACT DETAILS
      ========================================= */}
      <div className="mt-10 space-y-5">
        {/* PHONE */}
        <motion.div whileHover={{ x: 8 }} className="flex items-center gap-4 group">
          <div
            className="
              rounded-2xl
              bg-red-500/10
              border
              border-red-400/20
              p-3.5
              shadow-sm
              group-hover:bg-red-500
              group-hover:border-red-500
              transition-all
              duration-300
            "
          >
            <Phone
              className="text-red-500 group-hover:text-white transition-colors duration-300"
              size={20}
            />
          </div>
          <span className="text-black/85 font-semibold">+91 6262626462</span>
        </motion.div>

        {/* EMAIL */}
        <motion.div whileHover={{ x: 8 }} className="flex items-center gap-4 group">
          <div
            className="
              rounded-2xl
              bg-red-500/10
              border
              border-red-400/20
              p-3.5
              shadow-sm
              group-hover:bg-red-500
              group-hover:border-red-500
              transition-all
              duration-300
            "
          >
            <Mail
              className="text-red-500 group-hover:text-white transition-colors duration-300"
              size={20}
            />
          </div>
          <span className="text-black/85 font-semibold">info@cpgroup.in</span>
        </motion.div>

        {/* ADDRESS */}
        <motion.div whileHover={{ x: 8 }} className="flex items-start gap-4 group">
          <div
            className="
              rounded-2xl
              bg-red-500/10
              border
              border-red-400/20
              p-3.5
              shrink-0
              shadow-sm
              group-hover:bg-red-500
              group-hover:border-red-500
              transition-all
              duration-300
            "
          >
            <MapPin
              className="text-red-500 group-hover:text-white transition-colors duration-300"
              size={20}
            />
          </div>
          <span className="text-black/85 font-semibold leading-7">
            204, S L Tower, Alpha-I Commercial Belt, Greater Noida, Uttar
            Pradesh 201308
          </span>
        </motion.div>
      </div>
    </div>

    {/* =========================================
        RIGHT SIDE — FORM
    ========================================= */}
    <div
      className="
        p-6
        sm:p-10
        lg:p-12
        bg-gradient-to-br
        from-gray-900
        to-black
        border-t
        lg:border-t-0
        lg:border-l
        border-red-500/10
      "
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* NAME */}
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Full Name"
          className="
            w-full
            rounded-xl
            border
            border-white/10
            bg-white/5
            px-5
            py-4
            text-white
            placeholder-white/35
            outline-none
            transition
            focus:border-red-500
            focus:ring-2
            focus:ring-red-500/30
            hover:border-white/20
          "
          required
        />

        {/* PHONE */}
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Phone Number"
          className="
            w-full
            rounded-xl
            border
            border-white/10
            bg-white/5
            px-5
            py-4
            text-white
            placeholder-white/35
            outline-none
            transition
            focus:border-red-500
            focus:ring-2
            focus:ring-red-500/30
            hover:border-white/20
          "
          required
        />

        {/* EMAIL */}
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email Address"
          className="
            w-full
            rounded-xl
            border
            border-white/10
            bg-white/5
            px-5
            py-4
            text-white
            placeholder-white/35
            outline-none
            transition
            focus:border-red-500
            focus:ring-2
            focus:ring-red-500/30
            hover:border-white/20
          "
          required
        />

        {/* SUBJECT */}
        <input
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          placeholder="Subject"
          className="
            w-full
            rounded-xl
            border
            border-white/10
            bg-white/5
            px-5
            py-4
            text-white
            placeholder-white/35
            outline-none
            transition
            focus:border-red-500
            focus:ring-2
            focus:ring-red-500/30
            hover:border-white/20
          "
          required
        />

        {/* MESSAGE */}
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          placeholder="Write your message..."
          className="
            w-full
            rounded-xl
            border
            border-white/10
            bg-white/5
            px-5
            py-4
            text-white
            placeholder-white/35
            outline-none
            resize-none
            transition
            focus:border-red-500
            focus:ring-2
            focus:ring-red-500/30
            hover:border-white/20
          "
          required
        />

        {/* =========================================
            SEND BUTTON
        ========================================= */}
        <motion.button
          type="submit"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.97 }}
          className="
            w-full
            flex
            items-center
            justify-center
            gap-2
            rounded-xl
            bg-gradient-to-r
            from-[#DF1221]
            to-[#BF101C]
            px-6
            py-4
            font-semibold
            text-white
            shadow-[0_10px_30px_-5px_rgba(239,68,68,0.5)]
            transition-all
            duration-300
            hover:shadow-[0_15px_40px_-5px_rgba(239,68,68,0.7)]
          "
        >
          <Send size={18} />
          Send Message
        </motion.button>
      </form>
    </div>
  </motion.div>
</section>
  );
}
