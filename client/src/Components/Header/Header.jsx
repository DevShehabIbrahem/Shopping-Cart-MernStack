import "../../css/Header/Header.css";
import { words } from "../../words";
import { MdOutlineShoppingBasket } from "react-icons/md";
import { HiOutlineUser } from "react-icons/hi";

import logo from "../../asset/logo.png";
const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="header_ele">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>

          <div className="basket">
            <div>
              <p className="basket_color">{words.Freeshipping}</p>
              <p className="basket_bold">any 2+ items ot $50+!</p>
            </div>
            <div>
              <p className="basket_bold">{words.numbers}</p>
              <p className="basket_hours">{words.time}</p>
            </div>

            <div className="icons">
              <div>
                <HiOutlineUser />
              </div>

              <div>
                <MdOutlineShoppingBasket />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
