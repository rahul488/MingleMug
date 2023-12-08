import "./Footer.css";
const Footer = () => {
  return (
    <footer>
      <div className="d-flex justify-content-between w-100 flex-wrap gap-4 footer-wrapper">
        <div className="contact-info">
          <h5 className="text-center">Contact Info</h5>
          <h6 className="text-center">Email us: myself.rahul78@gmail.com</h6>
          <h6 className="text-center">Call us: +91 7894 7876 93</h6>
        </div>
        <div className="logo">
          <h4 className="text-center">MINGLEMUG.COM</h4>
        </div>
        <div className="visit-info">
          <h5 className="text-center">Visit Us</h5>
          <h6 className="text-center">Every Day ,10AM to 10PM</h6>
          <h6 className="text-center">Coppice Celyn Corner, MA USA</h6>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
