import React from 'react';
import './Footer.css'; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>
          Desenvolvido com 🩵 por <strong>Wagner</strong>
        </p>
        
        <div className="footer-links">
          {/* Link para E-mail */}
          <a 
            href="mailto:wagnerlima10444@gmail.com" 
            className="footer-link"
          >
            Contato
          </a>
          
          <span className="separator">|</span>
          
          {/* Link para LinkedIn */}
          <a 
            href="https://www.linkedin.com/in/wagner-matos-de-lima/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="footer-link"
          >
            LinkedIn
          </a>
          
          <span className="separator">|</span>

          {/* Link para GitHub */}
          <a 
            href="https://github.com/limawagner33" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="footer-link"
          >
            GitHub
          </a>
        </div>
        
        <p className="copyright">
          &copy; {new Date().getFullYear()} Sorting Visualizer. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;