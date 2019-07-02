import React from 'react'
import './ImageList.css'
import ImageCard from './ImageCard'

const ImageList = ( { images } ) => {
    const image = images.map( img => <ImageCard key={ img.id } image={ img }/> )
    return <div className={ 'image-list' }>{ image }</div>
}

export default ImageList