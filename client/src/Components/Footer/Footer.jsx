import "../../css/Footer/Footer.css";
import { words } from "../../words";
import { FaFacebookF, FaYoutube } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Footer = () => {
  const Icons = [<FaYoutube />, <FaFacebookF />, <SiGmail />];
  return (
    <footer>
      <div className="container">
        <div className="col">
          <ul>
            <h3>{words.footerInfo}</h3>
            <li>{words.FAQ}</li>
            <li>{words.About}</li>
            <li>{words.More}</li>
            <li>{words.Blog}</li>
            <li>{words.Testmonials}</li>
            <li>{words.Events}</li>
          </ul>

          <ul>
            <h3>{words.Helpful}</h3>
            <li>{words.Services}</li>
            <li>{words.Supports}</li>
            <li>{words.Terms}</li>
            <li>{words.Policy}</li>
          </ul>

          <div className="social">
            <div className="social_icons">
              <h3>{words.Social}</h3>
              <ul>
                {Icons.map((icon, index) => (
                  <span key={index}>
                    <li>{icon}</li>
                  </span>
                ))}
              </ul>
            </div>
            <div className="social_media">
              <h3>{words.Sign}</h3>
              <p>{words.p}</p>
              <div className="send_email">
                <input type="text" placeholder="E-Mail" />
                <input type="button" value="Send" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
