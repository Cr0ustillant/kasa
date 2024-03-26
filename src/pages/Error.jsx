import { Link } from "react-router-dom";
import '../styles/Error.css'

function Error() {
    return (
        <div className="main-container">
            <p className="title-error">404</p>
            <span className="msg-error">Oups! La page que vous demandez n'existe pas.</span>
            <Link className="link-home" to="/">Retourner sur la page d'accueil</Link>
        </div>
      );
}

export default Error;