function Rating({ rating }) {
    const ratingNumber = parseInt(rating);

    const generateStars = (rating) => {
        return Array.from({ length: 5 }, (_, index) => (
          <i key={index} className={`fa-solid fa-star ${index < rating ? 'star-colored' : 'star'}`}></i>
        ));
      };

    return (
        <div className="rating">
            {generateStars(ratingNumber)}
        </div>
    );
}

export default Rating;