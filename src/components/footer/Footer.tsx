import React, { Fragment} from "react";

const Footer = (props: any) => {
  return (
    <Fragment>
      <footer className="bg-primary">
        <div className="container footer-content">
          <div className="footer-logo"><img src="${WhiteLogo}" /></div>
          <div className="footer-links">
            <ul className="footer-list">
              <li className="footer-list-item"><a href="#">Desenvolvido por David Dornelles (após Lucas Grabriel)</a></li>
              <li className="footer-list-item"><a href="#">Proposta do Projeto</a></li>
              <li className="footer-list-item"><a href="#">Protótipo Figma</a></li>
              <li className="footer-list-item"><a href="#">Apresentação ao Comitê</a></li>
              <li className="footer-list-item"><a href="#">Documentação</a></li>
            </ul>
          </div>
        </div>
      </footer>
    </Fragment>
  );
};

export default Footer;