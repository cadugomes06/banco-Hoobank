import React from 'react'
import { bill, apple, google } from '../assets'
import styles, { layout } from '../style'

const Billing = () => {
  return (
    <section id='product' className={layout.sectionImgReverse}>
      <div className={layout.sectionImgReverse}>
        <img src={bill} alt="billing" className="w-[100%] h-[100%]
         relative z-[5] " />

      <div className='absolute z-[3] -left-1/2 top-0 w-[50%]
       h-[50%] rounded-full white__gradient' />
       <div className='absolute z-[0] -left-1/2 bottom-0 w-[50%]
       h-[50%] rounded-full pink__gradient' />     
       </div>

       <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Fácil de controlar sua
          <br className='sm:block hidden'></br> 
          fatura e faturamento. 
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Lorem ipsum dolor sit amet consectetur 
          adipisicing elit. Molestiae voluptates, 
          hic vitae repudiandae dolorem consequatur!
        </p>

         <div className='flex flex-row flex-wrap sm:mt-10 mt-6'>
            <img src={google} alt="google-play" className='w-[128px]
             h-[42px] object-contain mr-5 cursor-pointer' />
            <img src={apple} alt="google-play" className='w-[128px]
             h-[42px] object-contain mr-5 cursor-pointer' />
         </div>
       </div>
    </section>
  )
}

export default Billing