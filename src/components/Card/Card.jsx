import { Link } from 'react-router-dom';


function Card({housing, id}) {

    return (
            <Link to={`/housing/${id}`}>
                <figure>
                    <img src={housing.cover} alt="Photo de l'appartement" />
                    <figcaption>{housing.title}</figcaption>
                </figure>
            </Link>
        
    )
}
export default Card;