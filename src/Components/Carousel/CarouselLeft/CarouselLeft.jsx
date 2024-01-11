import  { useEffect, useState } from 'react'
import LeftArrow from "../../../assets/LeftArrow.svg?react";
import { useSwiper } from 'swiper/react'
import styles from "../Carausel.module.css"

const CarouselLeft = () => {
    const swiper = useSwiper();
    const [isBegin,setIsBegin]=useState(true);

    useEffect(()=> {
        swiper.on("slideChange",()=> {
            setIsBegin(swiper.isBeginning);
        })
    },[swiper])
  return (
    <div className={styles.leftNavigation}>
        {!isBegin && <LeftArrow onClick={() => swiper.slidePrev()} />}
    </div>
  )
}

export default CarouselLeft;