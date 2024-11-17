import './Nav.css';
import MenuItem from './MenuItem';

export default function Nav(props) {
    return (
        <nav className="nav-bar">
            <div className="upper-nav">
                <div className="logo-nav"></div>
                <div className="right-upper-nav-wrapper">
                    <div className="link-socialmedia">
                        <i className="fa fa-facebook"></i>
                        <i className="fa fa-twitter"></i>
                        <i className="fa fa-linkedin"></i>
                        <i className="fa fa-youtube-play"></i>
                        <i className="fa fa-instagram"></i>
                    </div>
                    <div>
                        <p>CALL US! <strong>555-8707</strong></p>
                    </div>
                    <div className="right-upper-nav">
                        <ul className="cover-contact-about">
                            <li className="trigger">
                                <a href="/#">VISIT SPRINGFIELD!</a>
                            </li>
                            <MenuItem
                                title="MENU ITEM"
                                subLinks={["Link 1", "Link 2"]}
                            />
                        </ul>
                        <button className="btn-donate">DONATE</button>
                    </div>
                </div>
            </div>

            <div className="lower-nav">
                <ul className="lower-nav-ul">
                    {Array(6)
                        .fill(null)
                        .map((_, index) => (
                            <MenuItem
                                key={index}
                                title={`MENU ITEM ${index + 1}`}
                                subLinks={["Link 1", "Link 2"]}
                            />
                        ))}
                    <i className="fa fa-search"></i>
                </ul>
            </div>
        </nav>
    );
}