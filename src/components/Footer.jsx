import React from 'react'
import styles from '../style'
import { logo } from '../assets'
import { footerLinks, socialMedia } from '../constants'

const Footer = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.paddingY} 
     flex-col`}>
      <div className={`${styles.flexStart} md:flex-row flex-col 
      mb-8 2-full`}>
        <div className='flex-1 flex flex-col justify-start mr-10'>
          <img
        src={logo}
        alt="hoobank"
        className='w-[266px] h-[72px] object-contain' />
        </div>
      </div>
    </section>
  )
}

export default Footer