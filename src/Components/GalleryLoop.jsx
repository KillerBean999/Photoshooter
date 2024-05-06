import React, {useState} from 'react'

export default function GalleryLoop({data}) {
        const [fullScreenImg, setFullScreenImg] = useState(null)
    const handleImageClick = (imgSrc) => { 
        setFullScreenImg(imgSrc)
    }
    const handleCloseFullScreen = () =>{
        setFullScreenImg(null)  
    }
  return (
 <div className='gallery'>
        {data.map((item,index)=>{
            return(
                <div className='photo-gallery' key={index}>
                    <img className='photo-item'
                     src={item.imgSrc} 
                     onClick={()=> handleImageClick(item.imgSrc)}
                     alt='Dubai'/>
                </div>
            )
        })}     
        {fullScreenImg && (
            <div className='fullscreen-overlay'
            onClick={handleCloseFullScreen}>
                <img className='fullscreen-image'
                src={fullScreenImg}
                alt='Fullscreen'/>
            </div>
        )}
    </div>
  )
}
