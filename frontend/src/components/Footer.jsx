const Footer = () => {
    const year = new Date().getFullYear();
  
    return <footer className="footer">{`Copyright © IandEye ${year}`}</footer>;
  };
  
  export default Footer;