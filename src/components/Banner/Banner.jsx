import '../Banner/Banner.css';

function Banner({ imgBanner, textBanner, className }) {
    return ( 
        <div className={`${className}`}>
            <img src={imgBanner} alt="image de bannière" />
            <p id='title'>
                {textBanner}
            </p>
        </div>
    );
}

export default Banner;