// import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <div>
        <p>© {new Date().getFullYear()} InTrend Times. All Rights Reserved.</p>
        <p>
          Powered by <a href="https://newsapi.org/" target="_blank" rel="noopener noreferrer">NewsAPI</a>
        </p>
        <div className="contact">
          <p>Contact Us:</p>
          <p>Email: <a href="mailto:contact@intrendtimes.com">contact@intrendtimes.com</a></p>
          <p>Phone: <a href="tel:+123456789">+123 456 789</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
