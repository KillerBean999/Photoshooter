import React from 'react'
import GalleryLoop from '../../Components/GalleryLoop'

import Img1 from '../../images/travelImg/amsterdam/amsterdam1.jpg'
import Img2 from '../../images/travelImg/amsterdam/amsterdam2.jpg'
import Img3 from '../../images/travelImg/amsterdam/amsterdam3.jpg'
import Img4 from '../../images/travelImg/amsterdam/amsterdam4.jpg'
import Img5 from '../../images/travelImg/amsterdam/amsterdam5.jpg'
import Img6 from '../../images/travelImg/amsterdam/amsterdam6.jpg'
import Img7 from '../../images/travelImg/amsterdam/amsterdam7.jpg'


export default function Amsterdam() {
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
        {
            id: 6,
            imgSrc: Img6
        },
        {
            id: 7,
            imgSrc: Img7
        },
    ]

  return (
    <GalleryLoop data={data}/>
  )
}
