// import { motion } from "framer-motion";
// import { Palette, Box, HardHat, LayoutGrid, Lightbulb, MessageSquare, Wrench, Users, TrendingUp } from "lucide-react";
// import { Link } from "react-router-dom";
// import AnimatedSection from "./AnimatedSection";

// const primarySkills = [
//   {
//     icon: Palette,
//     name: "Interior Designing",
//     desc: "End-to-end residential design with a personalized approach",
//     gradient: "from-[hsl(28,45%,45%)] to-[hsl(38,60%,55%)]",
//   },
//   {
//     icon: Box,
//     name: "3D Visualization",
//     desc: "Photorealistic renders to visualize your dream space",
//     gradient: "from-[hsl(25,30%,35%)] to-[hsl(30,25%,50%)]",
//   },
//   {
//     icon: HardHat,
//     name: "Site Execution",
//     desc: "Complete project management and on-site delivery in Mumbai",
//     gradient: "from-[hsl(32,20%,40%)] to-[hsl(35,30%,55%)]",
//   },
// ];

// const expertise = [
//   { icon: LayoutGrid, name: "Space Planning" },
//   { icon: Lightbulb, name: "Creative Thinking" },
//   { icon: MessageSquare, name: "Strategic Communication" },
//   { icon: Wrench, name: "Problem Solving" },
//   { icon: Palette, name: "Material Selection" },
//   { icon: Users, name: "Client Management" },
//   { icon: TrendingUp, name: "Project Coordination" },
//   { icon: Lightbulb, name: "Trend Forecasting" },
// ];

// const SkillsSection = () => (
//   <section id="skills" className="section-padding section-spacing">
//     <div className="max-w-6xl mx-auto">
//       <AnimatedSection>
//         <p className="text-label mb-4">Skills & Expertise</p>
//         <div className="gold-line mb-6" />
//         <h2 className="text-display-lg text-foreground mb-16">
//           Areas of <span className="italic text-accent">Mastery</span>
//         </h2>
//       </AnimatedSection>

//       {/* Primary skill cards linking to portfolio */}
//       <div className="grid md:grid-cols-3 gap-6 mb-16">
//         {primarySkills.map((skill, i) => (
//           <AnimatedSection key={skill.name} delay={i * 0.15}>
//             <Link to="/portfolio">
//               <motion.div
//                 whileHover={{ y: -8, scale: 1.02 }}
//                 transition={{ duration: 0.4 }}
//                 className="relative bg-card border border-border rounded-xl p-8 hover:border-accent/40 transition-all duration-500 group overflow-hidden cursor-pointer h-full"
//               >
//                 <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${skill.gradient} opacity-70 group-hover:opacity-100 transition-opacity`} />
//                 <skill.icon className="w-10 h-10 text-accent mb-5 group-hover:scale-110 transition-transform duration-300" />
//                 <h3 className="font-display text-2xl md:text-3xl text-foreground mb-2 group-hover:text-accent transition-colors duration-300">
//                   {skill.name}
//                 </h3>
//                 <p className="text-base text-foreground/75 leading-relaxed mb-4">{skill.desc}</p>
//                 <span className="text-accent text-sm font-semibold uppercase tracking-wider group-hover:text-foreground transition-colors">
//                   View Projects →
//                 </span>
//               </motion.div>
//             </Link>
//           </AnimatedSection>
//         ))}
//       </div>

//       {/* Expertise grid */}
//       <AnimatedSection delay={0.3}>
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//           {expertise.map((e, i) => (
//             <motion.div
//               key={e.name}
//               whileHover={{ scale: 1.03, x: 4 }}
//               transition={{ duration: 0.3 }}
//               className="flex items-center gap-3 p-4 border border-border hover:border-accent/40 transition-colors duration-300 rounded-lg min-w-0"
//             >
//               <e.icon className="w-5 h-5 text-accent shrink-0" />
//               <span className="text-foreground text-xs sm:text-sm md:text-base font-medium leading-tight break-words min-w-0">{e.name}</span>
//             </motion.div>
//           ))}
//         </div>
//       </AnimatedSection>
//     </div>
//   </section>
// );

// export default SkillsSection;
