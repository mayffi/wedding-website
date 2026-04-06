import '../styles/Footer.css'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <p className="footer-text">
            Made with <span className="heart">♥</span> for our special day
          </p>
          <p className="footer-copyright">
            &copy; Sam &amp; May 26&apos;
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

