import React from 'react';

const Gallery = () => {
    return (
        <div className='mt-10 md:mt-20 md:container mx-auto'>
            <h2 className='text-center text-xl md:text-5xl font-semibold text-neutral  mb-5'>Explore Lego Gallery</h2>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-7 md:px-0 '>
                <div className='overflow-hidden rounded-xl'>
                <img className='rounded-xl hover:scale-125 ease-linear duration-300 ' src={"https://images.unsplash.com/photo-1472457897821-70d3819a0e24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80"} alt="" />
                </div>
                <div className='overflow-hidden rounded-xl'>
                <img className='rounded-xl hover:scale-125 ease-linear duration-300' src={"https://images.unsplash.com/photo-1531061682486-1fa5a7390f74?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fGxlZ28lMjBzdGFyJTIwd2Fyc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"} alt="" />
                </div>
                <div className='overflow-hidden rounded-xl'>
                <img className='rounded-xl hover:scale-125 ease-linear duration-300 ' src={"https://images.unsplash.com/photo-1520627977056-c307aeb9a625?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGVnbyUyMGNpdHl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"} alt="" />
                </div>
                <div className='overflow-hidden rounded-xl row-span-2'>
                <img className='rounded-xl hover:scale-125 ease-linear duration-300 ' src={"https://images.unsplash.com/photo-1526505262320-81542978f63b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGxlZ28lMjBjaXR5fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"} alt="" />
                </div>
                <div className='overflow-hidden rounded-xl'>
                <img className='rounded-xl hover:scale-125 ease-linear duration-300 ' src={"https://images.unsplash.com/photo-1534732806146-b3bf32171b48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGxlZ28lMjBjaXR5fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"} alt="" />
                </div>
                <div className='overflow-hidden rounded-xl row-span-2'>
                <img className='rounded-xl hover:scale-125 ease-linear duration-300 ' src={"https://images.unsplash.com/photo-1672567590318-69ffc45ef197?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjF8fGxlZ28lMjBjaXR5fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"} alt="" />
                </div>                
                <div className='overflow-hidden rounded-xl'>
                <img className='rounded-xl hover:scale-125 ease-linear duration-300' src={"https://images.unsplash.com/photo-1610018817073-fe06110e6693?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bGVnbyUyMGNhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"} alt="" />
                </div>                
                <div className='overflow-hidden rounded-xl'>
                <img className='rounded-xl hover:scale-125 ease-linear duration-300' src={"https://images.unsplash.com/photo-1621611141464-a06af0c5c623?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGVnbyUyMHN0YXIlMjB3YXJzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"} alt="" />
                </div>                
                <div className='overflow-hidden rounded-xl'>
                <img className='rounded-xl hover:scale-125 ease-linear duration-300' src={"https://images.unsplash.com/photo-1620309767407-aea549261a4c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGxlZ28lMjBjaXR5fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"} alt="" />
                </div>                
                <div className='overflow-hidden rounded-xl'>
                <img className='rounded-xl hover:scale-125 ease-linear duration-300' src={"https://images.unsplash.com/photo-1650049181976-da195d61094a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzN8fGxlZ28lMjBjaXR5fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"} alt="" />
                </div>                
                                            
                
                
            </div>
            
        </div>
    );
};

export default Gallery;