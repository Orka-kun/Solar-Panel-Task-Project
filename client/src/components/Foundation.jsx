import React from 'react'
import sicon from '../assets/sicon.png'

function Foundation() {
  return (
    <div>
      <div className='grid grid-cols-2 gap-x-40 lg:gap-x-40 md:gap-x-20 sm:gap-x-10'>
        <section className='grid grid-rows gap-y-6'>
            <div className='flex text-wrap mx-20 lg:mx-20 md:mx-10 sm:mx-5 text-xl gap-x-4'>
                <img src={sicon} className='h-24' />
                <div>
                <h1 className='font-bold'>Community Powered:</h1>
                <p>What better way to fuel our growth and create lasting change than by coming together with our alumni, families, and friends? Your generosity can turn this dream into reality—saving our school money and making a positive impact on the environment for generations to come. Every contribution, no matter the size, brings us one step closer to building a brighter, more sustainable future.</p>
                </div>
            </div>
            <div className='flex text-wrap mx-20 lg:mx-20 md:mx-10 sm:mx-5 text-xl gap-x-4'>
                <img src={sicon} className='h-24' />
                <div>
                <h1 className='font-bold'>160 kW Solar Power System:</h1>
                <p>Our cutting-edge solar installation, featuring 280 high-efficiency solar panels, is designed to harness the sun's power effectively, generating over 206 MWh of clean energy annually. Included in the system’s design and planning phase, the School District has been able to maximize the number of financial solar incentives available for the project.</p>
                </div>
            </div>
            <div className='flex text-wrap mx-20 lg:mx-20 md:mx-10 sm:mx-5 text-xl gap-x-4'>
                <img src={sicon} className='h-24' />
                <div>
                <h1 className='font-bold'>Solar Savings:</h1>
                <p>Adding solar to the facility will save the school district approximately $120,000 annually in utility costs by covering 70% of their power needs from the solar array. This will allow the school to invest in other improvements and new team members.</p>
                </div>
            </div>
            <div className='flex text-wrap mx-20 lg:mx-20 md:mx-10 sm:mx-5 text-xl gap-x-4'>
                <img src={sicon} className='h-24' />
                <div>
                <h1 className='font-bold'>Environmental Impact:</h1>
                <p>With this solar installation, we’re offsetting 190 tons of CO2 annually—equivalent to removing 41 cars from the road and powering 90 homes each year. This impact is also comparable to planting 3,159 trees annually, contributing to a healthier planet.</p>
                </div>
            </div>
            <div className='bg-red-100 text-wrap mx-20 lg:mx-20 md:mx-10 sm:mx-5 text-2xl font-semibold py-8 px-5 rounded-3xl text-center'>
                <p>At Solar Foundation, we’re not just installing solar panels; we’re building a future where clean energy is accessible, affordable, and sustainable for everyone.</p>
            </div>
            <a href='https://drive.google.com/file/d/1YpFqeUyhajUAy6mi9Gw5Ibfn4o0rd0s2/view?usp=sharing' className='bg-red-800 text-wrap mx-20 lg:mx-20 md:mx-10 sm:mx-5 text-2xl text-center text-white font-semibold py-4 rounded-4xl'>
                <p>LEARN ABOUT THE NEW SPORTS COMPLEX</p>
            </a>
        </section>
        <section className='bg-green-50 grid text-center rounded-2xl pt-10 gap-y-4'>
            <div className='text-4xl font-bold'>Build a Brighter Future:<br/> Select Your Solar Impact:</div>
            <div className='bg-[#6ba843] mx-40 lg:mx-40 md:mx-20 sm:mx-10 rounded-3xl text-white font-semibold text-2xl flex items-center justify-center'>Donate 1 Solar Panel(s): $550</div>
            <div className='bg-[#6ba843] mx-40 lg:mx-40 md:mx-20 sm:mx-10 rounded-3xl text-white font-semibold text-2xl flex items-center justify-center'>Donate 2 Solar Panel(s): $1,100</div>
            <div className='bg-[#6ba843] mx-40 lg:mx-40 md:mx-20 sm:mx-10 rounded-3xl text-white font-semibold text-2xl flex items-center justify-center'>Donate 3 Solar Panel(s): $1,650</div>
            <div className='bg-lime-700 mx-40 lg:mx-40 md:mx-20 sm:mx-10 rounded-3xl text-white font-semibold text-2xl flex items-center justify-center'>Donate 4 Solar Panel(s): $2,200</div>
            <div className='bg-red-100 mx-40 lg:mx-40 md:mx-20 sm:mx-10 rounded-2xl font-semibold text-xl flex items-center justify-center px-5'>Your gift of $2,200 returns $16,000 to the Indian Hill School District over the lifetime of the system!</div>
            <div className='bg-[#6ba843] mx-40 lg:mx-40 md:mx-20 sm:mx-10 rounded-3xl text-white font-semibold text-2xl flex items-center justify-center'>Donate 5 Solar Panel(s): $2,750</div>
            <div className='mx-40 lg:mx-40 md:mx-20 sm:mx-10 rounded-3xl font-semibold text-2xl flex items-center justify-center'>More than 5? Awesome</div>
            <div className='bg-[#6ba843] mx-40 lg:mx-40 md:mx-20 sm:mx-10 rounded-3xl text-white font-semibold text-2xl flex items-center justify-center'>Choose Custom Quantity     ▼</div>
            <a href='/checkout' className='bg-red-800 text-white ml-96 lg:ml-96 md:ml-48 sm:ml-20 mr-40 lg:mr-40 md:mr-20 sm:mr-10 rounded-3xl flex items-center justify-center font-semibold text-2xl'>GO TO CHECKOUT</a>
            <div></div>
        </section>
      </div>
    </div>
  )
}

