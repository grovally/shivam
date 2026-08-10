
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
        "http://127.0.0.1:8000/api/contact",
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
          top-20
          left-1/2
          -translate-x-1/2
          w-[500px]
          h-[300px]
          bg-red-500/10
          blur-[120px]
          rounded-full
          pointer-events-none
        "
      />


      {/* =========================================
          CONTACT CONTAINER
      ========================================= */}

      <motion.div

        initial={{
          opacity: 0,
          y: 80,
        }}

        whileInView={{
          opacity: 1,
          y: 0,
        }}

        viewport={{
          once: true,
        }}

        transition={{
          duration: 0.8,
        }}

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
          border-red-200/40

          bg-black/40

          backdrop-blur-xl

          shadow-[0_0_40px_rgba(239,68,68,0.08)]
        "
      >


        {/* =========================================
            LEFT SIDE
        ========================================= */}

        <div
          className="
            p-6
            sm:p-10
            lg:p-12
            flex
            flex-col
            justify-center
          "
        >

          {/* TITLE */}

          <h2
            className="
              text-4xl
              sm:text-5xl
              font-bold
              text-red-500
            "
          >
            Let's Talk
          </h2>


          {/* DESCRIPTION */}

          <p
            className="
              mt-5
              text-white/75
              text-lg
              leading-8
            "
          >
            Have a question or looking for properties?
            Fill out the form and our team will contact
            you shortly.
          </p>


          {/* =========================================
              CONTACT DETAILS
          ========================================= */}

          <div
            className="
              mt-10
              space-y-6
            "
          >


            {/* PHONE */}

            <motion.div
              whileHover={{
                x: 8,
              }}

              className="
                flex
                items-center
                gap-4
                group
              "
            >

              <div
                className="
                  rounded-full
                  bg-red-500/10
                  border
                  border-red-400/30
                  p-3
                  group-hover:bg-red-500/20
                  transition
                "
              >

                <Phone
                  className="text-red-500"
                  size={22}
                />

              </div>


              <span
                className="
                  text-white/90
                  font-semibold
                "
              >
                +91 6262626462
              </span>

            </motion.div>



            {/* EMAIL */}

            <motion.div
              whileHover={{
                x: 8,
              }}

              className="
                flex
                items-center
                gap-4
                group
              "
            >

              <div
                className="
                  rounded-full
                  bg-red-500/10
                  border
                  border-red-400/30
                  p-3
                  group-hover:bg-red-500/20
                  transition
                "
              >

                <Mail
                  className="text-red-500"
                  size={22}
                />

              </div>


              <span
                className="
                  text-white/90
                  font-semibold
                "
              >
                info@cpgroup.in
              </span>

            </motion.div>



            {/* ADDRESS */}

            <motion.div
              whileHover={{
                x: 8,
              }}

              className="
                flex
                items-start
                gap-4
                group
              "
            >

              <div
                className="
                  rounded-full
                  bg-red-500/10
                  border
                  border-red-400/30
                  p-3
                  shrink-0
                  group-hover:bg-red-500/20
                  transition
                "
              >

                <MapPin
                  className="text-red-500"
                  size={22}
                />

              </div>


              <span
                className="
                  text-white/90
                  font-semibold
                  leading-7
                "
              >
                204, S L Tower, Alpha-I Commercial
                Belt, Greater Noida, Uttar Pradesh
                201308
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

            bg-white/[0.03]

            border-t
            lg:border-t-0

            lg:border-l

            border-red-200/20
          "
        >

          <form
            onSubmit={handleSubmit}
            className="space-y-5"
          >


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
                border-red-200/30

                bg-black/40

                px-5
                py-4

                text-white

                placeholder-white/40

                outline-none

                transition

                focus:border-red-500
                focus:ring-1
                focus:ring-red-500

                hover:border-red-300/50
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
                border-red-200/30

                bg-black/40

                px-5
                py-4

                text-white

                placeholder-white/40

                outline-none

                transition

                focus:border-red-500
                focus:ring-1
                focus:ring-red-500

                hover:border-red-300/50
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
                border-red-200/30

                bg-black/40

                px-5
                py-4

                text-white

                placeholder-white/40

                outline-none

                transition

                focus:border-red-500
                focus:ring-1
                focus:ring-red-500

                hover:border-red-300/50
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
                border-red-200/30

                bg-black/40

                px-5
                py-4

                text-white

                placeholder-white/40

                outline-none

                transition

                focus:border-red-500
                focus:ring-1
                focus:ring-red-500

                hover:border-red-300/50
              "

              required
            />


            {/* MESSAGE */}

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              placeholder="Write your message..."

              className="
                w-full
                rounded-xl

                border
                border-red-200/30

                bg-black/40

                px-5
                py-4

                text-white

                placeholder-white/40

                outline-none

                resize-none

                transition

                focus:border-red-500
                focus:ring-1
                focus:ring-red-500

                hover:border-red-300/50
              "

              required
            />


            {/* =========================================
                SEND BUTTON
            ========================================= */}

            <motion.button

              type="submit"

              whileHover={{
                scale: 1.03,
              }}

              whileTap={{
                scale: 0.96,
              }}

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

                shadow-[0_0_20px_rgba(239,68,68,0.2)]

                transition-all
                duration-300

                hover:shadow-[0_0_30px_rgba(239,68,68,0.5)]
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
