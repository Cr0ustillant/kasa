import { useState } from "react"
import ArrowLeft from "../../assets/ArrowLeft.png"
import ArrowRight from "../../assets/ArrowRight.png"

const Carousel = ({img}) => {
    const [currentImgIndex, setCurrentImgIndex] = useState(0);

    function previousImage() {
        setCurrentImgIndex((prevIndex) => (prevIndex === 0 ? img.length - 1 : prevIndex - 1));
    }

    function nextImage() {
        setCurrentImgIndex((prevIndex) => (prevIndex === img.length - 1 ? 0 : prevIndex + 1));
    }
        if (img.length === 1) {
            return (
                <div className="carousel">
                <img src={img[currentImgIndex]} alt="image" className="img-carousel" />
            </div>
            )
        }
    else {

    return (
        <div className="carousel">
            <img src={img[currentImgIndex]} alt="image" className="img-carousel" />
                <img  src={ArrowLeft} alt="Arrow-left" className="btn-carousel-left" onClick={previousImage}/>
                <img  src={ArrowRight} alt="Arrow-right" className="btn-carousel-right" onClick={nextImage}/>
                <span>{currentImgIndex+1}/{img.length}</span>
        </div>
    )}
}

export default Carousel;