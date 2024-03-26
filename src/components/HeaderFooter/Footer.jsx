import '../HeaderFooter/HeaderFooter.css';
import logo from "../../assets/logoWhite.png"

function Footer() {
    return (
        <div className='footer'>
            <img src={logo}></img>
            <p>
                <i></i> 2020 Kasa. All right reserved
            </p>
        </div>
    );
}

export default Footer;