import Card from '../Card/Card';
import data from '../../datas/data.json'

function CardsContainer () {
    return (
        <div className='cards-container' >
            {data.map((element) => (
                <Card className='card' key={'card' + element.id} id={element.id} housing={element}/>
            ))}
        </div>
)}

export default CardsContainer;