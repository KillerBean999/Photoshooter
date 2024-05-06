import React  from 'react'
import Img1 from '../../images/eventImg/brithdays/birthday1.jpg'
import Img2 from '../../images/eventImg/brithdays/birthday2.jpg'
import GalleryLoop from '../../Components/GalleryLoop'

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
    ]

  return (
  <GalleryLoop data={data}/>
  )
}
