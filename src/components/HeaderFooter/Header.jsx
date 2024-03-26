import '../HeaderFooter/HeaderFooter.css';
import logo from "../../assets/logo.png";
import { NavLink } from 'react-router-dom';

function Header() {
    return (
        <div className='header'>
            <div>
                <img src={logo} alt='Logo'/>
            </div>
            <nav>
               <ul>
                    <li><NavLink to="/">Accueil</NavLink></li>
                    <li><NavLink to="/About">A Propos</NavLink></li>
                </ul> 
            </nav>
        </div>
    );
}

export default Header;