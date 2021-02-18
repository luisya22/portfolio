import React from 'react';

const Navbar = ({data}) => {
    return(
        <>
           <div className="flex items-center justify-between mx-auto py-3 w-full bg-background-color z-50 top-0 sticky">
               <h1 className="text-white text-2xl"><span className="text-accent-color text-2xl">{'</'}</span> Luis Matos</h1>
               <div>
                   {data.links.map((link,index)=>{
                       return (
                           <span key={index} className="text-white text-lg mx-4">
                                {link.text}
                           </span>
                       )
                   })}
               </div>
           </div>
        </>
    )
}

export default Navbar;