import Collapse from '../Collapse/Collapse'

import Rating from '../Rating/Rating';

function InfoCard({housing}) {
    
    return (
      <article className='info-container'>
        <div className='info'>
          <div className='title-tags'>
          <h2>{housing.title}</h2>
          <p>{housing.location}</p>
          <ul>
            {housing.tags.map((tag, index) => (
              <li key={index}>{tag}</li>))}
          </ul>
          </div>
          <div className='host-rating'>
            <div className='host-info'>
              <p>{housing.host.name}</p>
              <img src={housing.host.picture} alt="Appartement"/>
            </div>
            <Rating rating={housing.rating}/>
          </div>
        </div>
        <nav className='collapse-container'>
          <Collapse key={housing.id +'description-collapse'} title="Description" description={housing.description} index={housing.id}/>
          <Collapse key={housing.id +'equipments-collapse'} title="Équipements" description={housing.equipments.map((item , index) => (<li key={index}>{item}</li>))}/>
        </nav>
      </article>
    )
}

export default InfoCard;