import css from "./Header.module.css";
import logo from "../../assets/logo.png";
import { CgShoppingBag } from "react-icons/cg";

const Header = () => {
  return (
    <nav className={css.container}>
      <div className={css.logo}>
        <img src={logo} alt="logo" />
        <span>sello</span>
      </div>
      <div className={css.right}>
        <div className={css.menu}>
          <ul className={css.menu}>
            <li>Collections</li>
            <li>Brands</li>
            <li>New</li>
            <li>Sales</li>
            <li>ENG</li>
          </ul>
        </div>
        <input type="text" className={css.search} placeholder="Search" />
        <CgShoppingBag className={css.cart} />
      </div>
    </nav>
  );
};

export default Header;
