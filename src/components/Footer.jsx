import React from 'react';

function Footer() {
  return (
    <footer>
      <div className="line"></div>
      <p>&copy; Marca registrada - Todos los derechos reservados</p>
      <p>Direccion - CP - Ciudad - País</p>
      <div>
        <div className="redes">
          <a href="https://www.facebook.com/">
            <img src="https://publicemailimages.s3.amazonaws.com/emailalerts/face.svg" alt="facebook-icon" />
          </a>
          <a href="https://www.instagram.com/">
            <img src="https://publicemailimages.s3.amazonaws.com/emailalerts/ig.svg" alt="instagram-icon" />
          </a>
          <a href="https://twitter.com/">
            <img src="https://publicemailimages.s3.amazonaws.com/emailalerts/twitter.svg" alt="twitter-icon" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
