import React from 'react'
import styles from '../style';
import Button from './Button'

const CTA = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.marginY} 
     ${styles.padding} sm:flex-row flex-col bg-black-gradient-2
     rounded-[20px] box-shadow`}>
      <div className='flex-1 flex flex-col'>
        <h2 className={styles.heading2}>Contratar nossos serviços agora!</h2>
        <p className={`${styles.paragraph} max-w-[470px]`}>Tudo que você precisa para aceitar pagamento em cartão
          e fazer o seu negócio crescer de qualquer lugar do planeta.
        </p>
      </div>

      <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0
      mt-10`}>
        <Button styles={`rounded-[10px]`}/>
      </div>
    </section>
  )
}

export default CTA