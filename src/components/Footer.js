import React from "react";
import { Link } from "gatsby";

import logo from "../img/logo.svg";
import facebook from "../img/social/facebook.svg";
import instagram from "../img/social/instagram.svg";
import twitter from "../img/social/twitter.svg";
import vimeo from "../img/social/vimeo.svg";
import MailchimpSubscribe from "react-mailchimp-subscribe";

const url = "//gmail.us20.list-manage.com/subscribe/post?u=8d7775f4df2498edad5ec7e9e&amp;id=376a66ba56";

// simplest form (only email)
const SimpleForm = () => <MailchimpSubscribe url={url} />;

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-background-black has-text-white-ter">
        <div className="content has-text-centered">
          <img
            src={logo}
            alt="Gaismas Stars"
            style={{ width: "14em", height: "10em" }}
          />
        </div>
        <div className="content has-text-centered has-background-black has-text-white-ter">
          <div className="container has-background-black has-text-white-ter">
            <div className="columns">
              {/* <div className="column is-4">
                <section className="menu">
                  <ul className="menu-list">
                    <li>
                      <Link to="/" className="navbar-item">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/about">
                        About
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/products">
                        Products
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/contact/examples">
                        Form Examples
                      </Link>
                    </li>
                    <li>
                      <a
                        className="navbar-item"
                        href="/admin/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Admin
                      </a>
                    </li>
                  </ul>
                </section>
              </div> */}
              {/* <div className="column is-4">
                <section>
                  <ul className="menu-list">
                    <li>
                      <Link className="navbar-item" to="/blog">
                        Latest Stories
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/contact">
                        Contact
                      </Link>
                    </li>
                  </ul>
                </section>
              </div> */}
              <div className="column is-12 social">
                <a
                  target="_blank"
                  title="Gaismas Stars Facebook Lapa."
                  href="https://www.facebook.com/Biedr%C4%ABba-Gaismas-stars-1796158973957632/"
                >
                  <img
                    src={facebook}
                    alt="Gaismas Stars Facebook Lapa"
                    style={{ width: "1em", height: "1em" }}
                  />
                </a>
                <a
                  target="_blank"
                  title="Gaismas Stars Instagram Lapa"
                  href="https://www.instagram.com/gaismasstars/"
                >
                  <img
                    src={instagram}
                    alt="Gaismas Stars Instagram Lapa"
                    style={{ width: "1em", height: "1em" }}
                  />
                </a>
                <div>
                  <h2>Piesakies jaunumiem!</h2>

                  <MailchimpSubscribe url={url} />
                </div>
                <p className="copyright">
                  Gaismas Stars © {new Date().getFullYear()}
                </p>


              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
};

export default Footer;