export default Foundation
// import React from 'react'
// import sicon from '../assets/sicon.png'
// function Foundation() {
//   return (
//     <div>
//       <div className='grid grid-cols-2 gap-x-40'>
//         <section className='grid grid-rows gap-y-6'>
//             <div className='flex text-wrap mx-20 text-xl gap-x-4'>
//                 <img src={sicon} className='h-24'/>
//                 <div>
//                 <h1 className='font-bold'>Community Powered:</h1>
//                 <p>What better way to fuel our growth and create lasting change than by coming together with our alumni, families, and friends? Your generosity can turn this dream into reality—saving our school money and making a positive impact on the environment for generations to come. Every contribution, no matter the size, brings us one step closer to building a brighter, more sustainable future.</p>
//                 </div>
//             </div>
//             <div className='flex text-wrap mx-20 text-xl gap-x-4'>
//                 <img src={sicon} className='h-24'/>
//                 <div>
//                 <h1 className='font-bold'>160 kW Solar Power System:</h1>
//                 <p>Our cutting-edge solar installation, featuring 280 high-efficiency solar panels, is designed to harness the sun's power effectively, generating over 206 MWh of clean energy annually. Included in the system’s design and planning phase, the School District has been able to maximize the number of financial solar incentives available for the project.</p>
//                 </div>
//             </div>
//             <div className='flex text-wrap mx-20 text-xl gap-x-4'>
//                 <img src={sicon} className='h-24'/>
//                 <div>
//                 <h1 className='font-bold'>Solar Savings:</h1>
//                 <p>Adding solar to the facility will save the school district approximately $120,000 annually in utility costs by covering 70% of their power needs from the solar array. This will allow the school to invest in other improvements and new team members.</p>
//                 </div>
//             </div>
//             <div className='flex text-wrap mx-20 text-xl gap-x-4'>
//                 <img src={sicon} className='h-24'/>
//                 <div>
//                 <h1 className='font-bold'>Environmental Impact:</h1>
//                 <p>With this solar installation, we’re offsetting 190 tons of CO2 annually—equivalent to removing 41 cars from the road and powering 90 homes each year. This impact is also comparable to planting 3,159 trees annually, contributing to a healthier planet.</p>
//                 </div>
//             </div>
//             <div className='bg-red-100 text-wrap mx-20 text-2xl font-semibold py-8 px-5 rounded-3xl text-center'>
//                 <p>At Solar Foundation, we’re not just installing solar panels; we’re building a future where clean energy is accessible, affordable, and sustainable for everyone.</p>
//             </div>
//             <a href='https://drive.google.com/file/d/1YpFqeUyhajUAy6mi9Gw5Ibfn4o0rd0s2/view?usp=sharing' className='bg-red-800 text-wrap mx-20 text-2xl text-center text-white font-semibold py-4 rounded-4xl'>
//                 <p>LEARN ABOUT THE NEW SPORTS COMPLEX</p>
//             </a>
//         </section>
//         <section className='bg-green-50 grid text-center rounded-2xl pt-10 gap-y-4'>
//             <div className='text-4xl font-bold'>Build a Brighter Future:<br/> Select Your Solar Impact:</div>
//             <div className='bg-[#6ba843] mx-40 rounded-3xl  text-white font-semibold text-2xl flex items-center justify-center'>Donate 1 Solar Panel(s): $550</div>
//             <div className='bg-[#6ba843] mx-40 rounded-3xl  text-white font-semibold text-2xl flex items-center justify-center'>Donate 2 Solar Panel(s): $1,100</div>
//             <div className='bg-[#6ba843] mx-40 rounded-3xl  text-white font-semibold text-2xl flex items-center justify-center'>Donate 3 Solar Panel(s): $1,650</div>
//             <div className='bg-lime-700 mx-40 rounded-3xl  text-white font-semibold text-2xl flex items-center justify-center'>Donate 4 Solar Panel(s): $2,200</div>
//             <div className='bg-red-100 mx-40 rounded-2xl font-semibold text-xl flex items-center justify-center px-5'>Your gift of $2,200 returns $16,000 to the Indian Hill School District over the lifetime of the system!</div>
//             <div className='bg-[#6ba843] mx-40 rounded-3xl  text-white font-semibold text-2xl flex items-center justify-center'>Donate 5 Solar Panel(s): $2,750</div>
//             <div className='mx-40 rounded-3xl font-semibold text-2xl flex items-center justify-center'>More than 5? Awesome</div>
//             <div className='bg-[#6ba843] mx-40 rounded-3xl  text-white font-semibold text-2xl flex items-center justify-center'>Choose Custom Quantity     ▼</div>
//             <a href='/checkout' className='bg-red-800 text-white ml-96 mr-40 rounded-3xl flex items-center justify-center font-semibold text-2xl'>GO TO CHECKOUT</a>
//             <div></div>
//         </section>
//       </div>
//     </div>
//   )
// }

// export default Foundation
