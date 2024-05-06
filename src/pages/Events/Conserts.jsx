import React, {useState} from 'react'
import Img1 from '../../images/eventImg/conserts/consert1.jpg'
import Img2 from '../../images/eventImg/conserts/consert2.jpg'
import Img3 from '../../images/eventImg/conserts/consert3.jpg'
import Img4 from '../../images/eventImg/conserts/consert4.jpg'
import Img5 from '../../images/eventImg/conserts/consert5.jpg'
import Img6 from '../../images/eventImg/conserts/consert6.jpg'
import Img7 from '../../images/eventImg/conserts/consert7.jpg'
import Img8 from '../../images/eventImg/conserts/consert8.jpg'
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
        {
            id: 8,
            imgSrc: Img8
        },
        
    ]

    const [fullScreenImg, setFullScreenImg] = useState(null)
    const handleImageClick = (imgSrc) => { 
        setFullScreenImg(imgSrc)
    }
    const handleCloseFullScreen = () =>{
        setFullScreenImg(null)
    }

  return (
    <GalleryLoop data={data}/>
  )
}
