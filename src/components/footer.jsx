import { Link } from "react-router-dom";
import '../css/footer.css';

const Footer = () => {
    return (
        <>
            <section id="footer">
                        <div className="col-xs-12 col-sm-4 col-md-4">
                            <h5>Quick links</h5>
                            <ul className="list-unstyled quick-links">
                                <li><Link to='#'><i className="fa fa-angle-double-right"></i>Home</Link></li>
                                <li><Link to='#'><i className="fa fa-angle-double-right"></i>About</Link></li>
                                <li><Link to='#'><i className="fa fa-angle-double-right"></i>FAQ</Link></li>
                                <li><Link to='#'><i className="fa fa-angle-double-right"></i>Get Started</Link></li>
                                <li><Link to='#'><i className="fa fa-angle-double-right"></i>Videos</Link></li>
                            </ul>
                        </div>
                        <div className="col-xs-12 col-sm-4 col-md-4">
                            <h5>Quick links</h5>
                            <ul className="list-unstyled quick-links">
                                <li><Link to='#'><i className="fa fa-angle-double-right"></i>Home</Link></li>
                                <li><Link to='#'><i className="fa fa-angle-double-right"></i>About</Link></li>
                                <li><Link to='#'><i className="fa fa-angle-double-right"></i>FAQ</Link></li>
                                <li><Link to='#'><i className="fa fa-angle-double-right"></i>Get Started</Link></li>
                                <li><Link to='#'><i className="fa fa-angle-double-right"></i>Videos</Link></li>
                            </ul>
                        </div>
                        <div className="col-xs-12 col-sm-4 col-md-4">
                            <h5>Quick links</h5>
                            <ul className="list-unstyled quick-links">
                                <li><Link to='#'><i className="fa fa-angle-double-right"></i>Home</Link></li>
                                <li><Link to='#'><i className="fa fa-angle-double-right"></i>About</Link></li>
                                <li><Link to='#'><i className="fa fa-angle-double-right"></i>FAQ</Link></li>
                                <li><Link to='#'><i className="fa fa-angle-double-right"></i>Get Started</Link></li>
                                <li><Link href="https://wwwe.sunlimetech.com" title="Design and developed by"><i className="fa fa-angle-double-right"></i>Imprint</Link></li>
                            </ul>
                        </div>
            </section>
        </>
    );
}
 
export default Footer;