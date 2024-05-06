import React from 'react'
import Img1 from '../../images/eventImg/weddings/wedding1.jpg'
import Img2 from '../../images/eventImg/weddings/wedding2.jpg'
import Img3 from '../../images/eventImg/weddings/wedding3.jpg'
import Img4 from '../../images/eventImg/weddings/wedding4.jpg'
import Img5 from '../../images/eventImg/weddings/wedding5.jpg'
import Img6 from '../../images/eventImg/weddings/wedding6.jpg'
import GalleryLoop from '../../Components/GalleryLoop'

export default function Weddings() {
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
    ]

  return (
    <GalleryLoop data={data}/>  
  )
}
