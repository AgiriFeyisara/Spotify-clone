import style from "./style.module.css";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGlobeAfrica } from "react-icons/fa";
import { Logo } from "../Logo";
import { aboutMenu, communitiesMenu, legalUrls, usefulLinkMenu } from "./data";
export function Footer() {
  return (
    <footer className={style.footer}>
      <div className={style.menu}>
        <div className={style.menuItem}>
          <Logo useWhite />
          <div className={style.flex}>
            <Menu title="" options={aboutMenu} />
            <Menu title="Communities" options={communitiesMenu} />
            <Menu title="Useful links" options={usefulLinkMenu} />
          </div>
        </div>
        <div className={style["legal-urls"]}>
          {legalUrls.map(({ url, name }) => (
            <a href={url}>{name}</a>
          ))}
        </div>
      </div>

      <div className={style.copyright}>
        <div className={style.social}>
          <FaInstagram />
          <FaTwitter />
          <FaFacebookF />
        </div>
        <div>
          <p>
            <FaGlobeAfrica />
            India(English)
          </p>
          <p>2023 Spotify AB</p>
        </div>
      </div>
    </footer>
  );
}

export const Menu = ({ title, options }) => {
  return (
    <nav className={style.nav}>
      <h5>{title || <>&nbsp;</>} </h5>
      <ul>
        {options &&
          options.map((option) => {
            return (
              <li>
                <a href={option.url}>{option.name}</a>
              </li>
            );
          })}
      </ul>
    </nav>
  );
};
