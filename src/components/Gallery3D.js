// import React from 'react';
// import { gallery3D } from '../data/projectsData';

// export default function Gallery3D() {
//   return (
//     <section id="3d-gallery" className="min-h-screen py-20 px-4">
//       <div className="max-w-7xl mx-auto">
//         <h2 className="text-5xl font-bold mb-12 text-center bg-gradient-to-r from-pink-400 to-orange-400 bg-clip-text text-transparent">
//           3D Design & Animation
//         </h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {gallery3D.map((item, index) => (
//             <div key={index} className="bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-lg overflow-hidden hover:transform hover:scale-105 transition duration-300 border border-gray-700 flex flex-col">
//               <img src={item.image} alt={item.title} className="w-full h-64 object-cover" />
//               <div className="p-5 flex flex-col flex-grow">
//                 <h3 className="text-xl font-bold mb-2 text-pink-400">{item.title}</h3>
//                 <p className="text-gray-300 text-sm mb-3 leading-relaxed">{item.description}</p>
//                 <p className="text-gray-400 text-sm mb-3">
//                   <span className="font-semibold">Software:</span> {item.software}
//                 </p>

//                 {item.skills && (
//                   <div className="mb-4">
//                     <div className="flex flex-wrap gap-2">
//                       {item.skills.map((skill, i) => (
//                         <span key={i} className="px-2 py-1 bg-pink-900 bg-opacity-40 text-pink-300 rounded text-xs">
//                           {skill}
//                         </span>
//                       ))}
//                     </div>
//                   </div>
//                 )}

//                 <div className="flex flex-wrap gap-3 mt-auto">
//                   {item.behance && (
//                     <a href={item.behance} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-pink-400 transition text-sm font-medium">
//                       Behance →
//                     </a>
//                   )}
//                   {item.demo && (
//                     <a href={item.demo} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-pink-400 transition text-sm font-medium">
//                       View Demo →
//                     </a>
//                   )}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
