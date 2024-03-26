import arrowback from '../../assets/arrowBack.png';
import '../Collapse/Collapse.css'
import { useState } from 'react';

function Collapse({ title, description, index }) {
    const [isCollapsed, setIsCollapsed] = useState(null);

    function handleClick() {
        setIsCollapsed(!isCollapsed);
    }

    return (
        <div className={`container ${isCollapsed === true ? "collapsed" : "collapse"}`}>
            <article key={index}>{title}
                <img src={arrowback} alt="flêche" onClick={handleClick} />
            </article>
            <div className={`content-collapse ${isCollapsed ? "open" : "close"}`}>          
                <p>{description}</p>
            </div> 
        </div>
    );
  }
    

export default Collapse;