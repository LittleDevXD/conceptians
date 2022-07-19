import './footer.styles.css';

const Footer = () => {
    return (
        <footer id="contact" className="footer">
            <div className="container">
                <div className="grid">
                    <div className="">
                        <img src="assets/images/ConceptiansLogo.png" alt=""/>
                        <p>A student lead organization.</p>
                    </div>
                    <div className="grid-column"></div>
                    <div className="grid-column">
                        <div className="footer-header">Studio</div>
                        <a href="" className="footer-link">About Us</a>
                        <a href="" className="footer-link">Careers</a>
                        <a href="" className="footer-link">Contact Us</a>
                    </div>
                    <div className="grid-column">
                        <div className="footer-header">Contact Us</div>
                        <a href="" className="footer-link">info@concpetians.com</a>
                        <a href="" className="footer-link">09-677-888-112</a>
                        <a href="" className="footer-link">3500 Rock Hole Rd
                            Palo Alto, NYC</a>
                    </div>
                    <div className="grid-column">
                        <div className="footer-header">Stay UpToDate</div>
                        
                        <div className="newsletter">
                            <div className="footer-p">Follow our weekly newsletter</div>
                            <div className="newsletter-field">
                                <input type="text" className="text-input" placeholder="Email" />
                                <div className="newsletter-submit">
                                    <i className="fas fa-chevron-right"></i>
                                </div>
                            </div>
                        </div>
                        <div className="footer-p">Follow Us:</div>
                        <div className="socialmedia">
                            <a href=""><img src="assets/icons/facebookicon.png" alt="" /></a>
                            <a href=""><img src="assets/icons/youtubeicon.png" alt="" /></a>
                            <a href=""><img src="assets/icons/discordicon.png" alt="" /></a>
                        </div>
                    </div>
                </div>
                <div className="copyright">&copy;Copyright conceptians Inc.</div>
            </div>
        </footer>
    )
}

export default Footer;
