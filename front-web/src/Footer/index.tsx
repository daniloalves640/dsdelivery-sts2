import './styles.css';
import {ReactComponent as YoutubeIcon } from "./youtube.svg";
import {ReactComponent as LinkdinIcon } from "./Linkedin.svg";
import {ReactComponent as InstagramIcon } from "./Instagram.svg";

function Footer() {
    return (

        <footer className = "main-footer">
            App desenvolvido durante a 2ª ed. do evento Semana DevSuperior
            <div className = "footer-icons">
                <a href = "http://danilo-alves.epizy.com/" target="_new">
                    <YoutubeIcon />
                </a>
                <a href = "https://www.linkedin.com/in/danilo-alves-5b9a6a19b" target = "_new">
                    <LinkdinIcon />
                </a>
                <a href = "http://danilo-alves.epizy.com/" target = "_new">
                    <InstagramIcon />
                </a>
            </div>
        </footer>

    )
}

export default Footer;