

// import { motion } from "framer-motion";
// import RotatingText from "../magicui/rotating-text"
// import { AnimatedListDemo } from "./AniList"

// function Hero() {
//   return (
//     <div className="relative h-screen w-full flex flex-col lg:flex-row items-center justify-between bg-slate-300 overflow-hidden">
//       {/* Main content container */}
//       <motion.div className="w-full lg:w-4/5 px-6 md:px-12 lg:px-28 pt-20 lg:pt-12 z-10"
//       initial={{ y: -100, opacity: 0 }}
//       animate={{ y: 0, opacity: 1 }}
//       transition={{ duration: 0.8, ease: "easeOut" }}>
//         <div className=" p-8 md:py-12 ">
//           <h1 className="font-custom text-4xl md:text-6xl lg:text-7xl leading-tight text-center sm:text-left">
//             Change the Way <br />
//             <span className="inline-flex items-center gap-2">
//               you
//               <RotatingText
//                 texts={["Manage", "Plan", "Organize", "Track", "Prioritize"]}
//                 mainClassName="px-2 bg-black text-white capitalize overflow-hidden py-1 rounded-lg"
//                 staggerFrom={"last"}
//                 initial={{ y: "100%" }}
//                 animate={{ y: 0 }}
//                 exit={{ y: "-120%" }}
//                 staggerDuration={0.025}
//                 splitLevelClassName="overflow-hidden pb-1"
//                 transition={{ type: "spring", damping: 30, stiffness: 400 }}
//                 rotationInterval={2000}
//               />
//             </span>{" "}
//             <br />
//             money
//           </h1>

//           {/* Optional: Add a subheading or CTA buttons here */}
//           <p className="mt-6 text-lg md:text-xl text-slate-700 max-w-2xl hidden sm:block">
//             Track, manage, and optimize your finances with our intuitive
//             platform.
//           </p>

//           <div className="mt-8 flex flex-row gap-4">
//             <button className="px-6 py-2 sm:px-8 sm:py-3 bg-black text-white text-sm sm:text-base rounded-full font-medium hover:bg-primary/90 transition-colors">
//               Get Started
//             </button>
//             <button className="px-6 py-2 sm:px-8 sm:py-3 bg-white text-slate-800 text-sm sm:text-base rounded-full font-medium border border-slate-300 hover:bg-slate-100 transition-colors">
//               Learn More
//             </button>
//           </div>
//         </div>
//       </motion.div>

//       {/* Animated list container - visible on all screens */}
//       <div className="w-full lg:w-2/5 flex justify-center lg:justify-end lg:pr-12 xl:pr-28 mt-8 lg:mt-0">
//         <div className="transform lg:translate-y-4">
//           <AnimatedListDemo />
//         </div>
//       </div>

//       {/* Optional decorative elements */}
//       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl -z-10"></div>
//     </div>
//   );
// }

// export default Hero






"use client"
import { motion } from "framer-motion"
import RotatingText from "../magicui/rotating-text"
import { AnimatedListDemo } from "./AniList"

function Hero() {
  return (
    <div className="relative h-screen w-full flex flex-col lg:flex-row items-center justify-between bg-slate-300 overflow-hidden">
      {/* Main content container */}
      <motion.div
        className="w-full lg:w-4/5 px-6 md:px-12 lg:px-28 pt-20 lg:pt-12 z-10"
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="p-8 md:py-12">
          <motion.h1
            className="font-custom text-4xl md:text-6xl lg:text-7xl leading-tight text-center sm:text-left"
            initial={{ y: -60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            Change the Way <br />
            <span className="inline-flex items-center gap-2">
              you
              <RotatingText
                texts={["Manage", "Plan", "Organize", "Track", "Prioritize"]}
                mainClassName="px-2 bg-black text-white capitalize overflow-hidden py-1 rounded-lg"
                staggerFrom={"last"}
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-120%" }}
                staggerDuration={0.025}
                splitLevelClassName="overflow-hidden pb-1"
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                rotationInterval={2000}
              />
            </span>{" "}
            <br />
            money
          </motion.h1>

          {/* Optional: Add a subheading or CTA buttons here */}
          <motion.p
            className="mt-6 text-lg md:text-xl text-slate-700 max-w-2xl"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          >
            Track, manage, and optimize your finances with our intuitive platform.
          </motion.p>

          <motion.div
            className="mt-8 flex flex-col sm:flex-row gap-4"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
          >
            <motion.button
              className="px-8 py-3 bg-black text-white rounded-full font-medium hover:bg-primary/90 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
            </motion.button>
            <motion.button
              className="px-8 py-3 bg-white text-slate-800 rounded-full font-medium border border-slate-300 hover:bg-slate-100 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More
            </motion.button>
          </motion.div>
        </div>
      </motion.div>

      {/* Animated list container - visible on all screens */}
      <motion.div
        className="w-full lg:w-2/5 flex justify-center lg:justify-end lg:pr-12 xl:pr-28 mt-8 lg:mt-0"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
      >
        <div className="transform lg:translate-y-4">
          <AnimatedListDemo />
        </div>
      </motion.div>

      {/* Optional decorative elements */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl -z-10"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      ></motion.div>
    </div>
  )
}

export default Hero

