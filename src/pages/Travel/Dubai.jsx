import React from 'react'
import GalleryLoop from '../../Components/GalleryLoop'

import Img1 from '../../images/travelImg/dubai/dubai1.jpg'
import Img2 from '../../images/travelImg/dubai/dubai2.jpg'
import Img3 from '../../images/travelImg/dubai/dubai3.jpg'
import Img4 from '../../images/travelImg/dubai/dubai4.jpg'
import Img5 from '../../images/travelImg/dubai/dubai5.jpg'


export default function Birthday() {
    let data = [
        {
            id: 1,
            imgSrc: Img1
        },
        {
            id: 2,
            imgSrc: Img2
        },
        {
            id: 3,
            imgSrc: Img3
        },
        {
            id: 4,
            imgSrc: Img4
        },
        {
            id: 5,
            imgSrc: Img5
        },
    ]



  return (
   <>
   <GalleryLoop data={data}/>
   </>
  )
}
