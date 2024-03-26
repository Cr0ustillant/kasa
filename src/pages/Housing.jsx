import '../styles/Housing.css';
import { useParams , useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import data from '../datas/data.json';
import Carousel from '../components/Carousel/Carousel'
import InfoCard from '../components/InfoCard/InfoCard';


function Housing() {
  const { id } = useParams();
  const navigate = useNavigate();

  const housing = data.find(element => element.id === id);

  useEffect(() => {
    // Vérifie si le logement existe lors du rendu initial
    if (!housing) {
      navigate('/error'); // Redirige vers la page d'erreur
    }
  }, [housing, navigate]); // Déclenche l'effet lorsque housing ou navigate change

  // Si le logement n'existe pas, l'effet de redirection se chargera et le rendu du composant sera annulé
  if (!housing) {
    return null;
  }

  return (
      <div className='main-container'>
        <Carousel img={housing.pictures} 
                  className="carousel"/>
        <InfoCard housing={housing}/>
      </div>
  );
}

export default Housing;
