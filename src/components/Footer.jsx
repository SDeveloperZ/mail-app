import React from "react";

function Footer() {
  return (
    <footer>
      <div className="line"></div>
      <p>&copy; Marca registrada - Todos los derechos reservados</p>
      <p>Direccion - CP - Ciudad - País</p>
      <div>
        <div className="redes">
          <img
            src="https://publicemailimages.s3.amazonaws.com/emailalerts/face.svg"
            alt="facebook-icon"
          />
          <img
            src="https://publicemailimages.s3.amazonaws.com/emailalerts/ig.svg"
            alt="instagram-icon"
          />
          <img
            src="https://publicemailimages.s3.amazonaws.com/emailalerts/twitter.svg"
            alt="twitter-icon"
          />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
