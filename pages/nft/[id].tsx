import React from 'react'
import { useAddress, useDisconnect, useMetamask } from "@thirdweb-dev/react";


function NFTDropPage() {

   //Auth 
   const connectWithMetaMask = useMetamask();
   const address = useAddress();
   const disconnect = useDisconnect();

   console.log(address);

  return (
    
    <div className='flex flex-col h-screen lg:grid lg:grid-cols-10'>

      {/* Left  */}

      <div className='lg:col-span-4 bg-gradient-to-br from-cyan-800 to-rose-500'>
         <div className='flex flex-col items-center justify-center py-3 lg:min-h-screen'>
           <div className='bg-gradient-to-br from-yellow-400 to-purple-500 p-1.5 rounded-xl'>
           <img src="https://serving.photos.photobox.com/6876750361cb77b85d08e0f5e17b5eab2618e64945bf6ea9917fa6132cf3365eea4daf83.jpg"
            className="rounded-xl w-44 object-cover lg:w-72 lg:h-96"
            alt="" />
           </div>

            <div className='text-center p-5 space-y-2'>
              <h1 className='text-4xl font-bold text-white'>CYBERPUNK Apes</h1>
              <h2 className='text-xl text-gray-300'>A collection of CYBERPUNK Apes who live & breathe React!</h2>
            </div>
         </div>
      </div>

      {/* Right  */}

      <div className='flex flex-col flex-1 p-12 lg:col-span-6'>
            {/* Header  */}
            <header className='flex items-center justify-between'>
              <h1 className='w-52 cursor-pointer text-xl font-extralight sm:w-80'>The{''} <span className='font-extrabold underline decoration-pink-600/50'>NOMAN</span>{''} NFT Market Place</h1>
              <button 
              onClick={()=> address ? disconnect() : connectWithMetaMask() }
              className='rounded-full bg-rose-400 text-white px-4 py-2 text-xs font-bold lg:px-5 lg:py-3 lg:text-base'>
                {address ? 'Sign Out' : 'Sign In'}
                </button>
            </header>
            <hr className='my-2 border'/>

           {address && (
               <p className='my-2 text-center text-sm text-rose-500'>You're logged in as {address.substring(0,6)}....{address.substring(address.length -6)}</p>
           )}

            {/* Content  */}
            <div className='mt-10 flex flex-1 flex-col items-center space-y-5 text-center lg:space-y-0 lg:justify-center'>
              <img src="https://links.papareact.com/bdy" 
              className='w-80 object-cover pb-10 lg:h-40'
              alt="" />
              <h1 className='text-3xl font-bold lg:text-5xl lg:font-extrabold'>The NOMAN Coding Club | 2022 </h1>
               <p className='pt-2 text-xl text-green-500'>13 /22  NFT's claimed</p>
            </div>

            {/* Button  */}
            
            <button className='items center lg:animate-pulse hover:animate-none h-16 w-full bg-gradient-to-br from-purple-500 to-pink-600 text-white rounded-full mt-10 font-bold'>Mint NFT (0.01 ETH)
            </button>

      </div>
    </div>
  )
}

export default NFTDropPage
