import '../styles/Home.css';
import Banner from '../components/Banner/Banner';
import CardsContainer from '../components/CardsContainer/CardsContainer';
import imgHomeBanner from '../assets/IMGbannerImg1.png';

function Home() {

  return (
      <div className='main-container'>
        <Banner className='banner' imgBanner={imgHomeBanner} textBanner={'Chez vous, partout et ailleurs'}/>
        <CardsContainer />
      </div>
  );
}

export default Home;
