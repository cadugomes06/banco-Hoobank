import React from 'react'
import { card } from '../assets'
import styles, { layout } from '../style'
import Button from './Button'

const CardDeal = () => {
  return (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Encontro o melhor cartão
          <br className="sm:block hidden"></br>
          em apenas alguns passos.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Lorem ipsum dolor, sit amet consectetur adipisicing
           elit. Odio at unde nemo repellendus inventore
            quia laborum quae omnis alias corporis!
        </p>
      <Button styles="mt-10 rounded-[10px]" />
      </div>

      <div className={layout.sectionImg}>
        <img src={card} alt="card" className="w-[100%] h-[100%]" />
      </div>
    </section>
  )
}

export default CardDeal